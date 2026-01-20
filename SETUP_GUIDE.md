# 🎨 포트폴리오 CMS 설치 가이드

## 완성! 이제 관리자 화면에서 이미지 업로드 가능해요!

---

## 📦 1단계: 파일 준비

다음 파일들을 다운로드하세요:
- `index.html`
- `style.css`
- `script.js`
- `netlify.toml`
- `admin/` 폴더 (안에 `index.html`, `config.yml` 있음)

---

## 🚀 2단계: Netlify에 배포

### A. Netlify 계정 만들기
1. https://netlify.com 접속
2. GitHub 계정으로 회원가입

### B. 사이트 배포
1. "Add new site" → "Import an existing project"
2. "Deploy with GitHub" 선택
3. `portfolio` 저장소 선택
4. 배포 설정:
   - Build command: (비워두기)
   - Publish directory: `.`
5. "Deploy site" 클릭

---

## 🔐 3단계: Identity 활성화 (관리자 로그인용)

### A. Identity 켜기
1. Netlify 대시보드에서 "Identity" 탭 클릭
2. "Enable Identity" 클릭

### B. Git Gateway 활성화
1. Identity 설정에서 "Services" → "Git Gateway" 클릭
2. "Enable Git Gateway" 클릭

### C. 관리자 계정 만들기
1. "Identity" 탭 → "Invite users" 클릭
2. 쭈님 이메일 입력
3. 이메일로 온 초대 링크 클릭
4. 비밀번호 설정

---

## 🎉 4단계: 관리자 페이지 사용

### 관리자 페이지 접속
```
https://yoursite.netlify.app/admin/
```

### 포트폴리오 추가하기
1. 로그인
2. "포트폴리오" → "New 포트폴리오" 클릭
3. 정보 입력:
   - 제목
   - 카테고리 선택
   - 썸네일 이미지 업로드
   - 상세 이미지들 업로드
4. "Publish" 클릭

**자동으로 사이트에 반영됩니다!**

---

## 🌐 5단계: 커스텀 도메인 (선택사항)

### 도메인 구매
- Namecheap, GoDaddy 등에서 구매 (연 $10-20)

### Netlify에 연결
1. Netlify 대시보드 → "Domain settings"
2. "Add custom domain"
3. 도메인 입력
4. DNS 설정 (가이드 따라하기)

---

## 💡 사용 방법 요약

### 포트폴리오 추가
1. `yoursite.netlify.app/admin` 접속
2. 로그인
3. 이미지 드래그앤드롭
4. Publish 클릭
5. **끝!** 자동으로 사이트 업데이트

### 포트폴리오 수정
1. 관리자 페이지에서 수정하고 싶은 항목 클릭
2. 내용 수정
3. "Publish" 클릭

### 포트폴리오 삭제
1. 관리자 페이지에서 항목 클릭
2. "Delete" 클릭
3. 확인

---

## 🆓 완전 무료!

- ✅ Netlify 무료 플랜
- ✅ GitHub 무료
- ✅ 관리자 화면 포함
- ✅ 이미지 호스팅 포함
- ✅ SSL 인증서 자동

유료는 **커스텀 도메인만** (선택사항)

---

## 🎯 완성 후 모습

**방문자용 사이트:**
- `https://yourname.netlify.app`
- 왼쪽 사이드바 + 3단 그리드
- 클릭하면 모달로 큰 이미지

**관리자 페이지:**
- `https://yourname.netlify.app/admin`
- 로그인 필요
- 드래그앤드롭으로 이미지 업로드
- **코딩 필요 없음!**

---

## ❓ 문제 해결

### Identity 설정이 안 보여요
→ Netlify 대시보드 상단 탭에서 "Identity" 클릭

### 관리자 페이지가 안 열려요
→ Identity가 활성화되었는지 확인

### 이미지가 안 올라가요
→ Git Gateway가 활성화되었는지 확인

---

**준비되면 다음 단계 알려드릴게요!** 😊
