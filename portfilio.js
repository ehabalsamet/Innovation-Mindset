document.addEventListener("DOMContentLoaded", () => {
  // الأنيميشن عند التمرير
  const animItems = document.querySelectorAll('.animate');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });
  animItems.forEach(item => observer.observe(item));

  // نموذج التواصل
  const form = document.getElementById("contactForm");
  const modal = new bootstrap.Modal(document.getElementById("formModal"));
  const modalTitle = document.getElementById("formModalTitle");
  const modalMsg = document.getElementById("formModalMsg");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      // التحقق المحلي
      if (!name || !email || !msg) {
        modalTitle.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: orange;"></i> خطأ في الإدخال`;
        modalMsg.textContent = "جميع الحقول مطلوبة!";
        modal.show();
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
      if (!email.match(emailPattern)) {
        modalTitle.innerHTML = `<i class="fa-solid fa-triangle-exclamation" style="color: orange;"></i> بريد غير صالح`;
        modalMsg.textContent = "الرجاء إدخال بريد إلكتروني صحيح!";
        modal.show();
        return;
      }

      // إرسال البيانات إلى Formspree
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset();
          modalTitle.innerHTML = `<i class="fa-solid fa-check" style="color: green;"></i> تم الإرسال بنجاح`;
          modalMsg.textContent = "شكرًا لتواصلك معنا، سنرد عليك قريبًا.";
          modal.show();
        } else {
          modalTitle.innerHTML = `<i class="fa-solid fa-xmark" style="color: crimson;"></i> خطأ في الإرسال`;
          modalMsg.textContent = "حدث خطأ أثناء الإرسال، حاول مرة أخرى.";
          modal.show();
        }
      } catch (error) {
        modalTitle.innerHTML = `<i class="fa-solid fa-xmark" style="color: crimson;"></i> فشل الاتصال`;
        modalMsg.textContent = "لم يتم الاتصال بالخادم.";
        modal.show();
      }
    });
  }
});