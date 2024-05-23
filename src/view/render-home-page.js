import { createDOMElement } from "../domHelperFunctions/createElement.js";
import { createImage } from "../domHelperFunctions/createImage.js";
import { paragraphContent } from "../domHelperFunctions/paragraphContent.js";
import { imageCarouselAnimation } from "../domHelperFunctions/image-carousel.js";

//images
import homeImage from "../assets/home-image.jpg";
import restaurantImage1 from "../assets/restaurant-image.jpg";
import image1 from "../assets/food-image-1.jpg";
import image2 from "../assets/food-image-2.jpg";
import image3 from "../assets/food-image-3.jpg";
import image4 from "../assets/food-image-4.jpg";
import image5 from "../assets/food-image-5.jpg";
import image6 from "../assets/food-image-6.jpg";

const foodImages = [image1, image2, image3, image4, image5, image6];

export const renderHomePage = function () {
  //Create the first text sextion
  const main = document.getElementById("home-page");

  const textSection = createDOMElement("section", "text-section");

  const textDiv = textSection.appendChild(createDOMElement("div", "text"));

  textDiv.appendChild(createDOMElement("h1", "", "Some Title"));
  textDiv.appendChild(createDOMElement("p", "", paragraphContent));
  textDiv.appendChild(createDOMElement("button", "reservation", "Reservation"));

  textSection.appendChild(createImage(homeImage));

  main.appendChild(textSection);

  //Create background image
  const backGroundImage = createDOMElement("div", "background-image");
  main.appendChild(backGroundImage);

  //Create the second text section
  const textSection2 = createDOMElement("section", "text-section");

  textSection2.appendChild(createImage(restaurantImage1));

  const textDiv2 = textSection2.appendChild(createDOMElement("div", "text"));
  textDiv2.appendChild(createDOMElement("h1", "", "Some Title"));
  textDiv2.appendChild(createDOMElement("p", "", paragraphContent));

  main.appendChild(textSection2);

  //Create image carousel
  const carouselSection = createDOMElement("section", "image-slider");

  carouselSection.appendChild(createDOMElement("div", "prev", "<", "prev"));

  const imageList = createDOMElement("ul", "images");

  //create li element whith the food images
  for (let i = 0; i <= 5; i++) {
    let li = createDOMElement("li", "slide fade");
    li.appendChild(createImage(foodImages[i]));
    imageList.appendChild(li);
  }
  carouselSection.appendChild(imageList);

  carouselSection.appendChild(createDOMElement("div", "next", ">", "next"));

  main.appendChild(carouselSection);
  imageCarouselAnimation();
};
