'use strict';

// store how much times the user has clicked the button and how progress the user has made in life
let lifeProgress = 0;

// store background
let background;

// store stats
let money = 0; 
let happiness = 100;
let energy = 100;

// store the number of items
let energyDrink = 0;
let happinessSnack = 0;
let stocks = 0;


// variable to check when happiness and energy goes to 0
let statCheck = "";

// variable to set the fadeout of error messages
let fadeOutInterval = "";


// store opacity variable
let opacity = 1;

// store timer that give cost money to purchase and give energy boost every 10 seconds for 1 minute
let meditationInterval;
// store the int that will stop the tiemr when it reaches the int for meditation interval timer
let progressInterval = 0;
// store timer that cost money to purchase and  gives a steady 10% boost for 30 seconds
let coachInterval;
// store the int that will stop the tiemr when it reaches the int for coach interval timer
let timeLeft = 0;  
 



// store at which level of progress the user is at
let lifeStatus = "Young Adult";

// gains exp when user clicks on button and changes life status in intervals of 10 or 20 
function clicked(){
    // add life progress for each click 
    lifeProgress = lifeProgress + 1;
    // increase and decrease stats
    money = money + 10;
    happiness = happiness - 5;
    energy = energy - 5;

    checkStatus();

    // add interval timer that checks when energy and happiness becomes 0 every 10 ms
    statCheck = setInterval(checkGameStatus, 10)

   

    // show life status image
    document.getElementById('status-image').hidden = false;
    showStatus()
    

    
}

// check the user's life progress
function checkStatus(){
    // change life status and images depending on how much life progress the user has
    if (lifeProgress >= 10 && lifeProgress <20){
        lifeStatus = "relationship";
        document.getElementById('status-image').src = "happy-romantic-couple-walking-man-woman-date-romantic-relationship-illustration-cartoon-style_277904-4522-removebg-preview.png" ;
    }

    else if(lifeProgress >= 20 && lifeProgress < 30){
        lifeStatus = "Home Owner";
        background = "https://wallpapercave.com/wp/wp13868622.jpg"
        document.body.style.backgroundImage = `url(${background})`;
        document.getElementById('status-image').src = "happy-romantic-couple-walking-man-woman-date-romantic-relationship-illustration-cartoon-style_277904-4522-removebg-preview.png" ;
    }

    else if (lifeProgress >= 30 && lifeProgress < 40){
        lifeStatus = "First Child";
        document.body.style.backgroundImage = `url(${background})`;
        document.getElementById('status-image').src= "cartoon-illustration-family-with-baby-man_1187092-20715-removebg-preview.png";
    }

    else if (lifeProgress >= 40 && lifeProgress < 50){
        lifeStatus = "Second Child";
        document.body.style.backgroundImage = `url(${background})`;
        document.getElementById('status-image').src = "familia-cartoon-free-vector-removebg-preview.png";
    }

    else if (lifeProgress >= 60 && lifeProgress < 70){
        lifeStatus = "Getting Gray Hair";
        document.body.style.backgroundImage = `url(${background})`;
        document.getElementById('status-image').src = "s221214-man-age-e02-mainpreview-824d1a2d259724d7805ffd164ad96223be9453785d022b576879561fcecd09cc-removebg-preview.png";
    }

    else if (lifeProgress >= 70 && lifeProgress < 80){
        lifeStatus = "Quitting Job";
        document.body.style.backgroundImage = `url(${background})`;
        document.getElementById('status-image').src = "https://png.pngtree.com/png-clipart/20240516/original/pngtree-elderly-office-workers-is-walking-senior-employee-cartoon-character-png-image_15110594.png";
    } 

    else if (lifeProgress >= 80 && lifeProgress < 90){
        lifeStatus = "Retirement Home";
        background = "1000_F_518912026_SOPUYAzgpKmNsrZ08Y32FfOt8GLRbnQ1-transformed.jpeg";
        document.body.style.backgroundImage = `url(${background})`;
        document.getElementById('status-image').src = "https://png.pngtree.com/png-clipart/20240516/original/pngtree-elderly-office-workers-is-walking-senior-employee-cartoon-character-png-image_15110594.png";
    }

    // game over and you can restart from beginning
    else if (lifeProgress == 100){
        window.location.href = "gameover.html";
    }
}

// show stats and status
function displayStats(){
    document.getElementById('money').innerText = "Money: " + money;
    document.getElementById('happiness').innerText = "Happiness: " + happiness;
    document.getElementById('energy').innerText = "Energy: " + energy;
    showStatus();

}
// check when happiness or energy becomes 0 
function checkGameStatus(){
    if (energy == 0 || happiness == 0){
        window.location.href = "gameover.html";
    }

    document.getElementById('item1-quantity').innerText = "Energy Drink: " + energyDrink + "x";
    document.getElementById('item2-quantity').innerText = "Happiness Snack: " + happinessSnack +  "x";
    document.getElementById('item3-quantity').innerText = "Stocks: " + stocks + "x";
     // display stat text
    displayStats();


}
// display the text for the status and progress
function showStatus(){
    document.getElementById('life-progress').innerText = lifeProgress + "% life progress";
    document.getElementById('life-status').innerText = "Life Status:" + " " + lifeStatus;
}
// show shop
function toggleShop() {
    document.getElementById('shop-overlay').hidden = false;
    closeInventory();
    closeBoost();

}

// stop showing the shop
function closeShop(){
    document.getElementById('shop-overlay').hidden = true;
}

// show inventory
function toggleInventory() {
    document.getElementById('inventory-overlay').hidden = false;
    closeShop();
    closeBoost();
}

// stop showing shop
function closeInventory(){
    document.getElementById('inventory-overlay').hidden = true;
    
}




// change stats depending on which item the user bought and check if they have enough money
function buyItem1(){
    if (money >= 10) {  // Check if the user has enough money
        energyDrink = energyDrink + 1;
        money = money - 10;
        document.getElementById('money').innerText = "Money: " + money;
    } else {
        showMessage("Not enough money to buy Energy Drink!");
    }
}

// change stats depending on which item the user bought and check if they have enough money
function buyItem2(){
    if (money >= 15) {  // Check if the user has enough money
        happinessSnack = happinessSnack + 1;
        money = money - 15;
        document.getElementById('money').innerText = "Money: " + money;
    } else {
        showMessage("Not enough money to buy Happiness Snack!");
    }
}

// change stats depending on which item the user bought and check if they have enough money
function buyItem3(){
    if (money >= 20) {  // Check if the user has enough money
        stocks = stocks + 1;
        money = money - 20;
        document.getElementById('money').innerText = "Money: " + money;
    } else {
        showMessage("Not enough money to buy Stocks!");
    }
}

// turn on the overlay when clicked on the menu button
function on(){
    document.getElementById("overlay2").style.display = "block"
}

// turn off the overlay when clicked on the menu button
function off(){
    document.getElementById("overlay2").style.display = "none";
}

// go to page 1
function returnPage1(){
    window.location.href = "page1.html";
}

// show and hide error message
function showMessage(messageText) {
    
    document.getElementById('message').innerText = messageText; 
    document.getElementById('message').style.display = 'block'; 
    // start opacity that will decrease 
    opacity = 1;  
    document.getElementById('message').style.opacity = opacity;
    
    // Clear any previous interval to avoid multiple intervals running simultaneously
    clearInterval(fadeOutInterval);
    
    // Start fade-out effect
    fadeOutInterval = setInterval(fadeOut, 100);
}

function fadeOut() {

    // stop showing opacity
    if (opacity <= 0) {
        clearInterval(fadeOutInterval);  
        document.getElementById('message').style.display = 'none';  
    // Decrease the opacity
    } else {
        opacity = opacity - 0.02;  
        document.getElementById('message').style.opacity = opacity;  
    }
}

// change stats and # of items depending on which item the user used
function useItem1(){
    if (energyDrink >= 1){
        energy = energy + 10;
        energyDrink = energyDrink - 1;
    }

    else{
        showMessage("You don't have any energy drinks!")
    }
    displayStats();
}

// change stats and # of items depending on which item the user used
function useItem2(){
    if (happinessSnack >= 1){
        happiness = happiness + 10;
        happinessSnack = happinessSnack - 1;
    }

    else{
        showMessage("You don't have any happiness snacks!")
    }
    displayStats();
}

// change stats and # of items depending on which item the user used
function useItem3(){
    if (stocks >= 1){
        money = money + 50;
        stocks = stocks -1;
    }

    else{
        showMessage("You don't have any stocks!")
    }
    displayStats();
}

// Show Boost Overlay
function toggleBoost() {
    document.getElementById('boost-overlay').hidden = false;
    closeShop();
    closeInventory();
}

// Close Boost Overlay
function closeBoost(){
    document.getElementById('boost-overlay').hidden = true;
}

// change money and lifeprogress variables depending on item
function buyBoost1() {
    if ( money >= 50) {
        lifeProgress = lifeProgress + 20;  // Instant boost for coffee
        money = money - 50;
        showMessage("Enjoy your Supercharged Coffee! Life progress boosted by 20%!");
    }
    else {
        showMessage("Not enough money or invalid item selection!");
    }
    displayStats();
    checkStatus();
}

// change money and lifeprogress variables depending on item
function buyBoost2(){
    if  (money >= 100) {
        money = money - 100;
        // 1 minute of meditation energy boost
        meditationInterval = setInterval(meditationBoost, 10000);  // Start passive meditation boost
        showMessage("Meditation Energy Boost is active!.");
    }
    else {
        showMessage("Not enough money");
    }
    displayStats();

}

// change money and lifeprogress variables depending on item
function buyBoost3(){
    if (money >= 75) {
        lifeProgress = lifeProgress + 15;  
        money = money - 75;
        showMessage("The Motivational Speech was inspiring! Life progress boosted by 15%!");
    }
    else {
        showMessage("Not enough money");
    }
    displayStats();
    checkStatus();
}

// change money and lifeprogress variables depending on item
function buyBoost4(){
    if (money >= 120) {
        money = money - 120;
        // passive life coach life progress boost
        coachInterval = setInterval(coachBoost, 1000); 
        showMessage("Your Life Coach is ready! A steady 2% boost for the next 30 seconds.");
    }
    else {
        showMessage("Not enough money");
    }
    displayStats();
}


// change money and lifeprogress variables depending on item
function meditationBoost(){
    if (progressInterval < 6) {  
        // increase energy
        energy = energy +  5;  
        // increase the timer for when to stop
        progressInterval = progressInterval + 1;
        showStatus();
    } else {
        clearInterval(meditationInterval);  // Stop after 1 minute
    }
    displayStats();
    checkStatus();
}

// change money and lifeprogress variables depending on item
function coachBoost(){
    if (timeLeft < 30) {
        // Increase by 10% every second
        lifeProgress = lifeProgress + 2;  
        // timer before boost stops
        timeLeft = timeLeft + 1;
        showStatus();
    } else {
        clearInterval(coachInterval);  // Stop after 30 seconds
        showMessage("Life Coach session ended.");
    }
    displayStats();
    checkStatus();
}


// show text when help button is clicked and display the message
function showHelp(){
    showMessage(
            "· You will lose and have to restart if your energy or happiness becomes 0." +
            "\n· Use your money to buy items that will restore your happiness and energy." +
            "\n· Left click on the item you want to use in the inventory to use it.")
}



// show life status and progress text when page is loaded
function start(){
    showStatus()
    
}