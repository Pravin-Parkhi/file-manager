import React from 'react'
import { Breadcrumbs, Button } from '@material-ui/core'

import backButton from '../../assets/back-arrow.png'

import './breadcrumbs.component.scss'

export default function BreadcrumbsView (props) {

  const handleBackBtnClick = () => {
    props.history.goBack()
  }

  return (
    <Breadcrumbs maxItems={2} aria-label="breadcrumb" className='breadcrumb-container'>
      <Button
        color="primary"
        variant="contained"
        className='back-button'
        onClick={handleBackBtnClick}
        startIcon={<img src={backButton} className='back-btn-icon' alt='Back' />}
      >
        Back
      </Button>
    </Breadcrumbs>
  );
}
