import { languages } from "../languages"

export default function Languages() {
    const langElems = languages.map(lang => <p key={lang.name} style={{backgroundColor: lang.backgroundColor, color: lang.color}}>{lang.name}</p>)

    return (
        <div className="languages">
            {langElems}
        </div>
    )
}