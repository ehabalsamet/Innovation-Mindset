// عند إرسال النموذج
document.getElementById("checkout-form")?.addEventListener("submit", function (e) {
  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    e.preventDefault();
    alert("يرجى تعبئة الاسم والبريد الإلكتروني بشكل صحيح قبل الإرسال.");
  } else {
    alert("✅ تم إرسال الطلب بنجاح! سيتم توجيهك لتأكيد الدفع.");
  }
});