import { useState } from 'react'
import Confetti from "react-confetti"


import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import { languages } from './languages'
import { getRandWord } from './utils'

export default function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const [currentWord, setCurrentWord] = useState(() => getRandWord())

  const [guessed, setGuessed] = useState([])

  const wrongGuessCount = guessed.filter(char => !currentWord.includes(char)).length

  // check game state
  const isGameWon = currentWord.split("").every(char => guessed.includes(char))
  const isGameLost = (wrongGuessCount === languages.length - 1)
  const isGameOver = isGameWon || isGameLost

  const lastGuessWrong = guessed.length > 0 && !currentWord.includes(guessed[guessed.length - 1])

  // add letter to guessed list if it wasn't already on it when the corresponding button has been clicked
  function letterClick(letter) {
    if (!guessed.includes(letter)) {
      setGuessed(prev => [...prev, letter])
    }
  }

  // start new game
  function newGame() {
    setCurrentWord(getRandWord())
    setGuessed([])
  }

  return (
    <main>
      <Header />
      <Status count={wrongGuessCount} won={isGameWon} lost={isGameLost} farewell={lastGuessWrong} />
      <Languages count={wrongGuessCount} />
      <Word word={currentWord} guessed={guessed} lost={isGameLost} />
      {/* Combined visually-hidden aria-live region for status updates (taken almost directly from project instructions) */}
      <section className='sr-only' aria-live='polite' role='status'>
        <p>
            {!lastGuessWrong ? 
                `Correct! The letter ${guessed[guessed.length - 1]} is in the word.` : 
                `Sorry, the letter ${guessed[guessed.length - 1]} is not in the word.`
            }
            You have {languages.length - 1 - wrongGuessCount} attempts left.
        </p>
        <p>
          Current word: {currentWord.split("").map(letter => guessed.includes(letter) ? letter + "." : "blank.").join(" ")}
        </p>
      </section>
      <Keyboard click={letterClick} disabled={isGameOver} alphabet={alphabet} word={currentWord} guessed={guessed} />
      {isGameOver && <button onClick={newGame} className="new-game">New Game</button>}
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
    </main>
  )
}
