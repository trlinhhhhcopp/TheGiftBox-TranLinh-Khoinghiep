/**
 * models.js - 3D Models Builder for Gift Box "Giấy Gieo Hạt"
 * Fully supports:
 * - Pink Edition (Photo 3: Cute pink box, sleeping bunny lid art, bow tie on bunny, chamomile tea, lavender candle)
 * - White/Cream Edition (Photo 1: Minimalist cream box, linen bunny, Mama Blend candle, rosebuds tea)
 */

const ProductData = {
  bunny: {
    id: 'bunny',
    name: 'Chú Thỏ Bông Thủ Công "The Gift"',
    subtitle: 'Plush Collectible Bunny · Đeo nơ lụa satin hồng & tag tròn thương hiệu',
    tag: 'Thủ công 100% · Lông Mềm Cao Cấp',
    icon: '🐰',
    color: '#f8d2dc',
    desc: 'Chú thỏ nhồi bông với chất liệu lông tơ siêu mềm mịn màu kem ngà. Đôi mắt đen láy lấp lánh, mũi thêu hồng xinh xắn, đôi tai dài rũ mềm mại hai bên. Điểm nhấn là chiếc nơ lụa satin hồng phấn buộc điệu đà quanh cổ kèm huy hiệu tròn "THE GIFT".',
    specs: [
      { label: 'Chất liệu', value: 'Lông tơ siêu mềm Microfiber & bông gòn kháng khuẩn 100%' },
      { label: 'Kích thước', value: 'Cao 15cm x Rộng 9cm' },
      { label: 'Phụ kiện', value: 'Nơ lụa satin hồng cao cấp & tag tròn The Gift dập nổi' },
      { label: 'Ý nghĩa', value: 'Sự vỗ về dịu dàng, gửi trọn cái ôm ấm áp và bình yên' }
    ]
  },
  candle: {
    id: 'candle',
    name: 'Nến Thơm Lavender "The Gift"',
    subtitle: 'Aroma Soy Candle · Sáp đậu nành thiên nhiên màu trắng đục hương hoa Lavender',
    tag: 'Sáp Đậu Nành Trắng Đục · Hương Lavender',
    icon: '🕯️',
    color: '#faf8f3',
    desc: 'Hũ nến thủy tinh nắp gỗ tự nhiên chứa 100% sáp đậu nành màu trắng đục thuần khiết hương hoa oải hương (Lavender) dịu ngọt kèm nhãn THE GIFT Lavender ♥. Tỏa hương ấm áp, giúp xoa dịu tâm trí và mang lại giấc ngủ an lành.',
    specs: [
      { label: 'Vỏ nến', value: 'Hũ thủy tinh trong suốt nắp gỗ tiện tự nhiên' },
      { label: 'Sáp & Bấc', value: '100% sáp đậu nành thiên nhiên màu trắng đục, bấc cotton sạch' },
      { label: 'Hương thơm', value: 'Hoa oải hương Lavender tinh khiết dịu nhẹ thư thái' },
      { label: 'Thời gian cháy', value: 'Khoảng 25 - 30 giờ cháy sạch tỏa hương đều' }
    ]
  },
  teajar: {
    id: 'teajar',
    name: 'Lọ Trà Cúc Chamomile "The Gift"',
    subtitle: 'Herbal Tea Jar · Trà hoa cúc La Mã sấy khô nguyên bông & nắp gỗ kín khí',
    tag: 'Trà Cúc La Mã Sạch · Nắp Gỗ Kín Khí',
    icon: '🍵',
    color: '#dfa25b',
    desc: 'Lọ thủy tinh trong suốt nắp gỗ kín khí giữ trọn vị hoa cúc La Mã vàng (Chamomile Tea) sấy khô nguyên bông thơm ngát, dán nhãn THE GIFT Chamomile Tea ♥. Thức uống thanh lành giúp thư giãn sâu và nuôi dưỡng cảm xúc tích cực.',
    specs: [
      { label: 'Chất liệu lọ', value: 'Thủy tinh borosilicate trong suốt, nắp gỗ tiện vân tự nhiên' },
      { label: 'Loại trà', value: 'Hoa cúc La Mã vàng nguyên bông sấy lạnh giữ trọn hương' },
      { label: 'Công dụng', value: 'Thanh nhiệt, an thần, hỗ trợ giấc ngủ ngon và đẹp da' },
      { label: 'Cách dùng', value: 'Hãm 3-5g hoa với nước sôi 90°C trong 5 phút' }
    ]
  },
  diffuser: {
    id: 'diffuser',
    name: 'Bếp Gốm Xông Tinh Dầu "The Gift"',
    subtitle: 'Handmade Ceramic Aroma Diffuser · Triện khắc The Gift & men ngà thủ công',
    tag: 'Gốm Sứ Thủ Công · Triện Khắc The Gift',
    icon: '🏺',
    color: '#e8e2d5',
    desc: 'Được chế tác thủ công với những đường cong mềm mại uốn lượn, lớp men gốm màu ngà thanh lịch dập triện tròn THE GIFT ở góc chân. Khoang dưới đặt nến tealight làm ấm đĩa chứa tinh dầu phía trên, khuyếch tán hương thơm ấm áp.',
    specs: [
      { label: 'Chất liệu', value: 'Gốm sứ cao cấp tráng men ngà bán bóng thủ công' },
      { label: 'Thiết kế', value: 'Vòm đón nến tealight, lỗ thông khí phía trên' },
      { label: 'Dấu ấn', value: 'Triện tròn "THE GIFT" khắc dập nổi tinh tế' },
      { label: 'Công năng', value: 'Xông tinh dầu thư giãn, trang trí bàn trà hoặc phòng ngủ' }
    ]
  },
  letter: {
    id: 'letter',
    name: 'Thư Giấy Gieo Hạt & Dấu Sáp Con Thỏ',
    subtitle: 'Seed Paper Letter · Kèm nhành hoa baby khô & dấu sáp hồng dập thỏ',
    tag: 'Giấy Tái Sinh Nở Hoa · Con Dấu Sáp Con Thỏ',
    icon: '💌',
    color: '#e29ab0',
    desc: 'Phong thư làm từ giấy gieo hạt ép sợi thực vật và hạt hoa dại. Điểm xuyết nhành hoa baby khô tinh khôi, niêm phong bằng con dấu sáp hồng dập nổi hình chú thỏ cưng. Khi xé nhỏ gieo xuống đất ẩm sẽ nảy mầm hoa tươi.',
    specs: [
      { label: 'Chất liệu giấy', value: 'Giấy bông mỹ thuật tái chế ép hạt giống hoa dại' },
      { label: 'Niêm phong', value: 'Dấu sáp hồng dập nổi đầu thỏ kèm nhành hoa baby khô' },
      { label: 'Tính năng', value: 'Tự phân hủy sinh học và nảy mầm sau 7 - 10 ngày tưới' },
      { label: 'Thông điệp', value: '"Gieo mầm hy vọng - Nuôi dưỡng tình yêu thương"' }
    ]
  },
  photo: {
    id: 'photo',
    name: 'Khung Ảnh Hoàng Hôn "For you ♡"',
    subtitle: 'Mini Personalized Photo · Ảnh hoàng hôn trên cánh đồng hoa tím & lời chúc "For you ♡"',
    tag: 'Ảnh Polaroid · "For you ♡"',
    icon: '🖼️',
    color: '#e59fb0',
    desc: 'Tấm ảnh kỷ niệm mini phong cách Polaroid viền trắng trang nhã, in ảnh hoàng hôn rực rỡ trên cánh đồng hoa tím cùng dòng chữ viết tay "For you ♡". Dải ruy băng lụa satin màu hồng phấn tro mềm mại vắt ngang đầy chất thơ.',
    specs: [
      { label: 'Khung ảnh', value: 'Khổ mini polaroid, viền trắng mỹ thuật' },
      { label: 'Nội dung ảnh', value: 'Hoàng hôn rực rỡ trên cánh đồng hoa cúc tím' },
      { label: 'Lời đề tặng', value: '"For you ♡" viết tay tinh tế' },
      { label: 'Ruy băng', value: 'Lụa satin cao cấp màu hồng tro (Dusty Pink)' }
    ]
  },
  card: {
    id: 'card',
    name: 'Thẻ Liệu Trình 3 Bước "3-Step Ritual Card"',
    subtitle: 'For Your Healing Journey · 1. Sip herbal tea - 2. Light candle - 3. Plant seed',
    tag: 'Typography Sang Trọng · Liệu Trình Tự Chữa Lành',
    icon: '📜',
    color: '#e0abbc',
    desc: 'Tấm thiệp hồng pastel in typography hướng dẫn 3 bước chăm sóc bản thân: 1. Sip herbal tea (Thưởng trà thảo mộc) - 2. Light the candle (Thắp ngọn nến thơm) - 3. Plant the seed (Gieo mầm nở hoa), mang lại sự cân bằng trọn vẹn trong tâm hồn.',
    specs: [
      { label: 'Chất liệu', value: 'Giấy mỹ thuật Cotton Cardstock màu hồng phấn' },
      { label: 'Nội dung', value: 'Liệu trình 3 bước thư giãn & phục hồi năng lượng' },
      { label: 'Họa tiết', value: 'Biểu tượng tách trà, ngọn nến, chậu cây & 4 góc trái tim hồng' },
      { label: 'Kích thước', value: '14cm x 9cm' }
    ]
  },
  greeting: {
    id: 'greeting',
    name: 'Thiệp Đề Tặng "The Gift"',
    subtitle: 'A Little Hug, A Meaningful Feeling · Lời chúc ngọt ngào trao tay',
    tag: 'Thiệp Chúc Cao Cấp · Đi Kèm Hộp Quà',
    icon: '🌸',
    color: '#e58da5',
    desc: 'Tấm thiệp bìa nằm màu hồng phấn sang trọng, in thông điệp ấm áp "A Little Hug, A Meaningful Feeling" cùng biểu tượng trái tim đỏ, là lời chúc yêu thương dành riêng cho người nhận.',
    specs: [
      { label: 'Chất liệu', value: 'Giấy mỹ thuật nhập khẩu màu hồng pastel' },
      { label: 'Kích thước', value: '10cm x 15cm (dáng nằm phẳng)' },
      { label: 'Thông điệp', value: '"A Little Hug, A Meaningful Feeling ♡"' }
    ]
  },
  box: {
    id: 'box',
    name: 'Vỏ Hộp Quà Pastel "The Gift"',
    subtitle: 'Cute Pink Gift Box · Hộp gập nam châm màu hồng ngọt ngào',
    tag: 'Thiết Kế Độc Quyền · Khóa Hít Nam Châm',
    icon: '🎁',
    color: '#f7cad7',
    desc: 'Hộp quà cao cấp với vỏ màu hồng pastel dịu dàng, nắp hộp dập họa tiết trái tim doodle, chú thỏ mascot say ngủ đáng yêu cùng chữ "THE GIFT". Nắp gập cạnh vát gắn nam châm hít sang trọng.',
    specs: [
      { label: 'Chất liệu bìa', value: 'Carton lạnh cứng cáp bọc giấy mỹ thuật cao cấp' },
      { label: 'Kích thước', value: 'Dài 28cm x Rộng 22cm x Cao 6cm' },
      { label: 'Cơ chế mở', value: 'Nắp gập nam châm hít với mép vát cạnh tinh xảo' },
      { label: 'Bên trong', value: 'Nắp trong in họa tiết chú thỏ ngủ + cà rốt + khay định hình' }
    ]
  }
};

class GiftBoxScene {
  constructor(scene) {
    this.scene = scene;
    this.rootGroup = new THREE.Group();
    this.scene.add(this.rootGroup);

    this.currentEdition = 'pink';

    // Interactive product groups
    this.products = {};
    this.interactiveObjects = [];

    // Mesh references for dynamic edition switching
    this.boxMeshes = [];
    this.lidMesh = null;
    this.flapMesh = null;
    this.candleLabelMesh = null;
    this.candleWaxMesh = null;
    this.teaMesh = null;
    this.letterMesh = null;
    this.sealMesh = null;
    this.cardMesh = null;
    this.greetingCardGroup = null;
    this.bunnyMesh = null;
    this.bunnyBowGroup = null;
    this.bunnyHeadMat = null;

    // Box animation
    this.boxLidGroup = null;
    this.boxFlapGroup = null;
    this.isBoxOpen = true;
    this.lidAngle = 1.85;
    this.flapAngle = 0.2;

    // Exploded view
    this.isExploded = false;
    this.explodeFactor = 0;

    // Lights
    this.candleLight = null;
    this.diffuserLight = null;

    this.buildScene();
  }

  buildScene() {
    this.insideGroup = new THREE.Group();
    this.insideGroup.name = 'insideItems';
    this.rootGroup.add(this.insideGroup);

    this.buildBoxAndTray();
    this.buildBunnyDoll();
    this.buildScentedCandle();
    this.buildTeaJar();
    this.buildCeramicDiffuser();
    this.buildPhotoAndRibbon();
    this.buildSeedPaperLetter();
    this.buildRitualCard();
    this.buildGreetingCard();
    this.buildStudioPodium();
  }

  // 1. Box and Molded Insert Tray
  buildBoxAndTray() {
    const boxGroup = new THREE.Group();
    boxGroup.name = 'box';
    this.products['box'] = boxGroup;

    const bw = 28, bd = 22, bh = 6.6, wall = 0.45;

    this.boxOuterMat = new THREE.MeshStandardMaterial({
      color: (this.currentEdition === 'pink') ? 0xeb5e88 : 0xf7f3ea,
      roughness: 0.48,
      metalness: 0.08
    });

    this.boxInnerMat = new THREE.MeshStandardMaterial({
      color: (this.currentEdition === 'pink') ? 0xf7b6cc : 0xfefcf8,
      roughness: 0.55,
      metalness: 0.0
    });

    const trayMat = new THREE.MeshStandardMaterial({
      color: 0xf6f0e6,
      roughness: 0.6,
      metalness: 0.02
    });

    const baseGroup = new THREE.Group();

    // Box Bottom
    const bottomGeo = new THREE.BoxGeometry(bw, wall, bd);
    const bottomMesh = new THREE.Mesh(bottomGeo, this.boxOuterMat);
    bottomMesh.position.y = -wall / 2;
    bottomMesh.receiveShadow = true;
    baseGroup.add(bottomMesh);
    this.boxMeshes.push(bottomMesh);

    // Front Wall
    const fWallGeo = new THREE.BoxGeometry(bw, bh, wall);
    const fWall = new THREE.Mesh(fWallGeo, this.boxOuterMat);
    fWall.position.set(0, bh / 2, bd / 2 - wall / 2);
    fWall.castShadow = true;
    baseGroup.add(fWall);
    this.boxMeshes.push(fWall);

    // Back Wall
    const bWall = new THREE.Mesh(fWallGeo, this.boxOuterMat);
    bWall.position.set(0, bh / 2, -bd / 2 + wall / 2);
    bWall.castShadow = true;
    baseGroup.add(bWall);
    this.boxMeshes.push(bWall);

    // Left Wall
    const sideWallGeo = new THREE.BoxGeometry(wall, bh, bd - wall * 2);
    const lWall = new THREE.Mesh(sideWallGeo, this.boxOuterMat);
    lWall.position.set(-bw / 2 + wall / 2, bh / 2, 0);
    lWall.castShadow = true;
    baseGroup.add(lWall);
    this.boxMeshes.push(lWall);

    // Right Wall
    const rWall = new THREE.Mesh(sideWallGeo, this.boxOuterMat);
    rWall.position.set(bw / 2 - wall / 2, bh / 2, 0);
    rWall.castShadow = true;
    baseGroup.add(rWall);
    this.boxMeshes.push(rWall);

    boxGroup.add(baseGroup);

    // Molded Insert Tray (Top surface at Y = 1.80)
    const trayGroup = new THREE.Group();
    const tw = bw - wall * 2 - 0.2;
    const td = bd - wall * 2 - 0.2;
    const th = 1.8;

    const trayTop = new THREE.Mesh(new THREE.BoxGeometry(tw, th, td), trayMat);
    trayTop.position.set(0, th / 2, 0);
    trayTop.receiveShadow = true;
    trayGroup.add(trayTop);

    // Soft recessed cavity wells (visual compartment indentations)
    const cavityMat = new THREE.MeshStandardMaterial({ color: 0xede2d2, roughness: 0.8 });
    const addCavity = (x, z, w, d) => {
      const cav = new THREE.Mesh(new THREE.BoxGeometry(w, 0.04, d), cavityMat);
      cav.position.set(x, th + 0.02, z);
      cav.receiveShadow = true;
      trayGroup.add(cav);
    };

    addCavity(-7.2, -4.5, 5.2, 5.2);
    addCavity(-7.2, 0.8, 5.2, 5.5);
    addCavity(0, -0.2, 9.2, 14.5);
    addCavity(7.2, -4.5, 5.2, 5.2);
    addCavity(7.2, 0.8, 5.5, 6.2);
    addCavity(-5.2, 6.2, 9.8, 5.4);
    addCavity(5.2, 6.2, 9.8, 5.4);

    // Draped tissue paper wings on left & right
    const paperMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.85,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    });

    const paperGeoLeft = new THREE.PlaneGeometry(3.5, td - 1, 8, 4);
    const posL = paperGeoLeft.attributes.position;
    for (let i = 0; i < posL.count; i++) {
      posL.setZ(i, Math.sin(posL.getX(i) * 1.5) * 0.4);
    }
    paperGeoLeft.computeVertexNormals();

    const paperLeft = new THREE.Mesh(paperGeoLeft, paperMat);
    paperLeft.rotation.x = -Math.PI / 2;
    paperLeft.rotation.z = 0.12;
    paperLeft.position.set(-tw / 2 + 1.2, th + 0.08, 0);
    trayGroup.add(paperLeft);

    const paperRight = paperLeft.clone();
    paperRight.rotation.z = -0.12;
    paperRight.position.set(tw / 2 - 1.2, th + 0.08, 0);
    trayGroup.add(paperRight);

    this.insideGroup.add(trayGroup);
    this.trayGroup = trayGroup;

    // Hinged Lid (Hinge at Y = bh = 6.6)
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, bh, -bd / 2);

    const lidCoverTex = TextureManager.createBoxCoverTexture(this.currentEdition);
    const lidInsideTex = TextureManager.createPinkLidTexture();

    const lidGeo = new THREE.BoxGeometry(bw + 0.4, wall, bd + 0.2);
    const lidMaterials = [
      this.boxOuterMat,
      this.boxOuterMat,
      new THREE.MeshStandardMaterial({ map: lidCoverTex, roughness: 0.5 }),
      new THREE.MeshStandardMaterial({ map: lidInsideTex, roughness: 0.6 }),
      this.boxOuterMat,
      this.boxOuterMat
    ];

    const lidMesh = new THREE.Mesh(lidGeo, lidMaterials);
    lidMesh.position.set(0, wall / 2, bd / 2);
    lidMesh.castShadow = true;
    lidMesh.receiveShadow = true;
    lidMesh.userData.isLid = true;
    lidGroup.add(lidMesh);
    this.lidMesh = lidMesh;

    // Front Flap
    const flapGroup = new THREE.Group();
    flapGroup.position.set(0, 0, bd);

    const flapTex = TextureManager.createBoxFlapTexture(this.currentEdition);
    const flapMat = new THREE.MeshStandardMaterial({ map: flapTex, roughness: 0.55 });
    const flapMesh = new THREE.Mesh(new THREE.BoxGeometry(bw + 0.4, 3.2, wall), flapMat);
    flapMesh.position.set(0, -1.6, wall / 2);
    flapMesh.castShadow = true;
    flapMesh.userData.isLid = true;
    flapGroup.add(flapMesh);
    this.flapMesh = flapMesh;

    lidGroup.add(flapGroup);

    lidGroup.rotation.x = -this.lidAngle;
    flapGroup.rotation.x = this.flapAngle;
    lidGroup.userData.isLid = true;

    boxGroup.add(lidGroup);
    this.boxLidGroup = lidGroup;
    this.boxFlapGroup = flapGroup;

    boxGroup.userData = {
      isProduct: true,
      productId: 'box',
      productInfo: ProductData.box
    };
    this.interactiveObjects.push(boxGroup);
    this.rootGroup.add(boxGroup);
  }

  // 2. Chú Thỏ Bông Sống Động, Mặt Mũi Rõ Nét & Đáng Yêu
  buildBunnyDoll() {
    const bunnyGroup = new THREE.Group();
    bunnyGroup.name = 'bunny';
    this.products['bunny'] = bunnyGroup;

    const bunnyBump = TextureManager.createBunnyBumpTexture();
    const isPink = (this.currentEdition === 'pink');
    const furColor = isPink ? 0xfdf9f4 : 0xeee5d5;

    const plushMat = new THREE.MeshStandardMaterial({
      color: furColor,
      roughness: 0.76,
      metalness: 0.03,
      bumpMap: bunnyBump,
      bumpScale: 0.02
    });
    this.bunnyPlushMat = plushMat;

    // Body
    const bodyGeo = new THREE.SphereGeometry(2.35, 36, 28);
    bodyGeo.scale(1.0, 1.35, 0.88);
    const body = new THREE.Mesh(bodyGeo, plushMat);
    body.position.set(0, 0.6, 0.45);
    body.castShadow = true;
    bunnyGroup.add(body);

    // Head
    const headGeo = new THREE.SphereGeometry(1.95, 36, 28);
    headGeo.scale(1.08, 0.98, 0.96);
    const head = new THREE.Mesh(headGeo, plushMat);
    head.position.set(0, 2.75, 0.35);
    head.castShadow = true;
    bunnyGroup.add(head);

    // Muzzle / Snout (Plush chubby muzzle)
    const muzzleGeo = new THREE.SphereGeometry(0.78, 32, 20);
    muzzleGeo.scale(1.18, 0.76, 0.62);
    const muzzle = new THREE.Mesh(muzzleGeo, plushMat);
    muzzle.position.set(0, 2.44, 1.70);
    muzzle.castShadow = true;
    bunnyGroup.add(muzzle);

    // 3D Sparkling Black Obsidian Button Bead Eyes (Clearly visible & adorable)
    const eyeGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0d,
      roughness: 0.05,
      metalness: 0.15
    });
    const glintMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const lidMat = new THREE.MeshStandardMaterial({ color: 0x482830, roughness: 0.6 });

    const createBeadEye = (x, y, z, isRight = false) => {
      const eyeGroup = new THREE.Group();

      // Main bead eye sphere
      const eyeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 24, 24), eyeGlassMat);
      eyeMesh.castShadow = true;
      eyeGroup.add(eyeMesh);

      // Specular glint 1 (Primary large catchlight)
      const glint1 = new THREE.Mesh(new THREE.SphereGeometry(0.08, 12, 12), glintMat);
      glint1.position.set(0.08, 0.085, 0.23);
      eyeGroup.add(glint1);

      // Specular glint 2 (Secondary smaller catchlight)
      const glint2 = new THREE.Mesh(new THREE.SphereGeometry(0.042, 10, 10), glintMat);
      glint2.position.set(-0.075, -0.065, 0.23);
      eyeGroup.add(glint2);

      // Delicate curved eyelid / lash arch
      const s = isRight ? 1 : -1;
      const lidCurve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(-0.22, 0.18, 0.16),
        new THREE.Vector3(0, 0.28, 0.18),
        new THREE.Vector3(0.22, 0.18, 0.16)
      );
      const lidMesh = new THREE.Mesh(new THREE.TubeGeometry(lidCurve, 12, 0.032, 6, false), lidMat);
      eyeGroup.add(lidMesh);

      eyeGroup.position.set(x, y, z);
      eyeGroup.rotation.y = isRight ? 0.2 : -0.2;
      return eyeGroup;
    };

    bunnyGroup.add(createBeadEye(-0.72, 2.78, 2.15, false));
    bunnyGroup.add(createBeadEye(0.72, 2.78, 2.15, true));

    // 3D Soft Pink Embroidered Plush Nose (Heart / inverted rounded triangle)
    const noseShape = new THREE.Shape();
    noseShape.moveTo(0, -0.15);
    noseShape.bezierCurveTo(-0.16, -0.15, -0.24, 0.05, -0.18, 0.16);
    noseShape.bezierCurveTo(-0.09, 0.22, 0, 0.12, 0, 0.08);
    noseShape.bezierCurveTo(0, 0.12, 0.09, 0.22, 0.18, 0.16);
    noseShape.bezierCurveTo(0.24, 0.05, 0.16, -0.15, 0, -0.15);

    const noseGeo = new THREE.ExtrudeGeometry(noseShape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.035,
      bevelThickness: 0.035
    });
    const noseMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xeb7b95 : 0x8a6e5f,
      roughness: 0.45,
      metalness: 0.02
    });
    const noseMesh = new THREE.Mesh(noseGeo, noseMat);
    noseMesh.position.set(0, 2.58, 2.18);
    noseMesh.rotation.x = -0.05;
    bunnyGroup.add(noseMesh);
    this.bunnyNoseMesh = noseMesh;

    // 3D Embroidered Philtrum & Smiling Lips (:3 Smile)
    const mouthMat = new THREE.MeshStandardMaterial({ color: 0x783244, roughness: 0.5 });
    this.bunnyMouthMat = mouthMat;

    // Vertical Philtrum Seam
    const philtrum = new THREE.Mesh(
      new THREE.CylinderGeometry(0.034, 0.034, 0.16, 8),
      mouthMat
    );
    philtrum.position.set(0, 2.37, 2.20);
    bunnyGroup.add(philtrum);

    // Left Smiling Lip Curve
    const smileCurveL = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 2.29, 2.19),
      new THREE.Vector3(-0.22, 2.18, 2.16),
      new THREE.Vector3(-0.42, 2.32, 2.08)
    );
    bunnyGroup.add(new THREE.Mesh(new THREE.TubeGeometry(smileCurveL, 16, 0.034, 6, false), mouthMat));

    // Right Smiling Lip Curve
    const smileCurveR = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 2.29, 2.19),
      new THREE.Vector3(0.22, 2.18, 2.16),
      new THREE.Vector3(0.42, 2.32, 2.08)
    );
    bunnyGroup.add(new THREE.Mesh(new THREE.TubeGeometry(smileCurveR, 16, 0.034, 6, false), mouthMat));

    // Rosy Blush Cheeks
    const cheekCanvas = document.createElement('canvas');
    cheekCanvas.width = 128;
    cheekCanvas.height = 128;
    const cctx = cheekCanvas.getContext('2d');
    const grad = cctx.createRadialGradient(64, 64, 5, 64, 64, 60);
    grad.addColorStop(0, isPink ? 'rgba(242, 132, 158, 0.75)' : 'rgba(205, 150, 135, 0.55)');
    grad.addColorStop(0.5, isPink ? 'rgba(242, 132, 158, 0.4)' : 'rgba(205, 150, 135, 0.25)');
    grad.addColorStop(1, 'rgba(242, 132, 158, 0)');
    cctx.fillStyle = grad;
    cctx.fillRect(0, 0, 128, 128);
    const cheekTex = new THREE.CanvasTexture(cheekCanvas);
    const cheekMat = new THREE.MeshBasicMaterial({
      map: cheekTex,
      transparent: true,
      depthWrite: false
    });
    const cheekGeo = new THREE.PlaneGeometry(0.85, 0.85);

    const cheekL = new THREE.Mesh(cheekGeo, cheekMat);
    cheekL.position.set(-1.18, 2.42, 1.95);
    cheekL.rotation.y = -0.55;
    bunnyGroup.add(cheekL);

    const cheekR = new THREE.Mesh(cheekGeo, cheekMat);
    cheekR.position.set(1.18, 2.42, 1.95);
    cheekR.rotation.y = 0.55;
    bunnyGroup.add(cheekR);

    // Floppy Drooping Ears
    const innerEarMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xfadfe7 : 0xe5dbc9,
      roughness: 0.85
    });
    this.innerEarMat = innerEarMat;

    const createEar = (isRight = false) => {
      const earGroup = new THREE.Group();
      const s = isRight ? 1 : -1;
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(s * 0.55, 3.45, 0.15),
        new THREE.Vector3(s * 1.65, 3.55, -0.05),
        new THREE.Vector3(s * 2.80, 2.40, 0.15),
        new THREE.Vector3(s * 3.25, 0.85, 0.25),
        new THREE.Vector3(s * 3.00, -0.65, 0.35)
      ]);

      const earGeo = new THREE.TubeGeometry(curve, 36, 0.68, 16, false);
      earGeo.scale(1.0, 1.0, 0.32);
      const earMesh = new THREE.Mesh(earGeo, plushMat);
      earMesh.castShadow = true;
      earGroup.add(earMesh);

      const innerCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(s * 1.55, 3.25, 0.10),
        new THREE.Vector3(s * 2.65, 2.25, 0.20),
        new THREE.Vector3(s * 3.05, 0.85, 0.30)
      ]);
      const innerGeo = new THREE.TubeGeometry(innerCurve, 24, 0.36, 12, false);
      innerGeo.scale(1.0, 1.0, 0.24);
      const innerMesh = new THREE.Mesh(innerGeo, innerEarMat);
      earGroup.add(innerMesh);

      return earGroup;
    };

    bunnyGroup.add(createEar(false));
    bunnyGroup.add(createEar(true));

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.52, 0.46, 1.6, 16);
    armGeo.scale(1.0, 1.0, 0.72);

    const armL = new THREE.Mesh(armGeo, plushMat);
    armL.position.set(-1.55, 1.0, 0.9);
    armL.rotation.set(0.35, 0.2, 0.62);
    armL.castShadow = true;
    bunnyGroup.add(armL);

    const armR = new THREE.Mesh(armGeo, plushMat);
    armR.position.set(1.55, 1.0, 0.9);
    armR.rotation.set(0.35, -0.2, -0.62);
    armR.castShadow = true;
    bunnyGroup.add(armR);

    // Seated Feet & Paws
    const pawGeo = new THREE.SphereGeometry(0.88, 24, 16);
    pawGeo.scale(0.82, 0.68, 1.25);

    const pawL = new THREE.Mesh(pawGeo, plushMat);
    pawL.position.set(-1.1, -0.55, 1.5);
    pawL.rotation.x = -0.15;
    pawL.castShadow = true;
    bunnyGroup.add(pawL);

    const pawR = new THREE.Mesh(pawGeo, plushMat);
    pawR.position.set(1.1, -0.55, 1.5);
    pawR.rotation.x = -0.15;
    pawR.castShadow = true;
    bunnyGroup.add(pawR);

    // Paw pad soles
    const padMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xf8dbe3 : 0xdfd3bf,
      roughness: 0.8
    });
    this.bunnyPadMat = padMat;

    const padGeo = new THREE.CircleGeometry(0.42, 16);
    padGeo.scale(0.85, 1.2);

    const padL = new THREE.Mesh(padGeo, padMat);
    padL.position.set(-1.1, -0.54, 2.25);
    padL.rotation.x = -0.15;
    bunnyGroup.add(padL);

    const padR = new THREE.Mesh(padGeo, padMat);
    padR.position.set(1.1, -0.54, 2.25);
    padR.rotation.x = -0.15;
    bunnyGroup.add(padR);

    // Pink Satin Ribbon Bow & Medal Tag
    const bowGroup = new THREE.Group();
    const ribbonPinkMat = new THREE.MeshStandardMaterial({
      color: 0xec8fa6,
      roughness: 0.28,
      metalness: 0.16
    });

    const knotGeo = new THREE.SphereGeometry(0.28, 16, 12);
    knotGeo.scale(1.1, 0.9, 0.8);
    const knot = new THREE.Mesh(knotGeo, ribbonPinkMat);
    knot.position.set(0, 1.68, 1.86);
    bowGroup.add(knot);

    const loopGeoL = new THREE.TorusGeometry(0.44, 0.14, 14, 24, Math.PI * 1.55);
    const loopL = new THREE.Mesh(loopGeoL, ribbonPinkMat);
    loopL.position.set(-0.48, 1.76, 1.82);
    loopL.rotation.set(0.2, 0.4, 0.78);
    bowGroup.add(loopL);

    const loopR = new THREE.Mesh(loopGeoL, ribbonPinkMat);
    loopR.position.set(0.48, 1.76, 1.82);
    loopR.rotation.set(0.2, -0.4, -0.78);
    bowGroup.add(loopR);

    const tailGeo = new THREE.CylinderGeometry(0.12, 0.18, 1.15, 12);
    tailGeo.scale(1.0, 1.0, 0.3);

    const tailL = new THREE.Mesh(tailGeo, ribbonPinkMat);
    tailL.position.set(-0.28, 1.15, 1.82);
    tailL.rotation.set(0.2, 0, 0.32);
    bowGroup.add(tailL);

    const tailR = new THREE.Mesh(tailGeo, ribbonPinkMat);
    tailR.position.set(0.28, 1.15, 1.82);
    tailR.rotation.set(0.2, 0, -0.32);
    bowGroup.add(tailR);

    // Circular Medal Tag ("THE GIFT")
    const medalCanvas = document.createElement('canvas');
    medalCanvas.width = 512;
    medalCanvas.height = 512;
    const mctx = medalCanvas.getContext('2d');

    // Background circle
    mctx.fillStyle = '#fef1f5';
    mctx.beginPath();
    mctx.arc(256, 256, 240, 0, Math.PI * 2);
    mctx.fill();

    // Rose gold foil border
    mctx.strokeStyle = '#df7b96';
    mctx.lineWidth = 10;
    mctx.stroke();

    mctx.strokeStyle = '#f3b4c5';
    mctx.lineWidth = 3;
    mctx.beginPath();
    mctx.arc(256, 256, 222, 0, Math.PI * 2);
    mctx.stroke();

    // Text: "THE GIFT"
    mctx.fillStyle = '#a62e4f';
    mctx.font = 'bold 64px "Arial Rounded MT Bold", "Montserrat", sans-serif';
    mctx.textAlign = 'center';
    mctx.textBaseline = 'middle';
    mctx.fillText('THE GIFT', 256, 225);

    // Cute pink heart
    mctx.fillStyle = '#df5277';
    mctx.beginPath();
    const hx = 256, hy = 290;
    mctx.moveTo(hx, hy + 24);
    mctx.bezierCurveTo(hx - 24, hy, hx - 38, hy - 20, hx - 18, hy - 36);
    mctx.bezierCurveTo(hx, hy - 40, hx, hy - 20, hx, hy - 14);
    mctx.bezierCurveTo(hx, hy - 20, hx, hy - 40, hx + 18, hy - 36);
    mctx.bezierCurveTo(hx + 38, hy - 20, hx + 24, hy, hx, hy + 24);
    mctx.fill();

    // Subtitle "A Little Hug"
    mctx.fillStyle = '#b36178';
    mctx.font = '500 28px "Georgia", serif';
    mctx.fillText('A Little Hug', 256, 355);

    const medalTex = TextureManager.createMedalTexture();
    const medalMat = new THREE.MeshStandardMaterial({
      map: medalTex,
      roughness: 0.35,
      metalness: 0.08
    });
    const medalGeo = new THREE.CylinderGeometry(0.55, 0.55, 0.05, 36);
    const medal = new THREE.Mesh(medalGeo, medalMat);
    medal.position.set(0, 0.88, 1.98);
    medal.rotation.x = Math.PI / 2 - 0.18;
    bowGroup.add(medal);

    bunnyGroup.add(bowGroup);
    this.bunnyBowGroup = bowGroup;

    // Laying down peacefully on its back in the molded velvet tray cushion
    bunnyGroup.position.set(0, 1.85, -0.2);
    bunnyGroup.rotation.set(-Math.PI / 2 + 0.12, 0, 0);

    bunnyGroup.userData = {
      isProduct: true,
      productId: 'bunny',
      productInfo: ProductData.bunny,
      basePos: bunnyGroup.position.clone(),
      baseRot: bunnyGroup.rotation.clone(),
      baseScale: bunnyGroup.scale.clone()
    };
    this.interactiveObjects.push(bunnyGroup);
    this.insideGroup.add(bunnyGroup);
  }

  // 3. Scented Candle
  buildScentedCandle() {
    const candleGroup = new THREE.Group();
    candleGroup.name = 'candle';
    this.products['candle'] = candleGroup;

    const potHeight = 3.6;
    const isPink = (this.currentEdition === 'pink');

    const potMat = isPink
      ? new THREE.MeshPhysicalMaterial({
          color: 0xffffff,
          transmission: 0.9,
          roughness: 0.08,
          ior: 1.5,
          transparent: true
        })
      : new THREE.MeshStandardMaterial({
          color: 0xd7cebf,
          roughness: 0.72
        });

    const pot = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 1.75, potHeight, 36), potMat);
    pot.position.y = potHeight / 2;
    pot.castShadow = true;
    candleGroup.add(pot);

    const woodTex = TextureManager.createWoodTexture();
    const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.5 });
    const lid = new THREE.Mesh(new THREE.CylinderGeometry(1.92, 1.92, 0.55, 36), woodMat);
    lid.position.y = potHeight + 0.25;
    lid.castShadow = true;
    candleGroup.add(lid);
    this.candleLidMesh = lid;

    // Opaque milky white soy wax (Sáp đậu nành trắng đục tự nhiên 100%)
    const waxColor = 0xf8f6f0;
    const waxMat = new THREE.MeshStandardMaterial({
      color: waxColor,
      roughness: 0.88,
      metalness: 0.01
    });

    // Solid opaque wax body filling inside glass jar
    const waxBodyGeo = new THREE.CylinderGeometry(1.72, 1.62, potHeight - 0.4, 36);
    const waxBody = new THREE.Mesh(waxBodyGeo, waxMat);
    waxBody.position.y = (potHeight - 0.4) / 2 + 0.15;
    waxBody.receiveShadow = true;
    candleGroup.add(waxBody);
    this.candleWaxBodyMesh = waxBody;

    // Top molten wax pool surface
    const waxTopMat = new THREE.MeshStandardMaterial({
      color: waxColor,
      roughness: 0.65,
      metalness: 0.01
    });
    const wax = new THREE.Mesh(new THREE.CylinderGeometry(1.72, 1.72, 0.15, 36), waxTopMat);
    wax.position.y = potHeight - 0.25;
    candleGroup.add(wax);
    this.candleWaxMesh = wax;

    const wickMat = new THREE.MeshStandardMaterial({ color: 0x241d18, roughness: 0.9 });
    const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.45, 8), wickMat);
    wick.position.y = potHeight + 0.05;
    candleGroup.add(wick);

    const flameMat = new THREE.MeshBasicMaterial({ color: 0xffaa33, transparent: true, opacity: 0.9 });
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.45, 12), flameMat);
    flame.position.y = potHeight + 0.45;
    candleGroup.add(flame);

    const candleLight = new THREE.PointLight(0xffa447, 1.15, 14);
    candleLight.position.set(0, potHeight + 0.55, 0);
    candleGroup.add(candleLight);
    this.candleLight = candleLight;

    const labelTex = TextureManager.createCandleLabelTexture(this.currentEdition);
    const labelMat = new THREE.MeshStandardMaterial({ map: labelTex, roughness: 0.7, transparent: true });
    const label = new THREE.Mesh(
      new THREE.CylinderGeometry(1.88, 1.78, 1.8, 32, 1, true, -Math.PI / 3.2, Math.PI / 1.6),
      labelMat
    );
    label.position.y = potHeight / 2;
    label.rotation.y = Math.PI / 2;
    candleGroup.add(label);
    this.candleLabelMesh = label;

    candleGroup.position.set(-7.2, 0.85, -4.5);
    candleGroup.userData = {
      isProduct: true,
      productId: 'candle',
      productInfo: ProductData.candle,
      basePos: candleGroup.position.clone(),
      baseRot: candleGroup.rotation.clone(),
      baseScale: candleGroup.scale.clone()
    };
    this.interactiveObjects.push(candleGroup);
    this.insideGroup.add(candleGroup);
  }

  // 4. Airtight Tea Jar
  buildTeaJar() {
    const jarGroup = new THREE.Group();
    jarGroup.name = 'teajar';
    this.products['teajar'] = jarGroup;

    const jarH = 3.6, jarR = 1.85;

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.92,
      opacity: 1.0,
      transparent: true,
      roughness: 0.05,
      ior: 1.5,
      thickness: 0.35
    });

    const glassMesh = new THREE.Mesh(new THREE.CylinderGeometry(jarR, jarR, jarH, 36), glassMat);
    glassMesh.position.y = jarH / 2;
    glassMesh.castShadow = true;
    jarGroup.add(glassMesh);

    const woodTex = TextureManager.createWoodTexture();
    const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.5 });
    const lidMesh = new THREE.Mesh(new THREE.CylinderGeometry(jarR + 0.08, jarR + 0.08, 0.6, 36), woodMat);
    lidMesh.position.y = jarH + 0.25;
    lidMesh.castShadow = true;
    jarGroup.add(lidMesh);

    const teaTex = TextureManager.createTeaInsideTexture(this.currentEdition);
    const teaMat = new THREE.MeshStandardMaterial({ map: teaTex, roughness: 0.85 });
    const teaMesh = new THREE.Mesh(new THREE.CylinderGeometry(jarR - 0.12, jarR - 0.12, jarH - 0.6, 32), teaMat);
    teaMesh.position.y = (jarH - 0.6) / 2 + 0.1;
    jarGroup.add(teaMesh);
    this.teaMesh = teaMesh;

    const flowerMat = new THREE.MeshStandardMaterial({ color: 0xdfb466, roughness: 0.7 });
    for (let i = 0; i < 28; i++) {
      const bud = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), flowerMat);
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * (jarR - 0.45);
      bud.position.set(Math.cos(angle) * dist, jarH - 0.5 + Math.random() * 0.15, Math.sin(angle) * dist);
      jarGroup.add(bud);
    }

    // Front Label: THE GIFT - Chamomile Tea - ♥ (Photo 2)
    const teaLabelTex = TextureManager.createTeaJarLabelTexture(this.currentEdition);
    const teaLabelMat = new THREE.MeshStandardMaterial({ map: teaLabelTex, roughness: 0.5 });
    const teaLabelMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.7), teaLabelMat);
    teaLabelMesh.position.set(0, jarH / 2, jarR + 0.02);
    jarGroup.add(teaLabelMesh);

    jarGroup.position.set(-7.2, 0.85, 0.8);
    jarGroup.userData = {
      isProduct: true,
      productId: 'teajar',
      productInfo: ProductData.teajar,
      basePos: jarGroup.position.clone(),
      baseRot: jarGroup.rotation.clone(),
      baseScale: jarGroup.scale.clone()
    };
    this.interactiveObjects.push(jarGroup);
    this.insideGroup.add(jarGroup);
  }

  // 5. Ceramic Aroma Diffuser Stone
  buildCeramicDiffuser() {
    const diffuserGroup = new THREE.Group();
    diffuserGroup.name = 'diffuser';
    this.products['diffuser'] = diffuserGroup;

    const ceramicGlazeMat = new THREE.MeshStandardMaterial({
      color: 0xf7f4ec,
      roughness: 0.25,
      metalness: 0.05
    });

    const points = [];
    points.push(new THREE.Vector2(1.5, 0));
    points.push(new THREE.Vector2(1.85, 0.4));
    points.push(new THREE.Vector2(1.95, 1.2));
    points.push(new THREE.Vector2(1.65, 2.3));
    points.push(new THREE.Vector2(1.95, 3.2));
    points.push(new THREE.Vector2(1.85, 3.5));
    points.push(new THREE.Vector2(1.3, 3.3));
    points.push(new THREE.Vector2(0, 3.1));

    const latheGeo = new THREE.LatheGeometry(points, 36);
    const bodyMesh = new THREE.Mesh(latheGeo, ceramicGlazeMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    diffuserGroup.add(bodyMesh);

    const winMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(0.75, 0.75, 1.2, 24, 1, false, 0, Math.PI),
      new THREE.MeshBasicMaterial({ color: 0x26221f })
    );
    winMesh.rotation.y = -Math.PI / 2;
    winMesh.position.set(0, 1.1, 1.35);
    winMesh.scale.set(1.0, 1.0, 0.5);
    diffuserGroup.add(winMesh);

    const vent = new THREE.Mesh(new THREE.CircleGeometry(0.24, 20), new THREE.MeshBasicMaterial({ color: 0x332d28 }));
    vent.position.set(0, 2.3, 1.72);
    vent.rotation.x = -0.15;
    diffuserGroup.add(vent);

    const stampTex = TextureManager.createDiffuserStampTexture();
    const stampMat = new THREE.MeshStandardMaterial({ map: stampTex, roughness: 0.35 });
    const stamp = new THREE.Mesh(new THREE.CircleGeometry(0.38, 24), stampMat);
    stamp.position.set(1.15, 0.7, 1.45);
    stamp.rotation.set(-0.2, 0.6, 0);
    diffuserGroup.add(stamp);

    const diffLight = new THREE.PointLight(0xffad55, 0.85, 10);
    diffLight.position.set(0, 1.1, 0.7);
    diffuserGroup.add(diffLight);
    this.diffuserLight = diffLight;

    diffuserGroup.position.set(7.2, 0.85, -4.5);
    diffuserGroup.userData = {
      isProduct: true,
      productId: 'diffuser',
      productInfo: ProductData.diffuser,
      basePos: diffuserGroup.position.clone(),
      baseRot: diffuserGroup.rotation.clone(),
      baseScale: diffuserGroup.scale.clone()
    };
    this.interactiveObjects.push(diffuserGroup);
    this.insideGroup.add(diffuserGroup);
  }

  // 6. Mini Photo & Silk Satin Ribbon
  buildPhotoAndRibbon() {
    const photoGroup = new THREE.Group();
    photoGroup.name = 'photo';
    this.products['photo'] = photoGroup;

    const fw = 4.2, fh = 5.2, fd = 0.12;

    const frameMesh = new THREE.Mesh(new THREE.BoxGeometry(fw, fd, fh), new THREE.MeshStandardMaterial({ color: 0xfdfdfb, roughness: 0.4 }));
    frameMesh.castShadow = true;
    photoGroup.add(frameMesh);

    const rimMesh = new THREE.Mesh(new THREE.BoxGeometry(fw + 0.08, fd - 0.02, fh + 0.08), new THREE.MeshStandardMaterial({ color: 0xdfb46c, metalness: 0.7, roughness: 0.3 }));
    photoGroup.add(rimMesh);

    const photoTex = TextureManager.createCouplePhotoTexture(this.currentEdition);
    const photoMesh = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.3, fh - 0.3), new THREE.MeshStandardMaterial({ map: photoTex, roughness: 0.3 }));
    photoMesh.rotation.x = -Math.PI / 2;
    photoMesh.position.set(0, fd / 2 + 0.01, 0);
    photoGroup.add(photoMesh);

    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xe69db0,
      roughness: 0.35,
      metalness: 0.1,
      side: THREE.DoubleSide
    });

    const ribbonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.8, fd / 2 + 0.06, 1.2),
      new THREE.Vector3(0.5, fd / 2 + 0.2, 0.4),
      new THREE.Vector3(2.5, fd / 2 + 0.35, 0.8),
      new THREE.Vector3(4.8, fd / 2 + 0.6, 1.6),
      new THREE.Vector3(6.5, -0.2, 2.6),
      new THREE.Vector3(7.4, -1.8, 3.8)
    ]);

    const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 40, 0.45, 12, false);
    ribbonGeo.scale(1.0, 0.15, 1.0);
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbonMesh.castShadow = true;
    photoGroup.add(ribbonMesh);

    photoGroup.position.set(7.2, 1.95, 0.8);
    photoGroup.userData = {
      isProduct: true,
      productId: 'photo',
      productInfo: ProductData.photo,
      basePos: photoGroup.position.clone(),
      baseRot: photoGroup.rotation.clone(),
      baseScale: photoGroup.scale.clone()
    };
    this.interactiveObjects.push(photoGroup);
    this.insideGroup.add(photoGroup);
  }

  // 7. Seed Paper Letter with Folded 3D V-Flap, Sculpted Bunny Wax Seal & Baby's Breath Sprig
  buildSeedPaperLetter() {
    const letterGroup = new THREE.Group();
    letterGroup.name = 'letter';
    this.products['letter'] = letterGroup;

    const ew = 8.6, ed = 4.8, eh = 0.14;
    const hw = ew / 2, hd = ed / 2, cr = 0.12;

    // 1. Rounded-corner Beveled Envelope Pocket Body
    const envShape = new THREE.Shape();
    envShape.moveTo(-hw + cr, -hd);
    envShape.lineTo(hw - cr, -hd);
    envShape.quadraticCurveTo(hw, -hd, hw, -hd + cr);
    envShape.lineTo(hw, hd - cr);
    envShape.quadraticCurveTo(hw, hd, hw - cr, hd);
    envShape.lineTo(-hw + cr, hd);
    envShape.quadraticCurveTo(-hw, hd, -hw, hd - cr);
    envShape.lineTo(-hw, -hd + cr);
    envShape.quadraticCurveTo(-hw, -hd, -hw + cr, -hd);

    const envGeo = new THREE.ExtrudeGeometry(envShape, {
      depth: eh,
      bevelEnabled: true,
      bevelThickness: 0.025,
      bevelSize: 0.025,
      bevelSegments: 3
    });
    const envBodyMat = new THREE.MeshStandardMaterial({
      color: 0xf7e4d7,
      roughness: 0.84,
      metalness: 0.02
    });
    const envelope = new THREE.Mesh(envGeo, envBodyMat);
    envelope.rotation.x = -Math.PI / 2;
    envelope.position.y = -eh / 2;
    envelope.castShadow = true;
    envelope.receiveShadow = true;
    letterGroup.add(envelope);

    // Envelope pocket top textured surface
    const seedTex = TextureManager.createSeedPaperTexture(this.currentEdition);
    const letterTop = new THREE.Mesh(
      new THREE.PlaneGeometry(ew - 0.08, ed - 0.08),
      new THREE.MeshStandardMaterial({ map: seedTex, roughness: 0.86, metalness: 0.0 })
    );
    letterTop.rotation.x = -Math.PI / 2;
    letterTop.position.y = eh / 2 + 0.028;
    letterTop.receiveShadow = true;
    letterGroup.add(letterTop);
    this.letterMesh = letterTop;

    // 2. Layered 3D Triangular V-Flap with Soft Tip & Real Shadow Depth
    const flapShape = new THREE.Shape();
    flapShape.moveTo(-hw + 0.08, hd - 0.06);
    flapShape.lineTo(hw - 0.08, hd - 0.06);
    flapShape.lineTo(0.24, -0.25);
    flapShape.quadraticCurveTo(0, -0.45, -0.24, -0.25);
    flapShape.closePath();

    const flapGeo = new THREE.ExtrudeGeometry(flapShape, {
      depth: 0.028,
      bevelEnabled: true,
      bevelThickness: 0.012,
      bevelSize: 0.012,
      bevelSegments: 2
    });
    // Normalize UVs across the flap so cotton-seed paper texture maps crisply
    const flapPos = flapGeo.attributes.position;
    const flapUv = flapGeo.attributes.uv;
    if (flapPos && flapUv) {
      for (let i = 0; i < flapPos.count; i++) {
        const px = flapPos.getX(i);
        const py = flapPos.getY(i);
        flapUv.setXY(i, (px + hw) / ew, (py + 0.45) / (hd + 0.45));
      }
      flapUv.needsUpdate = true;
    }

    const flapTex = TextureManager.createSeedPaperFlapTexture(this.currentEdition);
    const flapMat = new THREE.MeshStandardMaterial({
      map: flapTex,
      roughness: 0.84,
      metalness: 0.0
    });
    const flapMesh = new THREE.Mesh(flapGeo, flapMat);
    flapMesh.rotation.x = -Math.PI / 2;
    flapMesh.position.y = eh / 2 + 0.036;
    flapMesh.castShadow = true;
    flapMesh.receiveShadow = true;
    letterGroup.add(flapMesh);
    this.letterFlapMesh = flapMesh;

    // 3. Delicate Baby's Breath Dried Flower Sprig (Tucked neatly under top-left of wax seal)
    const flowerSprigGroup = new THREE.Group();
    const stemMat = new THREE.MeshStandardMaterial({ color: 0xb59e7a, roughness: 0.82 });
    const twigMat = new THREE.MeshStandardMaterial({ color: 0xc2ad8b, roughness: 0.8 });
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xfffcf5, roughness: 0.58 });
    const centerMat = new THREE.MeshStandardMaterial({ color: 0xf2deb5, roughness: 0.65 });
    const calyxMat = new THREE.MeshStandardMaterial({ color: 0x939e7c, roughness: 0.8 });

    const sprigY = eh / 2 + 0.085;
    const addTwigWithFloret = (pts, floretPositions, radius = 0.017) => {
      const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], sprigY + p[1], p[2])));
      const stemMesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 16, radius, 7, false), radius > 0.014 ? stemMat : twigMat);
      stemMesh.castShadow = true;
      flowerSprigGroup.add(stemMesh);

      floretPositions.forEach(([fx, fy, fz, scale]) => {
        const blossom = new THREE.Group();
        // Tiny sage calyx base
        const calyx = new THREE.Mesh(new THREE.SphereGeometry(0.026 * scale, 6, 6), calyxMat);
        calyx.position.y = -0.015 * scale;
        blossom.add(calyx);

        // 4 dainty creamy-white baby's-breath petals around warm cream center
        const center = new THREE.Mesh(new THREE.SphereGeometry(0.025 * scale, 7, 7), centerMat);
        center.position.y = 0.01 * scale;
        blossom.add(center);

        for (let k = 0; k < 4; k++) {
          const ang = (k / 4) * Math.PI * 2 + 0.35;
          const petal = new THREE.Mesh(new THREE.SphereGeometry(0.036 * scale, 7, 7), petalMat);
          petal.position.set(Math.cos(ang) * 0.028 * scale, 0.012 * scale, Math.sin(ang) * 0.028 * scale);
          blossom.add(petal);
        }
        blossom.position.set(fx, sprigY + fy, fz);
        blossom.castShadow = true;
        flowerSprigGroup.add(blossom);
      });
    };

    // Three delicate fanning stems tucked under the wax seal at (0, ..., 0.35)
    addTwigWithFloret(
      [[-0.12, 0.0, 0.25], [-0.75, 0.015, -0.35], [-1.35, 0.02, -1.05], [-1.85, 0.015, -1.55]],
      [[-1.85, 0.02, -1.55, 1.05], [-1.42, 0.025, -1.12, 0.92], [-1.05, 0.02, -0.68, 0.85]],
      0.019
    );
    addTwigWithFloret(
      [[-0.22, 0.0, 0.28], [-0.95, 0.015, -0.05], [-1.68, 0.02, -0.45], [-2.25, 0.012, -0.78]],
      [[-2.25, 0.015, -0.78, 1.0], [-1.72, 0.025, -0.48, 0.9], [-1.25, 0.02, -0.18, 0.8]],
      0.017
    );
    addTwigWithFloret(
      [[-0.08, 0.0, 0.18], [-0.48, 0.015, -0.52], [-0.88, 0.02, -1.25], [-1.18, 0.012, -1.78]],
      [[-1.18, 0.015, -1.78, 0.95], [-0.92, 0.025, -1.32, 0.88], [-0.55, 0.02, -0.75, 0.78]],
      0.016
    );
    // Fine secondary twigs for lush natural fullness
    addTwigWithFloret(
      [[-0.95, 0.015, -0.05], [-1.32, 0.02, 0.12], [-1.62, 0.015, -0.02]],
      [[-1.62, 0.02, -0.02, 0.85], [-1.32, 0.025, 0.12, 0.78]],
      0.012
    );
    addTwigWithFloret(
      [[-0.75, 0.015, -0.35], [-1.25, 0.025, -0.58], [-1.52, 0.02, -0.82]],
      [[-1.52, 0.025, -0.82, 0.9]],
      0.012
    );

    letterGroup.add(flowerSprigGroup);
    this.flowerSprigGroup = flowerSprigGroup;

    // 4. Sculpted 3D Organic Wavy Rose-Pink Bunny Wax Seal (Centered at V-flap tip)
    const waxSealGroup = new THREE.Group();
    const waxShape = new THREE.Shape();
    const numPts = 40;
    for (let i = 0; i < numPts; i++) {
      const ang = (i / numPts) * Math.PI * 2;
      const rad = 0.68 + Math.sin(ang * 5.0 + 0.4) * 0.038 + Math.cos(ang * 9.0) * 0.022;
      const wx = Math.cos(ang) * rad;
      const wy = Math.sin(ang) * rad;
      if (i === 0) waxShape.moveTo(wx, wy);
      else waxShape.lineTo(wx, wy);
    }
    waxShape.closePath();

    const waxGeo = new THREE.ExtrudeGeometry(waxShape, {
      depth: 0.065,
      bevelEnabled: true,
      bevelThickness: 0.038,
      bevelSize: 0.042,
      bevelSegments: 4
    });
    const waxBaseMat = new THREE.MeshStandardMaterial({
      color: 0xea98ae,
      roughness: 0.34,
      metalness: 0.04
    });
    const waxBase = new THREE.Mesh(waxGeo, waxBaseMat);
    waxBase.rotation.x = -Math.PI / 2;
    waxBase.castShadow = true;
    waxBase.receiveShadow = true;
    waxSealGroup.add(waxBase);

    // Raised Stamped Wax Ring Lip
    const ringGeo = new THREE.TorusGeometry(0.47, 0.045, 14, 40);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xec9fb4,
      roughness: 0.32,
      metalness: 0.05
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.112;
    ringMesh.castShadow = true;
    waxSealGroup.add(ringMesh);

    // Inner Embossed Bunny Stamp Face with Bump Map
    const sealTex = TextureManager.createWaxSealTexture(this.currentEdition);
    const sealBumpTex = TextureManager.createWaxSealBumpTexture();
    const sealFaceMat = new THREE.MeshStandardMaterial({
      map: sealTex,
      bumpMap: sealBumpTex,
      bumpScale: 0.055,
      roughness: 0.36,
      metalness: 0.04
    });
    const sealFace = new THREE.Mesh(new THREE.CircleGeometry(0.46, 40), sealFaceMat);
    sealFace.rotation.x = -Math.PI / 2;
    sealFace.position.y = 0.108;
    sealFace.receiveShadow = true;
    waxSealGroup.add(sealFace);
    this.sealMesh = sealFace;

    waxSealGroup.position.set(0, eh / 2 + 0.065, 0.36);
    letterGroup.add(waxSealGroup);

    letterGroup.position.set(-5.2, 1.95, 6.2);
    letterGroup.userData = {
      isProduct: true,
      productId: 'letter',
      productInfo: ProductData.letter,
      basePos: letterGroup.position.clone(),
      baseRot: letterGroup.rotation.clone(),
      baseScale: letterGroup.scale.clone()
    };
    this.interactiveObjects.push(letterGroup);
    this.insideGroup.add(letterGroup);
  }

  // 8. 3-Step Ritual Card
  buildRitualCard() {
    const cardGroup = new THREE.Group();
    cardGroup.name = 'card';
    this.products['card'] = cardGroup;

    const cw = 8.6, ch = 0.16, cd = 4.8;
    const cardTex = TextureManager.createRitualCardTexture(this.currentEdition);
    const cardBase = new THREE.Mesh(
      new THREE.BoxGeometry(cw, ch, cd),
      new THREE.MeshStandardMaterial({ color: 0xfeeef3, roughness: 0.8 })
    );
    cardBase.castShadow = true;
    cardGroup.add(cardBase);

    const cardTop = new THREE.Mesh(
      new THREE.PlaneGeometry(cw, cd),
      new THREE.MeshStandardMaterial({ map: cardTex, roughness: 0.65 })
    );
    cardTop.rotation.x = -Math.PI / 2;
    cardTop.position.y = ch / 2 + 0.01;
    cardGroup.add(cardTop);
    this.cardMesh = cardTop;

    cardGroup.position.set(5.2, 1.95, 6.2);
    cardGroup.userData = {
      isProduct: true,
      productId: 'card',
      productInfo: ProductData.card,
      basePos: cardGroup.position.clone(),
      baseRot: cardGroup.rotation.clone(),
      baseScale: cardGroup.scale.clone()
    };
    this.interactiveObjects.push(cardGroup);
    this.insideGroup.add(cardGroup);
  }

  // 9. Greeting Card "THE GIFT" (Tấm thiệp nằm phẳng sang trọng)
  buildGreetingCard() {
    const greetGroup = new THREE.Group();
    greetGroup.name = 'greeting';
    this.products['greeting'] = greetGroup;

    const gw = 6.2, gh = 9.2, gd = 0.12;
    const greetTex = TextureManager.createGreetingCardTexture();
    
    // Card base backing
    const cardBase = new THREE.Mesh(
      new THREE.BoxGeometry(gw, gd, gh),
      new THREE.MeshStandardMaterial({ color: 0xfeeef3, roughness: 0.8 })
    );
    cardBase.castShadow = true;
    cardBase.receiveShadow = true;
    greetGroup.add(cardBase);

    // Card top face with high-res texture facing upwards
    const cardTop = new THREE.Mesh(
      new THREE.PlaneGeometry(gw, gh),
      new THREE.MeshStandardMaterial({ map: greetTex, roughness: 0.65 })
    );
    cardTop.rotation.x = -Math.PI / 2;
    cardTop.position.y = gd / 2 + 0.01;
    greetGroup.add(cardTop);

    // Lying flat horizontally on the studio floor next to the box on the right
    greetGroup.position.set(18.2, 0.06, 2.0);
    greetGroup.rotation.set(0, -0.15, 0);

    greetGroup.userData = {
      isProduct: true,
      productId: 'greeting',
      productInfo: ProductData.greeting,
      basePos: greetGroup.position.clone(),
      baseRot: greetGroup.rotation.clone(),
      baseScale: greetGroup.scale.clone()
    };
    this.interactiveObjects.push(greetGroup);
    this.rootGroup.add(greetGroup);
    this.greetingCardGroup = greetGroup;
  }

  // 10. Studio Infinite Floor & Seamless Soft Shadows
  buildStudioPodium() {
    // Seamless infinite studio floor plane
    const floorGeo = new THREE.PlaneGeometry(800, 800);
    this.studioFloorMat = new THREE.MeshStandardMaterial({
      color: 0xf3ded2,
      roughness: 0.92,
      metalness: 0.0
    });
    const floorMesh = new THREE.Mesh(floorGeo, this.studioFloorMat);
    floorMesh.rotation.x = -Math.PI / 2;
    floorMesh.position.y = -0.05;
    floorMesh.receiveShadow = true;
    this.scene.add(floorMesh);
    this.studioFloorMesh = floorMesh;

    // Contact soft shadow receiver right under the box
    const shadowMat = new THREE.ShadowMaterial({ opacity: 0.18 });
    const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(160, 160), shadowMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.04;
    shadowPlane.receiveShadow = true;
    this.scene.add(shadowPlane);
  }

  // Switch between Pink Edition and White Edition
  setEdition(edition) {
    this.currentEdition = edition;
    const isPink = (edition === 'pink');

    const boxCol = isPink ? 0xeb5e88 : 0xf7f3ea;
    this.boxOuterMat.color.set(boxCol);
    this.boxInnerMat.color.set(isPink ? 0xf7b6cc : 0xfefcf8);

    if (this.lidMesh) {
      this.lidMesh.material[2].map = TextureManager.createBoxCoverTexture(edition);
      this.lidMesh.material[2].needsUpdate = true;
      this.lidMesh.material[3].map = isPink ? TextureManager.createPinkLidTexture() : TextureManager.createBoxCoverTexture('white');
      this.lidMesh.material[3].needsUpdate = true;
    }

    if (this.flapMesh) {
      this.flapMesh.material.map = TextureManager.createBoxFlapTexture(edition);
      this.flapMesh.material.needsUpdate = true;
    }

    if (this.bunnyBowGroup) {
      this.bunnyBowGroup.visible = isPink;
    }

    if (this.bunnyPlushMat) {
      this.bunnyPlushMat.color.set(isPink ? 0xfdf9f4 : 0xeee5d5);
    }

    if (this.innerEarMat) {
      this.innerEarMat.color.set(isPink ? 0xfadfe7 : 0xe5dbc9);
    }

    if (this.bunnyNoseMesh) {
      this.bunnyNoseMesh.material.color.set(isPink ? 0xeb7b95 : 0x8a6e5f);
    }

    if (this.bunnyPadMat) {
      this.bunnyPadMat.color.set(isPink ? 0xf8dbe3 : 0xdfd3bf);
    }

    if (this.bunnyMouthMat) {
      this.bunnyMouthMat.color.set(isPink ? 0x783244 : 0x5a3e35);
    }

    if (this.candleLabelMesh) {
      this.candleLabelMesh.material.map = TextureManager.createCandleLabelTexture(edition);
      this.candleLabelMesh.material.needsUpdate = true;
    }
    if (this.candleWaxMesh) {
      this.candleWaxMesh.material.color.set(0xf8f6f0);
    }
    if (this.candleWaxBodyMesh) {
      this.candleWaxBodyMesh.material.color.set(0xf8f6f0);
    }

    if (this.teaMesh) {
      this.teaMesh.material.map = TextureManager.createTeaInsideTexture(edition);
      this.teaMesh.material.needsUpdate = true;
    }

    if (this.letterMesh) {
      this.letterMesh.material.map = TextureManager.createSeedPaperTexture(edition);
      this.letterMesh.material.needsUpdate = true;
    }
    if (this.letterFlapMesh) {
      this.letterFlapMesh.material.map = TextureManager.createSeedPaperFlapTexture(edition);
      this.letterFlapMesh.material.needsUpdate = true;
    }
    if (this.sealMesh) {
      this.sealMesh.material.map = TextureManager.createWaxSealTexture(edition);
      this.sealMesh.material.needsUpdate = true;
    }
    if (this.flowerSprigGroup) {
      this.flowerSprigGroup.visible = true;
    }

    if (this.cardMesh) {
      this.cardMesh.material.map = TextureManager.createRitualCardTexture(edition);
      this.cardMesh.material.needsUpdate = true;
    }

    if (this.greetingCardGroup) {
      this.greetingCardGroup.visible = true;
    }
  }

  setLidState(open, animated = true) {
    this.isBoxOpen = open;
    const targetLidAngle = open ? 1.95 : 0;
    const targetFlapAngle = open ? 0.22 : 0;

    if (!animated) {
      if (this.boxLidGroup) this.boxLidGroup.rotation.x = -targetLidAngle;
      if (this.boxFlapGroup) this.boxFlapGroup.rotation.x = targetFlapAngle;
      if (this.insideGroup) this.insideGroup.visible = open;
      return;
    }
    this.targetLidAngle = targetLidAngle;
    this.targetFlapAngle = targetFlapAngle;
    if (open && this.insideGroup) {
      this.insideGroup.visible = true;
    }
  }

  setExplodeState(exploded) {
    this.isExploded = exploded;
    this.targetExplodeFactor = exploded ? 1.0 : 0.0;
    if (exploded) {
      this.isolatedProductId = null;
    }
  }

  // Isolate product for 360 degree individual inspection ("Tách riêng sản phẩm ra ngoài")
  isolateProduct(productId, isolate = true) {
    if (!isolate || !productId || productId === 'box' || !this.products[productId]) {
      this.isolatedProductId = null;
      // Restore visibility of box, molded tray, and all items
      if (this.products['box']) this.products['box'].visible = true;
      if (this.trayGroup) this.trayGroup.visible = true;
      const keys = ['bunny', 'candle', 'teajar', 'diffuser', 'photo', 'letter', 'card', 'greeting'];
      for (const key of keys) {
        if (this.products[key]) {
          this.products[key].visible = true;
        }
      }
      return;
    }

    this.isolatedProductId = productId;
    if (this.isExploded) {
      this.setExplodeState(false);
    }

    // Hide the box and tray so the isolated product floats cleanly in pure studio space without any clutter underneath
    if (this.products['box']) this.products['box'].visible = false;
    if (this.trayGroup) this.trayGroup.visible = false;

    // Hide all OTHER products, showing ONLY the isolated product
    const keys = ['bunny', 'candle', 'teajar', 'diffuser', 'photo', 'letter', 'card', 'greeting'];
    for (const key of keys) {
      if (this.products[key]) {
        this.products[key].visible = (key === productId);
      }
    }
  }

  update(delta, elapsed) {
    const dt = Math.min(delta || 0.016, 0.05);
    if (this.targetLidAngle !== undefined && this.boxLidGroup) {
      const lidDamp = 1 - Math.exp(-5.8 * dt);
      const current = -this.boxLidGroup.rotation.x;
      const next = THREE.MathUtils.lerp(current, this.targetLidAngle, lidDamp);
      this.boxLidGroup.rotation.x = -next;

      const flapDamp = 1 - Math.exp(-6.5 * dt);
      const currentFlap = this.boxFlapGroup.rotation.x;
      const nextFlap = THREE.MathUtils.lerp(currentFlap, this.targetFlapAngle, flapDamp);
      this.boxFlapGroup.rotation.x = nextFlap;

      if (this.insideGroup && !this.isolatedProductId) {
        this.insideGroup.visible = (next > 0.08);
      }
    }

    // 1. Product 3D Isolation / Inspection Mode ("Tách riêng sản phẩm ra ngoài")
    if (this.isolatedProductId && this.products[this.isolatedProductId]) {
      const isMobile = window.innerWidth <= 768;
      // On desktop, offset slightly to X = -2.5 so that the 330px drawer on the right NEVER covers it!
      const isoTargetX = isMobile ? 0 : -2.5;
      const floatY = 6.0 + Math.sin(elapsed * 2.0) * 0.08;

      const keys = ['bunny', 'candle', 'teajar', 'diffuser', 'photo', 'letter', 'card', 'greeting'];
      for (const key of keys) {
        const prod = this.products[key];
        if (!prod || !prod.userData || !prod.userData.basePos) continue;

        if (key === this.isolatedProductId) {
          prod.position.x = THREE.MathUtils.lerp(prod.position.x, isoTargetX, 0.08);
          prod.position.y = THREE.MathUtils.lerp(prod.position.y, floatY, 0.08);
          prod.position.z = THREE.MathUtils.lerp(prod.position.z, 0, 0.08);

          // Optimal inspection angle:
          // Flat items: tilt gracefully towards the camera (rotation.x = -0.42) like on an art easel display
          // Upright items: stand upright facing front (rotation = 0, 0, 0)
          // Bunny: tilted gracefully towards the viewer (rotation.x = -0.45)
          // Lying flat / top-down display as requested ("cho nằm ra", "góc nhìn từ trên xuống")
          // Bunny lies flat on its back (-Math.PI / 2), flat items lie flat horizontally (0), upright items stand (0)
          const targetRotX = (key === 'bunny') ? -Math.PI / 2 : 0;
          prod.rotation.x = THREE.MathUtils.lerp(prod.rotation.x, targetRotX, 0.08);
          prod.rotation.y = THREE.MathUtils.lerp(prod.rotation.y, 0, 0.08);
          prod.rotation.z = THREE.MathUtils.lerp(prod.rotation.z, 0, 0.08);

          prod.scale.lerp(new THREE.Vector3(1.0, 1.0, 1.0), 0.08);
        } else {
          // Keep other items resting in their base slots
          const bp = prod.userData.basePos;
          prod.position.x = bp.x;
          prod.position.y = bp.y;
          prod.position.z = bp.z;
          if (prod.userData.baseRot) {
            prod.rotation.copy(prod.userData.baseRot);
          }
          prod.scale.set(1.0, 1.0, 1.0);
        }
      }
    } else if (this.targetExplodeFactor !== undefined && (this.targetExplodeFactor > 0.01 || this.explodeFactor > 0.01)) {
      this.explodeFactor = THREE.MathUtils.lerp(this.explodeFactor, this.targetExplodeFactor, 0.07);

      const explodeOffsets = {
        bunny: { y: 6.5, x: 0, z: -0.5 },
        candle: { y: 7.2, x: -3.0, z: -2.5 },
        teajar: { y: 6.8, x: -3.5, z: 1.5 },
        diffuser: { y: 7.4, x: 3.0, z: -2.5 },
        photo: { y: 6.2, x: 3.5, z: 1.5 },
        letter: { y: 5.2, x: -2.0, z: 3.0 },
        card: { y: 5.2, x: 2.0, z: 3.0 },
        greeting: { y: 4.5, x: 3.0, z: 2.0 }
      };

      for (const [key, offset] of Object.entries(explodeOffsets)) {
        const prod = this.products[key];
        if (prod && prod.userData.basePos) {
          const bp = prod.userData.basePos;
          const factor = this.explodeFactor;
          const floatOffset = factor > 0.05 ? Math.sin(elapsed * 2 + bp.x) * 0.25 * factor : 0;
          prod.position.y = bp.y + offset.y * factor + floatOffset;
          prod.position.x = bp.x + offset.x * factor;
          prod.position.z = bp.z + offset.z * factor;
        }
      }
    } else {
      // Normal return-to-base state when neither isolated nor exploded
      const keys = ['bunny', 'candle', 'teajar', 'diffuser', 'photo', 'letter', 'card', 'greeting'];
      for (const key of keys) {
        const prod = this.products[key];
        if (prod && prod.userData && prod.userData.basePos) {
          const bp = prod.userData.basePos;
          if (prod.position.distanceTo(bp) > 0.005) {
            prod.position.x = THREE.MathUtils.lerp(prod.position.x, bp.x, 0.08);
            prod.position.y = THREE.MathUtils.lerp(prod.position.y, bp.y, 0.08);
            prod.position.z = THREE.MathUtils.lerp(prod.position.z, bp.z, 0.08);
            if (prod.userData.baseRot) {
              prod.rotation.x = THREE.MathUtils.lerp(prod.rotation.x, prod.userData.baseRot.x, 0.08);
              prod.rotation.y = THREE.MathUtils.lerp(prod.rotation.y, prod.userData.baseRot.y, 0.08);
              prod.rotation.z = THREE.MathUtils.lerp(prod.rotation.z, prod.userData.baseRot.z, 0.08);
            }
            prod.scale.lerp(new THREE.Vector3(1.0, 1.0, 1.0), 0.08);
          }
        }
      }
    }

    if (this.candleLight) {
      this.candleLight.intensity = 1.05 + Math.sin(elapsed * 14) * 0.14 + Math.cos(elapsed * 21) * 0.09;
    }
    if (this.diffuserLight) {
      this.diffuserLight.intensity = 0.8 + Math.sin(elapsed * 11) * 0.1;
    }

    // Subtle gentle breathing animation for bunny
    const bunny = this.products['bunny'];
    if (bunny && bunny.userData.basePos && this.explodeFactor < 0.1) {
      const breath = Math.sin(elapsed * 2.2) * 0.025;
      bunny.scale.set(1.0 + breath * 0.5, 1.0 + breath, 1.0 + breath * 0.5);
    }
  }
}
