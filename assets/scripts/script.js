document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault()
})

// Generate random index
const randomIndex = (length) => Math.floor(Math.random() * length)
const pickACaptainButton = document.getElementById("pickACaptainButton")
const listNameEl = document.getElementById("listNames")

let newCaptain = ""

const LoadSavedListCaptain = () => {
  const captain = localStorage.getItem("captain")
  if (captain === null) {
    newCaptain = ""
  } else {
    listNameEl.textContent = JSON.parse(captain)
  }
}

LoadSavedListCaptain()

listNameEl.addEventListener("change", () => {
  newCaptain = JSON.stringify(listNameEl.value)
  localStorage.setItem("captain", newCaptain)
})

pickACaptainButton.addEventListener("click", (e) => {
  const newCaptainEl = document.getElementById("newCaptain")
  const names = listNameEl.value.trim().split("\n")

  newCaptain = names[randomIndex(names.length)]
  newCaptainEl.value = ""

  const showAnimatedResult = setInterval(() => {
    newCaptainEl.value = names[randomIndex(names.length)]

    if (newCaptainEl.value === newCaptain) {
      newCaptainEl.value = newCaptain
      clearInterval(showAnimatedResult)
    }
  }, 100)
})
