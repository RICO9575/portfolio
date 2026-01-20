// DOM 요소 가져오기
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalCaption = document.getElementById('modal-caption');
const closeBtn = document.getElementsByClassName('close')[0];
const portfolioItems = document.querySelectorAll('.portfolio-item');
const menuLinks = document.querySelectorAll('.menu li a, .sidebar-nav ul li a');

// 포트폴리오 아이템 클릭 시 모달 열기
portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const title = this.querySelector('.overlay h3').textContent;
        
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalCaption.textContent = title;
        
        // 스크롤 방지
        document.body.style.overflow = 'hidden';
    });
});

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
        
        // 모든 메뉴에서 active 클래스 제거
        menuLinks.forEach(l => l.classList.remove('active'));
        
        // 클릭된 메뉴에 active 클래스 추가
        this.classList.add('active');
        
        // 같은 data-category를 가진 다른 메뉴도 active로 설정 (데스크톱/모바일 동기화)
        const category = this.getAttribute('data-category');
        menuLinks.forEach(l => {
            if (l.getAttribute('data-category') === category) {
                l.classList.add('active');
            }
        });
        
        // 필터링
        filterPortfolio(category);
    });
});

function filterPortfolio(category) {
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

// 페이지 로드 시 모든 아이템 표시
window.addEventListener('load', function() {
    portfolioItems.forEach(item => {
        item.classList.add('visible');
    });
});

// 스크롤 시 헤더 스타일 변경 (선택사항)
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
