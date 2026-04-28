// 页面状态
const state = {
    currentPage: 'home',
    currentCategory: '全部',
    currentCarouselIndex: 0,
    searchKeyword: '',
    currentRecipeId: null
};

// DOM元素
const elements = {
    mainContent: document.getElementById('main-content'),
    navLinks: document.querySelectorAll('.nav-link'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    navMenu: document.getElementById('nav-menu')
};

// 初始化
function init() {
    renderHomePage();
    setupEventListeners();
    setupNavigation();
}

// 设置事件监听
function setupEventListeners() {
    // 搜索框事件
    if (elements.searchInput) {
        elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }

    if (elements.searchBtn) {
        elements.searchBtn.addEventListener('click', performSearch);
    }

    // 移动端菜单
    if (elements.mobileMenuBtn && elements.navMenu) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            elements.navMenu.classList.toggle('active');
        });
    }

    // 导航链接
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            navigateTo(page);
            
            // 关闭移动端菜单
            if (elements.navMenu) {
                elements.navMenu.classList.remove('active');
            }
        });
    });
}

// 设置导航高亮
function setupNavigation() {
    // 更新导航高亮
    elements.navLinks.forEach(link => {
        const page = link.dataset.page;
        if (page === state.currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// 页面导航
function navigateTo(page) {
    state.currentPage = page;
    setupNavigation();

    switch (page) {
        case 'home':
            renderHomePage();
            break;
        case 'categories':
            renderCategoriesPage();
            break;
        case 'rankings':
            renderRankingsPage();
            break;
        case 'tips':
            renderTipsPage();
            break;
        default:
            renderHomePage();
    }
}

// 执行搜索
function performSearch() {
    const keyword = elements.searchInput ? elements.searchInput.value.trim() : '';
    if (keyword) {
        state.searchKeyword = keyword;
        state.currentPage = 'search';
        renderSearchPage();
    }
}

// 渲染轮播图
function renderCarousel() {
    let carouselHtml = `
        <div class="carousel">
            <div class="carousel-inner" id="carousel-inner">
    `;

    carouselData.forEach((item, index) => {
        carouselHtml += `
            <div class="carousel-item" data-index="${index}">
                <img src="${item.image}" alt="${item.title}">
                <div class="carousel-overlay">
                    <h1 class="carousel-title">${item.title}</h1>
                    <p class="carousel-subtitle">${item.subtitle}</p>
                    <button class="carousel-btn" onclick="navigateTo('categories')">开始探索</button>
                </div>
            </div>
        `;
    });

    carouselHtml += `
            </div>
            <div class="carousel-controls">
                <button class="carousel-control" onclick="prevSlide()">❮</button>
                <button class="carousel-control" onclick="nextSlide()">❯</button>
            </div>
            <div class="carousel-indicators">
    `;

    carouselData.forEach((_, index) => {
        carouselHtml += `
            <button class="carousel-indicator ${index === 0 ? 'active' : ''}" 
                    data-index="${index}" 
                    onclick="goToSlide(${index})"></button>
        `;
    });

    carouselHtml += `
            </div>
        </div>
    `;

    return carouselHtml;
}

// 轮播图控制
function nextSlide() {
    state.currentCarouselIndex = (state.currentCarouselIndex + 1) % carouselData.length;
    updateCarousel();
}

function prevSlide() {
    state.currentCarouselIndex = (state.currentCarouselIndex - 1 + carouselData.length) % carouselData.length;
    updateCarousel();
}

function goToSlide(index) {
    state.currentCarouselIndex = index;
    updateCarousel();
}

function updateCarousel() {
    const inner = document.getElementById('carousel-inner');
    const indicators = document.querySelectorAll('.carousel-indicator');
    
    if (inner) {
        inner.style.transform = `translateX(-${state.currentCarouselIndex * 100}%)`;
    }

    indicators.forEach((indicator, index) => {
        if (index === state.currentCarouselIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 自动轮播
let carouselInterval;
function startCarouselAutoPlay() {
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);
}

function stopCarouselAutoPlay() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
    }
}

// 渲染食谱卡片
function renderRecipeCard(recipe) {
    return `
        <div class="recipe-card" onclick="viewRecipeDetail(${recipe.id})">
            <div class="recipe-card-image">
                <img src="${recipe.image}" alt="${recipe.name}">
                <span class="recipe-card-badge">${recipe.category}</span>
            </div>
            <div class="recipe-card-content">
                <h3 class="recipe-card-title">${recipe.name}</h3>
                <div class="recipe-card-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-card-tag">${tag}</span>`).join('')}
                </div>
                <div class="recipe-card-info">
                    <div class="recipe-card-meta">
                        <span class="recipe-card-meta-item">
                            <span>⏱️</span>
                            <span>${recipe.time}</span>
                        </span>
                        <span class="recipe-card-meta-item">
                            <span>📊</span>
                            <span>${recipe.difficulty}</span>
                        </span>
                    </div>
                    <div class="recipe-card-rating">
                        <span>⭐</span>
                        <span>${recipe.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// 渲染食谱网格
function renderRecipesGrid(recipes, emptyMessage = '暂无食谱') {
    if (recipes.length === 0) {
        return `
            <div class="empty-state">
                <div class="empty-state-icon">🍽️</div>
                <h3 class="empty-state-title">${emptyMessage}</h3>
                <p class="empty-state-text">试试其他分类或关键词吧</p>
            </div>
        `;
    }

    return `
        <div class="recipes-grid">
            ${recipes.map(recipe => renderRecipeCard(recipe)).join('')}
        </div>
    `;
}

// 渲染分类卡片
function renderCategoriesGrid(showActive = false) {
    const allCategory = { id: 0, name: '全部', icon: '🍽️', description: '浏览全部' };
    const displayCategories = [allCategory, ...categories];

    return `
        <div class="categories-grid">
            ${displayCategories.map(cat => `
                <div class="category-card ${(showActive && state.currentCategory === cat.name) ? 'active' : ''}" 
                     onclick="filterByCategory('${cat.name}')">
                    <div class="category-icon">${cat.icon}</div>
                    <div class="category-name">${cat.name}</div>
                    <div class="category-desc">${cat.description}</div>
                </div>
            `).join('')}
        </div>
    `;
}

// 按分类筛选
function filterByCategory(categoryName) {
    state.currentCategory = categoryName;
    
    if (state.currentPage === 'categories') {
        renderCategoriesPage();
    } else {
        state.currentPage = 'categories';
        renderCategoriesPage();
    }
}

// 渲染首页
function renderHomePage() {
    // 停止之前的轮播
    stopCarouselAutoPlay();

    const featuredRecipes = getFeaturedRecipes();
    const popularHomeRecipes = getPopularHomeRecipes();
    const seasonalRecipes = getSeasonalRecipes();

    let html = '';

    // 轮播图
    html += renderCarousel();

    // 分类导航
    html += `
        <section class="section categories-section">
            <div class="section-header">
                <h2 class="section-title">美食分类</h2>
                <p class="section-subtitle">探索不同品类的美味佳肴</p>
                <div class="section-divider"></div>
            </div>
            ${renderCategoriesGrid(false)}
        </section>
    `;

    // 精选推荐
    html += `
        <section class="section featured-section">
            <div class="section-header">
                <h2 class="section-title">精选推荐</h2>
                <p class="section-subtitle">每日精选，值得尝试的美味食谱</p>
                <div class="section-divider"></div>
            </div>
            ${renderRecipesGrid(featuredRecipes)}
        </section>
    `;

    // 热门家常菜
    html += `
        <section class="section home-recipes-section">
            <div class="section-header">
                <h2 class="section-title">热门家常菜</h2>
                <p class="section-subtitle">最受欢迎的家常美味，一学就会</p>
                <div class="section-divider"></div>
            </div>
            ${renderRecipesGrid(popularHomeRecipes)}
        </section>
    `;

    // 时令美食
    html += `
        <section class="section seasonal-section">
            <div class="section-header">
                <h2 class="section-title">时令美食</h2>
                <p class="section-subtitle">应季而食，新鲜美味正当时</p>
                <div class="section-divider"></div>
            </div>
            ${renderRecipesGrid(seasonalRecipes)}
        </section>
    `;

    // 榜单预览
    html += renderRankingsSection();

    // 小知识预览
    html += renderTipsSection();

    // 渲染到页面
    if (elements.mainContent) {
        elements.mainContent.innerHTML = html;
    }

    // 启动轮播
    startCarouselAutoPlay();

    // 滚动到顶部
    window.scrollTo(0, 0);
}

// 渲染榜单区块
function renderRankingsSection() {
    const hotRecipes = getHotRecipes().slice(0, 5);
    const favoriteRecipes = getFavoriteRecipes().slice(0, 5);
    const beginnerRecipes = getBeginnerRecipes().slice(0, 5);

    return `
        <section class="section rankings-section">
            <div class="section-header">
                <h2 class="section-title">美食榜单</h2>
                <p class="section-subtitle">看看大家都在做什么</p>
                <div class="section-divider"></div>
            </div>
            <div class="rankings-grid">
                ${renderRankingCard(hotRecipes, 'hot', '🔥 热门排行榜', '浏览量最高的食谱')}
                ${renderRankingCard(favoriteRecipes, 'favorite', '❤️ 高赞收藏榜', '最受欢迎的收藏食谱')}
                ${renderRankingCard(beginnerRecipes, 'beginner', '🌱 新手简易榜', '适合新手的简单食谱')}
            </div>
        </section>
    `;
}

// 渲染榜单卡片
function renderRankingCard(recipes, type, title, subtitle) {
    return `
        <div class="ranking-card">
            <div class="ranking-header ${type}">
                <h3 class="ranking-title">${title}</h3>
                <p class="ranking-subtitle">${subtitle}</p>
            </div>
            <div class="ranking-list">
                ${recipes.map((recipe, index) => `
                    <div class="ranking-item" onclick="viewRecipeDetail(${recipe.id})">
                        <span class="ranking-number ${index < 3 ? 'top' + (index + 1) : 'normal'}">${index + 1}</span>
                        <img src="${recipe.image}" alt="${recipe.name}" class="ranking-item-image">
                        <div class="ranking-item-info">
                            <h4 class="ranking-item-name">${recipe.name}</h4>
                            <div class="ranking-item-stats">
                                <span>👁️ ${recipe.views}</span>
                                <span>❤️ ${recipe.favorites}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// 渲染小知识区块
function renderTipsSection() {
    const displayTips = tipsData.slice(0, 3);

    return `
        <section class="section tips-section">
            <div class="section-header">
                <h2 class="section-title">实用小知识</h2>
                <p class="section-subtitle">学习烹饪技巧，成为厨房达人</p>
                <div class="section-divider"></div>
            </div>
            <div class="tips-grid">
                ${displayTips.map(tip => `
                    <div class="tip-card">
                        <div class="tip-header">
                            <span class="tip-category">${tip.category}</span>
                            <span class="tip-icon">💡</span>
                        </div>
                        <h3 class="tip-title">${tip.title}</h3>
                        <p class="tip-content">${tip.content}</p>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

// 渲染分类页面
function renderCategoriesPage() {
    // 停止轮播
    stopCarouselAutoPlay();

    let filteredRecipes;
    if (state.currentCategory === '全部') {
        filteredRecipes = recipes;
    } else {
        filteredRecipes = getRecipesByCategory(state.currentCategory);
    }

    const html = `
        <div class="category-page">
            <button class="back-btn" onclick="navigateTo('home')">
                <span>←</span>
                <span>返回首页</span>
            </button>
            
            <div class="section-header">
                <h2 class="section-title">美食分类</h2>
                <p class="section-subtitle">选择你喜欢的美食类别</p>
                <div class="section-divider"></div>
            </div>

            <div class="category-filter">
                ${renderCategoryFilters()}
            </div>

            <div class="section-header" style="margin-bottom: 30px;">
                <h2 class="section-title" style="font-size: 24px;">
                    ${state.currentCategory === '全部' ? '全部食谱' : state.currentCategory}
                </h2>
                <p class="section-subtitle">共 ${filteredRecipes.length} 道食谱</p>
            </div>

            ${renderRecipesGrid(filteredRecipes, '该分类暂无食谱')}
        </div>
    `;

    if (elements.mainContent) {
        elements.mainContent.innerHTML = html;
    }

    window.scrollTo(0, 0);
}

// 渲染分类筛选按钮
function renderCategoryFilters() {
    const allCategory = { id: 0, name: '全部', icon: '🍽️' };
    const displayCategories = [allCategory, ...categories];

    return displayCategories.map(cat => `
        <button class="filter-btn ${state.currentCategory === cat.name ? 'active' : ''}"
                onclick="filterByCategory('${cat.name}')">
            ${cat.icon} ${cat.name}
        </button>
    `).join('');
}

// 渲染搜索页面
function renderSearchPage() {
    // 停止轮播
    stopCarouselAutoPlay();

    const searchResults = searchRecipes(state.searchKeyword);

    const html = `
        <div class="search-page">
            <button class="back-btn" onclick="navigateTo('home')">
                <span>←</span>
                <span>返回首页</span>
            </button>
            
            <div class="search-result-header">
                <h2 class="search-result-title">搜索结果："${state.searchKeyword}"</h2>
                <p class="search-result-count">找到 ${searchResults.length} 个相关食谱</p>
            </div>

            ${renderRecipesGrid(searchResults, '未找到相关食谱')}
        </div>
    `;

    if (elements.mainContent) {
        elements.mainContent.innerHTML = html;
    }

    window.scrollTo(0, 0);
}

// 渲染榜单页面
function renderRankingsPage() {
    // 停止轮播
    stopCarouselAutoPlay();

    const hotRecipes = getHotRecipes();
    const favoriteRecipes = getFavoriteRecipes();
    const beginnerRecipes = getBeginnerRecipes();

    const html = `
        <div class="category-page">
            <button class="back-btn" onclick="navigateTo('home')">
                <span>←</span>
                <span>返回首页</span>
            </button>
            
            <div class="section-header">
                <h2 class="section-title">美食榜单</h2>
                <p class="section-subtitle">看看大家都在做什么</p>
                <div class="section-divider"></div>
            </div>

            <div class="rankings-grid" style="margin-top: 20px;">
                ${renderRankingCard(hotRecipes, 'hot', '🔥 热门排行榜', '浏览量最高的食谱')}
                ${renderRankingCard(favoriteRecipes, 'favorite', '❤️ 高赞收藏榜', '最受欢迎的收藏食谱')}
                ${renderRankingCard(beginnerRecipes, 'beginner', '🌱 新手简易榜', '适合新手的简单食谱')}
            </div>
        </div>
    `;

    if (elements.mainContent) {
        elements.mainContent.innerHTML = html;
    }

    window.scrollTo(0, 0);
}

// 渲染小知识页面
function renderTipsPage() {
    // 停止轮播
    stopCarouselAutoPlay();

    const html = `
        <div class="category-page">
            <button class="back-btn" onclick="navigateTo('home')">
                <span>←</span>
                <span>返回首页</span>
            </button>
            
            <div class="section-header">
                <h2 class="section-title">实用小知识</h2>
                <p class="section-subtitle">学习烹饪技巧，成为厨房达人</p>
                <div class="section-divider"></div>
            </div>

            <div class="tips-grid" style="margin-top: 20px;">
                ${tipsData.map(tip => `
                    <div class="tip-card">
                        <div class="tip-header">
                            <span class="tip-category">${tip.category}</span>
                            <span class="tip-icon">💡</span>
                        </div>
                        <h3 class="tip-title">${tip.title}</h3>
                        <p class="tip-content">${tip.content}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    if (elements.mainContent) {
        elements.mainContent.innerHTML = html;
    }

    window.scrollTo(0, 0);
}

// 查看食谱详情
function viewRecipeDetail(recipeId) {
    state.currentRecipeId = recipeId;
    state.currentPage = 'detail';
    renderRecipeDetailPage();
}

// 渲染食谱详情页
function renderRecipeDetailPage() {
    // 停止轮播
    stopCarouselAutoPlay();

    const recipe = recipes.find(r => r.id === state.currentRecipeId);
    
    if (!recipe) {
        const html = `
            <div class="category-page">
                <button class="back-btn" onclick="navigateTo('home')">
                    <span>←</span>
                    <span>返回首页</span>
                </button>
                <div class="empty-state">
                    <div class="empty-state-icon">😕</div>
                    <h3 class="empty-state-title">食谱不存在</h3>
                    <p class="empty-state-text">该食谱可能已被删除</p>
                </div>
            </div>
        `;
        if (elements.mainContent) {
            elements.mainContent.innerHTML = html;
        }
        return;
    }

    const html = `
        <div class="recipe-detail-page">
            <button class="back-btn" onclick="goBack()">
                <span>←</span>
                <span>返回</span>
            </button>

            <div class="recipe-header">
                <h1 class="recipe-header-title">${recipe.name}</h1>
                <div class="recipe-header-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-header-tag">${tag}</span>`).join('')}
                </div>
                <div class="recipe-header-meta">
                    <div class="recipe-meta-item">
                        <span class="recipe-meta-icon">⏱️</span>
                        <span>烹饪时长：</span>
                        <span class="recipe-meta-value">${recipe.time}</span>
                    </div>
                    <div class="recipe-meta-item">
                        <span class="recipe-meta-icon">📊</span>
                        <span>难度指数：</span>
                        <span class="recipe-meta-value">${recipe.difficulty}</span>
                    </div>
                    <div class="recipe-meta-item">
                        <span class="recipe-meta-icon">⭐</span>
                        <span>评分：</span>
                        <span class="recipe-meta-value">${recipe.rating}</span>
                    </div>
                </div>
            </div>

            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>

            <div class="recipe-section">
                <h2 class="recipe-section-title">菜品简介</h2>
                <p class="recipe-intro">${recipe.description}</p>
            </div>

            <div class="recipe-section">
                <h2 class="recipe-section-title">用料清单</h2>
                <div class="ingredients-grid">
                    ${recipe.ingredients.map(ing => `
                        <div class="ingredient-item">
                            <span class="ingredient-name">${ing.name}</span>
                            <span class="ingredient-amount">${ing.amount}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <h2 class="recipe-section-title">详细步骤</h2>
                <div class="steps-list">
                    ${recipe.steps.map((step, index) => `
                        <div class="step-item">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-content">
                                <div class="step-image">
                                    <img src="${step.image}" alt="步骤${index + 1}">
                                </div>
                                <p class="step-text">${step.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <h2 class="recipe-section-title">烹饪小贴士</h2>
                <div class="tips-list">
                    ${recipe.tips.map(tip => `
                        <div class="tip-item">
                            <span class="tip-icon">💡</span>
                            <p class="tip-text">${tip}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <h2 class="recipe-section-title">相关数据</h2>
                <div class="ingredients-grid">
                    <div class="ingredient-item">
                        <span class="ingredient-name">浏览次数</span>
                        <span class="ingredient-amount">${recipe.views} 次</span>
                    </div>
                    <div class="ingredient-item">
                        <span class="ingredient-name">收藏人数</span>
                        <span class="ingredient-amount">${recipe.favorites} 人</span>
                    </div>
                    <div class="ingredient-item">
                        <span class="ingredient-name">分类</span>
                        <span class="ingredient-amount">${recipe.category}</span>
                    </div>
                    <div class="ingredient-item">
                        <span class="ingredient-name">评分</span>
                        <span class="ingredient-amount">⭐ ${recipe.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (elements.mainContent) {
        elements.mainContent.innerHTML = html;
    }

    window.scrollTo(0, 0);
}

// 返回上一页
function goBack() {
    // 根据当前状态决定返回哪里
    if (state.currentPage === 'detail') {
        // 从详情页返回，检查之前的页面
        if (state.searchKeyword) {
            renderSearchPage();
        } else if (state.currentCategory !== '全部') {
            renderCategoriesPage();
        } else {
            navigateTo('home');
        }
    } else {
        navigateTo('home');
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', init);