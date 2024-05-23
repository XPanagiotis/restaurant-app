//import css files
import "./styles/general.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/home.css";
import "./styles/menu.css";
import "./styles/contact.css";

//import JS functions
import { pageController } from "./pageController.js";
import { renderHomePage } from "./view/render-home-page.js";
import { renderMenuPage } from "./view/render-menu-page.js";
import { renderContactPage } from "./view/render-contact-page.js";
import { mealCategory } from "./createMealCategory.js";
import { meal } from "./createMeal.js";
import { paragraphContent } from "./domHelperFunctions/paragraphContent.js";

//images
import foodImage1 from "./assets/menu-image-1.jpg";

//cashe DOM
const homeBtn = document.getElementById("home-button");
const menuBtn = document.getElementById("menu-button");
const contact = document.getElementById("contact-button");

//bind events
homeBtn.addEventListener("click", pageController);
menuBtn.addEventListener("click", pageController);
contact.addEventListener("click", pageController);

//create manualy all the meal categories and the meals that we will render
const mealCategories = [];

for (let i = 0; i <= 1; i++) {
  const mealCategory1 = new mealCategory("Pizza");

  for (let j = 0; j <= 2; j++) {
    const meal1 = new meal(
      "Pizza margarita",
      paragraphContent,
      "$12.39",
      foodImage1,
    );
    mealCategory1.meals.push(meal1);
  }
  mealCategories.push(mealCategory1);
}

//We render the pages and we display them when we need them through the pageController module
renderHomePage();
renderMenuPage(mealCategories);
renderContactPage();
