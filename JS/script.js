// räkanare för spelare och ai poöng.
let playerCount = 0;
let aiCount = 0;

// Texten som visar om spelare vinner eller förlorar omgången.
const showWinner = document.querySelector('#theWinner');
const showLoser = document.querySelector('#theLoser');

// Elementen som ska visa spelarens och ais vald och poäng
const showPlayerSelected = document.querySelector('#playerSelected');
const showPlayerPoint = document.querySelector('#playerPoint');
const showAiSelected = document.querySelector('#aiSelected');
const showAiPoint = document.querySelector('#aiPoint');

// Play knapp //
const playBtn = document.querySelector('#playBtn');
document.body.append(playBtn);
playBtn.classList.add('displayHide');

// Tar emot form och lagt till event. Tar emot text input från spelare och lagt till till DOM:en med p element.
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const textInput = document.querySelector('input').value;
    const playerInput = document.querySelector('#playerName');
    document.body.append(playerInput);
    playerInput.innerText = 'Player name : ' + textInput;
    form.reset();
    startButton();
    playBtn.classList.remove('displayHide');
    playBtn.classList.add('displayShow');
    form.classList.add('displayHide');
})

//Tar emot div element som innhåller Sten Sax Påse knappar och lag till event 'click'.
const divEl = document.querySelector('div');
divEl.addEventListener('click', (event) => {
    //Array list och random index//
    const rpsList = ['Rock', 'Paper', 'Scissors'];
    const randonIndex = Math.floor(Math.random()*rpsList.length);

    //Spelare info
    showPlayerSelected.innerText = 'Your select : ' + event.target.id;
    showPlayerPoint.innerText = 'Your point : ' + playerCount;
    
    //AI info
    showAiSelected.innerText = 'Ai select : ' + rpsList[randonIndex];
    showAiPoint.innerText = 'Ai point : ' + aiCount;

    //Jämför vem som vinner
    //  Spelaren vinner
    if(event.target.id === 'Rock' && rpsList[randonIndex] === 'Scissors'
        || event.target.id === 'Scissors' && rpsList[randonIndex] === 'Paper'
        || event.target.id === 'Paper' && rpsList[randonIndex] === 'Rock'){
        showPlayerPoint.innerText = 'Your point : ' + ++playerCount;
        showPlayerSelected.classList.add('winColor');
        showAiSelected.classList.remove('winColor');
    }

    // Spelaren förlorar
    else if(event.target.id === 'Rock' && rpsList[randonIndex] === 'Paper'
            || event.target.id === 'Scissors' && rpsList[randonIndex] === 'Rock'
            || event.target.id === 'Paper' && rpsList[randonIndex] === 'Scissors'){
        showAiPoint.innerText = 'Ai point : ' + ++aiCount;
        showAiSelected.classList.add('winColor');
        showPlayerSelected.classList.remove('winColor');
    }
  
    // Om det blir lika "Start"//
    const showTie = document.querySelector('#tieText');
    showTie.innerText = 'TIE!';
    showTie.classList.add('tieText');
    if(rpsList[randonIndex] === event.target.id){ 
        showPlayerSelected.classList.add('tieColor');
        showAiSelected.classList.add('tieColor');
        showTie.classList.add('displayShow');
        showTie.classList.remove('displayHide');
    }
    else{
        showTie.classList.add('displayHide');
        showPlayerSelected.classList.remove('tieColor');
        showAiSelected.classList.remove('tieColor');
    } 
    // Om det blir lika "End"//

    //Reset knappen försvinner när spelare börja om spelet.
    playAgainButton.classList.add('displayHide');

    // vinnare funktionen
    theWinner();
})

// diven som innehåller knapparna visar inte föran spelaren ange sitt namn "Start"//
// divEl.style.display = 'none';
divEl.classList.add('displayHide');
// diven som innehåller knapparna visar inte föran spelaren ange sitt namn "End"//

// Funktionen när spelare vinner eller förlorar "Start"//
function theWinner(){
    if(playerCount > 2){
        // showWinner.style.display = 'block';
        showWinner.classList.add('displayBlock');
        showWinner.innerText = 'You Win!';
        showWinner.classList.add('winColor');
        playAgainButton.classList.add('displayShow');
        playAgainButton.classList.remove('displayHide');
        disableButton(true);
    }
    
    else if(aiCount > 2){
        // showLoser.style.display = 'block';
        showLoser.classList.add('displayBlock');
        showLoser.innerText = 'You Lose!';
        showLoser.classList.add('loseColor')
        playAgainButton.classList.add('displayShow');
        playAgainButton.classList.remove('displayHide');
        disableButton(true);
    }
}
// Funktionen när spelare vinner eller förlorar "End"//

// Reset knapp och funktion som starta om spelet "Start"//
const playAgainButton = document.querySelector('#playAgainBtn');
playAgainButton.classList.add('displayHide');
playAgainButton.addEventListener('click',() => {
resetGame();
disableButton(false);
})

function resetGame(){
    playerCount = 0;
    aiCount = 0;
    showPlayerPoint.innerText = 'Your point : ' + playerCount;
    showAiPoint.innerText = 'Ai point : ' + aiCount;
    showWinner.classList.add('displayHide');
    showLoser.classList.add('displayHide');

    showWinner.classList.remove('displayBlock');
    showLoser.classList.remove('displayBlock');

    showPlayerSelected.classList.remove('winColor');
    showAiSelected.classList.remove('winColor');
    playAgainButton.classList.add('displayHide');
}
// Reset knapp och funktion som starta om spelet  "End"//

// Funktion som inaktiverar Rock Scissors Paper knappar//
function disableButton(disable){
    const disButton = divEl.querySelectorAll('button');
    for(let i = 0; i < disButton.length; i++){
        disButton[i].disabled = disable;
    }
}

// Funktion för play knappen
function startButton(){
    playBtn.addEventListener('click', () => {
    divEl.classList.add('displayShow'); 
    playBtn.classList.add('displayHide');
    divEl.classList.add('displayFlex');
    })
}
    

