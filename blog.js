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
const themeBtn = document.getElementById("toggle-theme");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}