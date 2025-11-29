const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach((tab, position) => {
    tab.onclick = function (event) {
        let indexToRemove = Array.from(tabs).findIndex((element) => element.classList.contains('tab_active'));
        tabs[indexToRemove].classList.remove('tab_active');
        tabContents[indexToRemove].classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        tabContents[position].classList.add('tab__content_active');
    }
});