const darkModeButton = document.querySelector('[data-js="darkmode-button]')
const darkModeIcon = document.querySelector('[data-js="darkmode-icon"]')

darkModeIcon.addEventListener("click", () => {
    darkModeIcon.classList.toggle("settings__dark-mode__position")
})