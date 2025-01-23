import clsx from "clsx"

export default function Word({ word, guessed, lost }) {
    const letters = word.split("").map((letter, idx) => (
    <span key={idx} className={clsx(!guessed.includes(letter) && "missed-letter")} >
        {guessed.includes(letter) || lost ? letter.toUpperCase() : ""}
    </span>))

    return (
        <section className="word">
            {letters}
        </section>
    )
}