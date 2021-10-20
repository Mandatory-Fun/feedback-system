import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Store } from "../../redux";
import styles from "./styles.module.css";
import TemplateListItem from "../../components/TemplateListItem";

import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

type Params = {
  nameOfProject: string;
};

const FeedbackListPage = () => {
  const { nameOfProject } = useParams<Params>();

  const [listOfFeedbackOfProject] = useSelector(
    (state: Store) => state.projectReducer
  ).filter((el) => el.name === nameOfProject);

  return (
    <div>
      <Card className={styles.mainCard}>
        <Typography variant="h4" component="h2" className={styles.title}>
          {nameOfProject}
        </Typography>
        <Grid container>
          <Grid item>
            <TextField label="Name of new feedback" variant="outlined" />
          </Grid>

          <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                console.log("Clicked !!");
              }}
            >
              Create
            </Button>
          </Grid>
        </Grid>
        <TemplateListItem listOfFeedbacks={listOfFeedbackOfProject.feedbacks} />
      </Card>
    </div>
  );
};

export default FeedbackListPage;
