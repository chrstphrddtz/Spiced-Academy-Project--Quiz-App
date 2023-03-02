// const mainElement = document.querySelector('[data-js="main"]');

// Toggle Bookmark Icon
const changeBookmarkIconTest = document.getElementsByClassName("card--bookmark-icon")

for (let i=0; i<changeBookmarkIconTest.length; i++) {
     changeBookmarkIconTest[i].addEventListener("click", () => {
        changeBookmarkIconTest[i].classList.toggle("filled")
    })
};

// Show Answer Button 

const buttons = document.getElementsByClassName("card--show-answer")

for (let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        if (e.target.textContent === "Show Answer") {
            e.target.textContent = "Hide Answer"
        } else {
            e.target.textContent = "Show Answer"
        };
        
    e.target.nextElementSibling.classList.toggle("card--visible")
    })
};

