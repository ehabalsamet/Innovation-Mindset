// entrepreneurship.js

document.addEventListener("DOMContentLoaded", function() {
  // ===========================
  // 1️⃣ تهيئة AOS
  // ===========================
  if (window.AOS) {
    AOS.init({ once: true, duration: 700 });
  }

  // ===========================
  // 2️⃣ تفعيل زر الهامبرغر للجوال
  // ===========================
  const navbarToggler = document.querySelector(".navbar-toggler");
  const mobileNav = document.getElementById("mobileNav");

  if (navbarToggler && mobileNav) {
    navbarToggler.addEventListener("click", function() {
      const bsCollapse = new bootstrap.Collapse(mobileNav, {
        toggle: true
      });
    });
  }

  // ===========================
  // 3️⃣ تفعيل مودال الحجز
  // ===========================
  const orderModalEl = document.getElementById("orderModal");
  const orderModal = new bootstrap.Modal(orderModalEl);
  const orderButtons = document.querySelectorAll(".btn-order, .btn-order-form");

  orderButtons.forEach(btn => {
    btn.addEventListener("click", function(e) {
      e.preventDefault();
      // يمكن تعديل الرسالة حسب الزر
      const title = btn.getAttribute("data-title") || "تم الحجز!";
      const modalMsg = orderModalEl.querySelector("#orderModalMsg");
      modalMsg.textContent = title;
      orderModal.show();
    });
  });

  // ===========================
  // 4️⃣ تحسين تجربة إرسال نموذج الاهتمام
  // ===========================
  const interestForm = document.getElementById("interestForm");
  if (interestForm) {
    interestForm.addEventListener("submit", function(e) {
      e.preventDefault();
      // هنا يمكن إضافة إرسال عبر AJAX لاحقًا
      orderModal.show();
      const modalMsg = orderModalEl.querySelector("#orderModalMsg");
      modalMsg.textContent = "تم استلام طلبك. سنتواصل معك قريباً لتأكيد الحجز وتفاصيل الدفع.";
      interestForm.reset();
    });
  }

  // ===========================
  // 5️⃣ تحسين تجاوب hero-visual مع الشاشات الصغيرة
  // ===========================
  function adjustHeroVisual() {
    const heroVisual = document.getElementById("hero-art");
    if (!heroVisual) return;

    if (window.innerWidth <= 768) {
      heroVisual.style.maxWidth = "90%";
    } else {
      heroVisual.style.maxWidth = "480px";
    }
  }

  window.addEventListener("resize", adjustHeroVisual);
  adjustHeroVisual();
});