import './Project.css'
import ProjectMember from '../ProjectMember/ProjectMember';
import {ProjectEntity} from '../../types/Project';

export type ProjectProps = {
    project: ProjectEntity,
    isExpanded: boolean,
    clickHandler: () => void
}

const Project = (projectProps: ProjectProps) => {
    const {project, clickHandler, isExpanded} = projectProps;
    const classNames = ["Project", isExpanded ? "expanded" : ""].join(' ')

    return (
        <div className={classNames} onClick={clickHandler}>
            <header className="Project-header">{project.name}</header>
            <div className="Project-description">{project.description}</div>
            {isExpanded && (
                <div className="Project-members">{project.members && project.members.map(member => (
                    <ProjectMember {...member}></ProjectMember>
                ))}
                    {!project.members && <span className="info">no members</span>}
                </div>
            )}
        </div>
    )
}

export default Project;
