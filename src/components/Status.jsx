import { getFarewellText } from "../utils"
import { languages } from "../languages"

export default function Status({ count, wrong, won, lost }) {
    
    let statuses = {
        won: {
            style: {backgroundColor: "#10A95B"},
            content: <>
                        <h2>You Win!</h2>
                        <p>Well done! 🎉</p>
                    </>
        },
        lost: {
            style: {backgroundColor: "#BA2A2A"},
            content: <>
                        <h2>Game over!</h2>
                        <p>You lose! Better luck next time 😭</p>
                    </>
        },
        wrong: {
            style: {background: "#7A5EA7", border: "1px dashed #323232", fontStyle: "italic", fontWeight: 400},
            content: <>
                        <h2>Incorrect!</h2>
                        <p>{`You have ${8-count} more incorrect guesses before you lose`}</p>
                    </>
        },
        empty: {
            style: {visibility: "hidden"},
        }
    }
        
    let status = statuses.empty
    if (won) {
        status = statuses.won
    } else if (lost) {
        status = statuses.lost
    } else if (wrong) {
        status = statuses.wrong
    }

    return (
        <section style={status.style} className="status" aria-live="polite" role="status">
            {status.content}
        </section>
    )
}

