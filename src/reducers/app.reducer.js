import ActionTypes from "../action-type/index"
import { DUMMY_DATA } from "../constants/dummy-data";
import { deepCopy, getUpdateResourceListAfterAdd } from '../util/object.util'

const defaultState = {
  resourceList: DUMMY_DATA.data,
  activeFolder: undefined
};

const appReducer = (state = defaultState, action) => {
  switch (action.type) {
    
    case ActionTypes.GET_RESOURCE_LIST: {
      return {
        ...state,
        resourceList: state.resourceList
      }
    }

    case ActionTypes.ADD_FILE: {
      let resourceListCopy = deepCopy(state.resourceList)
      resourceListCopy = getUpdateResourceListAfterAdd(resourceListCopy, action.file, state.activeFolder)
      return {
        ...state,
        resourceList : resourceListCopy
      }
    }

    case ActionTypes.ADD_FOLDER: {
      let resourceListCopy = deepCopy(state.resourceList)
      resourceListCopy = getUpdateResourceListAfterAdd(resourceListCopy, action.folder, state.activeFolder)
      return {
        ...state,
        resourceList : resourceListCopy
      }
    }

    case ActionTypes.SET_ACTIVE_FOLDER: {
      return {
        ...state,
        activeFolder: action.folderId
      }
    }

    default:
      return state
  }
};

export default appReducer;