function darkMode() {
    const darkmodeButton = document.querySelector('#darkmodeButton')
    darkmodeButton.addEventListener('click', () =>{
         const main = document.querySelector('#main')
    main.classList.toggle("dark-mode")
    })
   
}
 console.log(darkMode)
