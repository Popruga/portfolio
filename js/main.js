$(function(){

    var mixer = mixitup('.works');

    const burger = document.querySelector('.burger'); 
    const headerNaw = document.querySelector('.header__nav');
    const body = document.querySelector('body');
    
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger--active');
      headerNaw.classList.toggle('active');
      body.classList.toggle('lock');
    });

window.onscroll = () => {
  if (window.pageYOffset > 300) {
    headerNaw.classList.add('fixed');
  } else {
    headerNaw.classList.remove('fixed');
  }
};

const headerHeight = headerNaw.offsetHeight;

headerNaw.addEventListener('click', event => {
  if (event.target.classList.contains('menu__link')) {
    event.preventDefault();
    if (window.innerWidth <= 992) {
      burger.classList.remove('burger--active');
      headerNaw.classList.remove('active');
      body.classList.toggle('lock')
    }
  }
});
document.addEventListener('click', function (e) {
  if (e.target !== burger && e.target !== headerNaw) {
    burger.classList.remove('burger--active');
      headerNaw.classList.remove('active');
      body.classList.remove('lock')
  }
});
$(".header a, footer a").on("click", function(event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
    top = $(id).offset().top;
  $('html, body').animate({scrollTop: top}, 1000);
});
});



// $(document).ready(function() {


// $(window).scroll(function() {
//   if ($(window).scrollTop() > 300) {
//     $('.header__nav').addClass('fixed')
//   }
//   else {
//     $('.header__nav').removeClass('fixed')
//   }
// });






