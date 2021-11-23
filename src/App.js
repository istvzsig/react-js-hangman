import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hangman from './components/Hangman';
import IncorrectLetters from './components/IncorrectLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import Popup from './components/Popup';
import * as Helper from './components/helpers';

let allWords = require('./hangman_words.json');
let selectedWord = allWords[Math.random() * allWords.length | 0];

function App() {
  let running = true;
  //let [data, setData]=useState([]);
  let [playable, setPlayable] = useState(true);
  let [correctLetters, setCorrectLetters] = useState([]);
  let [incorrectLetters, setIncorrectLetters] = useState([]);
  let [showNotification, setShowNotification] = useState(false);

  function handleKeyboard(event) {
      const { key, keyCode } = event;

      //check game state and keyboard event
      if(playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if(selectedWord.includes(letter)) {
          if(!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            Helper.showNotification(setShowNotification);
          }
        } else {
          if(!incorrectLetters.includes(letter)) {
            setIncorrectLetters(currentLetters => [...incorrectLetters, letter]);
          } else {
            Helper.showNotification(setShowNotification);
          }
        }
      }
    }

  useEffect( () => {
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [correctLetters, incorrectLetters, playable]);

  return (
    <>

      <Header />

      <div className="game-box">

        <Hangman incorrectLetters={ incorrectLetters } />
        <IncorrectLetters incorrectLetters={ incorrectLetters } />
        <Word selectedWord={ selectedWord } correctLetters={ correctLetters }/>

      </div>
      <Popup correctLetters={ correctLetters }
             incorrectLetters={ incorrectLetters }
             selectedWord={ selectedWord }
             setPlayable={ setPlayable }/>
      <Notification showNotification={ showNotification } />
    </>
  );
}

export default App;
