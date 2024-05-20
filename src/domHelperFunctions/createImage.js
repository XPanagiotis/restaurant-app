//Create Image element Helper function
//We get the image src and then we append it as a child to its parent

export const createImage = function (src) {
  const image = document.createElement('img')
  image.src = src;
  
  return image
}