let playerDialogue = document.getElementById('playerText');
let npcDialogue = document.getElementById('npcText');
let continueButton = document.getElementById('playerButton');

continueButton.addEventListener('click', game);

 playerDialogue.textContent="Hello";

 

  function game () {
    let playerName;


    function sleep(ms) {
        return new Promise(
            resolve => setTimeout(resolve, ms)
        );
    }

    begin();
    async function begin() {
        await sleep(1000);
        npcDialogue.textContent = "Ahhh! You're awake, well good because we thought we lost you there!";
        await sleep(2500);
        npcDialogue.textContent = "We found you knocked out in a nearby ditch, we figured you had been left for dead...";
        await sleep(4000);
        npcDialogue.textContent = "So anyhow, what do you go by?";
        await sleep(2000);
        playerNameCreation();
    }

    function playerNameCreation () {
        let playerName = prompt("Tell us your name");
        playerDialogue.textContent = `${playerName} is the name, don't wear it out!`
        return playerName;
    }

    welcome();
    function welcome () {
        playerDialogue.textContent = `My name is ${playerName}`
    }
    console.log(playerName);
}