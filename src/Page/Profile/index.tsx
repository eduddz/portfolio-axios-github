import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Projects } from "../Projects";

import "./styles.scss";

export function Profile() {

    const { user, repos } = useContext(AuthContext);


    useEffect(() => {
        async function handleRepos() {
            if(user?.login) {
                await repos(`${user?.login}`);
            }
        } 
        handleRepos();
    }, [user])

    return (
        <main>
            <h1>Profile</h1>
            <div className="profile">
                <h2>{user?.name}</h2>
                <img src={user?.avatar_url} alt={user?.name} />
                <div className="sub-profile">
                    <p><strong>Username: </strong> {user?.login}</p>
                    <p><strong>Repositórios:</strong> {user?.public_repos}</p>
                    <p><strong>Localização:</strong> {user?.location}</p>
                </div>
            </div>
            <div>
                <Projects />
            </div>
        </main>
    )
}