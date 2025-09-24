document.addEventListener("DOMContentLoaded", () => {
  const animItems = document.querySelectorAll('.animate');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  animItems.forEach(item => observer.observe(item));

  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); 
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          form.reset(); 
          message.style.display = 'block'; 
        } else {
          alert("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
        }
      } catch (error) {
        alert("⚠️ لم يتم الاتصال بالخادم.");
      }
    });
  }
});