export type projectType = {
  projectName: string,
  listOfUsers: {userName: string, owner: boolean}[]
  listOfFeedbacks: {
    feedbackName: string,
    listOfComments: {
      feedbackedUser: string,
      feedbackTotal: number,
      comments: string[]
    }[]
  }[]
}
export type ProjectsType = projectType[]
