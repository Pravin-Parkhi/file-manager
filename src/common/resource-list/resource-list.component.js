import React from 'react'
import { Typography } from '@material-ui/core'

import FileView from '../../common/file/file.component'
import FolderView from '../../common/folder/folder.component'
import noContentIcon from '../../assets/no-content-found.png'

import './resource-list.component.scss'

export default function ResourceList (props) {

  const { list } = props
  const { doubleClickCallback } = props
  
  const renderResource = (resource) => {
    const { resourceType, id } = resource
    if(resourceType === 'folder'){
      return(
        <FolderView
          key={id}
          data={resource}
          doubleClickCallback={(id)=> doubleClickCallback(id)}
        />
      )
    } else if (resourceType === 'file'){
      return(
        <FileView
          key={id}
          data={resource}
        />
      )
    }
    return null
  }

  const renderEmptyState = () => {
    return(
      <div className='empty-state-container'>
        <img src={noContentIcon} alt='No Content Found' />
        <Typography className='empty-state-text'>No content found!</Typography>
      </div>
    )
  }

  return (
    <div className='resource-list-container'>
      {(list && list.length) ? list.map((resource) => renderResource(resource)) : renderEmptyState()}
    </div>
  )
}
