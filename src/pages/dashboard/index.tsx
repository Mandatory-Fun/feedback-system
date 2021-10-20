import { Button, Typography } from '@mui/material';

import ProjectList from './projectList';
import React from 'react';

export type projectType = {id: string, prjName: string}

export type projectListType = projectType[]

const myProjectList = [
  {id: '1a', prjName: 'abc'},
  {id: '2b', prjName: 'aaa'},
  {id: '3c', prjName: 'bbb'},
  {id: '4c', prjName: 'bbb'},
  {id: '5c', prjName: 'bbb'},
  {id: '6c', prjName: 'bbb'},
]

const JoinedProjectList = [
  {id: '1a', prjName: 'abc'},
  {id: '2b', prjName: 'aaa'},
  {id: '3c', prjName: 'bbb'},
  {id: '4c', prjName: 'bbb'},
  {id: '5c', prjName: 'bbb'},
  {id: '6c', prjName: 'bbb'},
]



const Dashboard = () => {
  return <div>
    <Typography mt={2} mb={2} fontWeight='bold'>ALL PROJECTS</Typography>
    <Button variant="contained" style={{ backgroundColor: '#12824C',color: '#FFFFFF'}}>Create</Button>

    <Typography variant="h6" component="div" mt={3} mb={1}>MY PROJECTS</Typography>
    <ProjectList projectList={myProjectList}/>

    <Typography variant="h6" component="div" mt={3} mb={1}>INVITED PROJECTS</Typography>
    <ProjectList projectList={JoinedProjectList}/>
  </div>;
};

export default Dashboard;
