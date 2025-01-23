import clsx from "clsx"

export default function Keyboard({ alphabet, click, word, guessed, disabled }) {
    const keys = alphabet.split("").map(letter => <button 
                                                    onClick={() => click(letter)} 
                                                    disabled={disabled}
                                                    key={letter} 
                                                    id={letter} 
                                                    aria-disabled={guessed.includes(letter)}
                                                    aria-label={`Letter ${letter}`}
                                                    className={clsx(guessed.includes(letter) && word.includes(letter) && "right", 
                                                        guessed.includes(letter) && !word.includes(letter) && "wrong")}
                                                >{letter.toUpperCase()}</button>)

    return (
        <section className="keyboard">
            {keys}
        </section>
    )
}