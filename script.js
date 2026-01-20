// 포트폴리오 데이터를 동적으로 로드
async function loadPortfolioItems() {
    try {
        // content/portfolio 폴더에서 모든 포트폴리오 아이템 로드
        const response = await fetch('/content/portfolio.json');
        const portfolioData = await response.json();
        
        const container = document.getElementById('portfolio-container');
        container.innerHTML = '';
        
        portfolioData.forEach(item => {
            const portfolioItem = createPortfolioItem(item);
            container.appendChild(portfolioItem);
        });
        
        // 이벤트 리스너 다시 연결
        attachEventListeners();
    } catch (error) {
        console.log('포트폴리오 데이터 로드 중 오류:', error);
        // 기본 데이터로 폴백
        loadDefaultPortfolio();
    }
}

function createPortfolioItem(item) {
    const div = document.createElement('div');
    div.className = 'portfolio-item';
    div.setAttribute('data-category', item.category);
    
    div.innerHTML = `
        <div class="image-wrapper">
            <img src="${item.thumbnail}" alt="${item.title}">
            <div class="overlay">
                <h3>${item.title}</h3>
            </div>
        </div>
    `;
    
    // 클릭 이벤트 추가
    div.addEventListener('click', function() {
        openModal(item);
    });
    
    return div;
}

function openModal(item) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const modalImages = document.getElementById('modal-images');
    
    modal.style.display = 'block';
    modalImg.src = item.thumbnail;
    modalCaption.textContent = item.title;
    
    // 추가 이미지들 표시
    if (item.images && item.images.length > 0) {
        modalImages.innerHTML = '';
        item.images.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img;
            imgElement.className = 'modal-detail-image';
            modalImages.appendChild(imgElement);
        });
    }
    
    document.body.style.overflow = 'hidden';
}

function loadDefaultPortfolio() {
    // 기본 포트폴리오 아이템들 (더미 데이터)
    const defaultItems = [
        {
            category: "ai-visual",
            title: "더 모먼트 AI 뮤직 쇼트 필름",
            thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "ai-visual",
            title: "씨스퀘어 뗏 명절 시즌 AI 모델 및 제품 비주얼",
            thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "ai-visual",
            title: "코트에디트 AI 모델 및 패션 에디토리얼 #2",
            thumbnail: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "ai-visual",
            title: "무에 AI 모델 및 라이프스타일 에디토리얼",
            thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "ai-visual",
            title: "코트에디트 AI 모델 및 패션 에디토리얼",
            thumbnail: "https://images.unsplash.com/photo-1558769132-cb1aea1c3e0e?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "ai-visual",
            title: "루미네 바운시 아이세럼 AI 모델 및 제품 비주얼",
            thumbnail: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "ai-visual",
            title: "씨스퀘어 크리스마스 시즌 AI 모델 및 제품 비주얼",
            thumbnail: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "promo",
            title: "씨스퀘어 시즌 캠페인 비주얼 및 스토어 프로모션 광고",
            thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "promo",
            title: "제리샵 제품 포스터",
            thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "promo",
            title: "타코형 에기바 상세페이지",
            thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "etc",
            title: "디어바스켓 SNS 피드",
            thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=625&fit=crop",
            images: []
        },
        {
            category: "etc",
            title: "그루핑 브랜드 소개서",
            thumbnail: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&h=625&fit=crop",
            images: []
        }
    ];
    
    const container = document.getElementById('portfolio-container');
    container.innerHTML = '';
    
    defaultItems.forEach(item => {
        const portfolioItem = createPortfolioItem(item);
        container.appendChild(portfolioItem);
    });
    
    attachEventListeners();
}

function attachEventListeners() {
    const modal = document.getElementById('modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const menuLinks = document.querySelectorAll('.menu li a, .sidebar-nav ul li a');
    
    // 모달 닫기 버튼
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    // 모달 배경 클릭 시 닫기
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // 카테고리 필터링
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            menuLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            menuLinks.forEach(l => {
                if (l.getAttribute('data-category') === category) {
                    l.classList.add('active');
                }
            });
            
            filterPortfolio(category);
        });
    });
}

function filterPortfolio(category) {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        if (category === 'all') {
            item.classList.remove('hidden');
            item.classList.add('visible');
        } else {
            if (item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
                item.classList.add('visible');
            } else {
                item.classList.add('hidden');
                item.classList.remove('visible');
            }
        }
    });
}

// 페이지 로드 시 실행
window.addEventListener('load', function() {
    loadPortfolioItems();
});
