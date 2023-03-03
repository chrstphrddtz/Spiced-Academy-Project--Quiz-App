// Form Functionality 

const form = document.querySelector('[data-js="form"]');
const textInput = document.getElementsByClassName("form--textarea")
// const textInput = document.querySelector('[data-js="text-area-one"]')

const textCounterOne = document.querySelector('[data-js="text-counter-one"]')
const textCounterTwo = document.querySelector('[data-js="text-counter-two"]')


// Button 
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const formElements = e.target.elements  
    const main = document.querySelector('[data-js="main"]')

    const questionInput = formElements.yourQuestion.value
    const answerInput = formElements.yourAnswer.value
    const hashtagsInput = formElements.yourHashtags.value

    main.append(newCard(questionInput, answerInput, hashtagsInput))
})

// Formfield Text Counter

for (let i=0; i<textInput.length; i++) {
    textInput[i].addEventListener("keyup", (e) => {
        const formElements = e.target.value.length

        if (textInput[i] == textInput[0]) {
            textCounterOne.textContent = formElements + " / 150"
        } else {
            textCounterTwo.textContent = formElements + " / 150"
        }
   })
};


// Create Card Elements

function newCard(question, answer, tags) {
    const section = document.createElement("section")
    section.classList.add("card")
    // Create all element necesarly
    const bookmark = createBookmark();
    const cardQuestion = createCardQuestion(question, answer)
    const newHashtagContainer = createHashtagContainer(tags)

    // Append all my new element to the parent.
    section.appendChild(bookmark)
    section.appendChild(cardQuestion)
    section.appendChild(newHashtagContainer)

    return section
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
    const newButton = createButton()
    const newAnswer = createAnswer(answer)

    // Appends Elements
    cardQuestion.appendChild(newQuestion)
    cardQuestion.appendChild(newButton)
    cardQuestion.appendChild(newAnswer)

    // at last -> return cardQuestion
    return cardQuestion
}

// -- Child of createCardQuestion()
function createTitle(newQuestion) {
    const question = document.createElement("h2")
    question.classList.add("card__title")
    question.textContent = newQuestion

    return question;
}

// -- Child of createCardQuestion()
function createButton() {
    const cardButton = document.createElement("button")
    cardButton.classList.add("card--show-answer")
    cardButton.textContent = "Show Answer"
    
    return cardButton
}

// -- Child of createCardQuestion()
function createAnswer(newAnswer) {
    const answer = document.createElement("p")
    answer.classList.add("card--hidden-answer")
    answer.textContent = newAnswer
    
    return answer
}

// Hashtags -> div -> ul -> li
function createHashtagContainer(tags) {
    const hashtagContainer = document.createElement("div")
    hashtagContainer.classList.add("card__hashtag-container")

    const newHashtagList = createHashtagList(tags)
    hashtagContainer.appendChild(newHashtagList)

    return hashtagContainer
}

// Child of createHashtagContainer
function createHashtagList(tags) {
    const list = document.createElement("ul")
    list.classList.add("card__hashtag-container__hashtags")

    const newListItem = createListItem(tags)
    list.appendChild(newListItem)
    
    return list
}

// Child of createHashtagList
function createListItem(tags) {
    const listItem = document.createElement("li")
    listItem.classList.add("hashtags")
    listItem.textContent = "#" + tags

    return listItem
}



