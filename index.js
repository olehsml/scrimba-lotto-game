const btn = document.getElementById('btn')
const ticket = document.getElementById('ticket')
const winner = document.getElementById('winner')

btn.addEventListener("click", fun)

let myNum = Math.round(Math.random()*100)
function getLottoNumbers(){

    const winningNums = []
    for (let i = 0; i < 6; i++){
        winningNums.push(Math.round(Math.random()*100))
    }
    winningNums.includes(myNum) ? win() : noWin()
    return winningNums
}

function getWinningNumbersHtml(){
    return getLottoNumbers().map(function(num){
        return `<div class="number">${num}</div>`
    }).join('')
}

function fun() {
    document.getElementById('winning-numbers').innerHTML = getWinningNumbersHtml()
    ticket.innerHTML = `Your ticket: <span class="ticket-num">${myNum}</span>`
}


function win() {
    winner.innerHTML = `<h1 class="winner">You Won!🥳</h1>`
    btn.innerText = "Restart"
    ticket.style.display = "none"
    changeTicket()
}

function changeTicket() {
    myNum = Math.round(Math.random()*100)
}

function noWin() {
    winner.innerHTML = ""
    btn.innerText = "Refresh"
    ticket.style.display = ""
}