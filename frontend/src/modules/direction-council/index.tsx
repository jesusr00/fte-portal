import React from 'react'
import useGetDirectionCouncil from './hooks/useGetDirectionCouncil'
import { Typography } from '@mui/material'

const DirectionCouncil: React.FC = () => {
  const { data, error, isLoading } = useGetDirectionCouncil()

  console.log(data, error, isLoading)

  return <Typography>DirectionCouncil</Typography>
}

export default DirectionCouncil
