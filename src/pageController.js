export const pageController = function (e) {
  const pages = document.querySelectorAll('[data-page]');

  pages.forEach((page) => {
    if (e.target.dataset.button === page.dataset.page) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}