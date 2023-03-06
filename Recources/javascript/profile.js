const darkModeButton = document.querySelector('[data-js="darkmode-button]')
const darkModeIcon = document.querySelector('[data-js="darkmode-icon"]')
const main = document.querySelector('[data-js="main"]')
const img = document.querySelector('[data-js="img-border"]')

const iconBoarder01 = document.querySelector('[data-js="icon-border01"]')
const iconBoarder02 = document.querySelector('[data-js="icon-border02"]')

const icon01 = document.querySelector('[data-js="icon01"]')
const icon02 = document.querySelector('[data-js="icon02"]')

darkModeIcon.addEventListener("click", () => {
    darkModeIcon.classList.toggle("settings__dark-mode__position")
    main.classList.toggle("settings__active-dark-mode")
    img.classList.toggle("settings__active-dark-mode__border")
    iconBoarder01.classList.toggle("settings__active-dark-mode__border")
    iconBoarder02.classList.toggle("settings__active-dark-mode__border")
})



// settings__active-dark-mode