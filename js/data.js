// 食谱数据
const recipes = [
  {
    id: 1,
    name: "红烧肉",
    category: "家常菜",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=delicious%20chinese%20red%20braised%20pork%20dish%20in%20ceramic%20bowl%20food%20photography&image_size=square",
    difficulty: "中等",
    time: "60分钟",
    tags: ["家常", "下饭", "肉类"],
    description: "经典家常菜，肥而不腻，入口即化，是中国家庭餐桌上的常客。",
    ingredients: [
      { name: "五花肉", amount: "500g" },
      { name: "生抽", amount: "2勺" },
      { name: "老抽", amount: "1勺" },
      { name: "冰糖", amount: "30g" },
      { name: "料酒", amount: "2勺" },
      { name: "姜片", amount: "5片" },
      { name: "八角", amount: "2个" },
      { name: "桂皮", amount: "1小块" },
      { name: "盐", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pork%20belly%20cut%20into%20cubes%20on%20cutting%20board&image_size=square", description: "五花肉切成3cm见方的块，冷水下锅焯水，去除血沫后捞出洗净。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sugar%20caramelizing%20in%20hot%20pan%20golden%20brown&image_size=square", description: "锅中放少许油，加入冰糖小火炒至焦糖色。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pork%20pieces%20stir%20frying%20in%20wok%20with%20sauce&image_size=square", description: "放入焯好的五花肉翻炒均匀，使每块肉都裹上糖色。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20spices%20ginger%20star%20anise%20cinnamon%20in%20bowl&image_size=square", description: "加入姜片、八角、桂皮，倒入料酒、生抽、老抽翻炒均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pork%20simmering%20in%20pot%20with%20steam%20rising&image_size=square", description: "加入没过肉的热水，大火烧开后转小火慢炖40分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=red%20braised%20pork%20finished%20dish%20glistening%20sauce&image_size=square", description: "最后开大火收汁，加盐调味，汤汁浓稠即可出锅。" }
    ],
    tips: [
      "焯水时冷水下锅能更好地去除血水和腥味",
      "炒糖色时一定要小火慢炒，避免糊锅",
      "用热水炖肉能使肉质更鲜嫩，不会发硬"
    ],
    views: 12580,
    favorites: 3260,
    rating: 4.9
  },
  {
    id: 2,
    name: "番茄炒蛋",
    category: "家常菜",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20tomato%20egg%20stir%20fry%20dish%20colorful%20food%20photography&image_size=square",
    difficulty: "简单",
    time: "15分钟",
    tags: ["快手", "家常", "新手友好"],
    description: "最简单也是最经典的家常菜，酸甜可口，营养丰富，是每个厨房新手的入门菜。",
    ingredients: [
      { name: "番茄", amount: "2个" },
      { name: "鸡蛋", amount: "3个" },
      { name: "葱花", amount: "适量" },
      { name: "盐", amount: "适量" },
      { name: "白糖", amount: "1小勺" },
      { name: "食用油", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomatoes%20and%20eggs%20ingredients%20on%20kitchen%20counter&image_size=square", description: "番茄洗净切块，鸡蛋打散加少许盐搅匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scrambled%20eggs%20cooking%20in%20frying%20pan&image_size=square", description: "锅中放油烧热，倒入蛋液快速翻炒至凝固，盛出备用。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomatoes%20cooking%20in%20pan%20juicy%20sauce&image_size=square", description: "锅中再放少许油，放入番茄块翻炒至出汁变软。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20egg%20stir%20fry%20mixing%20in%20pan&image_size=square", description: "加入炒好的鸡蛋，加盐、白糖调味，翻炒均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tomato%20egg%20dish%20garnished%20with%20green%20onions&image_size=square", description: "出锅前撒上葱花，翻炒均匀即可。" }
    ],
    tips: [
      "鸡蛋打散时加少许清水，炒出的蛋更蓬松",
      "番茄可以先用开水烫一下去皮，口感更好",
      "喜欢酸一点的可以少放糖，喜欢甜一点的多放糖"
    ],
    views: 25680,
    favorites: 8960,
    rating: 4.8
  },
  {
    id: 3,
    name: "提拉米苏",
    category: "甜品甜点",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=authentic%20italian%20tiramisu%20dessert%20in%20glass%20dish%20cocoa%20powder&image_size=square",
    difficulty: "中等",
    time: "120分钟",
    tags: ["意式", "甜品", "下午茶"],
    description: "意大利经典甜品，层次丰富，口感绵密，咖啡与奶油的完美融合。",
    ingredients: [
      { name: "马斯卡彭奶酪", amount: "250g" },
      { name: "蛋黄", amount: "3个" },
      { name: "细砂糖", amount: "60g" },
      { name: "淡奶油", amount: "200ml" },
      { name: "手指饼干", amount: "200g" },
      { name: "浓缩咖啡", amount: "200ml" },
      { name: "朗姆酒", amount: "2勺" },
      { name: "可可粉", amount: "适量" },
      { name: "糖粉", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tiramisu%20ingredients%20mascarpone%20eggs%20coffee%20on%20table&image_size=square", description: "准备好所有材料，咖啡提前放凉，加入朗姆酒混合。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=egg%20yolks%20whisking%20with%20sugar%20in%20bowl&image_size=square", description: "蛋黄加细砂糖打发至颜色变浅、体积膨胀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mascarpone%20cheese%20mixing%20with%20egg%20yolk%20mixture&image_size=square", description: "马斯卡彭奶酪打发至顺滑，分3次加入蛋黄糊拌匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=whipped%20cream%20soft%20peaks%20in%20bowl&image_size=square", description: "淡奶油打发至7分发，与奶酪糊混合均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=assembling%20tiramisu%20layering%20ladyfingers%20and%20cream&image_size=square", description: "手指饼干快速蘸咖啡，铺在容器底部，倒入一半奶酪糊；再铺一层蘸咖啡的饼干，倒入剩余奶酪糊。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=tiramisu%20finished%20dusted%20with%20cocoa%20powder&image_size=square", description: "冷藏4小时以上，食用前筛上可可粉和糖粉装饰。" }
    ],
    tips: [
      "没有马斯卡彭可用奶油奶酪代替，但口感会有差异",
      "手指饼干蘸咖啡要快，避免泡烂",
      "冷藏时间越长，口感越好"
    ],
    views: 18960,
    favorites: 5680,
    rating: 4.9
  },
  {
    id: 4,
    name: "紫菜蛋花汤",
    category: "汤品羹粥",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20seaweed%20egg%20drop%20soup%20in%20white%20bowl%20green%20onions&image_size=square",
    difficulty: "简单",
    time: "10分钟",
    tags: ["快手", "汤品", "清淡"],
    description: "简单快手的家常汤品，营养丰富，清淡开胃，适合搭配各种主食。",
    ingredients: [
      { name: "紫菜", amount: "1片" },
      { name: "鸡蛋", amount: "1个" },
      { name: "葱花", amount: "适量" },
      { name: "香菜", amount: "适量" },
      { name: "盐", amount: "适量" },
      { name: "生抽", amount: "1勺" },
      { name: "香油", amount: "少许" },
      { name: "胡椒粉", amount: "少许" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=seaweed%20egg%20soup%20ingredients%20on%20kitchen%20counter&image_size=square", description: "紫菜用清水泡软洗净，鸡蛋打散备用。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=water%20boiling%20in%20pot%20with%20seaweed&image_size=square", description: "锅中加水烧开，放入紫菜煮2分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=egg%20drop%20soup%20pouring%20egg%20into%20broth&image_size=square", description: "转小火，慢慢倒入蛋液，形成蛋花。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=seasoning%20soup%20with%20salt%20soy%20sauce%20in%20bowl&image_size=square", description: "加盐、生抽、胡椒粉调味。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=seaweed%20egg%20soup%20finished%20with%20green%20onions%20cilantro&image_size=square", description: "出锅前撒上葱花、香菜，淋上香油即可。" }
    ],
    tips: [
      "紫菜要提前泡软并清洗干净",
      "倒蛋液时要沿着锅边慢慢倒，蛋花更细腻",
      "可以加点虾米或豆腐增加营养"
    ],
    views: 15680,
    favorites: 4260,
    rating: 4.7
  },
  {
    id: 5,
    name: "手抓饼",
    category: "面点小吃",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20flaky%20pancake%20shouzhua%20bing%20crispy%20golden%20with%20egg&image_size=square",
    difficulty: "中等",
    time: "40分钟",
    tags: ["面点", "早餐", "酥脆"],
    description: "外酥里嫩，层次分明，可以夹各种配菜，是早餐的绝佳选择。",
    ingredients: [
      { name: "中筋面粉", amount: "300g" },
      { name: "温水", amount: "180ml" },
      { name: "盐", amount: "3g" },
      { name: "食用油", amount: "50ml" },
      { name: "面粉（油酥用）", amount: "30g" },
      { name: "五香粉", amount: "少许" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dough%20kneading%20flour%20water%20on%20board&image_size=square", description: "面粉加盐，用温水和成光滑面团，醒发30分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=oil%20paste%20flour%20oil%20mixing%20in%20bowl&image_size=square", description: "面粉加五香粉、热油调成油酥。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dough%20rolled%20flat%20with%20oil%20paste%20spread&image_size=square", description: "醒好的面团分成4份，擀成长方形薄片，均匀抹上油酥。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=dough%20folding%20layering%20for%20flaky%20pancake&image_size=square", description: "像折扇子一样折起，盘成螺旋状，醒发15分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pancake%20cooking%20on%20hot%20griddle%20golden%20brown&image_size=square", description: "擀成薄饼，平底锅刷油，中小火煎至两面金黄酥脆。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20flaky%20pancake%20pulling%20apart%20showing%20layers&image_size=square", description: "出锅后用手从两侧向中间推，使层次散开，即可享用。" }
    ],
    tips: [
      "面团要和得软一些，醒发时间要足够",
      "抹油酥要均匀，这是形成层次的关键",
      "煎的时候用中小火，火太大容易外糊里生"
    ],
    views: 21360,
    favorites: 6890,
    rating: 4.8
  },
  {
    id: 6,
    name: "鸡胸肉沙拉",
    category: "减脂轻食",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=healthy%20chicken%20breast%20salad%20with%20vegetables%20quinoa%20avocado%20bowl&image_size=square",
    difficulty: "简单",
    time: "20分钟",
    tags: ["减脂", "健康", "高蛋白"],
    description: "高蛋白低脂肪的健康轻食，营养均衡，是减脂期的理想选择。",
    ingredients: [
      { name: "鸡胸肉", amount: "200g" },
      { name: "生菜", amount: "100g" },
      { name: "紫甘蓝", amount: "50g" },
      { name: "樱桃番茄", amount: "10颗" },
      { name: "黄瓜", amount: "1根" },
      { name: "牛油果", amount: "半个" },
      { name: "橄榄油", amount: "2勺" },
      { name: "柠檬汁", amount: "1勺" },
      { name: "黑胡椒", amount: "适量" },
      { name: "盐", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chicken%20breast%20and%20fresh%20vegetables%20ingredients%20on%20table&image_size=square", description: "鸡胸肉洗净，用盐、黑胡椒腌制10分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=grilled%20chicken%20breast%20cooking%20on%20grill%20pan&image_size=square", description: "平底锅刷少许油，放入鸡胸肉煎至两面金黄熟透。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cutting%20vegetables%20salad%20ingredients%20on%20board&image_size=square", description: "生菜撕成小片，紫甘蓝切丝，黄瓜切片，番茄对半切，牛油果切块。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chicken%20breast%20sliced%20on%20cutting%20board&image_size=square", description: "煎好的鸡胸肉放凉后切片。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=making%20salad%20dressing%20olive%20oil%20lemon%20juice&image_size=square", description: "橄榄油、柠檬汁、盐、黑胡椒调成酱汁。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=assembled%20chicken%20salad%20bowl%20colorful%20fresh&image_size=square", description: "所有蔬菜放入大碗，加入鸡肉片，淋上酱汁拌匀即可。" }
    ],
    tips: [
      "鸡胸肉不要煎太久，否则会变老",
      "可以加入藜麦、坚果增加口感和营养",
      "酱汁可以根据口味调整，也可用酸奶代替"
    ],
    views: 19860,
    favorites: 7560,
    rating: 4.8
  },
  {
    id: 7,
    name: "蛋炒饭",
    category: "快手简餐",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20egg%20fried%20rice%20golden%20grains%20green%20onions%20wok&image_size=square",
    difficulty: "简单",
    time: "10分钟",
    tags: ["快手", "主食", "剩饭利用"],
    description: "最经典的中式快餐，粒粒分明，金黄诱人，是剩饭的最佳处理方式。",
    ingredients: [
      { name: "隔夜米饭", amount: "2碗" },
      { name: "鸡蛋", amount: "2个" },
      { name: "葱花", amount: "适量" },
      { name: "盐", amount: "适量" },
      { name: "生抽", amount: "少许" },
      { name: "食用油", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=day%20old%20rice%20eggs%20green%20onions%20ingredients%20on%20counter&image_size=square", description: "隔夜米饭提前用手拨散，鸡蛋打散加少许盐。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scrambled%20eggs%20cooking%20in%20hot%20wok&image_size=square", description: "锅中放多一点油，烧热后倒入蛋液快速翻炒至凝固盛出。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fried%20rice%20stir%20frying%20in%20wok%20high%20heat&image_size=square", description: "锅中再放少许油，放入米饭大火快速翻炒均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20eggs%20to%20fried%20rice%20in%20wok&image_size=square", description: "加入炒好的鸡蛋，继续翻炒均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=egg%20fried%20rice%20seasoning%20with%20salt%20soy%20sauce&image_size=square", description: "加盐、少许生抽调味，翻炒均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20egg%20fried%20rice%20garnished%20with%20green%20onions&image_size=square", description: "出锅前撒上葱花，翻炒均匀即可。" }
    ],
    tips: [
      "一定要用隔夜饭，水分少才能炒出粒粒分明的效果",
      "炒米饭时要用大火快炒",
      "可以加入火腿、虾仁、蔬菜等丰富口感"
    ],
    views: 28960,
    favorites: 10260,
    rating: 4.9
  },
  {
    id: 8,
    name: "宫保鸡丁",
    category: "地方特色菜",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=authentic%20kung%20pao%20chicken%20dish%20peanuts%20chili%20spicy%20sichuan%20food&image_size=square",
    difficulty: "中等",
    time: "25分钟",
    tags: ["川菜", "经典", "下饭"],
    description: "川菜经典名菜，鸡肉嫩滑，花生酥脆，口味咸鲜微辣，回味无穷。",
    ingredients: [
      { name: "鸡胸肉", amount: "300g" },
      { name: "花生米", amount: "50g" },
      { name: "干辣椒", amount: "10个" },
      { name: "花椒", amount: "1勺" },
      { name: "葱姜蒜", amount: "适量" },
      { name: "生抽", amount: "2勺" },
      { name: "醋", amount: "1勺" },
      { name: "白糖", amount: "1勺" },
      { name: "淀粉", amount: "适量" },
      { name: "料酒", amount: "1勺" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kung%20pao%20chicken%20ingredients%20chicken%20peanuts%20chilies%20on%20table&image_size=square", description: "鸡胸肉切丁，加盐、料酒、淀粉腌制15分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fried%20peanuts%20golden%20crispy%20in%20bowl&image_size=square", description: "花生米炸至金黄酥脆，干辣椒切段去籽。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mixing%20kung%20pao%20sauce%20soy%20vinegar%20sugar%20in%20bowl&image_size=square", description: "生抽、醋、白糖、淀粉、少许水调成碗汁。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stir%20frying%20chicken%20diced%20in%20wok&image_size=square", description: "锅中放油烧至六成热，放入鸡丁滑炒至变色盛出。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chili%20peppercorn%20stir%20frying%20in%20wok%20aromatic&image_size=square", description: "锅中留底油，放入花椒、干辣椒爆香，加入葱姜蒜。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kung%20pao%20chicken%20finished%20dish%20in%20wok%20with%20sauce&image_size=square", description: "放入鸡丁快速翻炒，倒入碗汁，加入花生米，翻炒均匀出锅。" }
    ],
    tips: [
      "鸡肉要提前腌制，口感更嫩滑",
      "花生米要最后放，保持酥脆",
      "碗汁可以提前调好，避免手忙脚乱"
    ],
    views: 22680,
    favorites: 8960,
    rating: 4.9
  },
  {
    id: 9,
    name: "糖醋里脊",
    category: "家常菜",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20sweet%20and%20sour%20pork%20tenderloin%20dish%20golden%20glaze%20sesame&image_size=square",
    difficulty: "中等",
    time: "30分钟",
    tags: ["家常", "酸甜", "儿童喜爱"],
    description: "酸甜可口，外酥里嫩，是大人小孩都爱吃的经典家常菜。",
    ingredients: [
      { name: "猪里脊肉", amount: "300g" },
      { name: "番茄酱", amount: "3勺" },
      { name: "白糖", amount: "2勺" },
      { name: "白醋", amount: "1勺" },
      { name: "生抽", amount: "1勺" },
      { name: "淀粉", amount: "适量" },
      { name: "面粉", amount: "适量" },
      { name: "鸡蛋", amount: "1个" },
      { name: "白芝麻", amount: "适量" },
      { name: "食用油", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pork%20tenderloin%20sliced%20into%20strips%20on%20board&image_size=square", description: "里脊肉切成1cm粗的条，加盐、料酒腌制10分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=batter%20mixing%20egg%20flour%20starch%20in%20bowl&image_size=square", description: "鸡蛋、淀粉、面粉调成浓稠的糊。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pork%20strips%20coated%20with%20batter%20ready%20to%20fry&image_size=square", description: "腌好的肉条裹上一层面糊。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20frying%20pork%20strips%20in%20hot%20oil%20golden&image_size=square", description: "锅中放油烧至六成热，放入肉条炸至金黄酥脆捞出。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sweet%20and%20sour%20sauce%20cooking%20in%20pan%20red%20glaze&image_size=square", description: "锅中留少许油，放入番茄酱、白糖、白醋、生抽、少许水调成糖醋汁。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=sweet%20sour%20pork%20finished%20dish%20with%20sesame&image_size=square", description: "放入炸好的肉条快速翻炒，均匀裹上酱汁，撒上白芝麻即可。" }
    ],
    tips: [
      "面糊要浓稠，能挂在肉上不滴落",
      "炸的时候油温要控制好，外酥里嫩",
      "糖醋汁可以根据口味调整酸甜比例"
    ],
    views: 17860,
    favorites: 6580,
    rating: 4.8
  },
  {
    id: 10,
    name: "芒果班戟",
    category: "甜品甜点",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mango%20pancake%20banji%20dessert%20fresh%20cream%20yellow%20fruit%20hong%20kong%20style&image_size=square",
    difficulty: "中等",
    time: "60分钟",
    tags: ["港式", "甜品", "水果"],
    description: "港式经典甜品，Q弹的饼皮包裹着香浓奶油和新鲜芒果，清甜爽口。",
    ingredients: [
      { name: "低筋面粉", amount: "80g" },
      { name: "牛奶", amount: "200ml" },
      { name: "鸡蛋", amount: "2个" },
      { name: "细砂糖", amount: "30g" },
      { name: "黄油", amount: "15g" },
      { name: "淡奶油", amount: "200ml" },
      { name: "糖粉", amount: "20g" },
      { name: "芒果", amount: "2个" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mango%20pancake%20ingredients%20flour%20milk%20eggs%20mango%20cream&image_size=square", description: "准备好所有材料，芒果去皮切块。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pancake%20batter%20mixing%20flour%20milk%20egg%20in%20bowl&image_size=square", description: "鸡蛋加糖打散，加入牛奶、融化黄油，筛入面粉搅匀，静置20分钟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=thin%20pancake%20cooking%20on%20nonstick%20pan%20light%20golden&image_size=square", description: "平底锅小火烧热，倒入一勺面糊，转动锅使面糊均匀铺满锅底，煎至表面凝固即可。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=whipped%20cream%20soft%20peaks%20in%20bowl&image_size=square", description: "淡奶油加糖粉打发至8分发。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=assembling%20mango%20pancake%20placing%20cream%20and%20mango%20on%20pancake&image_size=square", description: "饼皮光滑面朝下，放一勺奶油，放上芒果块，再盖一层奶油。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20mango%20pancakes%20plated%20with%20fresh%20mango&image_size=square", description: "像包红包一样折起四边，翻面放入盘中，冷藏30分钟后享用。" }
    ],
    tips: [
      "饼皮不要煎太久，保持柔软",
      "奶油要打发到位，但不要打发过度",
      "冷藏后口感更好"
    ],
    views: 15680,
    favorites: 4890,
    rating: 4.8
  },
  {
    id: 11,
    name: "皮蛋瘦肉粥",
    category: "汤品羹粥",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20century%20egg%20pork%20congee%20porridge%20in%20white%20bowl%20green%20onions&image_size=square",
    difficulty: "简单",
    time: "90分钟",
    tags: ["粥品", "早餐", "养胃"],
    description: "广式经典粥品，绵糯鲜香，营养丰富，是早餐或宵夜的绝佳选择。",
    ingredients: [
      { name: "大米", amount: "100g" },
      { name: "皮蛋", amount: "2个" },
      { name: "瘦肉", amount: "100g" },
      { name: "姜丝", amount: "适量" },
      { name: "葱花", amount: "适量" },
      { name: "盐", amount: "适量" },
      { name: "白胡椒粉", amount: "少许" },
      { name: "香油", amount: "少许" },
      { name: "料酒", amount: "少许" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=congee%20ingredients%20rice%20century%20egg%20pork%20ginger%20onion&image_size=square", description: "大米洗净，加水浸泡30分钟；瘦肉切丝加盐、料酒腌制。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=rice%20cooking%20in%20pot%20water%20boiling&image_size=square", description: "锅中加足量水，放入泡好的大米，大火烧开后转小火慢熬。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stirring%20rice%20congee%20in%20pot%20creamy%20texture&image_size=square", description: "熬煮约60分钟至米粒开花、粥变浓稠，期间要搅拌防止糊底。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20pork%20shreds%20to%20hot%20congee&image_size=square", description: "放入腌制好的肉丝和姜丝，煮约5分钟至肉丝熟透。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20century%20egg%20pieces%20to%20congee&image_size=square", description: "皮蛋切小块，放入粥中搅匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20century%20egg%20pork%20congee%20bowl%20green%20onions&image_size=square", description: "加盐、白胡椒粉调味，撒上葱花，淋上香油即可。" }
    ],
    tips: [
      "大米提前浸泡更容易煮开花",
      "熬粥时水量要一次性加足，中途加水影响口感",
      "瘦肉用淀粉抓一下会更嫩滑"
    ],
    views: 16890,
    favorites: 5260,
    rating: 4.7
  },
  {
    id: 12,
    name: "葱油拌面",
    category: "面点小吃",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20scallion%20oil%20noodles%20cong%20you%20ban%20mian%20green%20onions%20sauce&image_size=square",
    difficulty: "简单",
    time: "20分钟",
    tags: ["面点", "快手", "上海风味"],
    description: "上海经典面食，简单却美味，葱油香浓，面条筋道，让人欲罢不能。",
    ingredients: [
      { name: "细面条", amount: "200g" },
      { name: "小葱", amount: "1大把" },
      { name: "生抽", amount: "2勺" },
      { name: "老抽", amount: "1勺" },
      { name: "白糖", amount: "1勺" },
      { name: "食用油", amount: "100ml" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=scallion%20oil%20noodles%20ingredients%20noodles%20green%20onions%20soy%20sauce&image_size=square", description: "小葱洗净切段，葱白葱绿分开；生抽、老抽、白糖调成酱汁。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=frying%20scallions%20in%20hot%20oil%20aromatic&image_size=square", description: "锅中放油，小火慢慢炸葱白至微黄，再加入葱绿继续炸至焦黄。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20soy%20sauce%20to%20scallion%20oil%20in%20pan&image_size=square", description: "关火，趁热倒入调好的酱汁，利用余温拌匀，葱油就做好了。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=boiling%20noodles%20in%20pot%20water&image_size=square", description: "锅中加水烧开，放入面条煮至8成熟。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=draining%20cooked%20noodles%20in%20colander&image_size=square", description: "面条捞出，保留少许煮面汤。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20scallion%20oil%20noodles%20mixed%20in%20bowl%20green%20onions&image_size=square", description: "面条放入碗中，加入2勺葱油和适量炸过的葱段，拌匀即可。" }
    ],
    tips: [
      "炸葱油一定要小火慢炸，才能炸出香味",
      "葱要炸至焦黄，香气才够",
      "葱油可以一次多做些，密封冷藏可保存一周"
    ],
    views: 19680,
    favorites: 7890,
    rating: 4.8
  },
  {
    id: 13,
    name: "牛油果沙拉",
    category: "减脂轻食",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=avocado%20salad%20bowl%20healthy%20fresh%20greens%20tomatoes%20feta%20light%20dressing&image_size=square",
    difficulty: "简单",
    time: "15分钟",
    tags: ["减脂", "健康", "素食"],
    description: "清爽健康的牛油果沙拉，营养丰富，口感绵密，是减脂期的美味选择。",
    ingredients: [
      { name: "牛油果", amount: "1个" },
      { name: "混合生菜", amount: "100g" },
      { name: "紫甘蓝", amount: "50g" },
      { name: "樱桃番茄", amount: "10颗" },
      { name: "黄瓜", amount: "1根" },
      { name: "柠檬汁", amount: "2勺" },
      { name: "橄榄油", amount: "2勺" },
      { name: "蜂蜜", amount: "1勺" },
      { name: "盐", amount: "适量" },
      { name: "黑胡椒", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=avocado%20salad%20ingredients%20fresh%20vegetables%20on%20table&image_size=square", description: "准备好所有蔬菜，洗净备用。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cutting%20avocado%20in%20half%20removing%20pit&image_size=square", description: "牛油果对半切开，去核，用刀划成网格，挖出果肉。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cutting%20vegetables%20salad%20ingredients%20on%20board&image_size=square", description: "生菜撕成小片，紫甘蓝切丝，黄瓜切片，番茄对半切。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=making%20salad%20dressing%20lemon%20olive%20oil%20honey&image_size=square", description: "柠檬汁、橄榄油、蜂蜜、盐、黑胡椒调成酱汁。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=assembling%20avocado%20salad%20in%20bowl&image_size=square", description: "所有蔬菜放入大碗，加入牛油果。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20avocado%20salad%20with%20dressing%20colorful&image_size=square", description: "淋上酱汁轻轻拌匀，即可享用。" }
    ],
    tips: [
      "牛油果要选成熟的，按压有轻微凹陷",
      "牛油果切开后容易氧化变黑，要尽快食用",
      "可以加入坚果、鸡胸肉、虾仁等增加蛋白质"
    ],
    views: 14580,
    favorites: 5890,
    rating: 4.7
  },
  {
    id: 14,
    name: "酸辣土豆丝",
    category: "快手简餐",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20hot%20and%20sour%20shredded%20potatoes%20dish%20red%20chili%20vinegar%20garlic&image_size=square",
    difficulty: "简单",
    time: "15分钟",
    tags: ["快手", "素菜", "下饭"],
    description: "酸辣开胃，爽脆可口，是最受欢迎的家常菜之一，简单又美味。",
    ingredients: [
      { name: "土豆", amount: "2个" },
      { name: "干辣椒", amount: "5个" },
      { name: "花椒", amount: "少许" },
      { name: "蒜末", amount: "适量" },
      { name: "葱花", amount: "适量" },
      { name: "白醋", amount: "2勺" },
      { name: "生抽", amount: "1勺" },
      { name: "盐", amount: "适量" },
      { name: "食用油", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=shredded%20potatoes%20soaking%20in%20water%20removing%20starch&image_size=square", description: "土豆去皮切细丝，放入清水中浸泡去除淀粉。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=drying%20potato%20shreds%20in%20colander&image_size=square", description: "土豆丝捞出沥干水分，干辣椒切段。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chili%20peppercorn%20garlic%20stir%20frying%20in%20wok&image_size=square", description: "锅中放油烧热，放入花椒、干辣椒、蒜末爆香。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stir%20frying%20potato%20shreds%20in%20hot%20wok&image_size=square", description: "放入土豆丝大火快速翻炒。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20vinegar%20to%20potato%20shreds%20in%20wok&image_size=square", description: "加入白醋、生抽、盐调味，继续翻炒均匀。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20hot%20sour%20potato%20shreds%20dish%20green%20onions&image_size=square", description: "出锅前撒上葱花，翻炒均匀即可。" }
    ],
    tips: [
      "土豆丝切好后一定要泡水去除淀粉，这样炒出来才脆",
      "炒的时候要用大火快炒，不要炒太久",
      "白醋要在出锅前加，香气更浓"
    ],
    views: 23680,
    favorites: 9560,
    rating: 4.8
  },
  {
    id: 15,
    name: "麻婆豆腐",
    category: "地方特色菜",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=authentic%20mapo%20tofu%20dish%20spicy%20sichuan%20minced%20pork%20chili%20oil%20green%20onions&image_size=square",
    difficulty: "简单",
    time: "20分钟",
    tags: ["川菜", "经典", "下饭"],
    description: "川菜代表作，麻辣鲜香，豆腐嫩滑，是最下饭的川菜之一。",
    ingredients: [
      { name: "嫩豆腐", amount: "1盒" },
      { name: "猪肉末", amount: "100g" },
      { name: "郫县豆瓣酱", amount: "1勺" },
      { name: "花椒粉", amount: "适量" },
      { name: "辣椒粉", amount: "适量" },
      { name: "蒜末", amount: "适量" },
      { name: "葱花", amount: "适量" },
      { name: "生抽", amount: "1勺" },
      { name: "淀粉水", amount: "适量" },
      { name: "食用油", amount: "适量" }
    ],
    steps: [
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mapo%20tofu%20ingredients%20tofu%20minced%20pork%20spices%20on%20table&image_size=square", description: "豆腐切成2cm见方的块，放入加了盐的开水中焯烫2分钟捞出。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=stir%20frying%20minced%20pork%20in%20wok&image_size=square", description: "锅中放油烧热，放入猪肉末炒至变色。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20doubanjiang%20chili%20paste%20to%20minced%20pork&image_size=square", description: "加入蒜末、郫县豆瓣酱炒出红油。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=adding%20tofu%20to%20sauce%20in%20wok&image_size=square", description: "加入适量清水，放入豆腐块，轻轻推动不要搅碎。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=seasoning%20mapo%20tofu%20with%20soy%20sauce%20spices&image_size=square", description: "加生抽、辣椒粉调味，中小火煮3-5分钟入味。" },
      { image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=finished%20mapo%20tofu%20dish%20with%20green%20onions%20sichuan%20peppercorn&image_size=square", description: "淋入淀粉水勾芡，出锅前撒上花椒粉、葱花，浇上少许热油即可。" }
    ],
    tips: [
      "豆腐焯水时加盐，能使豆腐更嫩滑不易碎",
      "煮豆腐时要轻轻推动，不要用铲子翻炒",
      "花椒粉要最后撒，香气更浓郁"
    ],
    views: 21560,
    favorites: 8680,
    rating: 4.9
  }
];

// 分类数据
const categories = [
  { id: 1, name: "家常菜", icon: "🍳", description: "经典家常美味" },
  { id: 2, name: "甜品甜点", icon: "🍰", description: "甜蜜时光" },
  { id: 3, name: "汤品羹粥", icon: "🍲", description: "温暖滋补" },
  { id: 4, name: "面点小吃", icon: "🥟", description: "传统面点" },
  { id: 5, name: "减脂轻食", icon: "🥗", description: "健康轻食" },
  { id: 6, name: "快手简餐", icon: "⏰", description: "快速美味" },
  { id: 7, name: "地方特色菜", icon: "🌍", description: "各地美食" }
];

// 轮播图数据
const carouselData = [
  {
    id: 1,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=delicious%20chinese%20food%20feast%20various%20dishes%20colorful%20restaurant%20style&image_size=landscape_16_9",
    title: "探索美食的无限可能",
    subtitle: "发现舌尖上的美味，开启你的烹饪之旅"
  },
  {
    id: 2,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fresh%20healthy%20salad%20bowl%20colorful%20vegetables%20fruits%20nutrition&image_size=landscape_16_9",
    title: "健康轻食新选择",
    subtitle: "营养均衡，美味不减，吃出健康好身体"
  },
  {
    id: 3,
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=delicious%20desserts%20cakes%20pastries%20sweet%20treats%20bakery%20display&image_size=landscape_16_9",
    title: "甜蜜时光",
    subtitle: "精致甜品，让生活多一份甜蜜与美好"
  }
];

// 小知识数据
const tipsData = [
  {
    id: 1,
    title: "如何让肉更嫩滑",
    content: "炒肉前可以用淀粉、料酒腌制15分钟，或者在炒的时候加入少许蛋清，这样炒出来的肉会更加嫩滑多汁。",
    category: "烹饪技巧"
  },
  {
    id: 2,
    title: "蔬菜保鲜小技巧",
    content: "绿叶蔬菜用湿纸巾包裹后放入冰箱，可以延长保鲜时间；根茎类蔬菜则适合放在阴凉通风处保存。",
    category: "食材小知识"
  },
  {
    id: 3,
    title: "如何判断鸡蛋是否新鲜",
    content: "将鸡蛋放入清水中，新鲜鸡蛋会沉入水底，不新鲜的会浮起来；另外，新鲜鸡蛋的蛋壳表面比较粗糙。",
    category: "食材小知识"
  },
  {
    id: 4,
    title: "炒菜时何时放盐最佳",
    content: "一般在菜快炒熟时放盐最佳，这样既能保证盐味均匀，又能减少蔬菜出水，保持菜的鲜嫩口感。",
    category: "烹饪技巧"
  },
  {
    id: 5,
    title: "早餐的重要性",
    content: "早餐是一天中最重要的一餐，能为身体提供能量，帮助维持血糖稳定，提高工作和学习效率。",
    category: "饮食小常识"
  },
  {
    id: 6,
    title: "如何正确解冻肉类",
    content: "最好的解冻方法是将肉从冷冻室移到冷藏室自然解冻，或者用流动的冷水冲洗，不要用热水解冻，否则会影响口感。",
    category: "烹饪技巧"
  }
];

// 根据分类获取食谱
function getRecipesByCategory(categoryName) {
  return recipes.filter(recipe => recipe.category === categoryName);
}

// 根据关键词搜索食谱
function searchRecipes(keyword) {
  if (!keyword) return [];
  const lowerKeyword = keyword.toLowerCase();
  return recipes.filter(recipe => {
    // 搜索菜品名称
    if (recipe.name.toLowerCase().includes(lowerKeyword)) return true;
    // 搜索食材
    if (recipe.ingredients.some(ing => ing.name.toLowerCase().includes(lowerKeyword))) return true;
    // 搜索标签
    if (recipe.tags.some(tag => tag.toLowerCase().includes(lowerKeyword))) return true;
    return false;
  });
}

// 获取热门食谱排行榜
function getHotRecipes() {
  return [...recipes].sort((a, b) => b.views - a.views);
}

// 获取高赞收藏食谱榜
function getFavoriteRecipes() {
  return [...recipes].sort((a, b) => b.favorites - a.favorites);
}

// 获取新手简易菜谱排行
function getBeginnerRecipes() {
  return [...recipes]
    .filter(recipe => recipe.difficulty === "简单")
    .sort((a, b) => {
      // 简单难度 + 短时间优先
      const timeA = parseInt(a.time);
      const timeB = parseInt(b.time);
      if (timeA !== timeB) return timeA - timeB;
      return b.rating - a.rating;
    });
}

// 获取精选推荐食谱
function getFeaturedRecipes() {
  // 按评分排序，取前6个
  return [...recipes].sort((a, b) => b.rating - a.rating).slice(0, 6);
}

// 获取热门家常菜
function getPopularHomeRecipes() {
  // 家常菜中按收藏数排序，取前4个
  return getRecipesByCategory("家常菜").sort((a, b) => b.favorites - a.favorites).slice(0, 4);
}

// 获取时令美食（这里模拟一些季节相关的食谱）
function getSeasonalRecipes() {
  // 选择一些适合春季/夏季的清淡、新鲜的食谱
  const seasonalIds = [2, 4, 6, 14]; // 番茄炒蛋、紫菜蛋花汤、鸡胸肉沙拉、酸辣土豆丝
  return recipes.filter(recipe => seasonalIds.includes(recipe.id));
}