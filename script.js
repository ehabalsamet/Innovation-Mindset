/* ======================================================
   ملف الجافا سكربت لموقع Innovation Mindset Skills
   إعداد: إيهاب
   ====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ إنشاء المودال
  const modal = document.createElement("div");
  modal.classList.add("custom-modal");
  modal.innerHTML = `
    <div class="modal-overlay"></div>
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <h3>التسجيل في البرنامج</h3>
      <p id="courseName">جارٍ التحميل...</p>
      <button id="sendWhatsApp" class="btn btn-primary">تأكيد عبر واتساب</button>
    </div>
  `;
  document.body.appendChild(modal);

  const overlay = modal.querySelector(".modal-overlay");
  const closeBtn = modal.querySelector(".close-btn");
  const sendBtn = modal.querySelector("#sendWhatsApp");
  const courseNameField = modal.querySelector("#courseName");

  let currentCourse = "";

  // 2️⃣ التعامل مع أزرار الاشتراك
  const orderButtons = document.querySelectorAll(".btn-order");
  if (orderButtons.length > 0) {
    orderButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        const card = btn.closest(".card");
        currentCourse =
          card?.querySelector(".card-title")?.innerText || "أحد برامجنا";

        courseNameField.textContent = `هل ترغب بالتسجيل في "${currentCourse}"؟`;
        modal.classList.add("show");
      });
    });
  }

  // 3️⃣ إغلاق المودال
  closeBtn.addEventListener("click", () => modal.classList.remove("show"));
  overlay.addEventListener("click", () => modal.classList.remove("show"));

  // 4️⃣ إرسال إلى واتساب
  sendBtn.addEventListener("click", () => {
    const phoneNumber = "967773133134"; // بدون +
    const message = `مرحباً، أرغب بالتسجيل في برنامج "${currentCourse}". هل يمكنني معرفة التفاصيل؟`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
    modal.classList.remove("show");
  });

  // 5️⃣ تغيير لون الهيدر عند التمرير
  const header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }
});

/* ======================================================
   CSS المودال (يُضاف تلقائياً)
   ====================================================== */
const style = document.createElement("style");
style.innerHTML = `
.custom-modal {
  position: fixed;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.custom-modal.show {
  display: flex;
  animation: fadeIn 0.3s ease;
}
.modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
}
.modal-content {
  position: relative;
  background: #fff;
  color: #000;
  border-radius: 12px;
  padding: 30px 40px;
  text-align: center;
  z-index: 2;
  animation: slideUp 0.4s ease;
  max-width: 400px;
}
.close-btn {
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  transition: 0.2s;
}
.close-btn:hover {
  color: #000;
}
@keyframes fadeIn {
  from {opacity: 0;} to {opacity: 1;}
}
@keyframes slideUp {
  from {transform: translateY(30px); opacity: 0;} to {transform: translateY(0); opacity: 1;}
}
`;
document.head.appendChild(style);




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("newsletter-form");
  const modal = document.getElementById("success-modal");
  const closeModal = document.querySelector(".close-modal-news");
  const okBtn = document.getElementById("ok-btn-news");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        modal.classList.add("show"); // ✅ هذا السطر يُظهر المودال
        form.reset(); // تفريغ الحقول
      } else {
        alert("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
      }
    } catch (error) {
      alert("تعذر الاتصال بالخادم.");
    }
  });

  // إغلاق المودال
  [closeModal, okBtn].forEach(btn => {
    btn.addEventListener("click", () => modal.classList.remove("show"));
  });
});