import { Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { Box } from '@mui/system';
import ProjectList from './projectList';
import React from 'react';
import { Store } from '../../redux';
import { addNewProject } from '../../redux/actions/Project';
import { projectType } from '../../types';

const Dashboard = () => {
  const allProjects = useSelector((state: Store) => state.projectReducer)
 
  const dispatch = useDispatch();

  const myOwnProjects = allProjects.filter((project: projectType) => project.listOfUsers.find((user: any) => user.owner && user.userName === 'user 2'))
  const invitedProjects = allProjects.filter((project: projectType) => project.listOfUsers.find((user: any) => !user.owner && user.userName === 'user 2'))



  const addProject = (newProject: any) => {
    console.log('Create btn works');
    const data = {
      projectName: "Project 7",
      listOfUsers: [
        {
          userName: "user 2",
          owner: true
        },
        {
          userName: "user 5",
          owner: false
        },
        {
          userName: "user 6",
          owner: false
        },
        {
          userName: "user 7",
          owner: false
        },
      ],
      listOfFeedbacks: [
        {
          feedbackName: "feedback3",
          listOfComments: [
            {
              feedbackedUser: "user 2",
              feedbackTotal: 3,
              comments: ["Okay", "good", "normal"],
            },
            {
              feedbackedUser: "user 5",
              feedbackTotal: 1,
              comments: ["bad", "bad", "lazy"],
            },
            {
              feedbackedUser: "user 6",
              feedbackTotal: 2,
              comments: ["not active", "not contribute", "not good"],
            },
            {
              feedbackedUser: "user 7",
              feedbackTotal: 4,
              comments: ["good", "good", "good"],
            },
          ],
        },
        {
          feedbackName: "feedback4",
          listOfComments: [
            {
              feedbackedUser: "user 2",
              feedbackTotal: 1,
              comments: ["not active", "absent", "absent"],
            },
            {
              feedbackedUser: "user 6",
              feedbackTotal: 2,
              comments: ["Not good", "fine"],
            },
            {
              feedbackedUser: "user 5",
              feedbackTotal: 5,
              comments: ["Excellent!", "Good"],
            },
            {
              feedbackedUser: "user 7",
              feedbackTotal: 4,
              comments: ["Okay", "good"],
            },
          ],
        },
      ],
    }
    const action = addNewProject(data)
    dispatch(action)
  }
 
  return ( 
    <Box width='1200px' m='auto'>
 
      <Typography mt={2} mb={2} fontWeight='bold' pl={1}>ALL PROJECTS</Typography>
      <Button 
        variant="contained"
        style={{ backgroundColor: '#12824C',color: '#FFFFFF'}}
        onClick={addProject}
      >
        Create
      </Button>

      <Typography variant="h6" component="div" mt={3} mb={1} pl={1}>MY PROJECTS</Typography>
      <ProjectList projectList={myOwnProjects}/>

      <Typography variant="h6" component="div" mt={3} mb={1} pl={1}>INVITED PROJECTS</Typography>
      <ProjectList projectList={invitedProjects}/>
    
  </Box>
  )
};

export default Dashboard;
