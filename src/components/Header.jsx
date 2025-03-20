export default function Header() {
    return (
        <header>
            <h1>Hangman</h1>
            <p className="instructions">Guess the word to save Hangman! Everytime you guess a letter that isn't in the word a new part of Hangman will appear. 8 incorrect guesses and you lose.</p>
        </header>
    )
}