import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography  } from '@material-ui/core'

import documentIcon from '../../assets/doc-icon.png'
import pptIcon from '../../assets/ppt-icon.png'
import pdfIcon from '../../assets/pdf-icon.png'
import sheetIcon from '../../assets/excel-icon.jpg'

import './file.component.scss'

export default function FileView (props) {
  const { name, fileType } = props.data

  const getFileIcon = (type) => {
    if(type==='doc'){
      return documentIcon
    } else if(type==='pdf'){
      return pdfIcon
    } else if(type==='excel') {
      return sheetIcon
    } else if (type==='ppt'){
      return pptIcon
    } else {
      return ''
    }
  }

  return (
    <Card className='file-container'>
      <CardActionArea>
        <CardMedia
          className='card-media'
          image={getFileIcon(fileType)}
        />
        <CardContent>
          <Typography gutterBottom>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
