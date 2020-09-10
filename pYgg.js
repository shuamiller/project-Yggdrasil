const beginBtn = document.querySelector("#begin-button");
const beginDiv = document.querySelector("#begin-div");
const textDiv = document.querySelector("#text-div");
const playerInterface = document.querySelector("#player-interface");
const inputDiv = document.querySelector("#input-div");
const gameInfo = document.querySelector('#game-info');
let currentRoom;
let currentWorld;


let doorway = {

};

let darkGlass = {

};

let heraldOfYggdrasil = {

};

let entryPoint = {
    name: "Entry Point",
    description: "You find yourself in a room of smooth stone the color of sand. You don't remember how you came to be here. You don't remember who you are.\n This room seems to be illuminated without a source. Ahead of you, there is a recessed wall that could be a doorway, but there is no opening. To the left of the recess, a circular portal of dark glass is set in the wall.",
    objects: [
        doorway,
        darkGlass
    ],
    characters: [
        heraldOfYggdrasil
    ]
};

let Worlds = [
    { //Worlds[0]
        'Rooms': [
            entryPoint
        ] 
    }
]


beginBtn.addEventListener('click', () => {
    playerInterface.removeChild(beginDiv);
    const labelDiv = document.createElement('div');
    labelDiv.setAttribute('id', 'label-div');
    const question = document.createElement('label');
    question.setAttribute('id', 'question');
    question.setAttribute('for', 'player-input');
    question.textContent = "What Will You Do?"
    labelDiv.appendChild(question);
    playerInterface.insertBefore(labelDiv, inputDiv);
    while (textDiv.firstChild) {
        textDiv.removeChild(textDiv.firstChild);
    }
    const gameText = document.createElement('p');
    gameText.setAttribute('class', 'game-text');
    gameText.textContent = entryPoint.description;
    textDiv.appendChild(gameText);
    currentRoom = entryPoint.name;
    currentWorld = "Worlds[0]";
    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id', 'location-div');
    const worldLocation = document.createElement('div');
    worldLocation.setAttribute('id', 'world-location');
    const worldText = document.createElement('p');
    worldText.setAttribute('class', 'location-text');
    worldLocation.appendChild(worldText);
    locationDiv.appendChild(worldLocation);
    const roomLocation = document.createElement('div');
    roomLocation.setAttribute('id', 'room-location');
    const roomText = document.createElement('p');
    roomText.setAttribute('class', 'location-text');
    roomLocation.appendChild(roomText);
    locationDiv.appendChild(roomLocation);
    gameInfo.insertBefore(locationDiv, textDiv);
    worldText.textContent = currentWorld;
    roomText.textContent = currentRoom;
});