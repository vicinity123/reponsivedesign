const hamburgerSVG = document.querySelector('.hamburger-image')
const hamburgerMenuDiv = document.querySelector('.hamburger-menu')
const menuOptions = document.querySelector('.menu-options')

console.log(hamburgerSVG)

hamburgerSVG.addEventListener('click', () => {
    const openMenu = "images/hamburger-menu.svg"
    const closeMenu = "images/close-menu.svg"
    const menuOptionStyle = menuOptions.style
    const hamburgerStyle = hamburgerMenuDiv.style
    // menuOptionStyle = "grid"
    hamburgerSVG.src = closeMenu
    hamburgerStyle.transform = "transformY(10em)"
    menuOptionStyle.display = "grid"
    console.log("Opened")

    if (hamburgerSVG.src === closeMenu) {
        menuOptionStyle.display = "none"
        console.log("Closed Menu")
    }

})