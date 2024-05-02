import $ from "jquery";
import "slick-carousel";

$(".slider").slick({
  dots: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  infinite: true,
  speed: 900,
});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});
