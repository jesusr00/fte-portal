import { Button, MenuItem, styled, alpha } from '@mui/material'
import { StyledMenu } from './styles'
import { useState } from 'react'
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.main, 0.8),
    color: theme.palette.common.white,
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
}))

interface MenuOptionType {
  type: 'link' | 'action'
  action?: VoidFunction
  link?: string
  text: string
}

interface MenuDropdownProps {
  name: string
  options: MenuOptionType[]
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({
  name,
  options,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorEl(null)
  }

  const handleClose =
    ({ type, action, link }: Omit<MenuOptionType, 'text'>) =>
    () => {
      closeMenu()
      if (type === 'action' && action) {
        action()
      } else if (type === 'link' && link) {
        navigate(link)
      }
    }

  return (
    <>
      <Button
        aria-expanded={open ? 'true' : undefined}
        variant="text"
        color="inherit"
        size="large"
        sx={{ textTransform: 'none', fontWeight: 400 }}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {name}
      </Button>
      <StyledMenu
        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
      >
        {options.map(({ text, ...option }) => (
          <StyledMenuItem onClick={handleClose(option)} sx={{ mx: 0.5 }}>
            {text}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  )
}
