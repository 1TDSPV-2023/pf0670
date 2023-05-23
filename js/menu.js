
const botaoMobile = document.querySelector("#btn-mobile");

botaoMobile.addEventListener("click", toggleMenu);

function toggleMenu() {
    const navBar = document.querySelector("#nav");

    navBar.classList.toggle('active');
}