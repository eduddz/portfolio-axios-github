import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./styles.scss";

export function Search() {
    const [username, setUsername] = useState('');

    const { profile } = useContext(AuthContext);

    function handleInputUsername(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }

    async function handleLogin() {
        if(username) {
            await profile(username);
        }
    }

    return (
        <header>
            <h2>Portfólio para seu github</h2>
            <div>

            <input 
                type="text"
                placeholder="Digite seu username do github"
                onChange={handleInputUsername}
                />
            <button onClick={handleLogin}>Ver Portfólio</button>
            </div>
        </header>
    )
}