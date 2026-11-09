function toggleMenu() {
    const menu = document.getElementById("rightSideMenu");
    const overlay = document.getElementById("menuOverlay");
    const button = document.getElementById('imageToggleBtn');

    const img = document.getElementById("btn-img");
    const openIcon = "assets/images/icon-menu.svg";
    const closeIcon = "assets/images/icon-close.svg";

    menu.classList.toggle("open");
    overlay.classList.toggle("open");

    if (img.src.includes(openIcon)) {
        img.src = closeIcon;
        button.setAttribute('aria-expanded', 'Menu');
    } else {
        img.src = openIcon;
        button.setAttribute('aria-expanded', 'Close');
    }
}