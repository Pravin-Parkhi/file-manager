import { zipObject } from 'lodash'

const ACTION_TYPES = [
  "GET_RESOURCE_LIST",
  "SET_ACTIVE_FOLDER",
  "ADD_FOLDER",
  "ADD_FILE"
]

export default zipObject(ACTION_TYPES, ACTION_TYPES)
