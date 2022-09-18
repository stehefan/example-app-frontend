export type ProjectEntity = {
    projectId: string,
    name: string,
    description: string,
    members: ProjectMemberEntity[]
}

export type ProjectMemberEntity = {
    memberId: string,
    firstName: string,
    lastName: string,
    picture: string
}
