const fontSizes = document.querySelectorAll('.book__control_font-size .font-size');
const bookContent = document.getElementsByClassName('book__content')[0];

fontSizes.forEach((fontLink) => {
    fontLink.onclick = function (event) {
        event.preventDefault();
        bookContent.classList.remove('font-size_small', 'font-size_big');
        if (fontLink.dataset.size) {
            bookContent.classList.add(`font-size_${fontLink.dataset.size}`);
        }
        fontSizes.forEach(size => size.classList.remove('font-size_active'));
        fontLink.classList.add('font-size_active');
    }
})