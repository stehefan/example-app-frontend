import {ProjectMemberEntity} from '../../types/Project';

const ProjectMember = (projectMemberEntity: ProjectMemberEntity) => {
    return (
        <div>
            <ul>
                <li>{projectMemberEntity.memberId}</li>
                <li>{projectMemberEntity.firstName}</li>
                <li>{projectMemberEntity.lastName}</li>
                <li>{projectMemberEntity.picture}</li>
            </ul>
        </div>
    )
}

export default ProjectMember;
