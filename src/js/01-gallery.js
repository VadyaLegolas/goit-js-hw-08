// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryTpl from '../templates/gallery.hbs';

import { addLazySizesScript } from '../helpers/addLazySizesScript';
import { addSrcToLazyImages } from '../helpers/addSrcToLazyImages';
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryUl: document.querySelector('.gallery'),
};

const galleryMarkup = galleryTpl(galleryItems);
refs.galleryUl.insertAdjacentHTML('beforeend', galleryMarkup);

if ('loading' in HTMLImageElement.prototype) {
  // supported in browser
  addSrcToLazyImages();
} else {
  // fetch polyfill/third-party library
  addLazySizesScript();
}

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
