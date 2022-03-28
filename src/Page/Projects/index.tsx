import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

import "./styles.scss";

export function Projects() {
    const { project } = useContext(AuthContext);

    return (
        <section>
        <h1>Projects</h1>
        <ul>
        {
            project?.map((p, value) => (
                <li key={value}>
                    <div>
                    <h3>{p.name}</h3>
                    {
                        p.description ? 
                        ( <p><strong>Descrição:</strong> {p.description}</p> )
                        : null
                    }
                    </div>
                    <div className="button">
                        <a target="_blank" href={p.html_url}>Acessar no github</a>
                    </div>
                </li>
            ))
        }
        </ul>
        </section>
    )
}