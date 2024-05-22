import { createDOMElement } from "../domHelperFunctions/createElement.js";
import { createImage } from "../domHelperFunctions/createImage.js";
import { paragraphContent } from "../paragraphContent.js";

//Images
import foodImage1 from "../assets/menu-image-1.jpg";

export const renderMenuPage = function () {
  const menuPage = document.getElementById('menu-page');

  menuPage.appendChild(createDOMElement('h1', '', 'Our Menu'));

  const foodCategoty = createDOMElement('section', 'food-category-menu');
  foodCategoty.appendChild(createDOMElement('h2','', 'Food Category'));

  const foodCard = createDOMElement('div', 'food-card');
  foodCard.appendChild(createImage(foodImage1));

  const foodDetails = createDOMElement('div', 'food-details');
  foodDetails.appendChild(createDOMElement('h3', '', 'Food Title'));
  foodDetails.appendChild(createDOMElement('p', '', paragraphContent));
  foodDetails.appendChild(createDOMElement('p', '', '$12.39'));

  foodCard.appendChild(foodDetails);
  foodCategoty.appendChild(foodCard);
  menuPage.appendChild(foodCategoty);
}