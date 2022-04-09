$(document).ready(function () {
  $('.remove').click(function (event) {
    /* Act on the event */
    $(this).parent().parent().hide();
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
    },
    effect: 'slide',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()

  //產品內頁BANNER
  var swiper = new Swiper(".productSwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".productSwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  //產品內頁 數量增減
  var numplus = document.getElementById("numplus");
  var numminus = document.getElementById("numminus");
  var input_num = document.getElementById("input-num");

  numplus.onclick = function () {

    input_num.value = parseInt(input_num.value) + 1;
  }

  numminus.onclick = function () {

    if (input_num.value <= 0) {
      input_num.value = 0;
    } else {

      input_num.value = parseInt(input_num.value) - 1;
    }

  }
  //產品內頁 容量-價格
  var area = document.getElementById('size');
  var list = document.querySelector('.price');

  var product = [
    {
      price: '$70',
      size: '袋裝(70oz)'
    },
    {
      price: '$120',
      size: '桶裝(120oz)'
    }
  ]
  var len = product.length;

  function updateList(e) {
    var select = e.target.value;
    var str = '';
    for (var i = 0; len > i; i++) {
      if (select == product[i].size) {
        str += product[i].price
      }
    }
    list.innerHTML = str;
  }

  area.addEventListener('change', updateList, false)

});