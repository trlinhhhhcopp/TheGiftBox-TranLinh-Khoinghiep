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

  // 1. Inside Lid Artwork for Pink Edition (Exact Match with Mascot Artwork)
  createPinkLidTexture() {
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

  // 3. Box Cover / Outer Texture (Pink or White Edition - Exact Match with Photo 2 & 3)
  createBoxCoverTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');

    // Luxurious Soft Pastel Background
    if (isPink) {
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#feebf1');
      grad.addColorStop(0.5, '#fcdbe5');
      grad.addColorStop(1, '#f9cfdc');
      ctx.fillStyle = grad;
    } else {
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#fdfbf7');
      grad.addColorStop(0.5, '#f7f2ea');
      grad.addColorStop(1, '#eee7dc');
      ctx.fillStyle = grad;
    }
    ctx.fillRect(0, 0, 1024, 1024);

    // Perimeter Stitched Border with Repeating Sweet Hearts (♥)
    ctx.save();
    const borderCol = isPink ? '#e87c9b' : '#baa99b';
    const heartAccentCol = isPink ? '#e55a84' : '#8d7c71';
    ctx.strokeStyle = borderCol;
    ctx.lineWidth = 3.5;
    ctx.setLineDash([12, 10]);
    ctx.strokeRect(45, 45, 934, 934);
    ctx.setLineDash([]);

    // Draw little hearts along top and bottom border
    const drawMiniHeart = (hx, hy, size, rot = 0) => {
      ctx.save();
      ctx.translate(hx, hy);
      ctx.rotate(rot);
      ctx.fillStyle = heartAccentCol;
      ctx.beginPath();
      ctx.moveTo(0, size * 0.3);
      ctx.bezierCurveTo(-size * 0.6, -size * 0.6, -size * 1.2, size * 0.2, 0, size * 1.2);
      ctx.bezierCurveTo(size * 1.2, size * 0.2, size * 0.6, -size * 0.6, 0, size * 0.3);
      ctx.fill();
      ctx.restore();
    };

    // Border hearts
    for (let x = 110; x <= 914; x += 80) {
      drawMiniHeart(x, 45, 8, 0);
      drawMiniHeart(x, 979, 8, Math.PI);
    }
    for (let y = 110; y <= 914; y += 80) {
      drawMiniHeart(45, y, 8, -Math.PI / 2);
      drawMiniHeart(979, y, 8, Math.PI / 2);
    }
    ctx.restore();

    // Center Coordinate for Artwork
    const cx = 512, cy = 440;

    // 1. RUFFLED LACE FRILLED HEART (Viền Ren Bèo Nhún Hình Trái Tim)
    const scale = 16.5;
    const numScallops = 44;
    const heartPts = [];
    for (let i = 0; i < numScallops; i++) {
      const t = (i / numScallops) * Math.PI * 2;
      const sinT = Math.sin(t);
      const x = cx + scale * 16 * Math.pow(sinT, 3);
      const y = cy - scale * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      heartPts.push({ x, y, t });
    }

    // Outer Ruffled Lace Scallops
    ctx.save();
    ctx.fillStyle = isPink ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)';
    ctx.strokeStyle = isPink ? '#e86a8e' : '#88776c';
    ctx.lineWidth = 4;
    for (let i = 0; i < numScallops; i++) {
      const p = heartPts[i];
      const nextP = heartPts[(i + 1) % numScallops];
      const mx = (p.x + nextP.x) / 2;
      const my = (p.y + nextP.y) / 2;
      const dx = nextP.x - p.x;
      const dy = nextP.y - p.y;
      const len = Math.hypot(dx, dy);
      const nx = -dy / len;
      const ny = dx / len;
      const scallopR = 23;

      ctx.beginPath();
      ctx.arc(mx + nx * 13, my + ny * 13, scallopR, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Delicate lace perforation dot
      ctx.fillStyle = isPink ? '#f8b1c4' : '#d2c6b9';
      ctx.beginPath();
      ctx.arc(mx + nx * 13, my + ny * 13, 3.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = isPink ? 'rgba(255, 255, 255, 0.96)' : 'rgba(255, 255, 255, 0.92)';
    }
    ctx.restore();

    // Heart Interior Base - Frosted Soft Warm White
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(heartPts[0].x, heartPts[0].y);
    for (let i = 1; i < numScallops; i++) {
      ctx.lineTo(heartPts[i].x, heartPts[i].y);
    }
    ctx.closePath();
    ctx.fillStyle = isPink ? '#fff5f8' : '#faf7f2';
    ctx.fill();
    ctx.strokeStyle = isPink ? '#de547c' : '#7d6c62';
    ctx.lineWidth = 7;
    ctx.stroke();

    // Inner delicate dashed border
    ctx.strokeStyle = isPink ? '#f29ab2' : '#b5a79a';
    ctx.lineWidth = 2.5;
    ctx.setLineDash([8, 8]);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.restore();

    // 2. ADORABLE MASCOT BUNNY LYING ON BELLY (Chú Thỏ Trắng Nằm Sấp Ngủ Say)
    ctx.save();
    ctx.translate(cx - 15, cy + 30);

    const bunnyOutline = isPink ? '#d04971' : '#6b5c53';
    const bunnyFur = '#ffffff';

    // Fluffy Round Tail (on the left)
    ctx.fillStyle = bunnyFur;
    ctx.strokeStyle = bunnyOutline;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(-130, -5, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Back Foot tucked under
    ctx.beginPath();
    ctx.ellipse(-95, 38, 30, 20, -0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Horizontal Oval Body (Lying flat on chest/belly)
    ctx.beginPath();
    ctx.ellipse(-25, 10, 115, 68, -0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Gentle 3D Belly Shading
    const bodyShade = ctx.createLinearGradient(-25, -45, -25, 75);
    bodyShade.addColorStop(0, 'rgba(255, 255, 255, 0)');
    bodyShade.addColorStop(1, isPink ? 'rgba(245, 185, 200, 0.28)' : 'rgba(210, 195, 180, 0.22)');
    ctx.fillStyle = bodyShade;
    ctx.fill();

    // Front Paws resting comfortably
    ctx.fillStyle = bunnyFur;
    ctx.beginPath();
    ctx.ellipse(65, 42, 25, 16, 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Chubby Round Head resting forward
    ctx.beginPath();
    ctx.ellipse(60, -5, 65, 54, 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Long Floppy Ears Resting Gently Backwards
    // Ear 1 (Back ear)
    ctx.beginPath();
    ctx.ellipse(-20, -48, 68, 22, -0.32, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Ear 2 (Front ear)
    ctx.beginPath();
    ctx.ellipse(-5, -40, 72, 24, -0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Inner Ear Soft Pink Warmth
    ctx.fillStyle = isPink ? '#fcaec4' : '#e6d8cb';
    ctx.beginPath();
    ctx.ellipse(-8, -40, 52, 14, -0.22, 0, Math.PI * 2);
    ctx.fill();

    // Sleeping Eyes: Happy Peaceful Curves (⌒ ⌒)
    ctx.strokeStyle = isPink ? '#8d2d4c' : '#453831';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.arc(75, -8, 14, Math.PI * 1.15, Math.PI * 1.85);
    ctx.stroke();

    // Cute Eyelash Accent
    ctx.beginPath();
    ctx.moveTo(88, -12);
    ctx.lineTo(96, -16);
    ctx.stroke();

    // Sweet Rosy Blushing Cheek
    ctx.fillStyle = isPink ? 'rgba(238, 90, 130, 0.65)' : 'rgba(205, 150, 140, 0.5)';
    ctx.beginPath();
    ctx.ellipse(78, 12, 18, 12, 0, 0, Math.PI * 2);
    ctx.fill();

    // Tiny Embroidered Pink Nose
    ctx.fillStyle = isPink ? '#eb5782' : '#887469';
    ctx.beginPath();
    ctx.ellipse(108, 0, 7, 5, 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Peaceful Resting Smile (:3)
    ctx.beginPath();
    ctx.arc(104, 8, 9, 0.1, Math.PI * 0.65);
    ctx.stroke();

    ctx.restore();

    // 3. CUTE CARROT DOODLE NEXT TO HEART (Bottom-Right)
    ctx.save();
    ctx.translate(cx + 250, cy + 90);
    ctx.rotate(0.35);

    // Carrot Body
    ctx.fillStyle = '#ff7b42';
    ctx.strokeStyle = '#c64618';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(35, 0);
    ctx.quadraticCurveTo(0, -18, -30, -14);
    ctx.quadraticCurveTo(-38, 0, -30, 14);
    ctx.quadraticCurveTo(0, 18, 35, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Carrot Ridges
    ctx.strokeStyle = '#df5522';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(8, -10); ctx.lineTo(12, 2);
    ctx.moveTo(-10, -6); ctx.lineTo(-8, 8);
    ctx.stroke();

    // Green Foliage Leaves
    ctx.fillStyle = '#55b65b';
    ctx.strokeStyle = '#327c37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(-42, -8, 16, 7, -0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(-46, 0, 18, 8, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(-42, 8, 16, 7, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 4. SOLID PINK HEART DOODLE (Top-Left)
    drawMiniHeart(cx - 240, cy - 200, 26, -0.25);

    // 5. FOUR-POINT DIAMOND SPARKLES (✦)
    const drawSparkle = (sx, sy, size, color) => {
      ctx.save();
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(sx, sy - size);
      ctx.quadraticCurveTo(sx, sy, sx + size, sy);
      ctx.quadraticCurveTo(sx, sy, sx, sy + size);
      ctx.quadraticCurveTo(sx, sy, sx - size, sy);
      ctx.quadraticCurveTo(sx, sy, sx, sy - size);
      ctx.fill();
      ctx.restore();
    };

    drawSparkle(cx - 210, cy + 220, 16, isPink ? '#eb618b' : '#9b8c80');
    drawSparkle(cx + 220, cy - 180, 20, isPink ? '#f089aa' : '#b2a599');
    drawSparkle(cx - 280, cy - 40, 13, isPink ? '#f3a2bc' : '#c5b8ac');
    drawSparkle(cx + 290, cy - 20, 15, isPink ? '#eb618b' : '#9b8c80');

    // 6. BRAND TYPOGRAPHY: BOLD "THE GIFT"
    ctx.save();
    ctx.textAlign = 'center';
    ctx.fillStyle = isPink ? '#c9355f' : '#453a35';
    ctx.font = 'bold 74px "Playfair Display", "Arial Rounded MT Bold", Georgia, serif';
    try { ctx.letterSpacing = '8px'; } catch (e) {}
    ctx.fillText('THE GIFT', cx, 805);

    ctx.fillStyle = isPink ? '#a24663' : '#786c62';
    ctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
    try { ctx.letterSpacing = '5px'; } catch (e) {}
    ctx.fillText('G I F T   B O X   " G I Ấ Y   G I E O   H Ạ T "', cx, 860);

    ctx.fillStyle = isPink ? '#b95a75' : '#8c7d73';
    ctx.font = 'italic 500 20px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '3px'; } catch (e) {}
    ctx.fillText('A Little Hug, A Meaningful Feeling ♡', cx, 905);
    ctx.restore();

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // 4. Box Flap Texture (Front Clasp)
  createBoxFlapTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');
    const grad = ctx.createLinearGradient(0, 0, 1024, 0);
    if (isPink) {
      grad.addColorStop(0, '#fcdbe5');
      grad.addColorStop(0.5, '#feebf1');
      grad.addColorStop(1, '#fcdbe5');
    } else {
      grad.addColorStop(0, '#f2ece4');
      grad.addColorStop(0.5, '#faf7f2');
      grad.addColorStop(1, '#f2ece4');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 256);

    ctx.strokeStyle = isPink ? '#e87c9b' : '#c8bcb0';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 8]);
    ctx.strokeRect(20, 20, 984, 216);
    ctx.setLineDash([]);

    // Hearts flanking THE GIFT
    const heartCol = isPink ? '#e55a84' : '#8d7c71';
    const drawMiniHeart = (hx, hy, size) => {
      ctx.save();
      ctx.translate(hx, hy);
      ctx.fillStyle = heartCol;
      ctx.beginPath();
      ctx.moveTo(0, size * 0.3);
      ctx.bezierCurveTo(-size * 0.6, -size * 0.6, -size * 1.2, size * 0.2, 0, size * 1.2);
      ctx.bezierCurveTo(size * 1.2, size * 0.2, size * 0.6, -size * 0.6, 0, size * 0.3);
      ctx.fill();
      ctx.restore();
    };

    drawMiniHeart(250, 128, 16);
    drawMiniHeart(774, 128, 16);

    ctx.textAlign = 'center';
    ctx.fillStyle = isPink ? '#c9355f' : '#453a35';
    ctx.font = 'bold 58px "Playfair Display", "Arial Rounded MT Bold", Georgia, serif';
    try { ctx.letterSpacing = '10px'; } catch (e) {}
    ctx.fillText('THE GIFT', 512, 146);

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
