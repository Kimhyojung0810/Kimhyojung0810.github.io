# 📄 Portfolio Website

개인 포트폴리오 웹사이트입니다.
HTML, CSS, Vanilla JS로 구성하고, 애니메이션은 프레임워크에 의존하지 않는 GSAP를 활용해 구현했습니다.

---

## ✨ Features

* Hero 섹션 로딩 애니메이션
* ScrollTrigger 기반 섹션 등장 효과
* 프로젝트 카드 Hover 인터랙션
* 바닐라 JS 기반 Smooth Scroll Navigation
* 경량 구조: **HTML + CSS + JS + GSAP만 사용**

---

## 🎨 GSAP를 활용한 애니메이션

이 프로젝트는 React나 다른 UI 라이브러리 없이,
**바닐라 JS + GSAP만으로 애니메이션을 구현한 것**이 핵심 포인트입니다.

### ✔ 1. 초기 로드 애니메이션 (Hero)

페이지 로드 시 로고, 네비게이션 메뉴, 히어로 문구가
**순차적으로 자연스럽게 등장**하도록 `gsap.from()`과
`delay`, `stagger`를 사용했습니다.

```js
gsap.from(".nav-list li", { y: -10, opacity: 0, stagger: 0.08 });
gsap.from(".hero-title", { y: 30, opacity: 0, delay: 0.35 });
```

### ✔ 2. ScrollTrigger로 섹션 등장

각 섹션에 `data-section` 속성을 부여하고,
ScrollTrigger가 화면 진입 시점을 자동으로 감지해 **페이드인 + 슬라이드 효과**를 실행합니다.

```js
gsap.from(section, {
  scrollTrigger: { trigger: section, start: "top 80%" },
  opacity: 0,
  y: 40,
});
```

### ✔ 3. 카드 Hover 인터랙션

Hover 시 카드가 **살짝 떠오르는 3D 인터랙션**을 구현했습니다.
GSAP를 사용해 `scale`, `y`, `boxShadow` 등을 동시에 제어했습니다.

```js
gsap.to(card, {
  scale: 1.03,
  y: -6,
  boxShadow: "0 14px 30px rgba(0,0,0,.45)",
});
```

---

## 📁 Tech Stack

* **HTML5**
* **CSS3**
* **Vanilla JavaScript**
* **GSAP (GreenSock Animation Platform)**
  * ScrollTrigger Plugin 사용

---

## 🚀 Deployment

GitHub Pages로 배포되었습니다.

```text
https://kimhyojung0810.github.io/
```

---

## 📌 개발 포인트

* 다른 프레임워크 없이 **경량 구조 유지**
* GSAP를 통해 애니메이션 로직을 일관되게 관리
* 화면 흐름(Hero → Section → Project) 중심의 자연스러운 UX 설계
* DOM 조작은 바닐라 JS, 애니메이션은 GSAP로 역할 분리

---

## 📞 Contact

* Email: [jenny0308@g.skku.edu](mailto:jenny0308@g.skku.edu)
* GitHub: [https://github.com/Kimhyojung0810](https://github.com/Kimhyojung0810)

---
