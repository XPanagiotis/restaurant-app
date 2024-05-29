//import css files
import "./styles/general.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";
import "./styles/reservation-form.css";

//import JS functions
import { pageController } from "./controller/pageController.js";
import { renderHomePage } from "./view/render-home-page.js";
import { renderMenuPage } from "./view/render-menu-page.js";
import { renderContactPage } from "./view/render-contact-page.js";
import { paragraphContent } from "./domHelperFunctions/paragraphContent.js";
import { showForm } from "./controller/showForm.js";
import { meal } from "./meal-objects/createMeal.js";
import { mealCategory } from "./meal-objects/createMealCategory.js";

//images
import foodImage1 from "./assets/menu-image-1.jpg";
import restaurantLogo from "./assets/restaurant-logo.png";
import instagramIcon from "./assets/instagram-icon.svg";
import tikTokIcon from "./assets/tik-tok-icon.svg";
import facebookIcon from "./assets/facebook-icon.svg";
import googlemapsIcon from "./assets/google-maps-icon.png";

//cashe DOM
const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const contactBtn = document.getElementById("contact-button");
const reservationBtn = document.getElementById("reservation-button");

//bind events
homeBtn.addEventListener("click", pageController);
menuBtn.addEventListener("click", pageController);
contactBtn.addEventListener("click", pageController);
reservationBtn.addEventListener("click", showForm);

//create manualy all the meal categories and the meals that we will render
const mealCategories = [];

for (let i = 0; i <= 1; i++) {
  const mealCategory1 = new mealCategory("Pizza");

  for (let j = 0; j <= 2; j++) {
    const meal1 = new meal(
      "Pizza margarita",
      paragraphContent,
      "$12.39",
      foodImage1
    );
    mealCategory1.meals.push(meal1);
  }
  mealCategories.push(mealCategory1);
}

//We render the pages and we display them when we need them through the pageController module
renderHomePage();
renderMenuPage(mealCategories);
renderContactPage();
