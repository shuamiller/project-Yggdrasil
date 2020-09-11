const beginBtn = document.querySelector("#begin-button");
const beginDiv = document.querySelector("#begin-div");
const textDiv = document.querySelector("#text-div");
const playerInterface = document.querySelector("#player-interface");
const inputDiv = document.querySelector("#input-div");
const gameInfo = document.querySelector('#game-info');
let currentRoom;
let currentWorld;

let playerCharacter = {
    name: "",
    inventory: [],
}

let doorway = {
    description: "A smooth surface, the same color and texture as the rest of the room but recessed into the north wall.",
    openText: "It doesn't appear to open in any way.",
    pushText: "You push against the flat surface, but it doesn't give.",
    pullText: "There isn't any way to pull it.",
    dialogue: ["It says nothing.", "It still says nothing..."]
};

let darkGlass = {
    description: "A circular portal of dark glass set into the wall. It is about the size of your head. As you look at it, the glass-like surface begins to ripple suddenly. You hear a voice come from the portal. As the voice speaks, the ripple grows. 'Welcome, Pilgrim. I am the Herald of Yggdrasil. We haven't had a new arrival in some time. What is your name?'"
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

let worlds0 = {
    name: "Worlds[0]",
    rooms: [
        entryPoint
    ] 
}


function replaceButton() {
    playerInterface.removeChild(beginDiv);
    const labelDiv = document.createElement('div');
    labelDiv.setAttribute('id', 'label-div');
    const question = document.createElement('label');
    question.setAttribute('id', 'question');
    question.setAttribute('for', 'player-input');
    question.textContent = "What Will You Do?"
    labelDiv.appendChild(question);
    playerInterface.insertBefore(labelDiv, inputDiv);
}

function removeChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function appendGameText() {
    const gameText = document.createElement('p');
    gameText.setAttribute('class', 'game-text');
    gameText.textContent = entryPoint.description;
    textDiv.appendChild(gameText);
}

function setRoomLocation(room) {
    currentRoom = room.name;
}

function setWorldLocation(world) {
    currentWorld = world.name;
}

function createLocationHeader() {
    const locationDiv = document.createElement('div');
    locationDiv.setAttribute('id', 'location-div');
    const worldLocation = document.createElement('div');
    worldLocation.setAttribute('id', 'world-location');
    const worldText = document.createElement('p');
    worldText.setAttribute('id', 'world-text');
    worldText.setAttribute('class', 'location-header');
    worldLocation.appendChild(worldText);
    locationDiv.appendChild(worldLocation);
    const roomLocation = document.createElement('div');
    roomLocation.setAttribute('id', 'room-location');
    const roomText = document.createElement('p');
    roomText.setAttribute('id', 'room-text');
    roomText.setAttribute('class', 'location-header');
    roomLocation.appendChild(roomText);
    locationDiv.appendChild(roomLocation);
    gameInfo.insertBefore(locationDiv, textDiv);
    worldText.textContent = currentWorld;
    roomText.textContent = currentRoom;
};

beginBtn.addEventListener('click', () => {
    replaceButton();
    removeChildren(textDiv);
    appendGameText();
    setRoomLocation(entryPoint);
    setWorldLocation(worlds0);
    createLocationHeader();
});

function examineAspect(aspect) {
    gameText.textContent = aspect.description;
}