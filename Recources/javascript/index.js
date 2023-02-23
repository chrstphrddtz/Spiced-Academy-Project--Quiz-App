// const mainElement = document.querySelector('[data-js="main"]');

// Toggle Bookmark Icon
const changeBookmarkIconTest = document.getElementsByClassName("card--bookmark-icon");

for (let i=0; i<changeBookmarkIconTest.length; i++) {
     changeBookmarkIconTest[i].addEventListener("click", (event)=>{
        changeBookmarkIconTest[i].classList.toggle("filled")
    })
};

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

// Show Answer Button

// const cards = document.getElementsByClassName("card");
// for (let i=0; i<cards.length; i++) {
//     cards[i].addEventListener("click", (event)=>{
//         console.log("in cards event: ", event.target);
//         event.target.innerHTML = "This is a Test Answer!";
//     })
// }




/* Test Card - Button */

const showAnswerButton = () => {
    const answer = document.getElementsByClassName("card--hidden-answer-test");
    console.log("answer: ", answer);
    // .innerHTML = "This is a Test Answer!";
    console.log("Test Answer in console!")
}










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





