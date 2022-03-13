document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault()
})

// Generate random index
const randomIndex = (length) => Math.floor(Math.random() * length);

let newCaptain = "";

// Event listener pick captain button
const pickACaptainButton = document.getElementById('pickACaptainButton')
pickACaptainButton.addEventListener("click", (e) => {
    const listNameEl = document.getElementById('listNames');
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


