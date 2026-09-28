import { useEffect, useState } from "react";
import { api } from "./api";

function ProjectList({ refresh }) {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState("");

    async function loadProjects() {
        try {
            const data = await api("/projects");
            setProjects(data.data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        loadProjects();
    }, [refresh]);

    return (
        <div>
            <h2>Projects</h2>

            {error && <p>{error}</p>}

            {projects.map((project) => (
                <div key={project.id}>
                    <h3>{project.name}</h3>
                    <p>Tasks: {project.tasks_count ?? 0}</p>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;