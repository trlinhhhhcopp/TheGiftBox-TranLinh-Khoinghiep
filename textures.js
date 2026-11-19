/**
 * textures.js - High-Fidelity Texture Generator for 3D Gift Box
 * Supports both Pink Edition (Photo 3) and White/Cream Minimalist Edition (Photo 1).
 */

const TextureManager = {
  cache: {},

  init() {
    if (typeof TEXTURE_ASSETS === 'undefined') {
      console.warn('TEXTURE_ASSETS not found, will rely on procedural textures.');
    }
  },

  // 1. Inside Lid Artwork for Pink Edition (From Photo 3)
  createPinkLidTexture() {
    if (typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_lid_art) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_lid_art;
      return texture;
    }
    return this.createBoxCoverTexture('pink');
  },

  // 2. Bunny Face Texture (Adorable, vivid, expressive face matching Photo 3)
  createBunnyFaceTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');
    const baseColor = isPink ? '#fdf8f4' : '#eee5d5';

    // Plush fur base
    ctx.fillStyle = baseColor;
    ctx.fillRect(0, 0, 1024, 1024);

    // Subtle fur micro-fibers
    for (let i = 0; i < 25000; i++) {
      const x = Math.random() * 1024;
      const y = Math.random() * 1024;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255, 255, 255, 0.45)' : 'rgba(210, 195, 180, 0.2)';
      ctx.fillRect(x, y, 2, 2);
    }

    const cx = 512, cy = 480;

    // Sweet Rosy Blush Cheeks
    const cheekGradL = ctx.createRadialGradient(cx - 210, cy + 70, 10, cx - 210, cy + 70, 110);
    cheekGradL.addColorStop(0, isPink ? 'rgba(245, 140, 165, 0.65)' : 'rgba(215, 160, 145, 0.5)');
    cheekGradL.addColorStop(1, 'rgba(245, 140, 165, 0)');
    ctx.fillStyle = cheekGradL;
    ctx.beginPath();
    ctx.arc(cx - 210, cy + 70, 110, 0, Math.PI * 2);
    ctx.fill();

    const cheekGradR = ctx.createRadialGradient(cx + 210, cy + 70, 10, cx + 210, cy + 70, 110);
    cheekGradR.addColorStop(0, isPink ? 'rgba(245, 140, 165, 0.65)' : 'rgba(215, 160, 145, 0.5)');
    cheekGradR.addColorStop(1, 'rgba(245, 140, 165, 0)');
    ctx.fillStyle = cheekGradR;
    ctx.beginPath();
    ctx.arc(cx + 210, cy + 70, 110, 0, Math.PI * 2);
    ctx.fill();

    // Sparkling Black Glossy Button Bead Eyes (Alive, soulful, cute)
    const drawEye = (ex, ey) => {
      ctx.save();
      // Outer soft shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
      ctx.shadowBlur = 12;

      // Eye base - deep glossy obsidian black
      ctx.fillStyle = '#141113';
      ctx.beginPath();
      ctx.arc(ex, ey, 42, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Dark chocolate rim
      ctx.strokeStyle = '#2b1c20';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Main large specular catchlight (top right)
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(ex + 13, ey - 13, 14, 0, Math.PI * 2);
      ctx.fill();

      // Secondary small catchlight (bottom left)
      ctx.beginPath();
      ctx.arc(ex - 12, ey + 12, 7, 0, Math.PI * 2);
      ctx.fill();

      // Delicate top eyelid curve
      ctx.strokeStyle = '#4a2f35';
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.arc(ex, ey, 45, Math.PI * 1.15, Math.PI * 1.85);
      ctx.stroke();

      ctx.restore();
    };

    drawEye(cx - 150, cy - 10);
    drawEye(cx + 150, cy - 10);

    // Cute Soft Pink Embroidered Nose (Heart / inverted rounded triangle)
    ctx.save();
    ctx.fillStyle = isPink ? '#e87c97' : '#9c7365';
    ctx.strokeStyle = isPink ? '#c85672' : '#6f4f45';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const ny = cy + 55;
    ctx.beginPath();
    ctx.moveTo(cx, ny + 32);
    ctx.lineTo(cx - 28, ny);
    ctx.quadraticCurveTo(cx, ny - 10, cx + 28, ny);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Stitched Smile cleft line (":3" mouth)
    ctx.strokeStyle = isPink ? '#7a3e4c' : '#4a3832';
    ctx.lineWidth = 5;

    // Vertical seam
    ctx.beginPath();
    ctx.moveTo(cx, ny + 32);
    ctx.lineTo(cx, ny + 62);
    ctx.stroke();

    // Left smile curve
    ctx.beginPath();
    ctx.arc(cx - 26, ny + 62, 26, 0, Math.PI * 0.75);
    ctx.stroke();

    // Right smile curve
    ctx.beginPath();
    ctx.arc(cx + 26, ny + 62, 26, Math.PI * 0.25, Math.PI);
    ctx.stroke();

    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  },

  // 3. Box Cover / Outer Texture (Pink or White)
  createBoxCoverTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');

    if (isPink) {
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#fde6ed');
      grad.addColorStop(0.5, '#fcdbe5');
      grad.addColorStop(1, '#fad1de');
      ctx.fillStyle = grad;
    } else {
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#fdfbf7');
      grad.addColorStop(0.5, '#f7f2ea');
      grad.addColorStop(1, '#eee7dc');
      ctx.fillStyle = grad;
    }
    ctx.fillRect(0, 0, 1024, 1024);

    // Stitched frame
    ctx.strokeStyle = isPink ? '#e57b98' : '#c5b8a8';
    ctx.lineWidth = 4;
    ctx.setLineDash([12, 10]);
    ctx.strokeRect(50, 50, 924, 924);
    ctx.setLineDash([]);

    // Hand-drawn heart doodle in center
    const cx = 512, cy = 480;
    ctx.save();
    ctx.strokeStyle = isPink ? '#de5d82' : '#8d7e72';
    ctx.lineWidth = 9;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(cx, cy - 70);
    ctx.bezierCurveTo(cx - 180, cy - 250, cx - 360, cy - 30, cx, cy + 240);
    ctx.bezierCurveTo(cx + 360, cy - 30, cx + 180, cy - 250, cx, cy - 70);
    ctx.stroke();
    ctx.restore();

    // Mascot Bunny Doodle inside heart (Photo 3)
    ctx.save();
    ctx.translate(cx, cy + 20);

    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = isPink ? '#cf577a' : '#85756a';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.ellipse(0, 40, 90, 70, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(0, -35, 75, 65, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Ears
    ctx.beginPath();
    ctx.ellipse(-65, -30, 25, 60, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(65, -30, 25, 60, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Ear inner
    ctx.fillStyle = isPink ? '#fcaec2' : '#e8ded4';
    ctx.beginPath();
    ctx.ellipse(-65, -30, 13, 40, -Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(65, -30, 13, 40, Math.PI / 4, 0, Math.PI * 2);
    ctx.fill();

    // Cute blue hair bow on sleeping bunny (Photo 3)
    ctx.fillStyle = '#9cbbe9';
    ctx.strokeStyle = '#5a78a5';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(-20, -85, 14, 8, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(4, -88, 14, 8, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#658cc4';
    ctx.beginPath();
    ctx.arc(-8, -86, 6, 0, Math.PI * 2);
    ctx.fill();

    // Sleeping eyes (^ ^)
    ctx.strokeStyle = isPink ? '#85324c' : '#453a35';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(-26, -38, 14, Math.PI * 1.1, Math.PI * 1.9);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(26, -38, 14, Math.PI * 1.1, Math.PI * 1.9);
    ctx.stroke();

    // Rosy cheeks
    ctx.fillStyle = isPink ? 'rgba(235, 96, 135, 0.55)' : 'rgba(200, 160, 150, 0.4)';
    ctx.beginPath();
    ctx.arc(-42, -22, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(42, -22, 14, 0, Math.PI * 2);
    ctx.fill();

    // Pink nose
    ctx.fillStyle = isPink ? '#e85c84' : '#8c7b70';
    ctx.beginPath();
    ctx.ellipse(0, -25, 7, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Paws
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = isPink ? '#cf577a' : '#85756a';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(-30, 50, 18, 14, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(30, 50, 18, 14, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Carrot Doodle (Photo 3)
    ctx.save();
    ctx.translate(cx + 260, cy - 140);
    ctx.rotate(0.4);
    ctx.fillStyle = '#f37a48';
    ctx.strokeStyle = '#c45124';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 45);
    ctx.lineTo(-18, -15);
    ctx.quadraticCurveTo(0, -25, 18, -15);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#65b367';
    ctx.beginPath();
    ctx.ellipse(-8, -32, 6, 14, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(8, -32, 6, 14, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // "THE GIFT"
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = isPink ? '#d3446c' : '#453a35';
    ctx.font = 'bold 64px "Arial Rounded MT Bold", "Nunito", sans-serif';
    try { ctx.letterSpacing = '6px'; } catch (e) {}
    ctx.fillText('THE GIFT', cx, 830);

    ctx.fillStyle = isPink ? '#a64d67' : '#786c62';
    ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
    try { ctx.letterSpacing = '4px'; } catch (e) {}
    ctx.fillText('G I F T   B O X   " G I Ấ Y   G I E O   H Ạ T "', cx, 885);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // 4. Box Flap Texture
  createBoxFlapTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    if (isPink) {
      grad.addColorStop(0, '#fcdbe5');
      grad.addColorStop(0.5, '#fde6ed');
      grad.addColorStop(1, '#fcdbe5');
    } else {
      grad.addColorStop(0, '#f2ece4');
      grad.addColorStop(0.5, '#faf7f2');
      grad.addColorStop(1, '#f2ece4');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    ctx.strokeStyle = isPink ? '#e57b98' : '#c8bcb0';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 8]);
    ctx.strokeRect(20, 20, 984, 216);
    ctx.setLineDash([]);

    ctx.textAlign = 'center';
    ctx.fillStyle = isPink ? '#d3446c' : '#453a35';
    ctx.font = 'bold 58px "Arial Rounded MT Bold", sans-serif';
    try { ctx.letterSpacing = '8px'; } catch (e) {}
    ctx.fillText('THE GIFT', 512, 145);

    return new THREE.CanvasTexture(canvas);
  },

  // 5. Candle Label Texture
  createCandleLabelTexture(edition = 'pink') {
    if (edition === 'pink' && typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_candle) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_candle;
      return texture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');
    ctx.fillStyle = isPink ? '#fdeff3' : '#faf8f5';
    ctx.fillRect(0, 0, 512, 384);

    ctx.strokeStyle = isPink ? '#df8ea4' : '#8c827a';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, 452, 324);

    ctx.textAlign = 'center';

    if (isPink) {
      ctx.fillStyle = '#b83b60';
      ctx.font = 'bold 38px "Arial Rounded MT Bold", sans-serif';
      ctx.fillText('THE GIFT', 256, 175);
      ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = '#8f5567';
      ctx.fillText('Lavender Scented', 256, 230);
    } else {
      ctx.fillStyle = '#3a3532';
      ctx.font = '400 48px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '14px'; } catch (e) {}
      ctx.fillText('M A M A', 256, 150);

      ctx.font = '400 44px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '12px'; } catch (e) {}
      ctx.fillText('B L E N D', 256, 210);
    }

    return new THREE.CanvasTexture(canvas);
  },

  // 6. Tea Jar Content Texture
  createTeaInsideTexture(edition = 'pink') {
    if (edition === 'pink' && typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_teajar) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_teajar;
      return texture;
    }

    if (typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.item_tea_inside) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.item_tea_inside;
      return texture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#dfb572';
    ctx.fillRect(0, 0, 512, 512);
    return new THREE.CanvasTexture(canvas);
  },

  // 7. Wood Texture
  createWoodTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#d9b68b';
    ctx.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 400; i++) {
      const y = Math.random() * 512;
      ctx.fillStyle = Math.random() > 0.5 ? 'rgba(145, 105, 68, 0.15)' : 'rgba(245, 220, 185, 0.15)';
      ctx.fillRect(0, y, 512, Math.random() * 4 + 1);
    }
    return new THREE.CanvasTexture(canvas);
  },

  // 8. Seed Paper Texture
  createSeedPaperTexture(edition = 'pink') {
    if (edition === 'pink' && typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_letter) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_letter;
      return texture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#f7f4ee';
    ctx.fillRect(0, 0, 1024, 600);
    return new THREE.CanvasTexture(canvas);
  },

  // 9. Wax Seal Texture
  createWaxSealTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const cx = 256, cy = 256;
    const isPink = (edition === 'pink');

    ctx.fillStyle = isPink ? '#e8a2b5' : '#c5b199';
    ctx.beginPath();
    ctx.arc(cx, cy, 210, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = isPink ? '#dc8da2' : '#baa38a';
    ctx.beginPath();
    ctx.arc(cx, cy, 145, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = isPink ? '#ffffff' : '#e2d3c1';
    if (isPink) {
      ctx.beginPath();
      ctx.arc(cx, cy + 15, 45, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx - 22, cy - 50, 15, 40, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx + 22, cy - 50, 15, 40, 0.2, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.beginPath();
      ctx.ellipse(cx, cy, 30, 50, 0.2, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  },

  // 10. Ritual Card Texture
  createRitualCardTexture(edition = 'pink') {
    if (edition === 'pink' && typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_card) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_card;
      return texture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = (edition === 'pink') ? '#fff5f8' : '#fcfbf8';
    ctx.fillRect(0, 0, 1024, 640);
    return new THREE.CanvasTexture(canvas);
  },

  // 11. Greeting Card Texture
  createGreetingCardTexture() {
    if (typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_greeting) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_greeting;
      return texture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fde6ed';
    ctx.fillRect(0, 0, 400, 600);
    return new THREE.CanvasTexture(canvas);
  },

  createBunnyBumpTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#808080';
    ctx.fillRect(0, 0, 256, 256);
    for (let y = 0; y < 256; y += 2) {
      for (let x = 0; x < 256; x += 2) {
        const v = Math.min(255, Math.max(0, Math.round(128 + (Math.random() - 0.5) * 45)));
        ctx.fillStyle = `rgb(${v},${v},${v})`;
        ctx.fillRect(x, y, 2, 2);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(6, 6);
    return texture;
  },

  createCouplePhotoTexture(edition = 'pink') {
    if (typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.item_photo) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.item_photo;
      return texture;
    }
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 480;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#faf7f2';
    ctx.fillRect(0, 0, 400, 480);
    return new THREE.CanvasTexture(canvas);
  }
};
