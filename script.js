const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const startButton = document.getElementById("start");

const upsDoorPath = "https://i.ibb.co/ZHnW9hT/split.png";
const goodDoorPath = "https://i.ibb.co/NTYj9BX/cofee.gif";
const goodyDoorPath = "https://i.ibb.co/fGN1sCd/cofee2.gif";
const finalDoorPath = "https://i.ibb.co/L0fffgh/usa.png";

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;

const isUps = door => {
  if(door.src === upsDoorPath){
    return true;
  }
  else{
    return false;
  }
}

const isClicked = door => {
  if(door.src === finalDoorPath){
    return false;
  }
  else{
    return true;
  };
};

const playDoor = door =>{
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver("win");
  }
  else if(isUps(door)){
    gameOver();
  }

};


const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = upsDoorPath;
    openDoor2 = goodDoorPath;
    openDoor3 = goodyDoorPath;
  }
  else if(choreDoor === 1){
    openDoor2 = upsDoorPath;
    openDoor3 = goodDoorPath;
    openDoor1 = goodyDoorPath;
  }
  else if(choreDoor === 2){
    openDoor3 = upsDoorPath;
    openDoor1 = goodDoorPath;
    openDoor2 = goodyDoorPath;
  }
};

doorImage1.onclick = () => {

  startButton.onclick = () => {
    if( currentlyPlaying === false){
      startRound();
    }
  }
  if(!isClicked(doorImage1) && currentlyPlaying === true) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
};
};
doorImage2.onclick = () => {
  startButton.onclick = () => {
    if( currentlyPlaying === false){
      startRound();
    }
  }
  if(!isClicked(doorImage2) && currentlyPlaying === true) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
};
};
doorImage3.onclick = () => {
  startButton.onclick = () => {
    if( currentlyPlaying === false){
      startRound();
    }
  }
  if(!isClicked(doorImage3) && currentlyPlaying === true) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
};
};

const startRound = () => {
  doorImage1.src = finalDoorPath;
  doorImage2.src = finalDoorPath;
  doorImage3.src = finalDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Don't spill it";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = status =>{
  if(status === "win"){
    startButton.innerHTML = "You win! Play again?";
  }
  else{
    startButton.innerHTML = "Game over! Play again?";
  }
  currentlyPlaying = false;
}

startRound();
