import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import ProjectList from './projectList';
import React, { useState } from 'react';
import { Store } from '../../redux';
import { addNewProject } from '../../redux/actions/Project';
import { projectType } from '../../types';

/*export type projectType = {projectId: string, title: string, members: {userId: string, name: string, feedback: []}[]}

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
]*/

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (newProject: any) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, onSubmit, open } = props;
  const [project, setProject] = useState('');

  const handleClose = () => {
    onClose();
  };

  const submit = () => {
    onSubmit(project);
    handleClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Project form</DialogTitle>
      <DialogContent>
        <Typography variant="h2" gutterBottom component="div">
            Project
        </Typography>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Title"
          type="text"
          fullWidth
          variant="standard"
          placeholder="Project title"
          onChange={(event) => setProject(event.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="email"
          label="Email"
          fullWidth
          variant="standard"
          placeholder="Type invite email"
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={submit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}


const Dashboard = () => {
  const allProjects = useSelector((state: Store) => state.projectReducer)
  console.log('allProject', allProjects)
 
  const dispatch = useDispatch();

  const myOwnProjects = allProjects.filter((project: projectType) => project.listOfUsers.find((user: any) => user.owner && user.userName === 'user 2'))
  const invitedProjects = allProjects.filter((project: projectType) => project.listOfUsers.find((user: any) => !user.owner && user.userName === 'user 2'))
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const addProject = (newProject: any) => {
    console.log('Create btn works asdasdasda');
    const data = {
      projectName: newProject,
      listOfUsers: [
        {
          userName: "user 2",
          owner: false
        },
        {
          userName: "user 5",
          owner: false
        },
        {
          userName: "user 6",
          owner: true
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

  console.log('allPrj', allProjects)
 
  return ( 
    <Box width='1200px' m='auto'>
 
      <Typography mt={2} mb={2} fontWeight='bold' pl={1}>ALL PROJECTS</Typography>
      <Button 
        variant="contained"
        style={{ backgroundColor: '#12824C',color: '#FFFFFF'}}
        onClick={handleClickOpen}
      >
        Create
      </Button>

      <Typography variant="h6" component="div" mt={3} mb={1} pl={1}>MY PROJECTS</Typography>
      <ProjectList projectList={myOwnProjects}/>

      <Typography variant="h6" component="div" mt={3} mb={1} pl={1}>INVITED PROJECTS</Typography>
      <ProjectList projectList={invitedProjects}/>
      <SimpleDialog open={open} onClose={handleClose} onSubmit={addProject}/>
  </Box>
  )
};

export default Dashboard;
