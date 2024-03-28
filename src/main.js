import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getDataFromAPI } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

// DOM elements
const formEl = document.querySelector('.search-form');
const inputEl = formEl.elements.search;
const gallery = document.querySelector('.gallery');
let galleryCard;
const loaderEl = document.querySelector('.loader');
const loadBtn = document.querySelector('.js-loadbtn');


const simplelightbox = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
  showCounter: false,
});

function loaderToggle() {
  loaderEl.classList.toggle('hidden');
}

function updateLoadBtnVisibility() {
  if (renderedHits < totalHits) {
    loadBtn.classList.remove('hidden');
  } else {
    loadBtn.classList.add('hidden');
    showError("We're sorry, but you've reached the end of search results.");
  }
}

function resetForPagination() {
  currentPage = 1;
  renderedHits = 15;
}

function cleanGallery() {
  if (gallery.innerHTML) gallery.innerHTML = '';
}

function smoothScroll(){
  const cardHeight = galleryCard.getBoundingClientRect().height;
  window.scrollBy({
    top: 3 * cardHeight, 
    behavior: 'smooth' 
  });
}

function showError(message) {
  iziToast.error({
    title: 'Error',
    message: `${message}`,
  });
}

let currentPage = 1;
let renderedHits = 15;
let currentQuery;
let totalHits;

async function getPhotoFromAPI(query, page) {
  try {
    const data = await getDataFromAPI(query, page);

    totalHits = data.totalHits;

    if (!data.hits.length) {
      showError(
        'Sorry, there are no images matching your search query. Please try again!'
      );
      return;
    }
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    simplelightbox.refresh();
    updateLoadBtnVisibility();
    
  } catch (error) {
    showError('Sorry, something wrong happened while fetching.');
    console.error(error);
  } finally {
    loaderToggle();
  }
}

formEl.addEventListener('submit', searchHandler);
function searchHandler(evt) {
  evt.preventDefault();

  cleanGallery();
  loaderToggle();

  if (!inputEl.value.trim()) {
    loaderToggle();
    showError('Please enter something!');
    return;
  }

  currentQuery = inputEl.value;

  getPhotoFromAPI(currentQuery, currentPage);
  
}

loadBtn.addEventListener('click', loadMoreHandler);

function loadMoreHandler() {
  if (renderedHits >= totalHits) {
    resetForPagination();
    return;
  }
  currentPage += 1;
  renderedHits += 15;

  loaderToggle();
  
  galleryCard = document.querySelector('.gallery-item');
  getPhotoFromAPI(currentQuery, currentPage).then(()=>{
   
    smoothScroll()
  })

}
