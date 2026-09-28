import { useState } from "react";
import LoginForm from "./LoginForm";
import ProjectList from "./ProjectList";
import AddProjectForm from "./AddProjectForm";
import LogoutButton from "./LogoutButton";

function App() {
    const [loggedIn, setLoggedIn] = useState(
        !!localStorage.getItem("token")
    );

    const [refresh, setRefresh] = useState(0);

    function handleLogin() {
        setLoggedIn(true);
    }

    function handleLogout() {
        setLoggedIn(false);
    }

    function handleAdded() {
        setRefresh(refresh + 1);
    }

    if (!loggedIn) {
        return (
            <LoginForm onLogin={handleLogin} />
        );
    }

    return (
        <div>
            <h1>TaskBoard</h1>

            <LogoutButton onLogout={handleLogout} />

            <AddProjectForm onAdded={handleAdded} />

            <ProjectList refresh={refresh} />
        </div>
    );
}

export default App;