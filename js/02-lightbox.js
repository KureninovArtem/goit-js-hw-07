import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = greateGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallery);

function greateGallery(array) {
    return array.reduce(
        (acc, item) =>
            acc + `
            <a class="gallery__item" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
            />
            </a>`,
        "");
};

new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
});