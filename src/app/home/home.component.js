import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setActiveFolder , getResourceList} from '../../actions/index'

import Loader from '../../common/loader/loader.component'
import ResourceList from '../../common/resource-list/resource-list.component'

import './home.component.scss'


function Home (props) {
  const [ showLoader, setLoader ] = useState(true)

  const { history, getResourceList, setActiveFolder } = props
  const { resourceList } = props


  useState(()=> {
    getResourceList()
    setActiveFolder(undefined)

    setTimeout(()=>{
      setLoader(false)
    }, 500)
  },[])

  const handleDoubleClick = (folderId) => {
    setActiveFolder(folderId)
    setTimeout(()=> {
      history.push(`/folders/${folderId}/content`)
    },0)
    
  }

  const renderResourceList = () => {
    return(
      <ResourceList
        list={resourceList}
        doubleClickCallback={(id)=> handleDoubleClick(id)}
      />
    )
  }
  return (
    <div className='home-container'>
      {showLoader ? <Loader /> : renderResourceList()}
    </div>
  )
}

function mapStateToProps (state) {
  return {
    resourceList: state.app.resourceList
  }
}

export default (connect(mapStateToProps, { getResourceList, setActiveFolder })(Home))