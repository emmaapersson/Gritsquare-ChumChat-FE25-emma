function darkMode() {
    const darkmodeButton = document.querySelector('#darkmodeButton');
    const main = document.querySelector('#main');
    const footer = document.querySelector('footer')

    if (!darkmodeButton || !main) {
        console.error("Element saknas i DOM");
        return;
    }

    darkmodeButton.addEventListener('click', () => {
        main.classList.toggle("dark-mode");
        footer.classList.add('footer-dark')
    });
}

darkMode();