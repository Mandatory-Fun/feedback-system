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

    const { nameOfProject, feedbackName } = useParams<Params>();

    const dispatch = useDispatch();

    const listOfFeedbacks = useSelector(
        (state: Store) => state.projectReducer
    ).filter((el: any) => el.projectName === nameOfProject)[0].listOfFeedbacks;

    const listOfComments = listOfFeedbacks.filter((feedback: any) => feedback.feedbackName === feedbackName)[0].listOfComments

    const feedbackSum = listOfComments.filter((sum: any) => sum.feedbackedUser === 'user 2')[0]


    return (
        <div className='container'>
            <h1>SUMMARY</h1>
            <div>
                <div>
                    <h3>Name of Project: </h3>
                    <h2>{nameOfProject}</h2>
                </div>
                <div>
                    <h3>Name of Feedback: </h3>
                    <h2>{feedbackName}</h2>
                </div>
                <div>
                    <h3>Your feedback Score: </h3>
                    <h3>{feedbackSum.feedbackTotal}</h3>
                </div>
                <div>
                    <h3>Comments</h3>
                    <ListOfComments comments={feedbackSum.comments} />
                </div>
            </div>
            <Button variant="contained" size="large" >
                <Link to='/dashboard'>
                    Go back Projects
                </Link>
            </Button>

        </div >
    )
}

export default Summary
