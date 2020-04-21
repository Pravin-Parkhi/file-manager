import ActionTypes from '../action-type/index'

export const getResourceList = () => {
  return {
    type: ActionTypes.GET_RESOURCE_LIST
  }
}

export const addFile = (file) => {
  return {
    type: ActionTypes.ADD_FILE,
    file
  }
}

export const addFolder = (folder) => {
  return {
    type: ActionTypes.ADD_FOLDER,
    folder
  }
}

export const setActiveFolder = (folderId) => {
  return {
    type: ActionTypes.SET_ACTIVE_FOLDER,
    folderId
  }
}