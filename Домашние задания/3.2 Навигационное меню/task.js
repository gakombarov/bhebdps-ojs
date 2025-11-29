const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(menuLink => {
    menuLink.onclick = function (event) {
        const menuItem = this.closest('.menu__item');
        const subMenu = menuItem.querySelector('.menu_sub');

        if (subMenu) {
            event.preventDefault();
            closeAllSubMenus();
            subMenu.classList.add('menu_active');
        }
    }
});

function closeAllSubMenus() {
    const subMenus = document.querySelectorAll('.menu_sub');

    subMenus.forEach(subMenu => {
        subMenu.classList.remove('menu_active');
    })
}