import { createDOMElement } from "../domHelperFunctions/createElement"
import { createImage } from "../domHelperFunctions/createImage";

//Images
import mapImage from "../assets/map.png";
import socialImage1 from "../assets/instagram-icon.svg";
import socialImage2 from "../assets/facebook-icon.svg";
import socialImage3 from "../assets/tik-tok-icon.svg";
 
export const renderContactPage = function() {
  const contactPage = document.getElementById('contact-page');

  const contactSection = createDOMElement('section', 'contact-section');
  contactSection.appendChild(createImage(mapImage));

  const contactDetailsWrapper = createDOMElement('div', 'contact-details-wrapper');
  contactDetailsWrapper.appendChild(createDOMElement('h1', '',  'Where you can find us?'));

  const contactDetails = createDOMElement('div', 'contact-details');
  contactDetails.appendChild(createDOMElement('p', '', 'Adress: Street 1, Athens'));
  contactDetails.appendChild(createDOMElement('p', '', 'Kitchen hours: 11:30 - 23:30'));
  contactDetails.appendChild(createDOMElement('p', '', 'Phone: +30 210 123 4567'));
  contactDetails.appendChild(createDOMElement('p', '', 'Email: example@restaurant.com'));

  contactDetailsWrapper.appendChild(contactDetails);

  const socialWrapper = createDOMElement('div', 'social-wrapper');
  socialWrapper.appendChild(createImage(socialImage1));
  socialWrapper.appendChild(createImage(socialImage2));
  socialWrapper.appendChild(createImage(socialImage3));

  contactDetailsWrapper.appendChild(socialWrapper);
  contactSection.appendChild(contactDetailsWrapper);
  contactPage.appendChild(contactSection);
}