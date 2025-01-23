import { useState } from "react";

export default function Word({ word, guessed }) {
    const letters = word.split("").map((letter, idx) => (
    <span key={idx} >
        {guessed.includes(letter) ? letter.toUpperCase() : ""}
    </span>))

    return (
        <section className="word">
            {letters}
        </section>
    )
}