import clsx from "clsx"

import { languages } from "../languages"

export default function Languages({ count }) {
    const langElems = languages.map((lang, idx) => (
        <span key={lang.name} 
        style={{backgroundColor: lang.backgroundColor, color: lang.color}}
        className={clsx(idx < count && "lost")}
        >
            {lang.name}
        </span>))

    return (
        <section className="languages">
            {langElems}
        </section>
    )
}