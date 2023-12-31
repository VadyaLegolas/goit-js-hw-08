function addSrcToLazyImages() {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.src = img.dataset.src;
  });
}

export { addSrcToLazyImages };
