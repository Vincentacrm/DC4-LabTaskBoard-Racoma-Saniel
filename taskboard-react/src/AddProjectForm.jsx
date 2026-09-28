import { useState } from "react";
import { api } from "./api";

function AddProjectForm({ onAdded }) {
    const [name, setName] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim()) return;

        try {
            await api("/projects", {
                method: "POST",
                body: JSON.stringify({
                    name
                })
            });

            setName("");
            onAdded();
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Project name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">Add Project</button>
        </form>
    );
}

export default AddProjectForm;