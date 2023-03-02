// Form Functionality 

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formElements = e.target.elements  

    const questionInput = formElements.yourQuestion.value
    const answerInput = formElements.yourAnswer.value
    const hashtagsInput = formElements.yourHashtags.value

    console.log(questionInput, answerInput, hashtagsInput);



})

const newCard = (question, answer, tags) => {
    const section = document.createElement("section")
    section.classList.add("card")
    // Create all element necesarly
    const bookmark = createBookmark();
    createCardQuestion(question, answer)


    // Append all my new element to the parent.


}

// Bookmark - Div
function createBookmark() {
    const bookmark = document.createElement("div")
    bookmark.classList.add("card--bookmark-icon")
    return bookmark;
}

// Question + Button + Answer - Div
function createCardQuestion(question, answer) {
    const cardQuestion = document.createElement("div")
    cardQuestion.classList.add("card__question")
    // Create elements
    const newQuestion = createTitle(question)
    const newButton = createButton(button)
    const newAnswer = createAnswer(answer)

    // Appends Elements
    cardQuestion.appendChild(newQuestion)
    cardQuestion.appendChild(newButton)
    cardQuestion.appendChild(newAnswer)

    // at last -> return cardQuestion
    return cardQuestion
}

function createTitle(newQuestion) {
    const question = document.createElement("h2")
    question.classList.add("card__title")
    question.textContent = newQuestion
    return question;
}

function createButton() {
    const cardButton = document.createElement("button")
    cardButton.classList.add("card--show-answer")
    cardButton.textContent = "Show Answer"
    return cardButton
}

function createAnswer(newAnswer) {
    const answer = document.createElement("p")
    answer.classList.add("card--hidden-answer")
    answer.textContent = newAnswer
    return answer
}