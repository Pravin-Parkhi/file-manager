import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addFile, addFolder } from '../../actions/index'
import { getUUID } from '../../util/object.util'
import { Popover, Button, Typography  } from '@material-ui/core'

import plusIcon from '../../assets/plus.svg'
import AddFolderDialog from '../add-folder-dialog/add-folder-dialog.component'

import './side-nav.component.scss'

function SideNav (props) {
  const inputFile = useRef(null)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showDialog, setDialog] = React.useState(false)
  const open = Boolean(anchorEl)
  const { addFile, addFolder } = props

  const handleFileClick = () => {
   inputFile.current.click();
  }

  const handleFolderClick = () => {
    setDialog(true)
  }

  const handleDialogClose = () => {
    setDialog(false)
  }

  const handleNewClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0]
    const fileName = selectedFile.name
    const fileTypeParts = selectedFile.type.split('/')
    const fileType = fileTypeParts[fileTypeParts.length - 1]
    addFile({
      id: getUUID(),
      name: fileName,
      fileType: fileType,
      resourceType: 'file'
    })
    handlePopoverClose()
  }

  const handleAddFolder = (name) => {
    addFolder({
      id: getUUID(),
      name: name,
      resourceType: 'folder',
      children: []
    })
    handlePopoverClose()
  }

  const renderDialog = () => {
    return(
      <AddFolderDialog 
        open={showDialog}
        handleClose={handleDialogClose}
        addFolderCallback={(name)=> handleAddFolder(name)}
      />
    )
  }

  const renderMenuOption = () => {
    return(
      <div className='menu-item-list'>
        <div className='menu-item'>
          <Typography className='menu-item-text' onClick={handleFileClick}>File</Typography>
          <input
            id='file'
            type='file'
            ref={inputFile}
            onChange={onFileChange}
            style={{display: "none"}}
            accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
        </div>
        <div className='menu-item'>
          <Typography className='menu-item-text' onClick={handleFolderClick}>Folder</Typography>
        </div>
      </div>
    )
  }

  return (
    <div className='side-nav-container'>
      <div className='button-wrapper'>
        <Button
          variant="contained"
          className='add-new-btn'
          onClick={handleNewClick}
          startIcon={<img src={plusIcon} alt='Add New' />}
        >
          New
        </Button>
        <Popover
          id='add-new-popover'
          open={open}
          anchorEl={anchorEl}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {renderMenuOption()}
        </Popover>
      </div>
      <NavLink activeClassName='active-nav' className='nav-tab' to='/'>
        <Typography className='name'>Drive</Typography>
      </NavLink>
      {showDialog && renderDialog()}
    </div>
  )
}

export default (connect(null, { addFile, addFolder })(SideNav))
