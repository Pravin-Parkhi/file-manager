import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography  } from '@material-ui/core'

import folderIcon from '../../assets/folder.png'

import './folder.component.scss'

export default function CardView (props) {
  const { id, name } = props.data
  const { doubleClickCallback } = props

  const handleDoubleClick = () => {
    doubleClickCallback(id)
  }

  return (
    <Card 
      className='folder-container'
      onDoubleClick={handleDoubleClick}
    >
      <CardActionArea>
        <CardMedia
          className='card-media'
          image={folderIcon}
        />
        <CardContent>
          <Typography gutterBottom>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
