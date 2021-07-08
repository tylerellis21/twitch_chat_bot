// A very simple script to grab the button element and then click it when going
// probably should do some error checking when getting the elements...
// meehhh
// I'll rewrite this once I get around to it.

function getButtonElement() {
    return document.querySelector('button[aria-label="Claim Bonus"]');
}

function getBalanceElement() {
    return document.getElementsByClassName('ScAnimatedNumber-acnd2k-0')[1];
}

buttonElement = null;
balanceElement = null;

pointsGained = 0;

function init() {
    setInterval(() => {
        update();
    }, 10000);
    console.log("starting twitch autoclicker");
    return true;
}

function update() {
    // Find each update since it is dynamically removed and then added back in as it's needed.
    buttonElement = getButtonElement();
    balanceElement = getBalanceElement();

    if (buttonElement === null || balanceElement === null) {
        console.log("failed to find one of the required DOM elements");
        return;
    }
    let lastBalance = parseInt(balanceElement.innerHTML);

    if (buttonElement !== null) {
        buttonElement.click();
        console.log("clicked button");
        // Update the balance element since it gets changed when clicked.balanceElement = getBalanceElement();
        balanceElement = getBalanceElement();
    }
    
    if (balanceElement !== null) {
        let newBalance = parseInt(balanceElement.innerHTML);
        let difference = newBalance - lastBalance;

        pointsGained += difference;

        console.log("gained points for click: " + difference);
        console.log("total gain: " + this.pointsGained)
    }
}

init();