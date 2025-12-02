// js/main.js

// GSAP 플러그인
gsap.registerPlugin(ScrollTrigger);

// 초기 로드 애니메이션
window.addEventListener("load", () => {
  gsap.from(".logo", {
    duration: 0.8,
    y: -20,
    opacity: 0,
    ease: "power2.out",
  });

  gsap.from(".nav-list li", {
    duration: 0.6,
    y: -10,
    opacity: 0,
    stagger: 0.08,
    ease: "power2.out",
  });

  gsap.from(".hero-tagline", {
    duration: 0.8,
    y: 20,
    opacity: 0,
    delay: 0.2,
    ease: "power3.out",
  });

  gsap.from(".hero-title", {
    duration: 0.9,
    y: 30,
    opacity: 0,
    delay: 0.35,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    duration: 0.9,
    y: 30,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out",
  });

  gsap.from(".hero-actions .btn", {
    duration: 0.7,
    y: 20,
    opacity: 0,
    delay: 0.7,
    stagger: 0.1,
    ease: "power3.out",
  });
});

// 섹션 스크롤 등장 애니메이션
gsap.utils.toArray("[data-section]").forEach((section) => {
  if (section.id === "hero") return;

  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: "power2.out",
  });
});

// 부드러운 스크롤 네비게이션
document.querySelectorAll('.nav-list a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 64;
    const rect = target.getBoundingClientRect();
    const offset = rect.top + window.scrollY - headerOffset + 1;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  });
});
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  // 기준점 설정
  gsap.set(card, { transformOrigin: "center center" });

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.25,
      y: -6, // 위로 살짝 띄우기
      scale: 1.03, // 약간 확대
      boxShadow: "0 14px 30px rgba(0, 0, 0, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.18)",
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.25,
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      borderColor: "rgba(255, 255, 255, 0.06)",
      ease: "power2.out",
    });
  });
});

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {
  gsap.set(card, { transformOrigin: "center center" });

  card.addEventListener("mouseenter", () => {
    gsap.to(card, {
      duration: 0.25,
      y: -6,
      scale: 1.03,
      boxShadow: "0 14px 30px rgba(0, 0, 0, 0.45)",
      borderColor: "rgba(255, 255, 255, 0.18)",
      ease: "power2.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      duration: 0.25,
      y: 0,
      scale: 1,
      boxShadow: "0 0 0 rgba(0,0,0,0)",
      borderColor: "rgba(255,255,255,0.06)",
      ease: "power2.out",
    });
  });
});

gsap.from(".hero-avatar img", {
  duration: 0.9,
  x: -30,
  opacity: 0,
  delay: 0.2,
  ease: "power3.out",
});
