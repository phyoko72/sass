let btn = document.querySelector(".toggle")
let nav = document.querySelector(".nav-bar")
let links = document.querySelectorAll(".link")
let contactForm = document.querySelector("form")
btn.addEventListener("click", () => {
    if (nav.classList.contains("lg")) {
        nav.classList.replace("lg", "sm")
    } else {
        nav.classList.replace("sm", "lg")
    }
})

links.forEach((link) => {
    link.addEventListener("click", () => {
        if (nav.classList.contains("sm")) {
            nav.classList.replace("sm", "lg")
        }
    })
})

contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
})
