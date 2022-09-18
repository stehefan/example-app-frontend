import './App.css';
import {useEffect, useState} from 'react';
import Project from './components/Project/Project';
import {ProjectEntity} from './types/Project';

const App = () => {
    const [projects, setProjects] = useState<ProjectEntity[]>([])
    const [error, setError] = useState(null)
    const [expandedProject, setExpandedProject] = useState<ProjectEntity | null>(null)

    useEffect(() => {
        fetch('http://localhost:8080/project')
            .then(res => res.json())
            .then(result => {
                    setProjects(result)
                },
                err => {
                    setError(err)
                })
    }, [])

    return (
        <div className="App">
            {error && <div className="App-error">{error}</div>}
            <header className="App-header">
                <h1>This is a test header</h1>
            </header>
            <div className="App-body">
                {projects.length > 0 && projects.map(project => (
                    <Project
                        project={project}
                        clickHandler={() => setExpandedProject(project)}
                        isExpanded={project === expandedProject}
                        key={project.projectId} />
                ))
                }
            </div>

        </div>
    );
}

export default App;
