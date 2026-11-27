/**
 * app.js - Main 3D Application Controller for Gift Box "Giấy Gieo Hạt"
 * Orchestrates Three.js rendering, warm cozy candlelight studio lighting,
 * high-angle top-down camera presets, collapsible controls, and color editions.
 */

class App3D {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.tooltip = document.getElementById('hover-tooltip');
    this.drawer = document.getElementById('detail-drawer');
    this.menuPanel = document.getElementById('floating-controls');

    // Camera preset views (High top-down angle, looking directly down into the box tray)
    this.cameraPresets = {
      overview: { pos: new THREE.Vector3(0, 36.0, 8.5), target: new THREE.Vector3(0, 2.0, 0.5) },
      top: { pos: new THREE.Vector3(0, 38.0, 0.5), target: new THREE.Vector3(0, 2.0, 0.5) },
      front: { pos: new THREE.Vector3(0, 24.0, 22.0), target: new THREE.Vector3(0, 2.0, 0) },
      box: { pos: new THREE.Vector3(12, 28, 22), target: new THREE.Vector3(0, 2.0, 0) }
    };

    // Camera animation state
    this.camTargetPos = this.cameraPresets.overview.pos.clone();
    this.camTargetLookAt = this.cameraPresets.overview.target.clone();
    this.isCameraAnimating = false;

    // Raycasting & click interaction tracking
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredObject = null;
    this.selectedProductId = null;
    this.lastClickTime = 0;
    this.lastClickProductId = null;

    // Audio SFX synthesis
    this.audioCtx = null;

    // Initialize
    try {
      this.initThree();
      this.initLighting();
      this.initSceneObjects();
      this.initParticles();
      this.initEvents();
      this.setupUI();

      // Set default warm candlelight atmosphere
      this.setLightingMood('candlelight');

      // Start render loop
      this.clock = new THREE.Clock();
      this.animate();
    } catch (err) {
      console.error('Initialization error:', err);
      const loader = document.getElementById('loading-overlay');
      if (loader) {
        loader.classList.remove('fade-out');
        loader.style.display = 'flex';
        loader.innerHTML = `<div style="color:#d3446c;font-family:sans-serif;padding:24px;text-align:center;background:rgba(255,255,255,0.92);border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.2);">
          <h3 style="margin-top:0;">Đã xảy ra sự cố khởi tạo 3D</h3>
          <p style="font-size:13px;color:#666;">${err.message}</p>
          <button onclick="location.reload()" style="background:#d3446c;color:#fff;border:none;padding:8px 16px;border-radius:8px;cursor:pointer;margin-top:8px;">Tải lại trang</button>
        </div>`;
      }
      return;
    } finally {
      setTimeout(() => {
        const loader = document.getElementById('loading-overlay');
        if (loader && !loader.innerHTML.includes('Đã xảy ra sự cố')) {
          loader.classList.add('fade-out');
          setTimeout(() => { loader.style.display = 'none'; }, 600);
        }
      }, 400);
    }
  }

  // 1. Three.js Core Setup
  initThree() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf3ded2);
    this.scene.fog = new THREE.FogExp2(0xf3ded2, 0.0022);

    const aspect = window.innerWidth / window.innerHeight;
    const baseFov = aspect < 1.0 ? 62 : 40;
    this.camera = new THREE.PerspectiveCamera(baseFov, aspect, 0.1, 1000);

    const initialFit = this.getFitPosition(this.cameraPresets.overview.pos, this.cameraPresets.overview.target, 31.0);
    this.camera.position.copy(initialFit.pos);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'default',
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.08;
    if (THREE.sRGBEncoding) this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.renderer.domElement.style.touchAction = 'none';
    this.renderer.domElement.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      console.warn('WebGL context lost, pausing render.');
    }, false);
    this.renderer.domElement.addEventListener('webglcontextrestored', () => {
      console.log('WebGL context restored, re-initializing scene.');
      this.initSceneObjects();
    }, false);

    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2.05;
    this.controls.minDistance = 6;
    this.controls.maxDistance = 120;
    this.controls.target.copy(initialFit.target);
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = 1.2;
  }

  // Dynamic camera positioning: guarantees that a bounding width fits completely with generous margins on any screen/phone
  getFitPosition(basePos, target, fitWidth = 31.0) {
    const aspect = this.camera ? this.camera.aspect : (window.innerWidth / window.innerHeight);
    if (aspect >= 1.0) {
      return { pos: basePos.clone(), target: target.clone() };
    }

    const currentFov = this.camera ? this.camera.fov : 62;
    const halfFovVRad = THREE.MathUtils.degToRad(currentFov / 2);
    const tanHalfH = aspect * Math.tan(halfFovVRad);
    const requiredDist = (fitWidth / 2) / Math.max(tanHalfH, 0.001);

    const dir = basePos.clone().sub(target).normalize();
    const currentDist = basePos.distanceTo(target);
    const actualDist = Math.max(currentDist, requiredDist);

    const adjustedTarget = target.clone();
    const pos = adjustedTarget.clone().add(dir.multiplyScalar(actualDist));
    return { pos, target: adjustedTarget };
  }

  // 2. Realistic Warm & Cozy Candlelight Studio Lighting
  initLighting() {
    this.lights = {};

    this.lights.hemi = new THREE.HemisphereLight(0xffead2, 0xcda496, 0.56);
    this.scene.add(this.lights.hemi);

    // Warm Golden-Honey Key Directional Light
    this.lights.key = new THREE.DirectionalLight(0xffcf9e, 1.32);
    this.lights.key.position.set(14, 26, 16);
    this.lights.key.castShadow = true;
    this.lights.key.shadow.mapSize.width = 2048;
    this.lights.key.shadow.mapSize.height = 2048;
    this.lights.key.shadow.camera.near = 5;
    this.lights.key.shadow.camera.far = 65;
    const shadowDist = 22;
    this.lights.key.shadow.camera.left = -shadowDist;
    this.lights.key.shadow.camera.right = shadowDist;
    this.lights.key.shadow.camera.top = shadowDist;
    this.lights.key.shadow.camera.bottom = -shadowDist;
    this.lights.key.shadow.bias = -0.0003;
    this.scene.add(this.lights.key);

    // Soft Warm Peach Fill Light
    this.lights.fill = new THREE.DirectionalLight(0xffbfa8, 0.42);
    this.lights.fill.position.set(-18, 14, 14);
    this.scene.add(this.lights.fill);

    // Dreamy Warm Golden Rim Light
    this.lights.rim = new THREE.DirectionalLight(0xffe4bc, 0.62);
    this.lights.rim.position.set(0, 16, -22);
    this.scene.add(this.lights.rim);

    // Cozy Center Candlelight Warm Glow Pool
    this.lights.warmPool = new THREE.SpotLight(0xffbb78, 0.55, 75, Math.PI / 4, 0.85, 1.2);
    this.lights.warmPool.position.set(0, 34, 6);
    this.lights.warmPool.target.position.set(0, 1.5, 0);
    this.scene.add(this.lights.warmPool);
    this.scene.add(this.lights.warmPool.target);
  }

  // 3. Set Lighting Mood
  setLightingMood(mood) {
    if (mood === 'candlelight') {
      // Warm Cozy Candlelight Studio (Default: Honey-amber cozy glow)
      this.scene.background.set(0xf3ded2);
      this.scene.fog.color.set(0xf3ded2);
      if (this.giftBoxScene && this.giftBoxScene.studioFloorMat) {
        this.giftBoxScene.studioFloorMat.color.set(0xf3ded2);
      }
      this.lights.hemi.color.set(0xffead2);
      this.lights.hemi.groundColor.set(0xcda496);
      this.lights.hemi.intensity = 0.56;

      this.lights.key.color.set(0xffcf9e);
      this.lights.key.intensity = 1.32;

      this.lights.fill.color.set(0xffbfa8);
      this.lights.fill.intensity = 0.42;

      this.lights.rim.color.set(0xffe4bc);
      this.lights.rim.intensity = 0.62;

      if (this.lights.warmPool) {
        this.lights.warmPool.color.set(0xffbb78);
        this.lights.warmPool.intensity = 0.55;
      }

      this.renderer.toneMappingExposure = 1.04;
      if (this.particles) this.particles.visible = true;
    } else if (mood === 'sunset') {
      // Romantic Golden-Rose Sunset
      this.scene.background.set(0xeed1c6);
      this.scene.fog.color.set(0xeed1c6);
      if (this.giftBoxScene && this.giftBoxScene.studioFloorMat) {
        this.giftBoxScene.studioFloorMat.color.set(0xeed1c6);
      }
      this.lights.hemi.color.set(0xffdec4);
      this.lights.hemi.groundColor.set(0xc4958c);
      this.lights.hemi.intensity = 0.52;

      this.lights.key.color.set(0xff9d66);
      this.lights.key.intensity = 1.42;

      this.lights.fill.color.set(0xf0a0a8);
      this.lights.fill.intensity = 0.45;

      this.lights.rim.color.set(0xffcf96);
      this.lights.rim.intensity = 0.68;

      if (this.lights.warmPool) {
        this.lights.warmPool.color.set(0xff985c);
        this.lights.warmPool.intensity = 0.65;
      }

      this.renderer.toneMappingExposure = 1.08;
      if (this.particles) this.particles.visible = true;
    } else if (mood === 'studio') {
      // Soft Luminous Warm Ivory Studio
      this.scene.background.set(0xf7ebe2);
      this.scene.fog.color.set(0xf7ebe2);
      if (this.giftBoxScene && this.giftBoxScene.studioFloorMat) {
        this.giftBoxScene.studioFloorMat.color.set(0xf7ebe2);
      }
      this.lights.hemi.color.set(0xfff5ea);
      this.lights.hemi.groundColor.set(0xd8c2b8);
      this.lights.hemi.intensity = 0.68;

      this.lights.key.color.set(0xffe8d2);
      this.lights.key.intensity = 1.24;

      this.lights.fill.color.set(0xfad8cf);
      this.lights.fill.intensity = 0.50;

      this.lights.rim.color.set(0xfff2e2);
      this.lights.rim.intensity = 0.50;

      if (this.lights.warmPool) {
        this.lights.warmPool.color.set(0xffe2c4);
        this.lights.warmPool.intensity = 0.32;
      }

      this.renderer.toneMappingExposure = 1.04;
      if (this.particles) this.particles.visible = false;
    }
  }

  // 4. Falling Snowflake Particles
  createSnowflakeTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255, 251, 244, 0.92)');
    grad.addColorStop(0.35, 'rgba(255, 242, 232, 0.72)');
    grad.addColorStop(0.7, 'rgba(255, 224, 214, 0.28)');
    grad.addColorStop(1, 'rgba(255, 224, 214, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(32, 32, 30, 0, Math.PI * 2);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    return tex;
  }

  initParticles() {
    const particleCount = 140;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    this.snowData = [];

    for (let i = 0; i < particleCount; i++) {
      const idx = i * 3;
      positions[idx] = (Math.random() - 0.5) * 44;
      positions[idx + 1] = Math.random() * 32;
      positions[idx + 2] = (Math.random() - 0.5) * 44;

      this.snowData.push({
        speedY: 1.4 + Math.random() * 1.9,
        swaySpeed: 0.9 + Math.random() * 1.5,
        swayAmp: 0.5 + Math.random() * 0.7,
        phase: Math.random() * Math.PI * 2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xfff8ef,
      size: 0.38,
      map: this.createSnowflakeTexture(),
      transparent: true,
      opacity: 0.82,
      blending: THREE.NormalBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(geometry, material);
    this.particles.visible = true;
    this.scene.add(this.particles);
  }

  // 5. Build 3D Models
  initSceneObjects() {
    TextureManager.init();
    this.giftBoxScene = new GiftBoxScene(this.scene);
  }

  // 6. Smooth Camera Glide
  glideCameraTo(targetPos, targetLookAt, duration = 0.9) {
    this.camStartPos = this.camera.position.clone();
    this.camStartLookAt = this.controls.target.clone();
    this.camTargetPos.copy(targetPos);
    this.camTargetLookAt.copy(targetLookAt);
    this.cameraAnimTime = 0;
    this.cameraAnimDuration = duration;
    this.isCameraAnimating = true;
  }

  // 7. Raycasting & Hover Feedback
  initEvents() {
    window.addEventListener('resize', () => this.onWindowResize(), false);
    window.addEventListener('orientationchange', () => {
      setTimeout(() => this.onWindowResize(), 150);
    }, false);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', () => this.onWindowResize());
    }
    if (window.ResizeObserver) {
      const ro = new ResizeObserver(() => this.onWindowResize());
      ro.observe(this.container);
      ro.observe(document.body);
    }

    this.container.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      this.checkRaycastHover(e);
    });

    this.container.addEventListener('click', (e) => {
      this.checkRaycastClick(e);
    });

    this.container.addEventListener('dblclick', (e) => {
      e.preventDefault();
    });

    // Touch tap detection for mobile devices (avoids accidental clicks during 360° swipe rotation)
    let touchStartX = 0, touchStartY = 0;
    let touchStartTime = 0;

    this.container.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      }
    }, { passive: true });

    this.container.addEventListener('touchend', (e) => {
      if (e.changedTouches.length === 1) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        const dist = Math.hypot(dx, dy);
        const dt = Date.now() - touchStartTime;

    // Clean tap detection (< 8px drag, < 280ms duration - avoids triggering during 360 swipe rotation)
    if (dist < 8 && dt < 280) {
      this.mouse.x = (e.changedTouches[0].clientX / window.innerWidth) * 2 - 1;
      this.mouse.y = -(e.changedTouches[0].clientY / window.innerHeight) * 2 + 1;
      this.checkRaycastClick(e);
    }
      }
    }, { passive: true });
  }

  checkRaycastHover(e) {
    if (this.isCameraAnimating) return;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.giftBoxScene.interactiveObjects, true);

    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj.parent && !obj.userData.isProduct) {
        obj = obj.parent;
      }

      if (obj && obj.userData.isProduct && obj.userData.productInfo) {
        // If box is closed, only the closed box can be hovered or opened
        if (!this.giftBoxScene.isBoxOpen) {
          if (obj.userData.productId === 'box') {
            this.hoveredObject = obj;
            this.container.style.cursor = 'pointer';
            this.tooltip.innerHTML = `🎁 Nhấp để mở nắp hộp quà "The Gift"`;
            this.tooltip.style.left = `${e.clientX}px`;
            this.tooltip.style.top = `${e.clientY}px`;
            this.tooltip.classList.add('visible');
          } else {
            this.hoveredObject = null;
            this.container.style.cursor = 'default';
            this.tooltip.classList.remove('visible');
          }
          return;
        }

        this.hoveredObject = obj;
        this.container.style.cursor = 'pointer';

        const info = obj.userData.productInfo;
        if (this.selectedProductId === obj.userData.productId) {
          this.tooltip.innerHTML = `${info.icon} ${info.name} <span style="font-size:11px;opacity:0.85;margin-left:4px;">· Nhấp lần nữa để cất vào hộp ↩</span>`;
        } else {
          this.tooltip.innerHTML = `${info.icon} ${info.name}`;
        }
        this.tooltip.style.left = `${e.clientX}px`;
        this.tooltip.style.top = `${e.clientY}px`;
        this.tooltip.classList.add('visible');
        return;
      }
    }

    this.hoveredObject = null;
    this.container.style.cursor = 'default';
    this.tooltip.classList.remove('visible');
  }

  checkRaycastClick(e) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.giftBoxScene.interactiveObjects, true);

    if (intersects.length > 0) {
      let obj = intersects[0].object;
      while (obj.parent && !obj.userData.isProduct) {
        obj = obj.parent;
      }

      if (obj && obj.userData.isProduct) {
        const prodId = obj.userData.productId;

        // If box is closed: clicking the box opens it!
        if (!this.giftBoxScene.isBoxOpen) {
          this.openLidAndSelect();
          return;
        }

        this.selectProduct(prodId);
      }
    }
  }

  // Helper: Open lid smoothly and optionally select product
  openLidAndSelect(productId = null) {
    this.giftBoxScene.setLidState(true, true);
    const btnLidOpen = document.getElementById('btn-lid-open');
    const btnLidClose = document.getElementById('btn-lid-close');
    if (btnLidOpen) btnLidOpen.classList.add('active');
    if (btnLidClose) btnLidClose.classList.remove('active');
    this.playWhooshSound();

    if (productId && productId !== 'box') {
      setTimeout(() => {
        this.selectProduct(productId);
      }, 400);
    } else {
      this.giftBoxScene.isolateProduct(null, false);
      const fitOverview = this.getFitPosition(this.cameraPresets.overview.pos, this.cameraPresets.overview.target, 34.0);
      this.glideCameraTo(fitOverview.pos, fitOverview.target, 0.9);
      document.querySelectorAll('.shelf-item-pill').forEach(pill => pill.classList.remove('active'));
    }
  }

  // Menu & Drawer Mutually Exclusive State Controller
  openMenu() {
    document.body.classList.add('menu-open');
    document.body.classList.remove('drawer-open');
    this.closeDrawer();
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      this.menuPanel.classList.add('mobile-open');
      this.menuPanel.classList.remove('collapsed');
      const backdrop = document.getElementById('ui-backdrop');
      if (backdrop) backdrop.classList.add('visible');
    } else {
      this.menuPanel.classList.remove('collapsed');
      const btnExpand = document.getElementById('btn-expand-menu');
      if (btnExpand) btnExpand.classList.remove('visible');
    }
    const btnMenuToggle = document.getElementById('btn-menu-toggle');
    if (btnMenuToggle) btnMenuToggle.classList.add('active');
    this.playClickSound();
  }

  closeMenu() {
    document.body.classList.remove('menu-open');
    this.menuPanel.classList.remove('mobile-open');
    this.menuPanel.classList.add('collapsed');
    const backdrop = document.getElementById('ui-backdrop');
    if (backdrop && !this.drawer.classList.contains('visible')) {
      backdrop.classList.remove('visible');
    }
    const btnExpand = document.getElementById('btn-expand-menu');
    if (btnExpand && window.innerWidth > 768 && !this.drawer.classList.contains('visible')) {
      btnExpand.classList.add('visible');
    } else if (btnExpand) {
      btnExpand.classList.remove('visible');
    }
    const btnMenuToggle = document.getElementById('btn-menu-toggle');
    if (btnMenuToggle) btnMenuToggle.classList.remove('active');
  }

  toggleMenu() {
    const isMobile = window.innerWidth <= 768;
    const isOpen = isMobile 
      ? this.menuPanel.classList.contains('mobile-open')
      : !this.menuPanel.classList.contains('collapsed');
    
    if (isOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  closeDrawer() {
    document.body.classList.remove('drawer-open');
    this.drawer.classList.remove('visible');
    const backdrop = document.getElementById('ui-backdrop');
    if (backdrop && !this.menuPanel.classList.contains('mobile-open')) {
      backdrop.classList.remove('visible');
    }
  }

  // 8. Select & Isolate Product for 3D Inspection Mode ("Tách riêng sản phẩm ra ngoài")
  selectProduct(productId) {
    const now = Date.now();
    const isDoubleClick = (this.lastClickProductId === productId && (now - this.lastClickTime) < 550);
    this.lastClickTime = now;
    this.lastClickProductId = productId;

    // Nếu người dùng bấm 2 lần vào 1 đồ vật thì đồ vật đó sẽ tự động cất lại về hộp
    if (this.selectedProductId === productId || isDoubleClick) {
      this.resetToOverview();
      this.lastClickProductId = null;
      return;
    }

    if (productId === 'box') {
      this.selectedProductId = 'box';
      const info = ProductData.box;
      this.giftBoxScene.isolateProduct(null, false);
      const fitBox = this.getFitPosition(this.cameraPresets.box.pos, this.cameraPresets.box.target, 31.0);
      this.glideCameraTo(fitBox.pos, fitBox.target, 0.85);
      this.showDrawer(info, false);
      this.updateShelfActive('box');
      return;
    }

    // If box is closed and an inside item is selected, open box first! (Greeting card is outside the box so can inspect directly)
    if (!this.giftBoxScene.isBoxOpen && productId !== 'greeting') {
      this.openLidAndSelect(productId);
      return;
    }

    this.selectedProductId = productId;
    const info = ProductData[productId];
    if (!info) return;

    this.playChimeSound();

    // Elevate and separate product out of the box into individual inspection view
    this.giftBoxScene.isolateProduct(productId, true);

    const isFlat = ['letter', 'photo', 'card', 'greeting'].includes(productId);
    const isMobile = window.innerWidth <= 768 || (this.camera && this.camera.aspect < 1.0);
    // On desktop, offset target to X = -2.5 so the product is centered in the open viewing space to the left of the 330px drawer
    const isoTargetX = isMobile ? 0 : -2.5;

    // Generous camera distance and target height:
    // Completely prevents clipping, screen overflowing ("tràn viền"), and drawer overlap ("che che")
    const inspectTarget = isMobile
      ? new THREE.Vector3(0, 6.0, 1.8)
      : new THREE.Vector3(isoTargetX, 6.0, 0);

    // Top-down camera view for ALL items as requested ("cứ khi nào người dùng bấm vào thì sẽ xem được đồ vật đó từ góc nhìn từ trên xuống")
    const inspectCamPos = isMobile
      ? new THREE.Vector3(0, 31.0, 5.0)
      : new THREE.Vector3(isoTargetX, 30.0, 3.5);

    const fitInspect = this.getFitPosition(inspectCamPos, inspectTarget, isMobile ? 22.0 : 24.0);
    this.glideCameraTo(fitInspect.pos, fitInspect.target, 0.85);

    this.showDrawer(info, true);
    this.updateShelfActive(productId);
  }

  showDrawer(info, isIsolated = false) {
    document.body.classList.add('drawer-open');
    document.body.classList.remove('menu-open');
    // ALWAYS close menu so menu and drawer NEVER collide!
    this.closeMenu();
    const btnExpand = document.getElementById('btn-expand-menu');
    if (btnExpand) btnExpand.classList.remove('visible');

    const badgeHtml = isIsolated 
      ? `<div class="drawer-mode-badge"><span class="mode-pulse"></span> Chế độ Tách Riêng 3D · Nhấp 2 lần để cất lại hộp</div>` 
      : '';
    document.getElementById('drawer-tag').innerHTML = `${badgeHtml}<span>${info.tag}</span>`;
    document.getElementById('drawer-title').innerHTML = `${info.icon} ${info.name}`;
    document.getElementById('drawer-subtitle').innerText = info.subtitle;
    document.getElementById('drawer-desc').innerText = info.desc;

    const specsContainer = document.getElementById('drawer-specs');
    specsContainer.innerHTML = '';
    info.specs.forEach(s => {
      const row = document.createElement('div');
      row.className = 'spec-row';
      row.innerHTML = `<span class="spec-label">${s.label}</span><span class="spec-val">${s.value}</span>`;
      specsContainer.appendChild(row);
    });

    const viewControls = document.getElementById('drawer-view-controls');
    if (viewControls) {
      viewControls.style.display = isIsolated ? 'flex' : 'none';
      const btnTopDown = document.getElementById('btn-inspect-topdown');
      const btnFront = document.getElementById('btn-inspect-front');
      if (btnTopDown && btnFront) {
        btnTopDown.classList.add('active');
        btnFront.classList.remove('active');
      }
    }

    const backBtn = document.getElementById('drawer-back-btn');
    if (backBtn) {
      backBtn.innerText = isIsolated ? '← Đặt Lại Vào Hộp Quà' : 'Quay Lại Toàn Cảnh 3D';
    }

    this.drawer.classList.add('visible');
  }

  updateShelfActive(productId) {
    const shelf = document.querySelector('.bottom-shelf');
    document.querySelectorAll('.shelf-item-pill').forEach(pill => {
      if (pill.dataset.product === productId) {
        pill.classList.add('active');
        if (shelf && shelf.scrollWidth > shelf.clientWidth) {
          const pillLeft = pill.offsetLeft;
          const pillWidth = pill.offsetWidth;
          const shelfWidth = shelf.clientWidth;
          shelf.scrollTo({
            left: pillLeft - (shelfWidth / 2) + (pillWidth / 2),
            behavior: 'smooth'
          });
        }
      } else {
        pill.classList.remove('active');
      }
    });
  }

  resetToOverview() {
    this.selectedProductId = null;
    this.lastClickProductId = null;
    document.body.classList.remove('drawer-open');
    document.body.classList.remove('menu-open');
    this.giftBoxScene.isolateProduct(null, false);
    const isMobile = window.innerWidth <= 768 || (this.camera && this.camera.aspect < 1.0);
    const fitOverview = this.getFitPosition(this.cameraPresets.overview.pos, this.cameraPresets.overview.target, isMobile ? 33.5 : 31.0);
    this.glideCameraTo(fitOverview.pos, fitOverview.target, 0.9);
    this.closeDrawer();
    document.querySelectorAll('.shelf-item-pill').forEach(pill => pill.classList.remove('active'));
    const shelf = document.querySelector('.bottom-shelf');
    if (shelf) shelf.scrollTo({ left: 0, behavior: 'smooth' });
    this.playWhooshSound();
  }

  // 9. UI Controls & Listeners
  setupUI() {
    // Top Action: Settings / Menu Toggle Button
    const btnMenuToggle = document.getElementById('btn-menu-toggle');
    if (btnMenuToggle) {
      btnMenuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleMenu();
      });
    }

    // Backdrop click: close both menu and drawer
    const backdrop = document.getElementById('ui-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        this.closeMenu();
        this.resetToOverview();
      });
    }

    // Touch and pointer event isolation: prevent drag/touch inside UI panels from bleeding to 3D OrbitControls
    const uiPanels = [
      this.drawer,
      this.menuPanel,
      document.querySelector('.bottom-shelf'),
      document.querySelector('.top-nav')
    ];
    uiPanels.forEach(panel => {
      if (!panel) return;
      ['touchstart', 'touchmove', 'touchend', 'pointerdown', 'pointerup', 'click', 'wheel'].forEach(evtType => {
        panel.addEventListener(evtType, (e) => {
          e.stopPropagation();
        }, { passive: evtType.startsWith('touch') });
      });
    });

    // Lid Open / Close
    const btnLidOpen = document.getElementById('btn-lid-open');
    const btnLidClose = document.getElementById('btn-lid-close');

    btnLidOpen.addEventListener('click', () => {
      this.openLidAndSelect();
    });

    btnLidClose.addEventListener('click', () => {
      this.giftBoxScene.setLidState(false, true);
      btnLidClose.classList.add('active');
      btnLidOpen.classList.remove('active');
      this.selectedProductId = 'box';
      this.glideCameraTo(this.cameraPresets.box.pos, this.cameraPresets.box.target, 0.9);
      this.closeDrawer();
      document.querySelectorAll('.shelf-item-pill').forEach(pill => {
        pill.classList.toggle('active', pill.dataset.product === 'box');
      });
      this.playWhooshSound();
    });

    // Exploded View
    const btnExplode = document.getElementById('btn-explode');
    btnExplode.addEventListener('click', () => {
      const isExp = !this.giftBoxScene.isExploded;
      this.giftBoxScene.setExplodeState(isExp);
      btnExplode.classList.toggle('active', isExp);
      btnExplode.querySelector('span').innerText = isExp ? 'Thu Lại Về Khay' : 'Xem Tách Lớp 3D';
      this.playWhooshSound();
    });

    // Auto-Rotate 360
    const btnAutoRotate = document.getElementById('btn-autorotate');
    btnAutoRotate.addEventListener('click', () => {
      this.controls.autoRotate = !this.controls.autoRotate;
      btnAutoRotate.classList.toggle('active', this.controls.autoRotate);
      const dot = document.getElementById('rotate-dot');
      if (dot) dot.style.background = this.controls.autoRotate ? '#3bb273' : '#a0948e';
      this.playClickSound();
    });

    // Collapsible Menu Toggle
    const btnCollapseMenu = document.getElementById('btn-collapse-menu');
    const btnExpandMenu = document.getElementById('btn-expand-menu');

    if (btnCollapseMenu) {
      btnCollapseMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        this.closeMenu();
        this.playClickSound();
      });
    }

    if (btnExpandMenu) {
      btnExpandMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openMenu();
        this.playClickSound();
      });
    }

    // Default collapse menu on mobile screens
    if (window.innerWidth <= 768) {
      this.closeMenu();
    }

    // Color Edition Switcher (Pink vs White)
    const btnEditionPink = document.getElementById('btn-edition-pink');
    const btnEditionWhite = document.getElementById('btn-edition-white');

    if (btnEditionPink && btnEditionWhite) {
      btnEditionPink.addEventListener('click', () => {
        this.giftBoxScene.setEdition('pink');
        btnEditionPink.classList.add('active');
        btnEditionWhite.classList.remove('active');
        this.playChimeSound();
      });

      btnEditionWhite.addEventListener('click', () => {
        this.giftBoxScene.setEdition('white');
        btnEditionWhite.classList.add('active');
        btnEditionPink.classList.remove('active');
        this.playChimeSound();
      });
    }

    // Camera preset views
    document.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.dataset.view;
        if (this.cameraPresets[view]) {
          this.glideCameraTo(this.cameraPresets[view].pos, this.cameraPresets[view].target, 0.8);
          this.drawer.classList.remove('visible');
          this.playClickSound();
        }
      });
    });

    // Lighting mood presets
    document.querySelectorAll('[data-mood]').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('[data-mood]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setLightingMood(btn.dataset.mood);
        this.playClickSound();
      });
    });

    // Bottom shelf item clicks
    document.querySelectorAll('.shelf-item-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        this.selectProduct(pill.dataset.product);
      });
    });

    // Drawer close buttons
    document.getElementById('drawer-close').addEventListener('click', () => this.resetToOverview());
    document.getElementById('drawer-back-btn').addEventListener('click', () => this.resetToOverview());

    // Inspection view toggle buttons (Top-Down vs 3D Front View)
    const btnInspectTopDown = document.getElementById('btn-inspect-topdown');
    const btnInspectFront = document.getElementById('btn-inspect-front');

    if (btnInspectTopDown && btnInspectFront) {
      btnInspectTopDown.addEventListener('click', () => {
        btnInspectTopDown.classList.add('active');
        btnInspectFront.classList.remove('active');
        const isMobile = window.innerWidth <= 768 || (this.camera && this.camera.aspect < 1.0);
        const isoTargetX = isMobile ? 0 : -2.5;
        const inspectTarget = isMobile ? new THREE.Vector3(0, 6.0, 1.8) : new THREE.Vector3(isoTargetX, 6.0, 0);
        const inspectCamPos = isMobile ? new THREE.Vector3(0, 31.0, 5.0) : new THREE.Vector3(isoTargetX, 30.0, 3.5);
        const fit = this.getFitPosition(inspectCamPos, inspectTarget, isMobile ? 22.0 : 24.0);
        this.glideCameraTo(fit.pos, fit.target, 0.7);
        this.playClickSound();
      });

      btnInspectFront.addEventListener('click', () => {
        btnInspectFront.classList.add('active');
        btnInspectTopDown.classList.remove('active');
        const isMobile = window.innerWidth <= 768 || (this.camera && this.camera.aspect < 1.0);
        const isoTargetX = isMobile ? 0 : -2.5;
        const inspectTarget = isMobile ? new THREE.Vector3(0, 6.0, 1.8) : new THREE.Vector3(isoTargetX, 6.0, 0);
        const isFlat = ['letter', 'photo', 'card', 'greeting'].includes(this.selectedProductId);
        const inspectCamPos = isMobile
          ? (isFlat ? new THREE.Vector3(0, 14.5, 16.0) : new THREE.Vector3(0, 10.5, 17.5))
          : (isFlat ? new THREE.Vector3(isoTargetX, 13.5, 15.0) : new THREE.Vector3(isoTargetX, 9.5, 16.5));
        const fit = this.getFitPosition(inspectCamPos, inspectTarget, isMobile ? 22.0 : 24.0);
        this.glideCameraTo(fit.pos, fit.target, 0.7);
        this.playClickSound();
      });
    }

    // Screenshot Capture
    document.getElementById('btn-screenshot').addEventListener('click', () => this.takeScreenshot());

    // Fullscreen Toggle
    document.getElementById('btn-fullscreen').addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    // Reset camera button
    document.getElementById('btn-reset').addEventListener('click', () => this.resetToOverview());
  }

  // 10. Capture HD 3D Photo
  takeScreenshot() {
    this.playChimeSound();
    this.renderer.render(this.scene, this.camera);
    const dataUrl = this.renderer.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `giftbox-thegift-3d-${Date.now()}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  // 11. Audio
  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) this.audioCtx = new AudioContext();
    }
  }

  playClickSound() {
    this.initAudio();
    if (!this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.05);
    } catch (e) {}
  }

  playWhooshSound() {
    this.initAudio();
    if (!this.audioCtx) return;
    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(280, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(140, this.audioCtx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.25);
    } catch (e) {}
  }

  playChimeSound() {
    this.initAudio();
    if (!this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);
        gain.gain.setValueAtTime(0.06, now + idx * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.06 + 0.45);
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 0.45);
      });
    } catch (e) {}
  }

  onWindowResize() {
    const w = (window.visualViewport && window.visualViewport.width) ? window.visualViewport.width : window.innerWidth;
    const h = (window.visualViewport && window.visualViewport.height) ? window.visualViewport.height : window.innerHeight;
    const aspect = w / h;
    this.camera.aspect = aspect;

    // Mobile adaptive FOV & Frustum fit
    this.camera.fov = aspect < 1.0 ? 60 : 40;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);

    const isMobile = w <= 768 || aspect < 1.0;

    // If currently at overview or box view, maintain perfect framing without clipping
    if (!this.selectedProductId && !this.isCameraAnimating) {
      const fit = this.getFitPosition(this.cameraPresets.overview.pos, this.cameraPresets.overview.target, isMobile ? 33.5 : 31.0);
      this.camera.position.copy(fit.pos);
      this.controls.target.copy(fit.target);
    } else if (this.selectedProductId === 'box' && !this.isCameraAnimating) {
      const fit = this.getFitPosition(this.cameraPresets.box.pos, this.cameraPresets.box.target, isMobile ? 33.0 : 31.0);
      this.camera.position.copy(fit.pos);
      this.controls.target.copy(fit.target);
    } else if (this.selectedProductId && !this.isCameraAnimating) {
      const isoTargetX = isMobile ? 0 : -2.5;
      const inspectTarget = isMobile ? new THREE.Vector3(0, 6.0, 1.8) : new THREE.Vector3(isoTargetX, 6.0, 0);
      const btnInspectFront = document.getElementById('btn-inspect-front');
      const isFrontActive = btnInspectFront && btnInspectFront.classList.contains('active');
      let inspectCamPos;
      if (isFrontActive) {
        const isFlat = ['letter', 'photo', 'card', 'greeting'].includes(this.selectedProductId);
        inspectCamPos = isMobile
          ? (isFlat ? new THREE.Vector3(0, 14.5, 16.0) : new THREE.Vector3(0, 10.5, 17.5))
          : (isFlat ? new THREE.Vector3(isoTargetX, 13.5, 15.0) : new THREE.Vector3(isoTargetX, 9.5, 16.5));
      } else {
        inspectCamPos = isMobile ? new THREE.Vector3(0, 31.0, 5.0) : new THREE.Vector3(isoTargetX, 30.0, 3.5);
      }
      const fitInspect = this.getFitPosition(inspectCamPos, inspectTarget, isMobile ? 22.0 : 24.0);
      this.camera.position.copy(fitInspect.pos);
      this.controls.target.copy(fitInspect.target);
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsed = this.clock.getElapsedTime();

    if (this.giftBoxScene) {
      this.giftBoxScene.update(delta, elapsed);
    }

    if (this.isCameraAnimating) {
      this.cameraAnimTime += delta;
      const t = Math.min(this.cameraAnimTime / this.cameraAnimDuration, 1.0);
      const ease = 1 - Math.pow(1 - t, 3);

      this.camera.position.lerpVectors(this.camStartPos, this.camTargetPos, ease);
      this.controls.target.lerpVectors(this.camStartLookAt, this.camTargetLookAt, ease);

      if (t >= 1.0) {
        this.isCameraAnimating = false;
      }
    }

    // Snowflakes falling and gently swaying animation
    if (this.particles && this.particles.visible && this.snowData) {
      const posAttr = this.particles.geometry.attributes.position;
      const posArr = posAttr.array;
      for (let i = 0; i < this.snowData.length; i++) {
        const d = this.snowData[i];
        const idx = i * 3;
        posArr[idx + 1] -= d.speedY * delta;
        posArr[idx] += Math.sin(elapsed * d.swaySpeed + d.phase) * (0.015 * d.swayAmp);
        posArr[idx + 2] += Math.cos(elapsed * d.swaySpeed + d.phase) * (0.012 * d.swayAmp);

        if (posArr[idx + 1] < -0.2) {
          posArr[idx + 1] = 30 + Math.random() * 5;
          posArr[idx] = (Math.random() - 0.5) * 44;
          posArr[idx + 2] = (Math.random() - 0.5) * 44;
        }
      }
      posAttr.needsUpdate = true;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new App3D();
});
