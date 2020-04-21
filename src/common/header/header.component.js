import React from 'react'
import { AppBar, Toolbar, IconButton, Typography  } from '@material-ui/core'

import driveIcon from '../../assets/drive-icon.png'

import './header.component.scss'

export default function Header (props) {

  return (
    <AppBar className='header-container' position="static">
      <Toolbar>
        <IconButton edge="start" className='' color="inherit" aria-label="menu">
          <img src={driveIcon} className='brand-logo' alt='Brand Logo' />
        </IconButton>
        <Typography variant="h6" className='brand-name'>File Browser</Typography>
      </Toolbar>
    </AppBar>
  )
}
