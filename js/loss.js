// ===== find necessary elements ===== //
let playAgainDivLoss = document.querySelector('.playAgainDivLoss');
let playAgainButtonLoss = document.querySelector('#playAgainButtonLoss');
let cancelButtonLoss = document.querySelector('#cancelButtonLoss');

// ===== form play again or cancel ===== //
playAgainButtonLoss.addEventListener('click', function() {
    window.location.href = "game.html";

    // set & get value
    var getLifeValue = localStorage.getItem('setLifeValue');
    var newLifeValue = getLifeValue - 1;
    localStorage.setItem('newLifeValue', newLifeValue);

    if(newLifeValue < 1) {
        window.location.href = "game_over.html";
    }

});
cancelButtonLoss.addEventListener('click', function() {
    playAgainDivLoss.style.display = "none";
});