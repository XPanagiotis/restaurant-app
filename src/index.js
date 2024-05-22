import "./general.css";
import "./header.css";
import "./footer.css";
import "./home.css";
import "./menu.css";
import "./contact.css";
import { pageController } from "./pageController.js";
import { renderHomePage } from "./view/render-home-page.js";
import { renderMenuPage } from "./view/render-menu-page.js";
import { renderContactPage } from "./view/render-contact-page.js"; 


//cashe DOM
const homeBtn = document.getElementById('home-button');
const menuBtn = document.getElementById('menu-button');
const contact = document.getElementById('contact-button');

//bind events
homeBtn.addEventListener('click', pageController);
menuBtn.addEventListener('click', pageController);
contact.addEventListener('click', pageController);

//We render the pages and we display them when we need them through the pageController module
renderHomePage();
renderMenuPage();
renderContactPage();
