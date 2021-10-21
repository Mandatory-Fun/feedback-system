import React from 'react'
import List from "@mui/material/List";
import { ListItem, ListItemText } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';

type PropType = {
    comments: []
}

function ListOfComments({ comments }: PropType) {

    return (
        <List sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}>
            {comments.map((comment, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${comment}`} style={{ textTransform: 'uppercase' }} />
                </ListItem>
            ))}
        </List>
    )
}

export default ListOfComments
