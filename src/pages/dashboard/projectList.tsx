import { ProjectsType, projectType } from '../../types'

import { Grid } from '@mui/material'
import PrjCard from '../../components/PrjCard'
import React from 'react'

type ProjectListProps = {
  projectList: ProjectsType
}


function ProjectList({projectList} : ProjectListProps) {
  
  return (
    <Grid container spacing={2} width='100%' m='auto'>
      {projectList.map((project: projectType) => (
        <PrjCard prjData={project}/>
      ))}
     </Grid>
  )
}

export default ProjectList
