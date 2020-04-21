export const getUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Makes deep copy of object and an array
// Works only for JSON serializable content
export function deepCopy (data) {
  if (data) {
    return JSON.parse(JSON.stringify(data))
  }
}

export function getUpdateResourceListAfterAdd(resourceList, newItem, folderId) {
  if (folderId){
    function addToFolder(data) {
      for (let folderIndex = 0; (data && folderIndex<data.length); folderIndex++) {
        const folderDetails = data[folderIndex]
        if(folderDetails.resourceType === 'folder'){
          if (folderDetails.id === folderId) {
            folderDetails.children.push(newItem)
            break
          } else {
            addToFolder(folderDetails.children)
          }
        }
      }
    }
    addToFolder(resourceList)
  } else {
    resourceList.push(newItem)
  }
  return resourceList
}