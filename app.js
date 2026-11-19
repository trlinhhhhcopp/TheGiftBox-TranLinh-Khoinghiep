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

    // Camera preset views (Optimized with high top-down angle, comfortable distance & viewport offset)
    this.cameraPresets = {
      overview: { pos: new THREE.Vector3(0, 24, 28), target: new THREE.Vector3(0, 2.2, 0) },
      top: { pos: new THREE.Vector3(0, 36, 0.5), target: new THREE.Vector3(0, 1.8, 0) },
      front: { pos: new THREE.Vector3(0, 16, 24), target: new THREE.Vector3(0, 3.0, 1.0) },
      bunny: { pos: new THREE.Vector3(-1.8, 18.0, 11.5), target: new THREE.Vector3(-1.8, 2.5, -0.2) },
      candle: { pos: new THREE.Vector3(-8.2, 18.0, 7.5), target: new THREE.Vector3(-8.2, 2.5, -4.5) },
      teajar: { pos: new THREE.Vector3(-8.2, 18.0, 12.8), target: new THREE.Vector3(-8.2, 2.5, 0.8) },
      diffuser: { pos: new THREE.Vector3(5.5, 18.0, 7.5), target: new THREE.Vector3(5.5, 2.5, -4.5) },
      photo: { pos: new THREE.Vector3(5.5, 18.0, 12.8), target: new THREE.Vector3(5.5, 2.5, 0.8) },
      letter: { pos: new THREE.Vector3(-6.5, 18.0, 18.2), target: new THREE.Vector3(-6.5, 2.5, 6.2) },
      card: { pos: new THREE.Vector3(3.5, 18.0, 18.2), target: new THREE.Vector3(3.5, 2.5, 6.2) },
      greeting: { pos: new THREE.Vector3(16.5, 18.0, 14.0), target: new THREE.Vector3(17.5, 3.8, 2.0) },
      box: { pos: new THREE.Vector3(15, 20, 24), target: new THREE.Vector3(0, 3.0, 0) }
    };

    // Camera animation state
    this.camTargetPos = this.cameraPresets.overview.pos.clone();
    this.camTargetLookAt = this.cameraPresets.overview.target.clone();
    this.isCameraAnimating = false;

    // Raycasting
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredObject = null;
    this.selectedProductId = null;

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
    } finally {
      setTimeout(() => {
        const loader = document.getElementById('loading-overlay');
        if (loader) {
          loader.classList.add('fade-out');
          setTimeout(() => { loader.style.display = 'none'; }, 600);
        }
      }, 400);
    }
  }

  // 1. Three.js Core Setup
  initThree() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x281f25);
    this.scene.fog = new THREE.FogExp2(0x281f25, 0.012);

    const aspect = window.innerWidth / window.innerHeight;
    const baseFov = aspect < 1.0 ? Math.min(68, 40 / (aspect * 1.05)) : 40;
    this.camera = new THREE.PerspectiveCamera(baseFov, aspect, 0.1, 1000);
    this.camera.position.copy(this.cameraPresets.overview.pos);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.25;
    if (THREE.sRGBEncoding) this.renderer.outputEncoding = THREE.sRGBEncoding;

    this.container.appendChild(this.renderer.domElement);

    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2.05;
    this.controls.minDistance = 10;
    this.controls.maxDistance = 65;
    this.controls.target.copy(this.cameraPresets.overview.target);
    this.controls.autoRotate = false;
    this.controls.autoRotateSpeed = 1.2;
  }

  // 2. Realistic Warm & Cozy Lighting
  initLighting() {
    this.lights = {};

    this.lights.hemi = new THREE.HemisphereLight(0xffecd6, 0x422d36, 0.6);
    this.scene.add(this.lights.hemi);

    // Warm Key Directional Light
    this.lights.key = new THREE.DirectionalLight(0xffa652, 1.4);
    this.lights.key.position.set(16, 28, 18);
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

    // Soft Blush Fill Light
    this.lights.fill = new THREE.DirectionalLight(0xf7bacc, 0.65);
    this.lights.fill.position.set(-18, 16, 14);
    this.scene.add(this.lights.fill);

    // Subtle Rim Light
    this.lights.rim = new THREE.DirectionalLight(0xfedebc, 0.4);
    this.lights.rim.position.set(0, 18, -24);
    this.scene.add(this.lights.rim);
  }

  // 3. Set Lighting Mood
  setLightingMood(mood) {
    if (mood === 'candlelight') {
      // Warm Cozy Candlelight Studio (Default)
      this.scene.background.set(0x281f25);
      this.scene.fog.color.set(0x281f25);
      this.lights.hemi.color.set(0xffecd6);
      this.lights.hemi.groundColor.set(0x38222d);
      this.lights.hemi.intensity = 0.55;

      this.lights.key.color.set(0xff9944);
      this.lights.key.intensity = 1.35;

      this.lights.fill.color.set(0x8a3a55);
      this.lights.fill.intensity = 0.5;

      this.lights.rim.color.set(0xffca85);
      this.lights.rim.intensity = 0.35;

      this.renderer.toneMappingExposure = 1.3;
      if (this.particles) this.particles.visible = true;
    } else if (mood === 'sunset') {
      // Golden Sunset
      this.scene.background.set(0x382220);
      this.scene.fog.color.set(0x382220);
      this.lights.hemi.color.set(0xffd5b3);
      this.lights.hemi.groundColor.set(0x241514);
      this.lights.hemi.intensity = 0.5;

      this.lights.key.color.set(0xff8833);
      this.lights.key.intensity = 1.5;

      this.lights.fill.color.set(0x993d58);
      this.lights.fill.intensity = 0.45;

      this.renderer.toneMappingExposure = 1.35;
      if (this.particles) this.particles.visible = true;
    } else if (mood === 'studio') {
      // Clean Luxury Warm Studio
      this.scene.background.set(0x3a3036);
      this.scene.fog.color.set(0x3a3036);
      this.lights.hemi.color.set(0xfff3ea);
      this.lights.hemi.groundColor.set(0x2e2428);
      this.lights.hemi.intensity = 0.65;

      this.lights.key.color.set(0xffe2cc);
      this.lights.key.intensity = 1.4;

      this.lights.fill.color.set(0xbb6f85);
      this.lights.fill.intensity = 0.55;

      this.renderer.toneMappingExposure = 1.25;
      if (this.particles) this.particles.visible = false;
    }
  }

  // 4. Subtle Floating Golden Dust Particles
  initParticles() {
    const particleCount = 130;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 36;
      positions[i + 1] = Math.random() * 22;
      positions[i + 2] = (Math.random() - 0.5) * 36;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffca7a,
      size: 0.38,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending
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

        // Clean tap detection (< 12px drag, < 350ms duration)
        if (dist < 12 && dt < 350) {
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
        this.tooltip.innerHTML = `${info.icon} ${info.name}`;
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
      this.glideCameraTo(this.cameraPresets.overview.pos, this.cameraPresets.overview.target, 0.9);
      document.querySelectorAll('.shelf-item-pill').forEach(pill => pill.classList.remove('active'));
    }
  }

  // 8. Select & Zoom in from High Top-Down Angle
  selectProduct(productId) {
    if (productId === 'box') {
      this.selectedProductId = 'box';
      const info = ProductData.box;
      this.glideCameraTo(this.cameraPresets.box.pos, this.cameraPresets.box.target, 0.85);
      this.showDrawer(info);
      this.updateShelfActive('box');
      return;
    }

    // If box is closed and an inside item is selected, OPEN BOX FIRST!
    if (!this.giftBoxScene.isBoxOpen) {
      this.openLidAndSelect(productId);
      return;
    }

    this.selectedProductId = productId;
    const info = ProductData[productId];
    if (!info) return;

    this.playChimeSound();

    // Zoom camera in from high top-down angle
    const preset = this.cameraPresets[productId] || this.cameraPresets.overview;
    let targetPos = preset.pos.clone();
    let targetLookAt = preset.target.clone();

    // On mobile portrait, shift camera target slightly to keep product visible in upper half above bottom drawer
    if (window.innerWidth <= 768 && productId !== 'box') {
      targetLookAt.z -= 1.6;
      targetPos.z -= 1.6;
    }

    this.glideCameraTo(targetPos, targetLookAt, 0.85);

    this.showDrawer(info);
    this.updateShelfActive(productId);
  }

  showDrawer(info) {
    document.getElementById('drawer-tag').innerText = info.tag;
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

    this.drawer.classList.add('visible');
  }

  updateShelfActive(productId) {
    document.querySelectorAll('.shelf-item-pill').forEach(pill => {
      if (pill.dataset.product === productId) {
        pill.classList.add('active');
        pill.scrollIntoView({ behavior: 'smooth', inline: 'center' });
      } else {
        pill.classList.remove('active');
      }
    });
  }

  resetToOverview() {
    this.selectedProductId = null;
    this.glideCameraTo(this.cameraPresets.overview.pos, this.cameraPresets.overview.target, 0.9);
    this.drawer.classList.remove('visible');
    document.querySelectorAll('.shelf-item-pill').forEach(pill => pill.classList.remove('active'));
    this.playClickSound();
  }

  // 9. UI Controls & Listeners
  setupUI() {
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
      this.drawer.classList.remove('visible');
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
    const menuContainer = document.getElementById('floating-controls');

    if (btnCollapseMenu && menuContainer) {
      btnCollapseMenu.addEventListener('click', () => {
        menuContainer.classList.add('collapsed');
        if (btnExpandMenu) btnExpandMenu.classList.add('visible');
        this.playClickSound();
      });
    }

    if (btnExpandMenu && menuContainer) {
      btnExpandMenu.addEventListener('click', () => {
        menuContainer.classList.remove('collapsed');
        btnExpandMenu.classList.remove('visible');
        this.playClickSound();
      });

      // Auto-collapse menu on mobile portrait for clean, uncluttered view
      if (window.innerWidth <= 768) {
        menuContainer.classList.add('collapsed');
        btnExpandMenu.classList.add('visible');
      }
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
    const w = window.innerWidth;
    const h = window.innerHeight;
    const aspect = w / h;
    this.camera.aspect = aspect;

    // Mobile adaptive FOV: automatically adjusts FOV on portrait mobile so 3D objects fit gracefully without cropping
    if (aspect < 1.0) {
      this.camera.fov = Math.min(68, 40 / (aspect * 1.05));
    } else {
      this.camera.fov = 40;
    }
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
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

    if (this.particles && this.particles.visible) {
      this.particles.rotation.y = elapsed * 0.035;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new App3D();
});
