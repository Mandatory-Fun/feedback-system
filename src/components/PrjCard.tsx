import * as React from "react";

import { CardContent, Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { projectType } from "../types";
import { Link } from "react-router-dom";

type projectTypeProps = {
  prjData: projectType;
};

export default function PrjCard({ prjData }: projectTypeProps) {
  return (
    <Link to={`/dashboard/allProjects/${prjData.projectName}`}>
      <Grid item xs={4} key={prjData.projectName}>
        <Card sx={{ width: 300 }}>
          <CardActions>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {prjData.projectName}
              </Typography>
            </CardContent>
          </CardActions>
        </Card>
      </Grid>
    </Link>
  );
}
