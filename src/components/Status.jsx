import { getFarewellText } from "../utils"
import { languages } from "../languages"

export default function Status({ count, farewell, won, lost }) {
    
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
                        <p>You lose! Better start learning Assembly 😭</p>
                    </>
        },
        lang: {
            style: {background: "#7A5EA7", border: "1px dashed #323232", fontStyle: "italic", fontWeight: 400},
            content: <>
                        <h2>{count && getFarewellText(languages[count - 1].name)}</h2>
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
    } else if (farewell) {
        status = statuses.lang
    }

    return (
        <section style={status.style} className="status">
            {status.content}
        </section>
    )
}

