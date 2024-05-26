import Markdown from '@/common/components/StyledMarkdown/StyledMarkdown'
import useGetMissionData from './hooks/useGetMissionData'
import { Card, Stack, SxProps, Typography, Box } from '@mui/material'

const sxCard: SxProps = {
  p: 2,
}

const Mission: React.FC = () => {
  const { data, isLoading } = useGetMissionData()

  return isLoading ? (
    <Typography>Loading</Typography>
  ) : (
    <Stack spacing={2} px={4} pb={2} pt={4}>
      {!!data?.mission && (
        <Card sx={sxCard} elevation={4}>
          <Stack alignItems={'flex-start'} px={1} pt={1}>
            <Typography variant="h4" color={'primary'}>
              Misón:
            </Typography>
            <Box width={'100%'}>
              <Markdown children={data.mission} />
            </Box>
          </Stack>
        </Card>
      )}
      {!!data?.vision && (
        <Card sx={sxCard} elevation={4}>
          <Stack alignItems={'flex-start'} px={1} pt={1}>
            <Typography variant="h4" color={'primary'}>
              Visión:
            </Typography>
            <Box width={'100%'}>
              <Markdown children={data.vision} />
            </Box>
          </Stack>
        </Card>
      )}
      {!!data?.objective && (
        <Card sx={sxCard} elevation={4}>
          <Stack alignItems={'flex-start'} gap={0} px={1} pt={1}>
            <Typography variant="h4" color={'primary'}>
              Objetivo:
            </Typography>
            <Box width={'100%'}>
              <Markdown children={data.objective} />
            </Box>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}

export default Mission
