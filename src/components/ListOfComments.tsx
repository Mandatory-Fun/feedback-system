import React from 'react'
import List from "@mui/material/List";
import { ListItem } from '@mui/material';

type PropType = {
    comments: []
}

function ListOfComments({ comments }: PropType) {

    return (
        <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            {comments.map((comment, index) => (
                <ListItem key={index}>
                    {comment}
                </ListItem>
            ))}
        </List>
    )
}

export default ListOfComments
