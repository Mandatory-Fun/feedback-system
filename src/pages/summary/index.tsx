import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { Store } from "../../redux";
import ListOfComments from '../../components/ListOfComments'

type Params = {
    nameOfProject: string,
    feedbackName: string
}

function Summary() {

    const { feedbackName } = useParams<Params>();

    const dispatch = useDispatch();


    const allProjects = useSelector((state: Store) => state.projectReducer)
    console.log(allProjects);

    const listOfFeedbacks = allProjects.filter((project: any) => project.listOfFeedbacks.find((cmt: any) => cmt.feedbackName === feedbackName))[0].listOfFeedbacks;
    console.log("listOfFeedback", listOfFeedbacks);

    const listOfComments = listOfFeedbacks.filter((feedback: any) => feedback.feedbackName === feedbackName)[0].listOfComments

    const feedbackSum = listOfComments.filter((sum: any) => sum.feedbackedUser === 'user2')[0]




    return (
        <div className='container'>
            <h1>summary</h1>
            <div>
                <div>
                    <h5>Your feedback Score: </h5>
                    <h5>{feedbackSum.feedbackTotal}</h5>
                </div>
                <div>
                    <h5>Comments</h5>
                    <ListOfComments comments={feedbackSum.comments} />
                </div>
            </div>
            <Button variant="contained" >
                <Link to='/dashboard'>
                    Go back Projects
                </Link>
            </Button>

        </div >
    )
}

export default Summary
