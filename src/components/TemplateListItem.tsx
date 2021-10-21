import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Link, useRouteMatch } from "react-router-dom";

export default function TemplateListItem(props: any) {
  const { listOfFeedbacks } = props;
  const arrayOfTitleOfFeedbacks = [...listOfFeedbacks].map(
    (el) => el.feedbackName
  );

  let { url } = useRouteMatch();
  console.log('url', url);


  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {arrayOfTitleOfFeedbacks.map((value, index) => (
        <ListItem
          key={index}
          disableGutters
          secondaryAction={
            index % 2 ? (
              <Button variant="contained">Give feedback</Button>
            ) : (
              <Button variant="outlined">
                <Link to={`${url}/${value}`} target='_blank'>Read feedback
                </Link>
              </Button>
            )
          }
        >
          <ListItemText primary={`${value}`} />
        </ListItem>
      ))}
    </List>
  );
}
