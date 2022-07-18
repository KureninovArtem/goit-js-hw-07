import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const gallery = greateGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", gallery);
galleryContainer.addEventListener("click", clickGallery);

function greateGallery(array) {
    return array.reduce(
        (acc, item) =>
            acc + `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
            </a>
            </div>`,
        "");
};

function clickGallery(event) {
    event.preventDefault();

    const modal = basicLightbox.create(
        `<img src="${event.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => window.addEventListener("keydown", pressEsc),
            onClose: () => window.removeEventListener("keydown", pressEsc),
        }
    );

    modal.show();

    function pressEsc (event) {
        if (event.code === "Escape") {
            modal.close();
        }
    };
};