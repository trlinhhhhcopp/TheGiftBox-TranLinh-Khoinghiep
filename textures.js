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

    // Luxurious Soft Pastel Background (Rich sweet strawberry pastel pink)
    if (isPink) {
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#f99bb7');
      grad.addColorStop(0.4, '#ee638d');
      grad.addColorStop(1, '#e24d7b');
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
      grad.addColorStop(0, '#e55480');
      grad.addColorStop(0.5, '#f580a5');
      grad.addColorStop(1, '#e55480');
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

  // 5. Candle Label Texture (Exact Match with Photo 2: THE GIFT - Lavender - ♥)
  createCandleLabelTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');

    // Soft warm ivory / cream label card
    ctx.fillStyle = isPink ? '#fcf9f4' : '#faf8f5';
    ctx.fillRect(0, 0, 512, 384);

    // Delicate rounded border
    ctx.strokeStyle = isPink ? '#e8ddd2' : '#8c827a';
    ctx.lineWidth = 3;
    const bx = 24, by = 24, bw = 464, bh = 336, br = 18;
    ctx.beginPath();
    ctx.moveTo(bx + br, by);
    ctx.lineTo(bx + bw - br, by);
    ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + br);
    ctx.lineTo(bx + bw, by + bh - br);
    ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - br, by + bh);
    ctx.lineTo(bx + br, by + bh);
    ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - br);
    ctx.lineTo(bx, by + br);
    ctx.quadraticCurveTo(bx, by, bx + br, by);
    ctx.closePath();
    ctx.stroke();

    ctx.textAlign = 'center';

    if (isPink) {
      // "THE GIFT"
      ctx.fillStyle = '#221d20';
      ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '3px'; } catch (e) {}
      ctx.fillText('THE GIFT', 256, 155);

      // "Lavender"
      ctx.fillStyle = '#4e3d44';
      ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
      try { ctx.letterSpacing = '2px'; } catch (e) {}
      ctx.fillText('Lavender', 256, 215);

      // Sweet Pink Heart (♥)
      ctx.fillStyle = '#e8618b';
      const hx = 256, hy = 255, hs = 14;
      ctx.beginPath();
      ctx.moveTo(hx, hy + hs * 0.3);
      ctx.bezierCurveTo(hx - hs * 0.6, hy - hs * 0.6, hx - hs * 1.2, hy + hs * 0.2, hx, hy + hs * 1.2);
      ctx.bezierCurveTo(hx + hs * 1.2, hy + hs * 0.2, hx + hs * 0.6, hy - hs * 0.6, hx, hy + hs * 0.3);
      ctx.fill();
    } else {
      ctx.fillStyle = '#3a3532';
      ctx.font = '400 48px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '14px'; } catch (e) {}
      ctx.fillText('M A M A', 256, 150);

      ctx.font = '400 44px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '12px'; } catch (e) {}
      ctx.fillText('B L E N D', 256, 210);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // 6. Tea Jar Front Label Texture (Exact Match with Photo 2: THE GIFT - Chamomile Tea - ♥)
  createTeaJarLabelTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');

    const isPink = (edition === 'pink');

    // Soft warm ivory / cream label card
    ctx.fillStyle = isPink ? '#fcf9f4' : '#faf8f5';
    ctx.fillRect(0, 0, 512, 384);

    // Delicate rounded border
    ctx.strokeStyle = isPink ? '#e8ddd2' : '#8c827a';
    ctx.lineWidth = 3;
    const bx = 24, by = 24, bw = 464, bh = 336, br = 18;
    ctx.beginPath();
    ctx.moveTo(bx + br, by);
    ctx.lineTo(bx + bw - br, by);
    ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + br);
    ctx.lineTo(bx + bw, by + bh - br);
    ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - br, by + bh);
    ctx.lineTo(bx + br, by + bh);
    ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - br);
    ctx.lineTo(bx, by + br);
    ctx.quadraticCurveTo(bx, by, bx + br, by);
    ctx.closePath();
    ctx.stroke();

    ctx.textAlign = 'center';

    if (isPink) {
      // "THE GIFT"
      ctx.fillStyle = '#221d20';
      ctx.font = 'bold 44px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '3px'; } catch (e) {}
      ctx.fillText('THE GIFT', 256, 155);

      // "Chamomile Tea"
      ctx.fillStyle = '#4e3d44';
      ctx.font = '500 28px "Plus Jakarta Sans", sans-serif';
      try { ctx.letterSpacing = '1px'; } catch (e) {}
      ctx.fillText('Chamomile Tea', 256, 215);

      // Sweet Pink Heart (♥)
      ctx.fillStyle = '#e8618b';
      const hx = 256, hy = 255, hs = 14;
      ctx.beginPath();
      ctx.moveTo(hx, hy + hs * 0.3);
      ctx.bezierCurveTo(hx - hs * 0.6, hy - hs * 0.6, hx - hs * 1.2, hy + hs * 0.2, hx, hy + hs * 1.2);
      ctx.bezierCurveTo(hx + hs * 1.2, hy + hs * 0.2, hx + hs * 0.6, hy - hs * 0.6, hx, hy + hs * 0.3);
      ctx.fill();
    } else {
      ctx.fillStyle = '#3a3532';
      ctx.font = '400 44px "Playfair Display", Georgia, serif';
      try { ctx.letterSpacing = '6px'; } catch (e) {}
      ctx.fillText('HERBAL TEA', 256, 175);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // 7. Tea Jar Content Texture (Chamomile dried flower buds)
  createTeaInsideTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');

    // Warm golden amber base
    ctx.fillStyle = '#cca162';
    ctx.fillRect(0, 0, 512, 512);

    // Dense cluster of dried golden Chamomile flower buds
    for (let i = 0; i < 350; i++) {
      const bx = Math.random() * 512;
      const by = Math.random() * 512;
      const br = 8 + Math.random() * 14;

      const grad = ctx.createRadialGradient(bx, by, 2, bx, by, br);
      grad.addColorStop(0, '#f2d68b');
      grad.addColorStop(0.6, '#deb062');
      grad.addColorStop(1, '#a6783c');
      ctx.fillStyle = grad;

      ctx.beginPath();
      ctx.arc(bx, by, br, 0, Math.PI * 2);
      ctx.fill();

      // Tiny dried petals
      ctx.strokeStyle = 'rgba(255, 240, 200, 0.5)';
      ctx.lineWidth = 1.5;
      for (let p = 0; p < 6; p++) {
        const ang = (p / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + Math.cos(ang) * (br + 4), by + Math.sin(ang) * (br + 4));
        ctx.stroke();
      }
    }

    return new THREE.CanvasTexture(canvas);
  },

  // 8. Diffuser Ceramic Stamp Texture (Photo 2: Circular stamp THE GIFT)
  createDiffuserStampTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Ivory ceramic base
    ctx.fillStyle = '#f7f4ed';
    ctx.fillRect(0, 0, 256, 256);

    const cx = 128, cy = 128;

    // Outer circle impression
    ctx.strokeStyle = '#b8ab96';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, 105, 0, Math.PI * 2);
    ctx.stroke();

    // Inner circle
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, 96, 0, Math.PI * 2);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#a69780';
    ctx.font = 'bold 40px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '4px'; } catch (e) {}
    ctx.fillText('THE', cx, 115);
    ctx.fillText('GIFT', cx, 165);

    return new THREE.CanvasTexture(canvas);
  },

  // 9. Bunny Bow Medallion Texture (Photo 2: Round pink tag THE GIFT ♥)
  createMedalTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const cx = 128, cy = 128;

    // Pink circular card
    ctx.fillStyle = '#f9cbd8';
    ctx.beginPath();
    ctx.arc(cx, cy, 120, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#e57b98';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, 110, 0, Math.PI * 2);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#48353c';
    ctx.font = 'bold 30px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '2px'; } catch (e) {}
    ctx.fillText('THE GIFT', cx, 120);

    // Heart below
    ctx.fillStyle = '#d3446c';
    const hx = cx, hy = 150, hs = 14;
    ctx.beginPath();
    ctx.moveTo(hx, hy + hs * 0.3);
    ctx.bezierCurveTo(hx - hs * 0.6, hy - hs * 0.6, hx - hs * 1.2, hy + hs * 0.2, hx, hy + hs * 1.2);
    ctx.bezierCurveTo(hx + hs * 1.2, hy + hs * 0.2, hx + hs * 0.6, hy - hs * 0.6, hx, hy + hs * 0.3);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  },

  // 10. Wood Texture
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

  // Helper: Draw subtle artisanal handmade cotton-seed paper surface
  _drawCottonSeedPaper(ctx, w, h, seed = 42) {
    // Warm blush-ivory linen gradient (matches reference Photo 2 envelope)
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#fcf1e8');
    grad.addColorStop(0.5, '#f8e9de');
    grad.addColorStop(1, '#f2ddd0');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Subtle linen cross-weave micro-texture
    ctx.save();
    ctx.strokeStyle = 'rgba(218, 188, 170, 0.14)';
    ctx.lineWidth = 1;
    for (let y = 0; y < h; y += 6) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(225, 198, 182, 0.1)';
    for (let x = 0; x < w; x += 8) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    // Deterministic seeded PRNG so texture stays clean & crisp
    let s = seed;
    const rand = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };

    // Ultra-delicate artisanal cotton fibers & tiny botanical seed flecks
    for (let i = 0; i < 240; i++) {
      const fx = rand() * w;
      const fy = rand() * h;
      const len = 4 + rand() * 8;
      const ang = rand() * Math.PI * 2;
      ctx.strokeStyle = rand() > 0.5 ? 'rgba(255, 250, 245, 0.45)' : 'rgba(205, 175, 155, 0.16)';
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.quadraticCurveTo(fx + Math.cos(ang + 0.4) * len * 0.5, fy + Math.sin(ang + 0.4) * len * 0.5, fx + Math.cos(ang) * len, fy + Math.sin(ang) * len);
      ctx.stroke();
    }

    const speckPalette = [
      'rgba(195, 165, 140, 0.22)',
      'rgba(168, 178, 150, 0.22)',
      'rgba(220, 175, 175, 0.20)'
    ];
    for (let i = 0; i < 320; i++) {
      const x = rand() * w;
      const y = rand() * h;
      ctx.fillStyle = speckPalette[Math.floor(rand() * speckPalette.length)];
      const sz = 0.8 + rand() * 1.4;
      ctx.beginPath();
      ctx.ellipse(x, y, sz, sz * 0.65, rand() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  },

  // 11. Seed Paper Envelope Texture (Clean folded cotton-blush envelope with realistic creases & shadows)
  createSeedPaperTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    this._drawCottonSeedPaper(ctx, 1024, 600, 101);

    ctx.save();
    // Diagonal lower envelope side & bottom fold seams
    ctx.strokeStyle = 'rgba(196, 164, 148, 0.35)';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, 600);
    ctx.lineTo(395, 315);
    ctx.moveTo(1024, 600);
    ctx.lineTo(629, 315);
    ctx.stroke();

    // Soft shaded triangular V-flap drop shadow onto pocket
    const shadowGrad = ctx.createLinearGradient(512, 210, 512, 405);
    shadowGrad.addColorStop(0, 'rgba(170, 130, 114, 0.0)');
    shadowGrad.addColorStop(0.65, 'rgba(170, 130, 114, 0.16)');
    shadowGrad.addColorStop(1, 'rgba(170, 130, 114, 0.0)');
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.moveTo(0, 18);
    ctx.lineTo(482, 342);
    ctx.quadraticCurveTo(512, 362, 542, 342);
    ctx.lineTo(1024, 18);
    ctx.lineTo(1024, 48);
    ctx.lineTo(548, 368);
    ctx.quadraticCurveTo(512, 392, 476, 368);
    ctx.lineTo(0, 48);
    ctx.closePath();
    ctx.fill();

    // Soft vignette border around envelope perimeter
    const edgeGrad = ctx.createRadialGradient(512, 300, 260, 512, 300, 650);
    edgeGrad.addColorStop(0, 'rgba(255,255,255,0)');
    edgeGrad.addColorStop(1, 'rgba(190, 152, 136, 0.12)');
    ctx.fillStyle = edgeGrad;
    ctx.fillRect(0, 0, 1024, 600);
    ctx.restore();

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    return tex;
  },

  // 11b. Seed Paper Envelope Triangular V-Flap Texture
  createSeedPaperFlapTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 420;
    const ctx = canvas.getContext('2d');

    this._drawCottonSeedPaper(ctx, 1024, 420, 202);

    // Subtle light sheen along top fold edge
    const sheen = ctx.createLinearGradient(0, 0, 0, 420);
    sheen.addColorStop(0, 'rgba(255, 252, 248, 0.35)');
    sheen.addColorStop(0.5, 'rgba(255, 250, 245, 0.05)');
    sheen.addColorStop(1, 'rgba(210, 175, 160, 0.12)');
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, 1024, 420);

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    return tex;
  },

  // 12. Wax Seal Texture (Soft-embossed translucent blush pink wax with sculpted bunny medallion)
  createWaxSealTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const cx = 256, cy = 256;

    // Soft rose wax outer base
    const baseGrad = ctx.createRadialGradient(cx - 35, cy - 35, 30, cx, cy, 256);
    baseGrad.addColorStop(0, '#f5afc2');
    baseGrad.addColorStop(0.7, '#e896ac');
    baseGrad.addColorStop(1, '#d87d96');
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, 512, 512);

    // Inner recessed stamp dish (richer warm rose shadow)
    const dishGrad = ctx.createRadialGradient(cx + 15, cy + 15, 20, cx, cy, 178);
    dishGrad.addColorStop(0, '#e38ca3');
    dishGrad.addColorStop(0.75, '#d67c95');
    dishGrad.addColorStop(1, '#c76c86');
    ctx.fillStyle = dishGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 176, 0, Math.PI * 2);
    ctx.fill();

    // Soft inner specular ring where stamp pressed down
    ctx.strokeStyle = 'rgba(255, 224, 234, 0.55)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(cx, cy, 174, Math.PI * 0.9, Math.PI * 1.85);
    ctx.stroke();

    // Softly Embossed Bunny Medallion (Monochromatic wax relief shading, no harsh strokes)
    const drawBunnyShape = (ox, oy, fill) => {
      ctx.fillStyle = fill;
      // Left ear
      ctx.beginPath();
      ctx.ellipse(cx - 28 + ox, cy - 52 + oy, 18, 46, -0.14, 0, Math.PI * 2);
      ctx.fill();
      // Right ear
      ctx.beginPath();
      ctx.ellipse(cx + 28 + ox, cy - 52 + oy, 18, 46, 0.14, 0, Math.PI * 2);
      ctx.fill();
      // Fluffy round bunny cheeks/head
      ctx.beginPath();
      ctx.ellipse(cx + ox, cy + 20 + oy, 62, 50, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    // Subtle cast shadow under raised bunny relief
    drawBunnyShape(5, 6, 'rgba(170, 80, 105, 0.45)');
    // Soft highlight edge on top-left of wax relief
    drawBunnyShape(-2, -2, '#fbd2de');
    // Main smooth wax bunny relief color
    drawBunnyShape(0, 0, '#f3b2c4');

    // Subtle recessed inner ear hollows
    ctx.fillStyle = '#e08ca3';
    ctx.beginPath();
    ctx.ellipse(cx - 27, cy - 50, 8, 26, -0.14, 0, Math.PI * 2);
    ctx.ellipse(cx + 27, cy - 50, 8, 26, 0.14, 0, Math.PI * 2);
    ctx.fill();

    // Delicate recessed eyes & sweet nose
    ctx.fillStyle = '#c46782';
    ctx.beginPath();
    ctx.arc(cx - 21, cy + 12, 5.5, 0, Math.PI * 2);
    ctx.arc(cx + 21, cy + 12, 5.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(cx, cy + 25, 7, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Gentle mouth curve
    ctx.strokeStyle = '#c46782';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(cx, cy + 29);
    ctx.quadraticCurveTo(cx - 8, cy + 38, cx - 14, cy + 33);
    ctx.moveTo(cx, cy + 29);
    ctx.quadraticCurveTo(cx + 8, cy + 38, cx + 14, cy + 33);
    ctx.stroke();

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    return tex;
  },

  // 12b. Wax Seal Bump Map for real 3D physical relief under lights
  createWaxSealBumpTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const cx = 256, cy = 256;

    ctx.fillStyle = '#a0a0a0';
    ctx.fillRect(0, 0, 512, 512);

    // Recessed stamp dish
    ctx.fillStyle = '#484848';
    ctx.beginPath();
    ctx.arc(cx, cy, 176, 0, Math.PI * 2);
    ctx.fill();

    // Raised outer ring lip
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.arc(cx, cy, 190, 0, Math.PI * 2);
    ctx.stroke();

    // Raised bunny relief
    ctx.fillStyle = '#dcdcdc';
    ctx.beginPath();
    ctx.ellipse(cx - 28, cy - 52, 18, 46, -0.14, 0, Math.PI * 2);
    ctx.ellipse(cx + 28, cy - 52, 18, 46, 0.14, 0, Math.PI * 2);
    ctx.ellipse(cx, cy + 20, 62, 50, 0, 0, Math.PI * 2);
    ctx.fill();

    // Recessed bunny eyes/nose
    ctx.fillStyle = '#555555';
    ctx.beginPath();
    ctx.arc(cx - 21, cy + 12, 5.5, 0, Math.PI * 2);
    ctx.arc(cx + 21, cy + 12, 5.5, 0, Math.PI * 2);
    ctx.ellipse(cx, cy + 25, 7, 4.5, 0, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  },

  // 13. 3-Step Ritual Card Texture (Exact Match with Photo 2)
  createRitualCardTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');

    // Sweet pastel pink card base with rounded corners
    ctx.fillStyle = '#feeef3';
    ctx.fillRect(0, 0, 1024, 640);

    // 4 Corner Pink Hearts (♥)
    const drawCornerHeart = (hx, hy) => {
      ctx.save();
      ctx.fillStyle = '#e8618b';
      const hs = 14;
      ctx.beginPath();
      ctx.moveTo(hx, hy + hs * 0.3);
      ctx.bezierCurveTo(hx - hs * 0.6, hy - hs * 0.6, hx - hs * 1.2, hy + hs * 0.2, hx, hy + hs * 1.2);
      ctx.bezierCurveTo(hx + hs * 1.2, hy + hs * 0.2, hx + hs * 0.6, hy - hs * 0.6, hx, hy + hs * 0.3);
      ctx.fill();
      ctx.restore();
    };

    drawCornerHeart(75, 75);
    drawCornerHeart(949, 75);
    drawCornerHeart(75, 565);
    drawCornerHeart(949, 565);

    ctx.textAlign = 'center';

    // Header Title
    ctx.fillStyle = '#2b2326';
    ctx.font = 'bold 50px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '2px'; } catch (e) {}
    ctx.fillText('3-step ritual card', 512, 135);

    // Subtitle
    ctx.fillStyle = '#5a424a';
    ctx.font = 'italic 500 32px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '1px'; } catch (e) {}
    ctx.fillText('for your healing journey', 512, 190);

    // 3 Columns: x1 = 250, x2 = 512, x3 = 774
    const colY = 320;
    ctx.strokeStyle = '#2b2326';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Icon 1: Teacup (x = 250)
    ctx.beginPath();
    ctx.moveTo(215, colY + 30);
    ctx.lineTo(285, colY + 30);
    ctx.bezierCurveTo(285, colY + 80, 215, colY + 80, 215, colY + 30);
    ctx.stroke();
    // Saucer
    ctx.beginPath();
    ctx.moveTo(200, colY + 85);
    ctx.lineTo(300, colY + 85);
    ctx.stroke();
    // Steam
    ctx.beginPath();
    ctx.moveTo(240, colY + 15);
    ctx.quadraticCurveTo(235, colY - 5, 240, colY - 15);
    ctx.moveTo(260, colY + 15);
    ctx.quadraticCurveTo(265, colY - 5, 260, colY - 15);
    ctx.stroke();

    // Icon 2: Candle (x = 512)
    ctx.beginPath();
    ctx.strokeRect(487, colY + 15, 50, 70);
    // Teardrop flame
    ctx.beginPath();
    ctx.moveTo(512, colY + 10);
    ctx.lineTo(512, colY - 5);
    ctx.moveTo(512, colY - 5);
    ctx.bezierCurveTo(502, colY - 20, 506, colY - 35, 512, colY - 45);
    ctx.bezierCurveTo(518, colY - 35, 522, colY - 20, 512, colY - 5);
    ctx.stroke();

    // Icon 3: Potted Plant / Seed Sprout (x = 774)
    // Pot
    ctx.beginPath();
    ctx.moveTo(745, colY + 35);
    ctx.lineTo(803, colY + 35);
    ctx.lineTo(793, colY + 85);
    ctx.lineTo(755, colY + 85);
    ctx.closePath();
    ctx.stroke();
    // Sprout Stem & 2 Leaves
    ctx.beginPath();
    ctx.moveTo(774, colY + 35);
    ctx.lineTo(774, colY - 25);
    ctx.stroke();
    // Leaves
    ctx.beginPath();
    ctx.ellipse(756, colY - 12, 18, 10, -0.4, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(792, colY - 12, 18, 10, 0.4, 0, Math.PI * 2);
    ctx.stroke();

    // Step Text Below Each Icon
    ctx.fillStyle = '#2b2326';
    ctx.font = '600 28px "Plus Jakarta Sans", sans-serif';

    ctx.fillText('1. Sip', 250, 470);
    ctx.fillText('herbal tea', 250, 510);

    ctx.fillText('2. Light', 512, 470);
    ctx.fillText('the candle', 512, 510);

    ctx.fillText('3. Plant', 774, 470);
    ctx.fillText('the seed', 774, 510);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // 14. Mini Photo "For you ♡" Texture (Exact Match with Photo 2: Sunset over purple flower field)
  createCouplePhotoTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 760;
    const ctx = canvas.getContext('2d');

    // Polaroid white card base
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, 600, 760);

    // Subtle polaroid photo drop shadow & border
    ctx.strokeStyle = '#eae5df';
    ctx.lineWidth = 2;
    ctx.strokeRect(30, 30, 540, 700);

    // Photo Area: x=40, y=40, w=520, h=560
    const px = 40, py = 40, pw = 520, ph = 560;

    // Sunset Sky Gradient
    const skyGrad = ctx.createLinearGradient(px, py, px, py + ph);
    skyGrad.addColorStop(0, '#593b70');    // Deep purple twilight
    skyGrad.addColorStop(0.35, '#8c4e7c'); // Violet pink
    skyGrad.addColorStop(0.65, '#de7164'); // Sunset orange coral
    skyGrad.addColorStop(0.85, '#f5b067'); // Golden amber
    skyGrad.addColorStop(1, '#ffdf88');    // Bright warm horizon
    ctx.fillStyle = skyGrad;
    ctx.fillRect(px, py, pw, ph);

    // Glowing Sun
    const sunX = px + pw * 0.72;
    const sunY = py + ph * 0.68;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 5, sunX, sunY, 80);
    sunGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    sunGrad.addColorStop(0.3, 'rgba(255, 245, 190, 0.8)');
    sunGrad.addColorStop(0.7, 'rgba(255, 210, 140, 0.35)');
    sunGrad.addColorStop(1, 'rgba(255, 180, 100, 0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 80, 0, Math.PI * 2);
    ctx.fill();

    // Silhouetted Purple Wildflower Field (Foreground)
    const flowerCols = ['#5e3561', '#7b4074', '#9e528a', '#432646'];
    for (let f = 0; f < 35; f++) {
      const fx = px + Math.random() * pw;
      const fh = 140 + Math.random() * 260;
      const fy = py + ph - fh;

      // Stem
      ctx.strokeStyle = '#382236';
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(fx, py + ph);
      ctx.quadraticCurveTo(fx + (Math.random() - 0.5) * 40, py + ph - fh * 0.5, fx, fy);
      ctx.stroke();

      // Flower Bloom
      ctx.fillStyle = flowerCols[Math.floor(Math.random() * flowerCols.length)];
      const numPetals = 8;
      const flowerR = 14 + Math.random() * 18;
      for (let p = 0; p < numPetals; p++) {
        const ang = (p / numPetals) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(fx + Math.cos(ang) * flowerR * 0.6, fy + Math.sin(ang) * flowerR * 0.6, flowerR * 0.55, flowerR * 0.28, ang, 0, Math.PI * 2);
        ctx.fill();
      }

      // Flower Center
      ctx.fillStyle = '#ffcf52';
      ctx.beginPath();
      ctx.arc(fx, fy, flowerR * 0.25, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dense Grass / Horizon Base
    const grassGrad = ctx.createLinearGradient(px, py + ph - 80, px, py + ph);
    grassGrad.addColorStop(0, 'rgba(45, 24, 45, 0)');
    grassGrad.addColorStop(1, 'rgba(35, 18, 35, 0.95)');
    ctx.fillStyle = grassGrad;
    ctx.fillRect(px, py + ph - 80, pw, 80);

    // Handwritten Script: "For you ♡" on bottom Polaroid margin
    ctx.textAlign = 'center';
    ctx.fillStyle = '#2d2627';
    ctx.font = 'italic 500 52px "Playfair Display", Georgia, cursive, serif';
    try { ctx.letterSpacing = '3px'; } catch (e) {}
    ctx.fillText('For you ♡', 300, 685);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // 15. Greeting Card "THE GIFT" Texture
  createGreetingCardTexture() {
    if (typeof TEXTURE_ASSETS !== 'undefined' && TEXTURE_ASSETS.pink_greeting) {
      const img = new Image();
      const texture = new THREE.Texture(img);
      img.onload = () => { texture.needsUpdate = true; };
      img.src = TEXTURE_ASSETS.pink_greeting;
      return texture;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');

    // Luxurious blush pink background
    const grad = ctx.createLinearGradient(0, 0, 600, 900);
    grad.addColorStop(0, '#feebf1');
    grad.addColorStop(0.5, '#fcdbe5');
    grad.addColorStop(1, '#f8cad6');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 900);

    // Stitched frame border
    ctx.strokeStyle = '#e27796';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 8]);
    ctx.strokeRect(35, 35, 530, 830);
    ctx.setLineDash([]);

    // Elegant inner border
    ctx.strokeStyle = 'rgba(235, 120, 150, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(50, 50, 500, 800);

    // Header "THE GIFT"
    ctx.textAlign = 'center';
    ctx.fillStyle = '#b83b60';
    ctx.font = 'bold 54px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '6px'; } catch (e) {}
    ctx.fillText('THE GIFT', 300, 220);

    // Subtitle
    ctx.fillStyle = '#8f5567';
    ctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
    try { ctx.letterSpacing = '3px'; } catch (e) {}
    ctx.fillText('SPECIAL EDITION', 300, 270);

    // Central Heart
    const hx = 300, hy = 450, hs = 55;
    ctx.fillStyle = '#e8618b';
    ctx.beginPath();
    ctx.moveTo(hx, hy + hs * 0.3);
    ctx.bezierCurveTo(hx - hs * 0.6, hy - hs * 0.6, hx - hs * 1.2, hy + hs * 0.2, hx, hy + hs * 1.2);
    ctx.bezierCurveTo(hx + hs * 1.2, hy + hs * 0.2, hx + hs * 0.6, hy - hs * 0.6, hx, hy + hs * 0.3);
    ctx.fill();

    // Message
    ctx.fillStyle = '#523a43';
    ctx.font = 'italic 500 30px "Playfair Display", Georgia, serif';
    try { ctx.letterSpacing = '1px'; } catch (e) {}
    ctx.fillText('A Little Hug,', 300, 620);
    ctx.fillText('A Meaningful Feeling ♡', 300, 670);

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // Soft Golden Flame Aura Texture for Candle & Diffuser
  createFlameGlowTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(64, 64, 2, 64, 64, 62);
    grad.addColorStop(0, 'rgba(255, 245, 210, 0.95)');
    grad.addColorStop(0.25, 'rgba(255, 195, 100, 0.65)');
    grad.addColorStop(0.6, 'rgba(255, 140, 60, 0.22)');
    grad.addColorStop(1, 'rgba(255, 120, 40, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(canvas);
  },

  // Plush Bunny Fleece Color Texture (Visible soft fuzzy fur micro-strands)
  createBunnyFurTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    const isPink = (edition === 'pink');

    ctx.fillStyle = isPink ? '#fbf2e6' : '#efe3d1';
    ctx.fillRect(0, 0, 512, 512);

    let s = 77;
    const rand = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };

    // Draw soft fleece cloud mottling
    for (let i = 0; i < 420; i++) {
      const x = rand() * 512;
      const y = rand() * 512;
      const r = 8 + rand() * 14;
      ctx.fillStyle = rand() > 0.45 ? 'rgba(255, 252, 247, 0.22)' : 'rgba(218, 194, 168, 0.16)';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw thousands of fine curved plush fur wisps (seamless wrap via tiling edges)
    ctx.lineCap = 'round';
    for (let i = 0; i < 4200; i++) {
      const x = rand() * 512;
      const y = rand() * 512;
      const len = 4 + rand() * 7;
      const ang = (rand() - 0.5) * 1.4 + Math.PI * 0.5;
      const col = rand() > 0.45 ? 'rgba(255, 253, 249, 0.55)' : 'rgba(205, 178, 152, 0.25)';
      ctx.strokeStyle = col;
      ctx.lineWidth = 1.0 + rand() * 0.8;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x + Math.cos(ang + 0.3) * len * 0.5, y + Math.sin(ang + 0.3) * len * 0.5, x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    return texture;
  },

  // Alpha-Cutout Shell Fur Texture (Gives 3D Bunny real fuzzy silhouette hairs!)
  createFurShellTexture(edition = 'pink') {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 256, 256);

    const isPink = (edition === 'pink');
    let s = 313;
    const rand = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };

    for (let i = 0; i < 2400; i++) {
      const x = rand() * 256;
      const y = rand() * 256;
      const r = 1.1 + rand() * 1.7;
      const tone = rand();
      ctx.fillStyle = isPink
        ? (tone > 0.35 ? '#fffbf5' : '#f4e6d6')
        : (tone > 0.35 ? '#f7efe2' : '#e4d5bf');
      ctx.beginPath();
      ctx.ellipse(x, y, r * 0.75, r * 1.25, (rand() - 0.5) * 1.2, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(7, 7);
    return texture;
  },

  createBunnyBumpTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#787878';
    ctx.fillRect(0, 0, 512, 512);

    let s = 91;
    const rand = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };

    for (let i = 0; i < 5500; i++) {
      const x = rand() * 512;
      const y = rand() * 512;
      const len = 4 + rand() * 6;
      const ang = (rand() - 0.5) * 1.6 + Math.PI * 0.5;
      const v = rand() > 0.4 ? Math.round(170 + rand() * 75) : Math.round(55 + rand() * 45);
      ctx.strokeStyle = `rgb(${v},${v},${v})`;
      ctx.lineWidth = 1.4 + rand() * 1.2;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(ang) * len, y + Math.sin(ang) * len);
      ctx.stroke();
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    return texture;
  }
};
