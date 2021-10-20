import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export default function TemplateListItem(props: any) {
  const { listOfFeedbacks } = props;
  const arrayOfTitleOfFeedbacks = [...listOfFeedbacks].map(
    (el) => el.feedbackName
  );

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
              <Button variant="outlined">Read feedback</Button>
            )
          }
        >
          <ListItemText primary={`${value}`} />
        </ListItem>
      ))}
    </List>
  );
}
