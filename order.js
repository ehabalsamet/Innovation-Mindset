    // Simple client-side stock counter (demo only).
    (function(){
      const STOCK_KEY = 'preorder_stock_v1';
      const INITIAL_STOCK = 50; // عدل العدد المحدود هنا
      let stock = parseInt(localStorage.getItem(STOCK_KEY) || INITIAL_STOCK);

      const stockEl = document.getElementById('stock-count');
      const preorderForm = document.getElementById('preorder-form');
      const preorderBtn = document.getElementById('reserve-btn');

      function updateStockUI(){
        stockEl.textContent = `تبقى ${stock} نسخة فقط`;
        if(stock <= 0){
          stockEl.textContent = 'انتهت الكمية';
          preorderBtn.disabled = true;
          preorderBtn.textContent = 'انتهى العرض';
        }
      }

      updateStockUI();

      preorderForm.addEventListener('submit', function(e){
        if(stock <= 0){
          e.preventDefault();
          alert('عذرًا، انتهت الكمية الخاصة بالحجز المسبق.');
          return;
        }
        // decrement stock in localStorage (demo)
        stock = Math.max(0, stock - 1);
        localStorage.setItem(STOCK_KEY, stock);
        updateStockUI();
        // let the form continue to checkout (GET with price)
      });

      // Also handle top hero button
      const heroBtn = document.getElementById('preorder-btn');
      heroBtn && heroBtn.addEventListener('click', function(){
        if(stock <= 0){
          alert('انتهت الكمية');
          event.preventDefault();
        }
      });
    })();
    
    
    
const swiper = new Swiper('.book-carousel', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});