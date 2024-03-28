function createMarkup(array){
    return array.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <li class="gallery-item">
    <a class="gallery-link" href="${largeImageURL}">
      <img class="gallery-image"  src="${webformatURL}" alt="${tags}">
      <ul class="descr-list">
        <li class="descr-item"><span class="descr-header">Likes</span> <span class="descr-value">${likes}</span></li>
        <li class="descr-item"><span class="descr-header">Views</span> <span class="descr-value">${views}</span></li>
        <li class="descr-item"><span class="descr-header">Comments</span> <span class="descr-value">${comments}</span></li>
        <li class="descr-item"><span class="descr-header">Downloads</span> <span class="descr-value">${downloads}</span></li>
      </ul>
      </a>
    </li>`).join(" ")
    }
    
    export {createMarkup}