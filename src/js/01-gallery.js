// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { addLazySizesScript } from '../helpers/addLazySizesScript';
import { addSrcToLazyImages } from '../helpers/addSrcToLazyImages';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryUl: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
refs.galleryUl.insertAdjacentHTML('beforeend', galleryMarkup);

if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
  addSrcToLazyImages();
} else {
  // fetch polyfill/third-party library
  addLazySizesScript();
}

function createGalleryMarkup(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img loading="lazy" class="gallery__image lazyload" data-src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});




