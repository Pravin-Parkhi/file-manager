import React, { useState } from 'react';
import { 
  Button, Dialog, DialogActions, DialogContent, Slide, Typography, TextField
} from '@material-ui/core'

import closeIcon from '../../assets/close.png'

import "./add-folder-dialog.component.scss"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddFolderDialog(props) {
  const [name, setName] = useState('')
  const [error, setError] = useState(false)

  const { open } = props
  const { handleClose, addFolderCallback } = props

  const handleChange = (event) => {
    setName(event.target.value)
  }

  const handleFocus = () => {
    setError(false)
  }

  const handleCreateClick = () => {
    if(name.length){
      addFolderCallback(name)
      handleClose()
    } else {
      setError(true)
    }
  }
  
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      className='add-folder-dialog'
    >
      <div id="dialog-title" className='dialog-title'>
        <Typography>{"Add Folder"}</Typography>
        <img src={closeIcon} alt='' className='close-icon' onClick={handleClose} />
      </div>
      <DialogContent>
        <TextField 
          error={error}
          value={name} 
          label="Folder Name"
          onFocus={handleFocus}
          onChange={handleChange}
          className='add-folder-name'
          placeholder='Type folder name'
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCreateClick} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}