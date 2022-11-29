// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from './gallery-items';

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(SimpleLightbox);
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImageMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);
 
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
    event.preventDefault();
   
   const isGalleryItem = event.target.classList.contains("gallery__image");
   if(!isGalleryItem) {
       return;
   }
   console.log(isGalleryItem);
}

var lightbox = new SimpleLightbox('.gallery a', {
captionsData: "alt",
captionDelay: 250,
});

function createImageMarkup(images) {
    return images.map(({ preview , original , description }) => {
        return `
        <a class="gallery__item" href="${original}">
       <img class="gallery__image" src="${preview}"
        alt="${description}" />
    </a >
        `;
    }).
    join("");
  
}
