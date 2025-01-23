import clsx from "clsx"

export default function Keyboard({ alphabet, click, word, guessed }) {
    const keys = alphabet.split("").map(letter => <button 
                                                    onClick={() => click(letter)} 
                                                    key={letter} 
                                                    id={letter} 
                                                    className={clsx(guessed.includes(letter) && word.includes(letter) && "right", 
                                                        guessed.includes(letter) && !word.includes(letter) && "wrong")}
                                                >{letter.toUpperCase()}</button>)

    return (
        <section className="keyboard">
            {keys}
        </section>
    )
}