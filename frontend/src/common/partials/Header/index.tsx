import { AppBar, Toolbar, Avatar, useScrollTrigger, Box } from '@mui/material'
import React from 'react'
import fteBlackLogo from 'assets/logo/fte_black_logo.png'
import { MenuDropdown } from '@/common/components/MenuDropdown'

const Heder: React.FC = () => {
  const hasScroll = useScrollTrigger({ disableHysteresis: true, threshold: 50 })

  return (
    <AppBar
      position="sticky"
      color={hasScroll ? 'inherit' : 'transparent'}
      elevation={hasScroll ? 4 : 0}
      sx={{
        transition:
          'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      }}
    >
      <Box px={2}>
        <Toolbar disableGutters>
          <Avatar
            src={fteBlackLogo}
            sx={{ height: 50, borderRadius: 0, mx: 1 }}
          />
          <Box display={'flex'} gap={1} mx={1}>
            <MenuDropdown
              name="Facultad"
              options={[
                { text: 'Misión', type: 'link', link: 'mission' },
                { text: 'Consejo de dirección', type: 'link', link: 'direction-council' },
              ]}
            />
            <MenuDropdown
              name="Facultad"
              options={[
                { text: 'Misión', type: 'link', link: '#' },
                { text: 'Consejo de dirección', type: 'link', link: '#' },
              ]}
            />
            <MenuDropdown
              name="Facultad"
              options={[
                { text: 'Misión', type: 'link', link: '#' },
                { text: 'Consejo de dirección', type: 'link', link: '#' },
              ]}
            />
            <MenuDropdown
              name="Facultad"
              options={[
                { text: 'Misión', type: 'link', link: '#' },
                { text: 'Consejo de dirección', type: 'link', link: '#' },
              ]}
            />
            <MenuDropdown
              name="Facultad"
              options={[
                { text: 'Misión', type: 'link', link: '#' },
                { text: 'Consejo de dirección', type: 'link', link: '#' },
              ]}
            />
            <MenuDropdown
              name="Facultad"
              options={[
                { text: 'Misión', type: 'link', link: '#' },
                { text: 'Consejo de dirección', type: 'link', link: '#' },
              ]}
            />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Heder
