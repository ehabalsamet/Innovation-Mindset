// ----------------------
// المودال (نافذة المقال)
// ----------------------
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const closeModal = document.getElementById("close-modal");

// فتح المودال عند الضغط على عنوان المقال
document.querySelectorAll(".post-title").forEach(title => {
  title.addEventListener("click", () => {
    const post = title.closest(".post");
    modalTitle.textContent = post.querySelector(".post-title").textContent;
    modalBody.textContent = post.querySelector(".post-content").textContent;
    modal.style.display = "flex";
  });
});

// إغلاق المودال
closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target === modal) modal.style.display = "none";
};

// ----------------------
// تأثير in-fade عند التمرير
// ----------------------
const fadeEls = document.querySelectorAll(".in-fade");

function handleFade() {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleFade);
window.addEventListener("load", handleFade);

// ----------------------
// تبديل الوضع (داكن / فاتح)
// ----------------------
// زر تبديل الوضع
const themeBtn = document.getElementById("toggle-theme");

// عند الضغط على الزر
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // حفظ التفضيل
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// استرجاع التفضيل عند تحميل الصفحة
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}