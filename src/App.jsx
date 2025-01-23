import { useState } from 'react'
import Header from './components/Header'
import Status from './components/Status'
import Languages from './components/Languages'
import Word from './components/Word'
import Keyboard from './components/Keyboard'

export default function App() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const [currentWord, setCurrentWord] = useState("react")

  const [guessed, setGuessed] = useState([])

  const wrongGuessCount = guessed.filter(char => !currentWord.includes(char)).length
  console.log(wrongGuessCount)

  function letterClick(letter) {
    if (!guessed.includes(letter)) {
      setGuessed(prev => [...prev, letter])
    }
  }

  console.log(guessed)

  return (
    <main>
      <Header />
      <Status />
      <Languages />
      <Word word={currentWord} guessed={guessed} />
      <Keyboard click={letterClick} alphabet={alphabet} word={currentWord} guessed={guessed} />
      <button className="new-game">New Game</button>
    </main>
  )
}
