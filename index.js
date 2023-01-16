let homEl = document.getElementById("home-score")
let home = 0

function addH1() {
    home += 1
    homEl.textContent = home
}
function addH2() {
    home += 2
    homEl.textContent = home
}
function addH3() {
    home += 3
    homEl.textContent = home
}


let guestEl = document.getElementById("guest-score")
let guest = 0

function addG1() {
    guest += 1
    guestEl.textContent = guest
}
function addG2() {
    guest += 2
    guestEl.textContent = guest
}
function addG3() {
    guest += 3
    guestEl.textContent = guest
}
