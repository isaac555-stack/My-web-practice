$("#hamburger").on("click", function () {
  $(".collapse").slideToggle();
});

$("#bell").on("click", function () {
  document.querySelector(".off-canvas").classList.toggle("open");
});

$(".removeCanvas").on("click", function () {
  $(".off-canvas").removeClass("open");
});

$(".container").on("click", function () {
  $(".off-canvas").removeClass("open");
  $(".collapse").slideUp();
});

$(".person-circle").on("click", function () {
  $(".form-signin").addClass("open");
  $(".container").css("opacity", "0.2");
});

$(".form-floating>button").on("click", function () {
  $(".container").css("opacity", "1");
  $(".form-signin").removeClass("open");
});

$(".list>h3").on("hover", function () {
  $(".list>h3").css("border", "3px");
});

var $track = $(".carousel-track");
var $slides = $(".carousel-item");
var totalSlides = $slides.length;

var totalIndicator = $(".carousel-indicator > span");
var intervalId;
var currentSlideIndex = 0;

function updateActiveSlide() {
  totalIndicator.removeClass("active");

  $(totalIndicator[currentSlideIndex]).addClass("active");
}

function moveToSlide(index) {
  currentSlideIndex = (index + totalSlides) % totalSlides;
  updateSlidePosition();
  updateActiveSlide();
}

totalIndicator.each(function (index) {
  $(this).click(function () {
    moveToSlide(index);
    resetInterval();
  });
});

function updateSlidePosition() {
  const newPosition = -currentSlideIndex * 100 + "%";
  $track.css("transform", `translateX(${newPosition})`);
}

$(".btn-next").click(function () {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  updateSlidePosition();
  updateActiveSlide();
});

$(".btn-prev").click(function () {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
  updateActiveSlide();
});

setInterval(function () {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  updateSlidePosition();
  updateActiveSlide();
}, 3000);
