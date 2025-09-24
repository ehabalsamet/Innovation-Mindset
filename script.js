// كشف العناصر عند التمرير
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

form.addEventListener('submit', async (e) => {
  e.preventDefault(); // منع إعادة تحميل الصفحة
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.reset(); // تفريغ الحقول
      message.style.display = 'block'; // إظهار رسالة النجاح
    } else {
      alert("❌ حدث خطأ أثناء الإرسال، حاول مرة أخرى.");
    }
  } catch (error) {
    alert("⚠️ لم يتم الاتصال بالخادم.");
  }
});