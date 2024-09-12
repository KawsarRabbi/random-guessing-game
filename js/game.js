//? ============================================= //
//? ===== all variables were declared here ===== //
//? =========================================== //
// ===== find necessary elements ===== //
let player = document.querySelector('#player');
let player_input = document.querySelector('#player_input');;
let buttonSubmit = document.querySelector('#buttonSubmit');
let lifeIndecator = document.querySelector('#lifeIndecator');

// ===== form validation - Player1 ===== //
let player_value; // variable for storing data of player value

// ===== form validation - Player2 ===== //
buttonSubmit.addEventListener('click', function() {
    if(player_input.value === "") {
        alert("Please enter a number.");
    }
    else if(player_input.value > 5 || player_input.value < 1) {
        alert("Please enter a number between 1 and 5.");
    }
    else {
        player_value = parseInt(player_input.value);
        
        if((Math.floor(Math.random() * 5) + 1) === player_value) {
            window.location.href = "win.html";
        }
        else {
            window.location.href = "loss.html";
        }
    }
});


// set & get value
var getLifeValue = localStorage.getItem('newLifeValue');
if (getLifeValue == null) {
    getLifeValue = 5;
    lifeIndecator.innerText = `Life : ${getLifeValue}/5`;
}
else if(getLifeValue < 1) {
    getLifeValue = 5;
}
else {
    lifeIndecator.innerText = `Life : ${getLifeValue}/5`;
}
localStorage.setItem('setLifeValue', getLifeValue);
