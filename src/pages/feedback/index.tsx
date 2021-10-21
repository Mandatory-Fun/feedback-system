import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";

import { Store } from "../../redux";
import styles from "./styles.module.css";
import TemplateListItem from "../../components/TemplateListItem";
import { createNewFeedback } from "../../redux/actions/Project";
import { Box } from '@mui/system';

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Summary from "../summary";

type Params = {
  nameOfProject: string;
};

const FeedbackListPage = () => {
  const inputFeedbackRef = useRef();

  let { path } = useRouteMatch();

  const { nameOfProject } = useParams<Params>();

  const dispatch = useDispatch();

  const listOfFeedbackOfProject = useSelector(
    (state: Store) => state.projectReducer
  ).filter((el: any) => el.projectName === nameOfProject);

  return (
    <Switch>
      <Route exact path={path}>
        <Box width='1200px' m='auto'>
          <Typography variant="h4" component="h2" className={styles.title}>
            {nameOfProject}
          </Typography>
          <Grid container>
            <Grid item>
              <TextField
                inputRef={inputFeedbackRef}
                label="Name of new feedback"
                variant="outlined"
              />
            </Grid>

            <Grid item alignItems="stretch" style={{ display: "flex" }}>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => {
                  dispatch(
                    createNewFeedback(
                      nameOfProject,
                      (inputFeedbackRef.current as any).value
                    )
                  );
                }}
              >
                Create
              </Button>
            </Grid>
          </Grid>
          <TemplateListItem
            listOfFeedbacks={listOfFeedbackOfProject[0].listOfFeedbacks}
          />
        </Box>
      </Route>
      <Route
        path={`${path}/:feedbackName`}
        component={Summary}
      />
    </Switch>
  );
};

export default FeedbackListPage;
