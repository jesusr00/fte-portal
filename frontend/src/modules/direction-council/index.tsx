import React from 'react'
import useGetDirectionCouncil from './hooks/useGetDirectionCouncil'
import { Avatar, Box, Card, Grid, Typography } from '@mui/material'
import { getPhotoURL } from '@/utils/getPhotoURL'

const DirectionCouncil: React.FC = () => {
  const { data, isLoading } = useGetDirectionCouncil()

  return isLoading ? (
    <Typography>Loading...</Typography>
  ) : (
    <>
      <Typography>{data?.title}</Typography>
      {!!data?.description && <Typography>{data.description}</Typography>}
      <Grid container spacing={2} p={4}>
        {data?.members.map((member) => (
          <Grid item xs={6}>
            <Card sx={{ display: 'flex', height: '128px' }}>
              <Avatar
                src={getPhotoURL(member.photo)}
                variant="square"
                sx={{ width: 128, height: 128 }}
              />
              <Box py={1} px={2}>
                <Box display={'flex'} flexDirection={'column'}>
                  <Typography variant="h6">
                    {member.degree} {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontWeight={500}
                    sx={{ opacity: 0.7, mt: -0.5 }}
                  >
                    {member.position}
                  </Typography>
                  <Box height={'56px'} overflow={'hidden'}>
                    <Typography
                      variant="body2"
                      mt={0.5}
                      sx={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'break-spaces',
                      }}
                    >
                      {member.description}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default DirectionCouncil
