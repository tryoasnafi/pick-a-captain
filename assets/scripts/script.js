document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
})

// Generate random index
const randomIndex = (length) => Math.floor(Math.random() * length);
const listNameEl = document.getElementById('listNames');

let newCaptain = "";

const LoadSavedListCaptain = () => {
    const captain = localStorage.getItem("captain");
    if (captain === null) {
        newCaptain = "";
    } else {
        listNameEl.textContent = JSON.parse(captain)
    }
}

LoadSavedListCaptain()

listNameEl.addEventListener("change", () => {
    newCaptain = JSON.stringify(listNameEl.value);
    localStorage.setItem("captain", newCaptain);
})

// Event listener pick captain button
const pickACaptainButton = document.getElementById('pickACaptainButton')
pickACaptainButton.addEventListener("click", (e) => {
    const newCaptainEl = document.getElementById('newCaptain');
    const names = listNameEl.value.trim().split('\n');

    newCaptain = names[randomIndex(names.length)]

    // Clear box value before append a new one
    newCaptainEl.value = ''

    // Append winner
    setTimeout(() => {
        newCaptainEl.value = newCaptain
    }, 1000)
})


