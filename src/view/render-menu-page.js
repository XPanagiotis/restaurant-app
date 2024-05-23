import { createDOMElement } from "../domHelperFunctions/createElement.js";
import { createImage } from "../domHelperFunctions/createImage.js";

export const renderMenuPage = function (mealCategories) {
  const menuPage = document.getElementById("menu-page");

  menuPage.appendChild(createDOMElement("h1", "", "Our Menu"));

  //create DOM elements for meal categories and each category contains its own meals
  mealCategories.forEach((category) => {
    const mealCategory = createDOMElement("section", "meal-category-menu");
    mealCategory.appendChild(createDOMElement("h2", "", category.category));

    category.meals.forEach((meal) => {
      //create meal card that contain the image and the details for each meal
      const mealCard = createDOMElement("div", "meal-card");
      mealCard.appendChild(createImage(meal.img));

      const mealDetails = createDOMElement("div", "meal-details");
      mealDetails.appendChild(createDOMElement("h3", "", meal.title));
      mealDetails.appendChild(createDOMElement("p", "", meal.description));
      mealDetails.appendChild(createDOMElement("p", "", meal.price));

      mealCard.appendChild(mealDetails);
      mealCategory.appendChild(mealCard);
    });

    menuPage.appendChild(mealCategory);
  });
};
