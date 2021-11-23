import React, { useEffect } from 'react';
import * as Helper from './helpers';

function Popup( correctLetters, incorrectLetters, selectedWord, setPlayable) {
  let message = '';
  let messageRevealWord = '';
  let playable = true;

  if(Helper.checkWin(correctLetters, incorrectLetters, selectedWord) === 'win') {
    message = 'You won the game! :-)';
    playable = false;
  } else if(Helper.checkWin(correctLetters, incorrectLetters, selectedWord) === 'lose') {
    message = 'You lost the game! :-(';
    messageRevealWord = `The correct word was: ${ selectedWord }`;
    playable = false;
  }

  useEffect( () => setPlayable(playable));

  return (

    <div className="popup-box" style={ message !== '' ? { display:'flex'} : {} }>
      <div className="popup">
        <h2 id="message">{ message }</h2>
        <h2 id="message-word-revealed">{ messageRevealWord }</h2>
        <button id="play-button">Play Again</button>
      </div>
    </div>

  )
}

export default Popup;