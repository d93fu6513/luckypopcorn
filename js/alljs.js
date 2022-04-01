$(document).ready(function() {

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

var num_jia = document.getElementById("num-jia");
var num_jian = document.getElementById("num-jian");
var input_num = document.getElementById("input-num");

num_jia.onclick = function() {

    input_num.value = parseInt(input_num.value) + 1;
}

num_jian.onclick = function() {

    if(input_num.value <= 0) {
        input_num.value = 0;
    } else {

        input_num.value = parseInt(input_num.value) - 1;
    }

}
});