const menuLinks = document.querySelectorAll('.scroll-to[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(x) {
        const menuLink = x.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            x.preventDefault();
        }
    }
}
