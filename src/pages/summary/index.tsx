import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Store } from "../../redux";
import ListOfComments from '../../components/ListOfComments'

type Params = {
    nameOfProject: string,
    feedbackName: string
}

function Summary() {

    const { nameOfProject, feedbackName } = useParams<Params>();

    const listOfFeedbacks = useSelector(
        (state: Store) => state.projectReducer
    ).filter((el: any) => el.projectName === nameOfProject)[0].listOfFeedbacks;

    const listOfComments = listOfFeedbacks.filter((feedback: any) => feedback.feedbackName === feedbackName)[0].listOfComments

    const feedbackSum = listOfComments.filter((sum: any) => sum.feedbackedUser === 'user 2')[0]
    console.log('feedbackSum', feedbackSum);



    return (
        <Box width='1200px' m='auto'>
            <Typography variant="h3" mt={2} mb={2} fontWeight='bold' style={{ textTransform: 'uppercase' }} pl={1}>summary</Typography>
            <List sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}>
                <ListItem>
                    <ListItemText primary="Name of Project" />
                    <ListItemText style={{ textTransform: 'uppercase' }} primary={`${nameOfProject}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Name of Feedback: " />
                    <ListItemText style={{ textTransform: 'uppercase' }} primary={`${feedbackName}`} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Your feedback Score:" />
                    <ListItemText primary={`${feedbackSum.feedbackTotal}`} />
                </ListItem>
                <Box pl={2} pt={1}>
                    <ListItemText primary="Comments: " />
                    <ListOfComments comments={feedbackSum.comments} />
                </Box>
                <div style={{ justifyContent: 'flex-end', display: 'flex', maxWidth: "480" }}>
                    <div></div>
                    <Button variant="contained" size="large">
                        <Link to='/dashboard' style={{ color: "white", textDecoration: "none" }}>
                            Go back Projects
                        </Link>
                    </Button>
                </div>
            </List>

        </Box >
    )
}

export default Summary
