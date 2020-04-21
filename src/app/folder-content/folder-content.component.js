import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { setActiveFolder } from '../../actions/index'

import Loader from '../../common/loader/loader.component'
import BreadcrumbsView from '../../common/breadcrumbs/breadcrumbs.component'
import ResourceList from '../../common/resource-list/resource-list.component'

import './folder-content.component.scss'


function FolderContent (props) {
  const [ contentList, setContentList ] = useState([])
  const [ showLoader, setLoader ] = useState(true)
  const { resourceList, activeFolder } = props
  const { history, setActiveFolder } = props

  const folderId = props.match.params.folderId
  
  const fetchFolderContent = () => {
    let list
    const { params } = props.match
    list = getChildrenById(resourceList, params.folderId)
    setContentList(list)
  }

  const getChildrenById = (children, folderId) => {
    let folderContent
    const childrenLen = children.length
    for (let itemIndex=0; ((folderContent === undefined) && (itemIndex<childrenLen)); itemIndex++){
      const itemDetails = children[itemIndex]
      if(itemDetails.resourceType === 'folder'){
        if(itemDetails.id === folderId) {
          folderContent = itemDetails.children
          break
        } else{
          folderContent = getChildrenById(itemDetails.children, folderId)
        }
      }
    }
    return folderContent
  }

  const handleDoubleClick = (folderId) => {
    setActiveFolder(folderId)
    props.history.push(`/folders/${folderId}/content`)
  }

  const renderResourceList = () => {
    return(
      <ResourceList
        list={contentList}
        doubleClickCallback={(id)=> handleDoubleClick(id)}
      />
    )
  }

  useEffect(() => {
    if(!activeFolder){
      history.push('/')
    }
  })

  useEffect(()=> {
    fetchFolderContent()

    setTimeout(()=>{
      setLoader(false)
    }, 500)
  },[folderId, resourceList])

  return (
    <div className='home-container'>
      <BreadcrumbsView {...props} />
      {showLoader ? <Loader /> : renderResourceList()}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    resourceList: state.app.resourceList,
    activeFolder: state.app.activeFolder
  }
}

export default (connect(mapStateToProps, { setActiveFolder })(FolderContent))