import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'
import { languages } from './languages'

export default function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const [currentWord, setCurrentWord] = useState("react")

  const [guessed, setGuessed] = useState([])

  const wrongGuessCount = guessed.filter(char => !currentWord.includes(char)).length

  // check game state
  const isGameWon = (guessed.filter(char => currentWord.includes(char)).length === currentWord.length)
  const isGameLost = (wrongGuessCount === languages.length - 1)
  const isGameOver = isGameWon || isGameLost

  const lastGuessWrong = guessed.length > 0 && !currentWord.includes(guessed[guessed.length - 1])

  // add letter to guessed list if it wasn't already on it when the corresponding button has been clicked
  function letterClick(letter) {
    if (!guessed.includes(letter)) {
      setGuessed(prev => [...prev, letter])
    }
  }

  return (
    <main>
      <Header />
      <Status count={wrongGuessCount} won={isGameWon} lost={isGameLost} farewell={lastGuessWrong} />
      <Languages count={wrongGuessCount} />
      <Word word={currentWord} guessed={guessed} />
      <Keyboard click={letterClick} alphabet={alphabet} word={currentWord} guessed={guessed} />
      {isGameOver && <button className="new-game">New Game</button>}
    </main>
  )
}
