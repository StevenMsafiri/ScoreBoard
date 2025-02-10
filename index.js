let homeScore = 0 
let guestScore = 0

document.getElementById("home").textContent = homeScore

document.getElementById("guest").textContent = guestScore

function updateHomeScore() {
    document.getElementById("home").textContent = homeScore
}

function updateGuestScore() {
    document.getElementById("guest").textContent = guestScore
}

function HomeOne() {
    homeScore +=1
    updateHomeScore()
}

function HomeTwo() {
    homeScore +=2
    updateHomeScore()
}

function HomeThree() {
    homeScore +=3
    updateHomeScore()
}

function guestOne() {
    guestScore +=1
    updateGuestScore()
}


function guestTwo() {
    guestScore +=2
    updateGuestScore()
}

function guestThree() {
    guestScore +=3
    updateGuestScore()
}