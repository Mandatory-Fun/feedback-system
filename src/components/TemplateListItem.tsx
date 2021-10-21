import * as React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  TextField,
  DialogContent,
  DialogActions,
  Typography,
  Box,
} from "@mui/material";
import { Link, useRouteMatch } from "react-router-dom";

export interface SimpleDialogProps {
  open: boolean;
  isRead: boolean;
  onClose: () => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, open, isRead } = props;

  const handleClose = () => {
    onClose();
  };

  return !isRead ? (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Feedback form</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="member"
          label="Member"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          autoFocus
          margin="dense"
          id="point"
          label="Point"
          type="number"
          fullWidth
          variant="standard"
          placeholder="Type a number from 1 to 5"
        />
        <TextField
          autoFocus
          margin="dense"
          id="comment"
          label="Comment"
          fullWidth
          variant="standard"
          placeholder="Type your comment here ..."
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Submit</Button>
      </DialogActions>
    </Dialog>
  ) : (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Feedback form</DialogTitle>
      <DialogContent>
        <Box sx={{ width: "500px", maxWidth: 500 }}>
          <Typography variant="h6" gutterBottom component="div">
            Your score
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            5
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Comment
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            This is a comment
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function TemplateListItem(props: any) {
  const { listOfFeedbacks } = props;
  const arrayOfTitleOfFeedbacks = [...listOfFeedbacks].map(
    (el) => el.feedbackName
  );

  const [open, setOpen] = React.useState(false);
  const [read, setRead] = React.useState(false);

  let { url } = useRouteMatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const giveFeedback = () => {
    setRead(false);
    handleClickOpen();
  };

  const readFeedback = () => {
    setRead(true);
    handleClickOpen();
  };

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {arrayOfTitleOfFeedbacks.map((value, index) => (
          <ListItem
            key={index}
            disableGutters
            secondaryAction={
              index !== 0 ? (
                <Button variant="contained" onClick={giveFeedback}>
                  Give feedback
                </Button>
              ) : (
                <Button variant="outlined">
                  <Link to={`${url}/${value}`}>Read feedback</Link>
                </Button>
              )
            }
          >
            <ListItemText primary={`${value}`} />
          </ListItem>
        ))}
      </List>
      <SimpleDialog open={open} onClose={handleClose} isRead={read} />
    </>
  );
}
