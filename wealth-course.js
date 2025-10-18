// === تفعيل الأنيميشن عند التمرير ===
const animatedElements = document.querySelectorAll('.animate');

function showOnScroll() {
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// === سلاسة التمرير عند الضغط على روابط القائمة ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// === التحقق من تحميل الصفحة ===
document.addEventListener("DOMContentLoaded", () => {
  console.log("Wealth Course script loaded successfully ✅");
});
