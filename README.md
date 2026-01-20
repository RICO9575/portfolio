# 포트폴리오 사이트 배포 가이드

## 🎉 완성된 파일들
- `index.html` - 메인 HTML 파일
- `style.css` - 스타일시트
- `script.js` - JavaScript 기능

## 📸 이미지 추가하는 방법

### 1. images 폴더 만들기
프로젝트 폴더에 `images` 폴더를 만드세요.

### 2. 이미지 파일 넣기
여러분의 포트폴리오 이미지들을 `images` 폴더에 넣으세요.
예: `images/project1.jpg`, `images/project2.png`

### 3. HTML 수정하기
`index.html` 파일을 열고, 각 포트폴리오 아이템의 이미지 경로를 수정하세요:

```html
<!-- 수정 전 -->
<img src="https://via.placeholder.com/800x625/FF6B6B/ffffff?text=AI+Music+Film" alt="프로젝트 제목">

<!-- 수정 후 -->
<img src="images/project1.jpg" alt="프로젝트 제목">
```

## 🚀 GitHub Pages로 무료 배포하기

### 1단계: GitHub 계정 만들기
https://github.com 에서 무료 계정을 만드세요.

### 2단계: 새 Repository 만들기
1. GitHub에 로그인
2. 오른쪽 상단 `+` 버튼 클릭 → `New repository`
3. Repository 이름: `portfolio` (원하는 이름으로)
4. Public 선택
5. `Create repository` 클릭

### 3단계: 파일 업로드
1. 만든 Repository 페이지에서 `uploading an existing file` 클릭
2. 다음 파일들을 드래그앤드롭:
   - index.html
   - style.css
   - script.js
   - images 폴더 (이미지들 포함)
3. `Commit changes` 클릭

### 4단계: GitHub Pages 활성화
1. Repository 페이지에서 `Settings` 클릭
2. 왼쪽 메뉴에서 `Pages` 클릭
3. Source에서 `main` 브랜치 선택
4. `Save` 클릭
5. 몇 분 후 사이트 주소 생성됨: `https://your-username.github.io/portfolio/`

## 🎨 커스터마이징 방법

### 사이트 제목 변경
`index.html`에서 찾아서 수정:
```html
<h1>SAEA DESIGN</h1>  <!-- 여기를 원하는 이름으로 -->
```

### 카테고리 변경
`index.html`에서 메뉴 부분 수정:
```html
<li><a href="#" data-category="your-category">새 카테고리</a></li>
```

### 색상 변경
`style.css`에서 색상 코드 수정:
```css
background-color: #ffffff;  /* 원하는 색상으로 */
color: #000000;
```

## 📱 반응형 디자인
- 데스크톱: 3단 그리드
- 태블릿: 2단 그리드
- 모바일: 1단 그리드 + 사이드바 메뉴

## ✨ 주요 기능
- ✅ 호버 시 이미지 확대 애니메이션
- ✅ 클릭 시 모달 팝업
- ✅ 카테고리 필터링
- ✅ 반응형 디자인
- ✅ 부드러운 전환 효과

## 🆘 도움이 필요하면
- GitHub 이슈 탭에서 질문하세요
- 또는 저에게 다시 물어보세요!

## 💰 비용
**완전 무료!** GitHub Pages는 100% 무료입니다.
