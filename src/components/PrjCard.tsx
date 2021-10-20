import * as React from 'react';

import { CardContent, Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { projectType } from '../pages/dashboard';

type projectTypeProps = {
  prjData: projectType
}

export default function PrjCard({prjData} : projectTypeProps) {
  return (
    <Grid item xs={2} key={prjData.id}>
      <Card sx={{ width: 300}}>
        <CardActions>
          <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {prjData.prjName}
          </Typography>
          </CardContent>
        </CardActions>
      </Card>
    </Grid>
  );
}
