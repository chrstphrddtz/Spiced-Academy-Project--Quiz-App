const cardOneQuestion = [
    "Question One",
    "Placeholder Text",
    "Placeholder Text",
    "Placeholder Text",
    "Placeholder Text",
    "Placeholder Text"
]

const cardOneAnswer = [
    "Answer One",
    "Placeholder Text",
    "Placeholder Text",
    "Placeholder Text",
    "Placeholder Text",
    "Placeholder Text"
]


// const mainElement = document.querySelector('[data-js="main"]');

const changeBookmarkIconTest = document.getElementsByClassName("card--bookmark-icon");
for (let i=0; i<changeBookmarkIconTest.length; i++)
changeBookmarkIconTest[i].addEventListener("click", () => {
    changeBookmarkIconTest.classList.toggle("filled");
})



/* Test Card - Button */

const showAnswerButton = () => {
    document.getElementsByClassName("card--hidden-answer-test").innerHTML = "This is a Test Answer!";
    console.log("Test Answer in console!")
}





/*
const changeBookmarkIcon01 = document.querySelector('[data-js="icon01"]');
changeBookmarkIcon01.addEventListener("click", () => {
    changeBookmarkIcon01.classList.toggle("filled");
});

const changeBookmarkIcon02 = document.querySelector('[data-js="icon02"]');
changeBookmarkIcon02.addEventListener("click", () => {
    changeBookmarkIcon02.classList.toggle("filled");
});

const changeBookmarkIcon03 = document.querySelector('[data-js="icon03"]');
changeBookmarkIcon03.addEventListener("click", () => {
    changeBookmarkIcon03.classList.toggle("filled");
});

const changeBookmarkIcon04 = document.querySelector('[data-js="icon04"]');
changeBookmarkIcon04.addEventListener("click", () => {
    changeBookmarkIcon04.classList.toggle("filled");
});

const changeBookmarkIcon05 = document.querySelector('[data-js="icon05"]');
changeBookmarkIcon05.addEventListener("click", () => {
    changeBookmarkIcon05.classList.toggle("filled");
});

const changeBookmarkIcon06 = document.querySelector('[data-js="icon06"]');
changeBookmarkIcon06.addEventListener("click", () => {
    changeBookmarkIcon06.classList.toggle("filled");
});

*/

