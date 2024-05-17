import "./general.css";
import "./header.css";
import "./footer.css";
import "./home.css";''
import Icon from "./assets/restaurant-logo.png";

console.log('hello world');

document.getElementById('next').addEventListener('click', () => showSlide(slideIndex += 1));
document.getElementById('prev').addEventListener('click', () => showSlide(slideIndex += 1));

let slideIndex = 1;
showSlide(slideIndex);

function showSlide(n) {
  let slides = document.querySelectorAll('.slide');
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
