// ===== find necessary elements ===== //
let playAgainDivWin = document.querySelector('.playAgainDivWin');
let playAgainButtonWin = document.querySelector('#playAgainButtonWin');
let cancelButtonWin = document.querySelector('#cancelButtonWin');

// ===== form play again or cancel ===== //
playAgainButtonWin.addEventListener('click', function() {
    window.location.href = "game.html";
});
cancelButtonWin.addEventListener('click', function() {
    playAgainDivWin.style.display = "none";
});