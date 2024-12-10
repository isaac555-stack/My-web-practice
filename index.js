$("#hamburger").on("click", function () {
  //-
  $(".collapse").slideToggle(); //-
}); //-
//-
$("#bell").on("click", function () {
  //-
  document.querySelector(".off-canvas").classList.toggle("open"); //-
}); //-
//-
$(".removeCanvas").on("click", function () {
  //-
  $(".off-canvas").removeClass("open"); //-
}); //-
//-
$(".container").on("click", function () {
  //-
  $(".off-canvas").removeClass("open"); //-
  $(".collapse").slideUp(); //-
}); //-
// // Carousel functionality//+
// const $track = $(".carousel-track");
// const $slides = $(".carousel-item");
// const totalSlides = $slides.length;
// const $indicators = $(".carousel-indicator > span");//+

// let currentSlideIndex = 0;//+
// let intervalId;//+

// function updateSlidePosition() {
//   const newPosition = -currentSlideIndex * 100 + "%";
//   $track.css("transform", `translateX(${newPosition})`);
// }

// function updateActiveSlide() {//+
//   $indicators.removeClass("active");//+
//   $($indicators[currentSlideIndex]).addClass("active");//+
// }//+

// function moveToSlide(index) {//+
//   currentSlideIndex = (index + totalSlides) % totalSlides;//+

// }//+

// function nextSlide() {//+
//   moveToSlide(currentSlideIndex + 1);//+
// }//+
// //+
// function prevSlide() {//+
//   moveToSlide(currentSlideIndex - 1);//+
// }//+
// //+
// $(".btn-next").click(nextSlide);//+
// //+
// $(".btn-prev").click(prevSlide);//+
// //+
// // Allow clicking on indicators to jump to a slide//+
// $indicators.each(function(index) {//+
//   $(this).click(function() {
//     moveToSlide(index);
//     resetInterval();
//   });
// });

// //+
// function startInterval() {//+
//   intervalId = setInterval(nextSlide, 3000);//+
// }//+
// //+
// function resetInterval() {//+
//   clearInterval(intervalId);//+
//   startInterval();//+
// }//+
// //+
// // Start automatic sliding//+
// startInterval();//+
// //+
// // Pause on hover//+
// $track.hover(//+
//   function() { clearInterval(intervalId); },//+
//   startInterval//+
// );//+

const $track = $(".carousel-track");
const $slides = $(".carousel-item");
const totalSlides = $slides.length;
const $indicators = $(".carousel-indicator > span");

let currentSlideIndex = 0;
let intervalId;

function updateSlidePosition() {
  const newPosition = -currentSlideIndex * 100 + "%";
  $track.css("transform", `translateX(${newPosition})`);
}

function updateActiveSlide() {
  $indicators.removeClass("active");
  $($indicators[currentSlideIndex]).addClass("active");
}

function moveToSlide(index) {
  currentSlideIndex = (index + totalSlides) % totalSlides;
  updateSlidePosition();
  updateActiveSlide();
}

function nextSlide() {
  moveToSlide(currentSlideIndex + 1);
}

function prevSlide() {
  moveToSlide(currentSlideIndex - 1);
}

$(".btn-next").click(nextSlide);

$(".btn-prev").click(prevSlide);

// Allow clicking on indicators to jump to a slide
$indicators.each(function (index) {
  $(this).click(function () {
    moveToSlide(index);
    resetInterval();
  });
});

function startInterval() {
  intervalId = setInterval(nextSlide, 3000);
}

function resetInterval() {
  clearInterval(intervalId);
  startInterval();
}

// Start automatic sliding
startInterval();

// Pause on hover
$track.hover(function () {
  clearInterval(intervalId);
}, startInterval);
