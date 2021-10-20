import { Button, Paper, Typography } from '@mui/material';

import { Box } from '@mui/system';
import ProjectList from './projectList';
import React from 'react';

export type projectType = {projectId: string, title: string, members: {userId: string, name: string, feedback: []}[]}

export type projectListType = projectType[]

const myProjectList : projectListType = [
  {projectId: '1a', title: 'abc', members: []},
  {projectId: '2b', title: 'aaa', members: []},
  {projectId: '3c', title: 'bbb', members: []},
  {projectId: '4c', title: 'bbb', members: []},
  {projectId: '5c', title: 'bbb', members: []},
  {projectId: '6c', title: 'bbb', members: []},
]

const JoinedProjectList : projectListType = [
  {projectId: '1a', title: 'abc', members: []},
  {projectId: '2b', title: 'aaa', members: []},
  {projectId: '3c', title: 'bbb', members: []},
  {projectId: '4c', title: 'bbb', members: []},
  {projectId: '5c', title: 'bbb', members: []},
  {projectId: '6c', title: 'bbb', members: []},
]




const Dashboard = () => {
  return ( 
    <Box width='1200px' m='auto'>
    <Paper >
      <Typography mt={2} mb={2} fontWeight='bold' pl={1}>ALL PROJECTS</Typography>
      <Button variant="contained" style={{ backgroundColor: '#12824C',color: '#FFFFFF'}}>Create</Button>

      <Typography variant="h6" component="div" mt={3} mb={1} pl={1}>MY PROJECTS</Typography>
      <ProjectList projectList={myProjectList}/>

      <Typography variant="h6" component="div" mt={3} mb={1} pl={1}>INVITED PROJECTS</Typography>
      <ProjectList projectList={JoinedProjectList}/>
    </Paper>
  </Box>
  )
};

export default Dashboard;
