// courses.js — elegant & smooth animations with IntersectionObserver
document.addEventListener('DOMContentLoaded', () => {
  // IntersectionObserver for fade-up elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold: 0.18});

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const a = btn.nextElementSibling;
      const open = a.style.maxHeight && a.style.maxHeight !== '0px';
      document.querySelectorAll('.faq-a').forEach(x => x.style.maxHeight = null);
      if (!open) a.style.maxHeight = a.scrollHeight + 'px';
    });
  });

  // "تفاصيل أكثر" toggle on cards
  document.querySelectorAll('.more-btn').forEach((b) => {
    b.addEventListener('click', () => {
      const card = b.closest('.card');
      const points = card.querySelector('.points');
      const opened = card.classList.contains('open');
      if (opened) {
        card.classList.remove('open');
        b.setAttribute('aria-expanded', 'false');
        points.style.maxHeight = '120px';
      } else {
        card.classList.add('open');
        b.setAttribute('aria-expanded', 'true');
        points.style.maxHeight = points.scrollHeight + 'px';
      }
    });
  });

  // clamp points initially
  document.querySelectorAll('.points').forEach(p => {
    p.style.maxHeight = '120px';
    p.style.overflow = 'hidden';
  });

  // smooth in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // small header transparent -> slight background on scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) header.style.background = 'rgba(0,0,0,0.45)';
    else header.style.background = 'transparent';
  });
});


// auto-duplicate testimonials for infinite scrolling
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.testimonials-track');
  if (!track) return;

  // نسخ كل البطاقات ووضعها بعد الأصلية
  const cards = Array.from(track.children);
  cards.forEach(card => {
    const clone = card.cloneNode(true);
    track.appendChild(clone);
  });

  // ضبط عرض track تلقائياً
  const trackWidth = Array.from(track.children).reduce((acc, el) => acc + el.offsetWidth + 18, 0); // 18px gap
  track.style.width = trackWidth + 'px';
});



// ====== إرسال اسم الدورة تلقائيًا إلى واتساب ======
document.querySelectorAll('.card').forEach(card => {
  const btn = card.querySelector('.btn-primary');
  const title = card.querySelector('.card-title')?.innerText.trim();
  
  if (btn && title) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const message = `مرحباً إيهاب، أرغب بالاشتراك في [${title}]. هل يمكنك تزويدي بالمزيد من التفاصيل؟`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/967773133134?text=${encodedMessage}`;
      window.open(whatsappURL, '_blank');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const modal = document.getElementById('success-modal');
  const closeModal = document.getElementById('close-modal');

  if (!form) return; // إذا لم يكن هناك فورم، لا نفعل شيئاً

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الافتراضي

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        modal.style.display = 'flex'; // عرض المودال
        form.reset(); // إعادة تعيين الفورم
      } else {
        alert('حدث خطأ، يرجى المحاولة لاحقاً.');
      }
    })
    .catch(() => {
      alert('حدث خطأ، يرجى المحاولة لاحقاً.');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});