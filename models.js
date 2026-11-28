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

    // Soft Warm Light Beige Base for the box bottom & walls ("phần đáy màu be nhẹ ấm")
    this.boxBaseMat = new THREE.MeshStandardMaterial({
      color: (this.currentEdition === 'pink') ? 0xe7cfb4 : 0xefe2d0,
      roughness: 0.62,
      metalness: 0.02
    });

    this.boxInnerMat = new THREE.MeshStandardMaterial({
      color: (this.currentEdition === 'pink') ? 0xf7b6cc : 0xfefcf8,
      roughness: 0.55,
      metalness: 0.0
    });

    const trayMat = new THREE.MeshStandardMaterial({
      color: 0xefe0cd,
      roughness: 0.68,
      metalness: 0.01
    });

    const baseGroup = new THREE.Group();

    // Box Bottom (Warm Light Beige)
    const bottomGeo = new THREE.BoxGeometry(bw, wall, bd);
    const bottomMesh = new THREE.Mesh(bottomGeo, this.boxBaseMat);
    bottomMesh.position.y = -wall / 2;
    bottomMesh.receiveShadow = true;
    baseGroup.add(bottomMesh);
    this.boxMeshes.push(bottomMesh);

    // Front Wall
    const fWallGeo = new THREE.BoxGeometry(bw, bh, wall);
    const fWall = new THREE.Mesh(fWallGeo, this.boxBaseMat);
    fWall.position.set(0, bh / 2, bd / 2 - wall / 2);
    fWall.castShadow = true;
    fWall.receiveShadow = true;
    baseGroup.add(fWall);
    this.boxMeshes.push(fWall);

    // Back Wall
    const bWall = new THREE.Mesh(fWallGeo, this.boxBaseMat);
    bWall.position.set(0, bh / 2, -bd / 2 + wall / 2);
    bWall.castShadow = true;
    bWall.receiveShadow = true;
    baseGroup.add(bWall);
    this.boxMeshes.push(bWall);

    // Left Wall
    const sideWallGeo = new THREE.BoxGeometry(wall, bh, bd - wall * 2);
    const lWall = new THREE.Mesh(sideWallGeo, this.boxBaseMat);
    lWall.position.set(-bw / 2 + wall / 2, bh / 2, 0);
    lWall.castShadow = true;
    lWall.receiveShadow = true;
    baseGroup.add(lWall);
    this.boxMeshes.push(lWall);

    // Right Wall
    const rWall = new THREE.Mesh(sideWallGeo, this.boxBaseMat);
    rWall.position.set(bw / 2 - wall / 2, bh / 2, 0);
    rWall.castShadow = true;
    rWall.receiveShadow = true;
    baseGroup.add(rWall);
    this.boxMeshes.push(rWall);

    boxGroup.add(baseGroup);

    // Molded Insert Tray (Warm Creamy Beige Top surface at Y = 1.80)
    const trayGroup = new THREE.Group();
    const tw = bw - wall * 2 - 0.2;
    const td = bd - wall * 2 - 0.2;
    const th = 1.8;

    const trayTop = new THREE.Mesh(new THREE.BoxGeometry(tw, th, td), trayMat);
    trayTop.position.set(0, th / 2, 0);
    trayTop.receiveShadow = true;
    trayGroup.add(trayTop);

    // Soft recessed warm almond-beige cavity wells
    const cavityMat = new THREE.MeshStandardMaterial({ color: 0xdcc3a9, roughness: 0.85 });
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

    // Subtle semicircular tray finger notches on left & right inner edges (matching reference photos)
    const notchMat = new THREE.MeshStandardMaterial({ color: 0xebd9c5, roughness: 0.72 });
    const notchGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.16, 20, 1, false, 0, Math.PI);
    const leftNotch = new THREE.Mesh(notchGeo, notchMat);
    leftNotch.position.set(-tw / 2 + 0.05, th - 0.02, 5.2);
    leftNotch.rotation.y = Math.PI / 2;
    trayGroup.add(leftNotch);
    const rightNotch = new THREE.Mesh(notchGeo, notchMat);
    rightNotch.position.set(tw / 2 - 0.05, th - 0.02, 5.2);
    rightNotch.rotation.y = -Math.PI / 2;
    trayGroup.add(rightNotch);

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

  // 2. Chú Thỏ Bông Có Lông Mềm Mịn, Tai Tròn Xinh Xắn & Sống Động
  buildBunnyDoll() {
    const bunnyGroup = new THREE.Group();
    bunnyGroup.name = 'bunny';
    this.products['bunny'] = bunnyGroup;

    const bunnyFurMap = TextureManager.createBunnyFurTexture(this.currentEdition);
    const bunnyBump = TextureManager.createBunnyBumpTexture();
    const furShellTex = TextureManager.createFurShellTexture(this.currentEdition);
    const isPink = (this.currentEdition === 'pink');

    const plushMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xffffff : 0xf4eadb,
      map: bunnyFurMap,
      roughness: 0.86,
      metalness: 0.02,
      bumpMap: bunnyBump,
      bumpScale: 0.08
    });
    this.bunnyPlushMat = plushMat;

    // Crisp Fuzzy Shell Fur Material (visible fuzzy hairs around silhouettes with zero dark edge)
    const furShellMat1 = new THREE.MeshStandardMaterial({
      map: furShellTex,
      alphaTest: 0.42,
      transparent: true,
      opacity: 0.88,
      roughness: 0.90,
      metalness: 0.0,
      emissive: 0x3b2a1c,
      emissiveIntensity: 0.06,
      depthWrite: true
    });
    this.bunnyFurShellMats = [furShellMat1];

    const addFurryPart = (geo, mat, px, py, pz, rx = 0, ry = 0, rz = 0, parent = bunnyGroup) => {
      const partGroup = new THREE.Group();
      const baseMesh = new THREE.Mesh(geo, mat);
      baseMesh.castShadow = true;
      baseMesh.receiveShadow = true;
      partGroup.add(baseMesh);

      const s1 = new THREE.Mesh(geo, furShellMat1);
      s1.scale.setScalar(1.024);
      s1.castShadow = false;
      s1.receiveShadow = false;
      partGroup.add(s1);

      partGroup.position.set(px, py, pz);
      partGroup.rotation.set(rx, ry, rz);
      parent.add(partGroup);
      return partGroup;
    };

    // Pear-shaped Seated Plush Torso (narrow upper neck/shoulders flowing into plump rounded belly)
    const lowerBellyGeo = new THREE.SphereGeometry(2.04, 36, 28);
    lowerBellyGeo.scale(1.06, 1.00, 0.78);
    addFurryPart(lowerBellyGeo, plushMat, 0, 0.16, 0.34);

    const upperChestGeo = new THREE.SphereGeometry(1.48, 32, 24);
    upperChestGeo.scale(0.98, 1.06, 0.80);
    addFurryPart(upperChestGeo, plushMat, 0, 1.32, 0.36);

    // Cute Fluffy Cotton Tail Puff at back
    const bunnyTailGeo = new THREE.SphereGeometry(0.58, 20, 16);
    addFurryPart(bunnyTailGeo, plushMat, 0, -0.35, -1.52);

    // Smooth Chubby Rounded Plush Head (Tilted nicely toward camera like Photo 2)
    const headGeo = new THREE.SphereGeometry(1.80, 36, 28);
    headGeo.scale(1.10, 0.96, 0.95);
    addFurryPart(headGeo, plushMat, 0, 3.04, 0.38);

    // Soft Rounded Plush Muzzle / Cheek Fullness
    const muzzleGeo = new THREE.SphereGeometry(0.68, 28, 20);
    muzzleGeo.scale(1.22, 0.72, 0.56);
    addFurryPart(muzzleGeo, plushMat, 0, 2.64, 1.68);

    // Small Innocent Glossy Dark Button Eyes (Crisp round-oval beads placed naturally on lower-mid face)
    const eyeGlassMat = new THREE.MeshStandardMaterial({
      color: 0x160e10,
      roughness: 0.08,
      metalness: 0.12
    });
    const glintMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    const createBeadEye = (x, y, z, isRight = false) => {
      const eyeGroup = new THREE.Group();

      const eyeMesh = new THREE.Mesh(new THREE.SphereGeometry(0.175, 20, 20), eyeGlassMat);
      eyeMesh.scale.set(0.92, 1.08, 0.85);
      eyeMesh.castShadow = true;
      eyeGroup.add(eyeMesh);

      const glint1 = new THREE.Mesh(new THREE.SphereGeometry(0.048, 10, 10), glintMat);
      glint1.position.set(isRight ? -0.045 : 0.045, 0.055, 0.145);
      eyeGroup.add(glint1);

      eyeGroup.position.set(x, y, z);
      eyeGroup.rotation.y = isRight ? 0.22 : -0.22;
      return eyeGroup;
    };

    bunnyGroup.add(createBeadEye(-0.76, 2.96, 2.02, false));
    bunnyGroup.add(createBeadEye(0.76, 2.96, 2.02, true));

    // Delicate Pastel Rose-Pink Plush Nose (Small rounded heart/triangle tucked softly into muzzle)
    const noseShape = new THREE.Shape();
    noseShape.moveTo(0, -0.11);
    noseShape.bezierCurveTo(-0.12, -0.11, -0.18, 0.04, -0.13, 0.12);
    noseShape.bezierCurveTo(-0.07, 0.17, 0, 0.09, 0, 0.06);
    noseShape.bezierCurveTo(0, 0.09, 0.07, 0.17, 0.13, 0.12);
    noseShape.bezierCurveTo(0.18, 0.04, 0.12, -0.11, 0, -0.11);

    const noseGeo = new THREE.ExtrudeGeometry(noseShape, {
      depth: 0.10,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.025,
      bevelThickness: 0.025
    });
    const noseMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xf2a4b8 : 0xb59a8c,
      roughness: 0.58
    });
    const noseMesh = new THREE.Mesh(noseGeo, noseMat);
    noseMesh.position.set(0, 2.72, 2.08);
    noseMesh.rotation.x = -0.05;
    bunnyGroup.add(noseMesh);
    this.bunnyNoseMesh = noseMesh;

    // Subtle Fine Embroidered Thread Seam & Gentle Smile
    const mouthMat = new THREE.MeshStandardMaterial({ color: 0xa47a84, roughness: 0.65 });
    this.bunnyMouthMat = mouthMat;

    const philtrum = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.12, 8),
      mouthMat
    );
    philtrum.position.set(0, 2.56, 2.08);
    bunnyGroup.add(philtrum);

    const smileCurveL = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 2.50, 2.08),
      new THREE.Vector3(-0.13, 2.44, 2.06),
      new THREE.Vector3(-0.24, 2.50, 2.02)
    );
    bunnyGroup.add(new THREE.Mesh(new THREE.TubeGeometry(smileCurveL, 12, 0.015, 6, false), mouthMat));

    const smileCurveR = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(0, 2.50, 2.08),
      new THREE.Vector3(0.13, 2.44, 2.06),
      new THREE.Vector3(0.24, 2.50, 2.02)
    );
    bunnyGroup.add(new THREE.Mesh(new THREE.TubeGeometry(smileCurveR, 12, 0.015, 6, false), mouthMat));

    // Very Soft Natural Cheek Flush
    const cheekCanvas = document.createElement('canvas');
    cheekCanvas.width = 128;
    cheekCanvas.height = 128;
    const cctx = cheekCanvas.getContext('2d');
    const grad = cctx.createRadialGradient(64, 64, 5, 64, 64, 60);
    grad.addColorStop(0, isPink ? 'rgba(244, 166, 184, 0.42)' : 'rgba(205, 165, 148, 0.30)');
    grad.addColorStop(0.55, isPink ? 'rgba(244, 166, 184, 0.18)' : 'rgba(205, 165, 148, 0.12)');
    grad.addColorStop(1, 'rgba(244, 166, 184, 0)');
    cctx.fillStyle = grad;
    cctx.fillRect(0, 0, 128, 128);
    const cheekTex = new THREE.CanvasTexture(cheekCanvas);
    const cheekMat = new THREE.MeshBasicMaterial({
      map: cheekTex,
      transparent: true,
      depthWrite: false
    });
    const cheekGeo = new THREE.PlaneGeometry(0.75, 0.75);

    const cheekL = new THREE.Mesh(cheekGeo, cheekMat);
    cheekL.position.set(-1.10, 2.66, 1.86);
    cheekL.rotation.y = -0.52;
    bunnyGroup.add(cheekL);

    const cheekR = new THREE.Mesh(cheekGeo, cheekMat);
    cheekR.position.set(1.10, 2.66, 1.86);
    cheekR.rotation.y = 0.52;
    bunnyGroup.add(cheekR);

    // Long Plush Rounded Lop Ears Draping Gently Along Sides Past Elbows (Matching Photo 1 & 2)
    const innerEarMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xf6e6e8 : 0xe5dbc9,
      roughness: 0.90
    });
    this.innerEarMat = innerEarMat;

    const earPts = [];
    const earSteps = 28;
    for (let i = 0; i <= earSteps; i++) {
      const t = i / earSteps;
      let r;
      if (t < 0.72) {
        r = 0.24 + 0.70 * Math.sin((t / 0.72) * (Math.PI / 2));
      } else {
        const u = (t - 0.72) / 0.28;
        r = 0.94 * Math.sqrt(Math.max(0, 1 - u * u));
      }
      earPts.push(new THREE.Vector2(r, -t * 4.10));
    }
    const earGeo = new THREE.LatheGeometry(earPts, 28);
    earGeo.scale(1.0, 1.0, 0.42);

    const createEar = (isRight = false) => {
      const earPivot = new THREE.Group();
      const s = isRight ? 1 : -1;

      addFurryPart(earGeo, plushMat, 0, 0, 0, 0, 0, 0, earPivot);

      earPivot.position.set(s * 1.48, 3.68, 0.55);
      earPivot.rotation.set(0.14, s * -0.10, s * 0.22);
      return earPivot;
    };

    bunnyGroup.add(createEar(false));
    bunnyGroup.add(createEar(true));

    // Chubby Seated Plush Arms Angled Outward from Shoulders (Correct Z sign: -0.46 left, +0.46 right!)
    const armGeo = new THREE.SphereGeometry(0.56, 22, 18);
    armGeo.scale(0.92, 1.62, 0.86);

    addFurryPart(armGeo, plushMat, -1.78, 0.98, 0.86, 0.16, 0.12, -0.46);
    addFurryPart(armGeo, plushMat, 1.78, 0.98, 0.86, 0.16, -0.12, 0.46);

    // 2 Big Forward-Protruding Round Seated Cream Plush Feet Positioned at Lower Hips (Leaving belly & tag clean!)
    const pawGeo = new THREE.SphereGeometry(0.94, 26, 20);
    pawGeo.scale(0.92, 0.98, 1.18);

    addFurryPart(pawGeo, plushMat, -1.08, -1.25, 1.24, -0.22, 0.14, 0);
    addFurryPart(pawGeo, plushMat, 1.08, -1.25, 1.24, -0.22, -0.14, 0);
    this.bunnyPadMat = null;

    // Silky Pastel-Pink Satin Collar, Sculpted Silk Bow & "THE GIFT ♥" Tag (Floating cleanly ON TOP of chest fur!)
    const bowGroup = new THREE.Group();
    const ribbonPinkMat = new THREE.MeshStandardMaterial({
      color: 0xf19cb2,
      roughness: 0.26,
      metalness: 0.12
    });

    // Flattened satin neck collar band hugging narrow neck cleanly
    const collarGeo = new THREE.TorusGeometry(1.18, 0.12, 14, 36);
    collarGeo.scale(1.05, 0.72, 1.16);
    const collarMesh = new THREE.Mesh(collarGeo, ribbonPinkMat);
    collarMesh.position.set(0, 2.02, 0.42);
    collarMesh.rotation.x = Math.PI / 2 + 0.08;
    collarMesh.castShadow = true;
    bowGroup.add(collarMesh);

    // Center gathered satin knot resting clearly on chest front
    const knotGeo = new THREE.SphereGeometry(0.22, 16, 12);
    knotGeo.scale(1.05, 0.86, 0.75);
    const knot = new THREE.Mesh(knotGeo, ribbonPinkMat);
    knot.position.set(0, 1.94, 1.88);
    bowGroup.add(knot);

    // Sculpted Crisp Flat Silk Bow Loops (ExtrudeGeometry winged butterfly lobes)
    const bowWingShape = new THREE.Shape();
    bowWingShape.moveTo(0, 0);
    bowWingShape.bezierCurveTo(0.22, 0.24, 0.72, 0.44, 0.92, 0.26);
    bowWingShape.bezierCurveTo(1.06, 0.12, 1.04, -0.18, 0.86, -0.32);
    bowWingShape.bezierCurveTo(0.64, -0.44, 0.22, -0.18, 0, -0.04);
    bowWingShape.closePath();

    const bowWingGeo = new THREE.ExtrudeGeometry(bowWingShape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 3,
      steps: 1,
      bevelSize: 0.04,
      bevelThickness: 0.04
    });

    const wingR = new THREE.Mesh(bowWingGeo, ribbonPinkMat);
    wingR.position.set(0.08, 1.94, 1.82);
    wingR.rotation.set(0.08, -0.26, 0.12);
    wingR.castShadow = true;
    bowGroup.add(wingR);

    const wingL = new THREE.Mesh(bowWingGeo, ribbonPinkMat);
    wingL.position.set(-0.08, 1.94, 1.94);
    wingL.rotation.set(-0.08, Math.PI + 0.26, -0.12);
    wingL.castShadow = true;
    bowGroup.add(wingL);

    // Flat Splayed Satin Tails Angled Forward Above Belly Fur (Wide V-angle)
    const bowTailShape = new THREE.Shape();
    bowTailShape.moveTo(-0.11, 0);
    bowTailShape.lineTo(0.11, 0);
    bowTailShape.lineTo(0.19, -1.28);
    bowTailShape.lineTo(0, -1.12);
    bowTailShape.lineTo(-0.19, -1.28);
    bowTailShape.closePath();

    const bowTailGeo = new THREE.ExtrudeGeometry(bowTailShape, {
      depth: 0.035,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.012,
      bevelThickness: 0.012
    });

    const tailL = new THREE.Mesh(bowTailGeo, ribbonPinkMat);
    tailL.position.set(-0.14, 1.84, 1.92);
    tailL.rotation.set(-0.34, 0.08, -0.62);
    bowGroup.add(tailL);

    const tailR = new THREE.Mesh(bowTailGeo, ribbonPinkMat);
    tailR.position.set(0.14, 1.84, 1.92);
    tailR.rotation.set(-0.34, -0.08, 0.62);
    bowGroup.add(tailR);

    // Thin satin hang string connecting knot to circular tag
    const hangCord = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.36, 8), ribbonPinkMat);
    hangCord.position.set(0, 1.66, 2.04);
    hangCord.rotation.x = -0.35;
    bowGroup.add(hangCord);

    // Circular Medal Tag ("THE GIFT ♥"): solid matte pastel pink disc + sharp planar label cap facing camera
    const medalDisc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.62, 0.62, 0.04, 36),
      new THREE.MeshStandardMaterial({ color: 0xf2b1c4, roughness: 0.88 })
    );
    medalDisc.position.set(0, 1.18, 2.15);
    medalDisc.rotation.x = Math.PI / 2 - 0.14;
    medalDisc.castShadow = true;
    bowGroup.add(medalDisc);

    const medalTex = TextureManager.createMedalTexture();
    const medalFace = new THREE.Mesh(
      new THREE.CircleGeometry(0.61, 36),
      new THREE.MeshStandardMaterial({ map: medalTex, roughness: 0.86, metalness: 0.0 })
    );
    medalFace.position.set(0, 1.18, 2.176);
    medalFace.rotation.x = -0.14;
    bowGroup.add(medalFace);

    bowGroup.visible = isPink;
    bunnyGroup.add(bowGroup);
    this.bunnyBowGroup = bowGroup;

    // Laying down peacefully in the molded tray cushion tilted slightly toward camera like Photo 2
    bunnyGroup.position.set(0, 1.82, -0.25);
    bunnyGroup.rotation.set(-Math.PI / 2 + 0.24, 0, 0);

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

  // 3. Scented Candle (Thick Glass Jar, Beveled Oak Lid, Glowing Dual-Layer Flame)
  buildScentedCandle() {
    const candleGroup = new THREE.Group();
    candleGroup.name = 'candle';
    this.products['candle'] = candleGroup;

    const potHeight = 3.6;
    const isPink = (this.currentEdition === 'pink');

    const candleGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.06,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.20,
      depthWrite: false
    });
    const candleCeramicMat = new THREE.MeshStandardMaterial({
      color: 0xd7cebf,
      roughness: 0.72
    });
    this.candleGlassMat = candleGlassMat;
    this.candleCeramicMat = candleCeramicMat;

    const potMat = isPink ? candleGlassMat : candleCeramicMat;

    const pot = new THREE.Mesh(new THREE.CylinderGeometry(1.85, 1.75, potHeight, 36), potMat);
    pot.position.y = potHeight / 2;
    pot.castShadow = true;
    candleGroup.add(pot);
    this.candlePotMesh = pot;

    // Thick clear glass base puck & polished upper rim for realistic glass refraction highlights
    const glassBase = new THREE.Mesh(new THREE.CylinderGeometry(1.75, 1.66, 0.26, 36), candleGlassMat);
    glassBase.position.y = 0.13;
    glassBase.visible = isPink;
    candleGroup.add(glassBase);
    this.candleGlassBase = glassBase;

    const glassRim = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.055, 12, 36), candleGlassMat);
    glassRim.rotation.x = Math.PI / 2;
    glassRim.position.y = potHeight;
    glassRim.visible = isPink;
    candleGroup.add(glassRim);
    this.candleGlassRim = glassRim;

    // Chamfered Natural Cork/Oak Wood Lid
    const woodTex = TextureManager.createWoodTexture();
    const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.50, metalness: 0.02 });
    const lidBody = new THREE.Mesh(new THREE.CylinderGeometry(1.92, 1.94, 0.44, 36), woodMat);
    lidBody.position.y = potHeight + 0.22;
    lidBody.castShadow = true;
    lidBody.visible = isPink;
    candleGroup.add(lidBody);

    const lidChamfer = new THREE.Mesh(new THREE.CylinderGeometry(1.82, 1.92, 0.12, 36), woodMat);
    lidChamfer.position.y = potHeight + 0.50;
    lidChamfer.visible = isPink;
    candleGroup.add(lidChamfer);
    this.candleLidMesh = lidBody;
    this.candleLidChamferMesh = lidChamfer;

    // Soft pastel blush-pink soy wax in Pink Edition (cream in White Edition) — matching Photos 1 & 2
    const waxColor = isPink ? 0xf2bec8 : 0xf8f6f0;
    const waxMat = new THREE.MeshStandardMaterial({
      color: waxColor,
      roughness: 0.78,
      metalness: 0.01
    });

    const waxBodyGeo = new THREE.CylinderGeometry(1.70, 1.60, potHeight - 0.48, 36);
    const waxBody = new THREE.Mesh(waxBodyGeo, waxMat);
    waxBody.position.y = (potHeight - 0.48) / 2 + 0.26;
    waxBody.receiveShadow = true;
    candleGroup.add(waxBody);
    this.candleWaxBodyMesh = waxBody;

    // Top wax surface inside jar
    const waxTopMat = new THREE.MeshStandardMaterial({
      color: isPink ? 0xf5cad2 : 0xfefaf2,
      roughness: 0.55,
      metalness: 0.02
    });
    const wax = new THREE.Mesh(new THREE.CylinderGeometry(1.70, 1.70, 0.14, 36), waxTopMat);
    wax.position.y = potHeight - 0.22;
    candleGroup.add(wax);
    this.candleWaxMesh = wax;

    // Subtle cotton wick inside glass jar (under beveled wooden lid, cleanly matching reference photo)
    const wickMat = new THREE.MeshStandardMaterial({ color: 0x3b2c22, roughness: 0.9 });
    const wick = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.045, 0.22, 8), wickMat);
    wick.position.y = potHeight - 0.10;
    candleGroup.add(wick);

    this.candleFlame = null;
    this.candleLight = null;

    const labelTex = TextureManager.createCandleLabelTexture(this.currentEdition);
    const labelMat = new THREE.MeshStandardMaterial({ map: labelTex, roughness: 0.7, transparent: true });
    const label = new THREE.Mesh(
      new THREE.CylinderGeometry(1.87, 1.77, 1.8, 32, 1, true, -Math.PI / 3.2, Math.PI / 1.6),
      labelMat
    );
    label.position.y = potHeight / 2;
    label.rotation.y = 0.16;
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

  // 4. Airtight Tea Jar (Lively 3D Chamomile Blossoms Visible Through Glass & Curved Label)
  buildTeaJar() {
    const jarGroup = new THREE.Group();
    jarGroup.name = 'teajar';
    this.products['teajar'] = jarGroup;

    const jarH = 3.6, jarR = 1.85;
    const isPink = (this.currentEdition === 'pink');

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.20,
      roughness: 0.06,
      metalness: 0.08,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      depthWrite: false
    });

    const glassMesh = new THREE.Mesh(new THREE.CylinderGeometry(jarR, jarR, jarH, 32), glassMat);
    glassMesh.position.y = jarH / 2;
    jarGroup.add(glassMesh);

    const glassBase = new THREE.Mesh(new THREE.CylinderGeometry(jarR - 0.02, jarR - 0.06, 0.24, 32), glassMat);
    glassBase.position.y = 0.12;
    jarGroup.add(glassBase);

    const glassRim = new THREE.Mesh(new THREE.TorusGeometry(jarR - 0.02, 0.055, 10, 32), glassMat);
    glassRim.rotation.x = Math.PI / 2;
    glassRim.position.y = jarH;
    jarGroup.add(glassRim);

    const woodTex = TextureManager.createWoodTexture();
    const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.50, metalness: 0.02 });
    const lidBody = new THREE.Mesh(new THREE.CylinderGeometry(jarR + 0.08, jarR + 0.08, 0.46, 32), woodMat);
    lidBody.position.y = jarH + 0.23;
    lidBody.castShadow = true;
    jarGroup.add(lidBody);

    const lidChamfer = new THREE.Mesh(new THREE.CylinderGeometry(jarR - 0.04, jarR + 0.08, 0.12, 32), woodMat);
    lidChamfer.position.y = jarH + 0.52;
    jarGroup.add(lidChamfer);

    // Textured herbal tea inner core
    const teaTex = TextureManager.createTeaInsideTexture(this.currentEdition);
    const teaMat = new THREE.MeshStandardMaterial({ map: teaTex, roughness: 0.85 });
    const teaMesh = new THREE.Mesh(new THREE.CylinderGeometry(jarR - 0.30, jarR - 0.30, jarH - 0.52, 28), teaMat);
    teaMesh.position.y = (jarH - 0.52) / 2 + 0.22;
    teaMesh.castShadow = true;
    jarGroup.add(teaMesh);
    this.teaMesh = teaMesh;

    // Densely packed Instanced 3D Dried Chamomile Blossoms / Rosebuds (matching Photos 1, 2 & 3)
    const budCenterMat = new THREE.MeshStandardMaterial({ color: isPink ? 0xe6b148 : 0x9e3f58, roughness: 0.72 });
    const petalRingMat = new THREE.MeshStandardMaterial({ color: isPink ? 0xf7ebd2 : 0xd88b9f, roughness: 0.78 });
    const stemFleckMat = new THREE.MeshStandardMaterial({ color: isPink ? 0x9b7a44 : 0x5c6848, roughness: 0.85 });
    this.teaBudMat = budCenterMat;
    this.teaPetalMat = petalRingMat;
    this.teaStemMat = stemFleckMat;

    const totalFlowers = 78;
    const petalsPerFlower = 5;
    const budInst = new THREE.InstancedMesh(new THREE.SphereGeometry(0.19, 8, 6), budCenterMat, totalFlowers);
    const petalInst = new THREE.InstancedMesh(new THREE.SphereGeometry(0.11, 6, 5), petalRingMat, totalFlowers * petalsPerFlower);
    const stemInst = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.025, 0.025, 0.36, 5), stemFleckMat, 22);

    const dummy = new THREE.Object3D();
    const pDummy = new THREE.Object3D();
    let seedT = 13;
    const trand = () => {
      seedT = (seedT * 1664525 + 1013904223) % 4294967296;
      return seedT / 4294967296;
    };

    let pIdx = 0;
    for (let i = 0; i < totalFlowers; i++) {
      let fx, fy, fz, sc, rx, ry, rz;
      if (i < 58) {
        const angle = (i / 58) * Math.PI * 10 + trand() * 0.35;
        fy = 0.36 + (i / 58) * (jarH - 0.72);
        const rad = jarR - 0.25;
        fx = Math.cos(angle) * rad;
        fz = Math.sin(angle) * rad;
        sc = 0.88 + trand() * 0.34;
        rx = trand() * Math.PI;
        ry = angle;
        rz = trand() * Math.PI;
      } else {
        const angle = trand() * Math.PI * 2;
        const dist = trand() * (jarR - 0.38);
        fx = Math.cos(angle) * dist;
        fy = jarH - 0.42 + trand() * 0.16;
        fz = Math.sin(angle) * dist;
        sc = 0.90 + trand() * 0.30;
        rx = trand() * 0.7;
        ry = angle;
        rz = trand() * 0.7;
      }

      dummy.position.set(fx, fy, fz);
      dummy.rotation.set(rx, ry, rz);
      dummy.scale.setScalar(sc);
      dummy.updateMatrix();
      budInst.setMatrixAt(i, dummy.matrix);

      for (let p = 0; p < petalsPerFlower; p++) {
        const a = (p / petalsPerFlower) * Math.PI * 2;
        pDummy.position.set(Math.cos(a) * 0.19, -0.03, Math.sin(a) * 0.19).applyEuler(dummy.rotation).multiplyScalar(sc).add(dummy.position);
        pDummy.rotation.copy(dummy.rotation);
        pDummy.scale.set(1.1 * sc, 0.45 * sc, 0.75 * sc);
        pDummy.updateMatrix();
        petalInst.setMatrixAt(pIdx++, pDummy.matrix);
      }
    }
    budInst.instanceMatrix.needsUpdate = true;
    petalInst.instanceMatrix.needsUpdate = true;
    jarGroup.add(budInst);
    jarGroup.add(petalInst);

    for (let i = 0; i < 22; i++) {
      const angle = trand() * Math.PI * 2;
      const rad = jarR - 0.23;
      dummy.position.set(Math.cos(angle) * rad, 0.45 + trand() * (jarH - 0.95), Math.sin(angle) * rad);
      dummy.rotation.set(trand() * Math.PI, trand() * Math.PI, trand() * Math.PI);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      stemInst.setMatrixAt(i, dummy.matrix);
    }
    stemInst.instanceMatrix.needsUpdate = true;
    jarGroup.add(stemInst);

    // Curved Front Label Hugging Glass Cylinder (Faces front +Z slightly angled right toward 3/4 view)
    const teaLabelTex = TextureManager.createTeaJarLabelTexture(this.currentEdition);
    const teaLabelMat = new THREE.MeshStandardMaterial({ map: teaLabelTex, roughness: 0.58, transparent: true });
    const teaLabelMesh = new THREE.Mesh(
      new THREE.CylinderGeometry(jarR + 0.025, jarR + 0.025, 1.72, 32, 1, true, -Math.PI / 3.4, Math.PI / 1.7),
      teaLabelMat
    );
    teaLabelMesh.position.y = jarH / 2;
    teaLabelMesh.rotation.y = 0.16;
    jarGroup.add(teaLabelMesh);
    this.teaLabelMesh = teaLabelMesh;

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

  // 5. Ceramic Aroma Diffuser Stone (Clean Porcelain Hourglass Vessel, Front Vent Hole & Circular Stamp)
  buildCeramicDiffuser() {
    const diffuserGroup = new THREE.Group();
    diffuserGroup.name = 'diffuser';
    this.products['diffuser'] = diffuserGroup;

    const ceramicGlazeMat = new THREE.MeshStandardMaterial({
      color: 0xf4e4d6,
      roughness: 0.24,
      metalness: 0.03
    });

    const points = [];
    points.push(new THREE.Vector2(1.44, 0));
    points.push(new THREE.Vector2(1.88, 0.45));
    points.push(new THREE.Vector2(1.98, 1.30));
    points.push(new THREE.Vector2(1.62, 2.38));
    points.push(new THREE.Vector2(1.94, 3.22));
    points.push(new THREE.Vector2(1.86, 3.48));
    points.push(new THREE.Vector2(1.50, 3.44));
    points.push(new THREE.Vector2(1.16, 3.06));
    points.push(new THREE.Vector2(0, 2.86));

    const latheGeo = new THREE.LatheGeometry(points, 42);
    const bodyMesh = new THREE.Mesh(latheGeo, ceramicGlazeMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    diffuserGroup.add(bodyMesh);

    // Flush 3D recessed circular vent hole on front neck (zero half-circle wall clipping)
    const ventRimMat = new THREE.MeshStandardMaterial({ color: 0xe3cfc0, roughness: 0.35 });
    const ventRim = new THREE.Mesh(new THREE.TorusGeometry(0.19, 0.028, 10, 24), ventRimMat);
    ventRim.position.set(0, 2.22, 1.79);
    ventRim.rotation.x = -0.22;
    diffuserGroup.add(ventRim);

    const ventHole = new THREE.Mesh(
      new THREE.CylinderGeometry(0.175, 0.175, 0.24, 24),
      new THREE.MeshStandardMaterial({ color: 0x261a15, roughness: 0.92 })
    );
    ventHole.rotation.x = Math.PI / 2 - 0.22;
    ventHole.position.set(0, 2.22, 1.69);
    diffuserGroup.add(ventHole);

    // Crisp Circular "THE GIFT" Stamp on Lower Front-Right Curve (facing up-forward for 3/4 view)
    const stampTex = TextureManager.createDiffuserStampTexture();
    const stampMat = new THREE.MeshStandardMaterial({ map: stampTex, roughness: 0.36, transparent: true });
    const stamp = new THREE.Mesh(new THREE.CircleGeometry(0.46, 28), stampMat);
    stamp.position.set(0.96, 1.02, 1.66);
    stamp.rotation.set(-0.22, 0.44, 0);
    diffuserGroup.add(stamp);

    this.diffuserLight = null;

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

  // Helper: Rounded-corner beveled cardstock geometry
  _createRoundedCardGeo(w, d, h, r = 0.22) {
    const hw = w / 2, hd = d / 2;
    const s = new THREE.Shape();
    s.moveTo(-hw + r, -hd);
    s.lineTo(hw - r, -hd);
    s.quadraticCurveTo(hw, -hd, hw, -hd + r);
    s.lineTo(hw, hd - r);
    s.quadraticCurveTo(hw, hd, hw - r, hd);
    s.lineTo(-hw + r, hd);
    s.quadraticCurveTo(-hw, hd, -hw, hd - r);
    s.lineTo(-hw, -hd + r);
    s.quadraticCurveTo(-hw, -hd, -hw + r, -hd);
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: h,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.015,
      bevelSegments: 2
    });
    return geo;
  }

  // 6. Mini Photo & Flowing Silk Satin Ribbon Bow
  buildPhotoAndRibbon() {
    const photoGroup = new THREE.Group();
    photoGroup.name = 'photo';
    this.products['photo'] = photoGroup;

    const fw = 4.2, fh = 5.2, fd = 0.12;

    const frameGeo = this._createRoundedCardGeo(fw, fh, fd, 0.18);
    const frameMesh = new THREE.Mesh(frameGeo, new THREE.MeshStandardMaterial({ color: 0xfdfaf4, roughness: 0.42 }));
    frameMesh.rotation.x = -Math.PI / 2;
    frameMesh.position.y = -fd / 2;
    frameMesh.castShadow = true;
    frameMesh.receiveShadow = true;
    photoGroup.add(frameMesh);

    const rimGeo = this._createRoundedCardGeo(fw + 0.08, fh + 0.08, fd - 0.02, 0.20);
    const rimMesh = new THREE.Mesh(rimGeo, new THREE.MeshStandardMaterial({ color: 0xe3ba74, metalness: 0.65, roughness: 0.32 }));
    rimMesh.rotation.x = -Math.PI / 2;
    rimMesh.position.y = -(fd - 0.02) / 2 - 0.004;
    rimMesh.visible = (this.currentEdition !== 'pink');
    photoGroup.add(rimMesh);
    this.photoRimMesh = rimMesh;

    const photoTex = TextureManager.createCouplePhotoTexture(this.currentEdition);
    const photoMesh = new THREE.Mesh(new THREE.PlaneGeometry(fw - 0.28, fh - 0.28), new THREE.MeshStandardMaterial({ map: photoTex, roughness: 0.32 }));
    photoMesh.rotation.x = -Math.PI / 2;
    photoMesh.position.set(0, fd / 2 + 0.022, 0);
    photoGroup.add(photoMesh);
    this.photoMesh = photoMesh;

    // Flowing Dusty-Rose Satin Silk Ribbon draped neatly across upper-right corner (keeps "For you ♡" crisp)
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xe89eb2,
      roughness: 0.28,
      metalness: 0.14,
      side: THREE.DoubleSide
    });

    const ribbonCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.45, fd / 2 + 0.06, -2.55),
      new THREE.Vector3(1.55, fd / 2 + 0.14, -1.55),
      new THREE.Vector3(2.25, fd / 2 + 0.16, -0.35),
      new THREE.Vector3(2.75, 0.22, 0.85),
      new THREE.Vector3(3.45, 0.08, 2.15)
    ]);

    const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 40, 0.34, 12, false);
    ribbonGeo.scale(1.0, 0.16, 1.0);
    const ribbonMesh = new THREE.Mesh(ribbonGeo, ribbonMat);
    ribbonMesh.castShadow = true;
    ribbonMesh.visible = (this.currentEdition !== 'pink');
    photoGroup.add(ribbonMesh);
    this.photoRibbonMesh = ribbonMesh;

    // Delicate Satin Ribbon Knot resting at upper-right border
    const bowMini = new THREE.Group();
    const mKnot = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), ribbonMat);
    mKnot.scale.set(1.1, 0.7, 0.9);
    bowMini.add(mKnot);
    const mLoopGeo = new THREE.TorusGeometry(0.24, 0.065, 10, 20, Math.PI * 1.45);
    const ml1 = new THREE.Mesh(mLoopGeo, ribbonMat);
    ml1.rotation.set(Math.PI / 2 - 0.15, 0.3, 0.5);
    ml1.position.set(-0.22, 0.04, -0.05);
    bowMini.add(ml1);
    const ml2 = new THREE.Mesh(mLoopGeo, ribbonMat);
    ml2.rotation.set(Math.PI / 2 - 0.15, -0.3, -0.5);
    ml2.position.set(0.22, 0.04, 0.05);
    bowMini.add(ml2);
    bowMini.position.set(1.55, fd / 2 + 0.14, -1.55);
    bowMini.rotation.y = 0.45;
    bowMini.visible = (this.currentEdition !== 'pink');
    photoGroup.add(bowMini);
    this.photoBowMini = bowMini;

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
    const allFlorets = [];
    const addTwigWithFloret = (pts, floretPositions, radius = 0.017) => {
      const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(p[0], sprigY + p[1], p[2])));
      const stemMesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 14, radius, 6, false), radius > 0.014 ? stemMat : twigMat);
      stemMesh.castShadow = true;
      flowerSprigGroup.add(stemMesh);
      floretPositions.forEach(fp => allFlorets.push(fp));
    };

    // Three fanning dried flower twigs tucked under wax seal fanning up-left (matching Photos 1 & 2)
    addTwigWithFloret(
      [[-0.12, 0.0, 0.25], [-0.75, 0.015, -0.35], [-1.35, 0.02, -1.05], [-1.85, 0.015, -1.55]],
      [[-1.85, 0.02, -1.55, 1.15], [-1.52, 0.03, -1.25, 1.05], [-1.25, 0.02, -0.92, 0.95], [-0.95, 0.025, -0.60, 0.85]],
      0.022
    );
    addTwigWithFloret(
      [[-0.22, 0.0, 0.28], [-0.95, 0.015, -0.05], [-1.68, 0.02, -0.45], [-2.25, 0.012, -0.78]],
      [[-2.25, 0.015, -0.78, 1.12], [-1.88, 0.028, -0.58, 1.02], [-1.55, 0.025, -0.38, 0.92], [-1.18, 0.02, -0.18, 0.88]],
      0.020
    );
    addTwigWithFloret(
      [[-0.08, 0.0, 0.18], [-0.48, 0.015, -0.52], [-0.88, 0.02, -1.25], [-1.18, 0.012, -1.78]],
      [[-1.18, 0.015, -1.78, 1.08], [-0.96, 0.028, -1.42, 0.98], [-0.72, 0.025, -1.02, 0.92], [-0.48, 0.02, -0.64, 0.82]],
      0.019
    );
    // Secondary branching twigs for lush clustered Gypsophila volume
    addTwigWithFloret(
      [[-0.95, 0.015, -0.05], [-1.32, 0.02, 0.12], [-1.62, 0.015, -0.02]],
      [[-1.62, 0.02, -0.02, 0.95], [-1.32, 0.028, 0.12, 0.90], [-1.45, 0.032, -0.12, 0.85]],
      0.015
    );
    addTwigWithFloret(
      [[-0.75, 0.015, -0.35], [-1.25, 0.025, -0.58], [-1.52, 0.02, -0.82]],
      [[-1.52, 0.025, -0.82, 1.0], [-1.25, 0.03, -0.62, 0.92], [-1.72, 0.022, -0.98, 0.88]],
      0.015
    );

    // Instanced Baby's Breath petals, centers & calyces (larger visible cream-white clusters)
    const fCount = allFlorets.length;
    const calyxInst = new THREE.InstancedMesh(new THREE.SphereGeometry(0.042, 6, 5), calyxMat, fCount);
    const centerInst = new THREE.InstancedMesh(new THREE.SphereGeometry(0.052, 7, 5), centerMat, fCount);
    const flPetalInst = new THREE.InstancedMesh(new THREE.SphereGeometry(0.068, 7, 5), petalMat, fCount * 4);
    const fDummy = new THREE.Object3D();
    let fpIdx = 0;

    allFlorets.forEach(([fx, fy, fz, scale], idx) => {
      const by = sprigY + fy;
      fDummy.position.set(fx, by - 0.022 * scale, fz);
      fDummy.scale.setScalar(scale);
      fDummy.updateMatrix();
      calyxInst.setMatrixAt(idx, fDummy.matrix);

      fDummy.position.set(fx, by + 0.018 * scale, fz);
      fDummy.updateMatrix();
      centerInst.setMatrixAt(idx, fDummy.matrix);

      for (let k = 0; k < 4; k++) {
        const ang = (k / 4) * Math.PI * 2 + 0.35;
        fDummy.position.set(fx + Math.cos(ang) * 0.052 * scale, by + 0.02 * scale, fz + Math.sin(ang) * 0.052 * scale);
        fDummy.updateMatrix();
        flPetalInst.setMatrixAt(fpIdx++, fDummy.matrix);
      }
    });
    calyxInst.instanceMatrix.needsUpdate = true;
    centerInst.instanceMatrix.needsUpdate = true;
    flPetalInst.instanceMatrix.needsUpdate = true;
    flowerSprigGroup.add(calyxInst);
    flowerSprigGroup.add(centerInst);
    flowerSprigGroup.add(flPetalInst);

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

  // 8. 3-Step Ritual Card (Rounded Beveled Pastel Cotton Cardstock)
  buildRitualCard() {
    const cardGroup = new THREE.Group();
    cardGroup.name = 'card';
    this.products['card'] = cardGroup;

    const cw = 8.6, ch = 0.14, cd = 4.8;
    const cardTex = TextureManager.createRitualCardTexture(this.currentEdition);
    const cardBase = new THREE.Mesh(
      this._createRoundedCardGeo(cw, cd, ch, 0.28),
      new THREE.MeshStandardMaterial({ color: 0xfdebf0, roughness: 0.78 })
    );
    cardBase.rotation.x = -Math.PI / 2;
    cardBase.position.y = -ch / 2;
    cardBase.castShadow = true;
    cardBase.receiveShadow = true;
    cardGroup.add(cardBase);

    const cardTop = new THREE.Mesh(
      new THREE.PlaneGeometry(cw - 0.12, cd - 0.12),
      new THREE.MeshStandardMaterial({ map: cardTex, roughness: 0.65 })
    );
    cardTop.rotation.x = -Math.PI / 2;
    cardTop.position.y = ch / 2 + 0.02;
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

  // 9. Greeting Card "THE GIFT" (Rounded Cotton Cardstock Lying Flat)
  buildGreetingCard() {
    const greetGroup = new THREE.Group();
    greetGroup.name = 'greeting';
    this.products['greeting'] = greetGroup;

    const gw = 6.2, gh = 9.2, gd = 0.12;
    const greetTex = TextureManager.createGreetingCardTexture();

    const cardBase = new THREE.Mesh(
      this._createRoundedCardGeo(gw, gh, gd, 0.28),
      new THREE.MeshStandardMaterial({ color: 0xfdebf0, roughness: 0.78 })
    );
    cardBase.rotation.x = -Math.PI / 2;
    cardBase.position.y = -gd / 2;
    cardBase.castShadow = true;
    cardBase.receiveShadow = true;
    greetGroup.add(cardBase);

    const cardTop = new THREE.Mesh(
      new THREE.PlaneGeometry(gw - 0.12, gh - 0.12),
      new THREE.MeshStandardMaterial({ map: greetTex, roughness: 0.65 })
    );
    cardTop.rotation.x = -Math.PI / 2;
    cardTop.position.y = gd / 2 + 0.02;
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
      color: 0xe8c4a8,
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
    if (this.boxBaseMat) {
      this.boxBaseMat.color.set(isPink ? 0xe7cfb4 : 0xefe2d0);
    }
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
      this.bunnyPlushMat.color.set(isPink ? 0xffffff : 0xf4eadb);
      this.bunnyPlushMat.map = TextureManager.createBunnyFurTexture(edition);
      this.bunnyPlushMat.needsUpdate = true;
    }
    if (this.bunnyFurShellMats) {
      const nextShellTex = TextureManager.createFurShellTexture(edition);
      this.bunnyFurShellMats.forEach(m => {
        m.map = nextShellTex;
        m.needsUpdate = true;
      });
    }

    if (this.innerEarMat) {
      this.innerEarMat.color.set(isPink ? 0xfadfe7 : 0xe5dbc9);
    }

    if (this.bunnyNoseMesh) {
      this.bunnyNoseMesh.material.color.set(isPink ? 0xf2a4b8 : 0xb59a8c);
    }

    if (this.bunnyPadMat) {
      this.bunnyPadMat.color.set(isPink ? 0xf8dbe3 : 0xdfd3bf);
    }

    if (this.bunnyMouthMat) {
      this.bunnyMouthMat.color.set(isPink ? 0xa47a84 : 0x7d655b);
    }

    if (this.candlePotMesh && this.candleGlassMat && this.candleCeramicMat) {
      this.candlePotMesh.material = isPink ? this.candleGlassMat : this.candleCeramicMat;
      this.candlePotMesh.material.needsUpdate = true;
    }
    if (this.candleGlassBase) this.candleGlassBase.visible = isPink;
    if (this.candleGlassRim) this.candleGlassRim.visible = isPink;
    if (this.candleLidMesh) this.candleLidMesh.visible = isPink;
    if (this.candleLidChamferMesh) this.candleLidChamferMesh.visible = isPink;

    if (this.candleLabelMesh) {
      this.candleLabelMesh.material.map = TextureManager.createCandleLabelTexture(edition);
      this.candleLabelMesh.material.needsUpdate = true;
    }
    if (this.candleWaxMesh) {
      this.candleWaxMesh.material.color.set(isPink ? 0xf5ced5 : 0xf8f6f0);
    }
    if (this.candleWaxBodyMesh) {
      this.candleWaxBodyMesh.material.color.set(isPink ? 0xf2c6ce : 0xf8f6f0);
    }

    if (this.teaMesh) {
      this.teaMesh.material.map = TextureManager.createTeaInsideTexture(edition);
      this.teaMesh.material.needsUpdate = true;
    }
    if (this.teaBudMat) this.teaBudMat.color.set(isPink ? 0xe6b148 : 0x9e3f58);
    if (this.teaPetalMat) this.teaPetalMat.color.set(isPink ? 0xf7ebd2 : 0xd88b9f);
    if (this.teaStemMat) this.teaStemMat.color.set(isPink ? 0x9b7a44 : 0x5c6848);
    if (this.teaLabelMesh) {
      this.teaLabelMesh.material.map = TextureManager.createTeaJarLabelTexture(edition);
      this.teaLabelMesh.material.needsUpdate = true;
    }

    if (this.photoMesh) {
      this.photoMesh.material.map = TextureManager.createCouplePhotoTexture(edition);
      this.photoMesh.material.needsUpdate = true;
    }
    if (this.photoRimMesh) this.photoRimMesh.visible = !isPink;
    if (this.photoRibbonMesh) this.photoRibbonMesh.visible = !isPink;
    if (this.photoBowMini) this.photoBowMini.visible = !isPink;

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
      this.candleLight.intensity = 1.2 + Math.sin(elapsed * 14) * 0.16 + Math.cos(elapsed * 21) * 0.10;
    }
    if (this.candleFlame) {
      this.candleFlame.scale.x = 0.85 + Math.sin(elapsed * 11) * 0.06;
      this.candleFlame.scale.y = 2.0 + Math.cos(elapsed * 16) * 0.15;
      this.candleFlame.rotation.z = Math.sin(elapsed * 8) * 0.06;
    }
    if (this.diffuserLight) {
      this.diffuserLight.intensity = 0.55 + Math.sin(elapsed * 11) * 0.08;
    }

    // Subtle gentle breathing animation for bunny
    const bunny = this.products['bunny'];
    if (bunny && bunny.userData.basePos && this.explodeFactor < 0.1) {
      const breath = Math.sin(elapsed * 2.2) * 0.025;
      bunny.scale.set(1.0 + breath * 0.5, 1.0 + breath, 1.0 + breath * 0.5);
    }
  }
}
