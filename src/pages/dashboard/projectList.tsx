import React, { useState } from 'react'
import { projectListType, projectType } from '.'

import { Grid } from '@mui/material'
import PrjCard from '../../components/PrjCard'

type ProjectListProps = {
  projectList: projectListType
}


function ProjectList({projectList} : ProjectListProps) {
  const [prjList, setPrjList] = useState<projectListType>(projectList)
  
  return (
    <Grid container spacing={2} width='100%' m='auto'>
      {prjList.map((project: projectType) => (
        <PrjCard prjData={project}/>
      ))}
     </Grid>
  )
}

export default ProjectList
