import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../config/theme'
import { Outlet } from 'react-router-dom'
import { CacheProvider } from '@emotion/react'
import { emotionCache } from '../../config/cache'
import Header from '../partials/Header'

const BaseLayout: React.FC = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Outlet />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default BaseLayout
