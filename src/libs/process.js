export const iteratorData = (resultArr, data) => {
  // console.log(data)
  if (data.type === 'route') {
    resultArr.push(data)
  } else {
    var item = {
      nodeId: data.nodeId,
      name: data.name,
      type: data.type,
      properties: data.properties
    }
    resultArr.push(item)
  }
  if (data.childNode != null) {
    iteratorData(resultArr, data.childNode)
  }
}
export const findIndex = (nodeId, arr) => {
  var position = null
  arr.some((value, index) => {
    // console.log('value: ' + value.nodeId + ', index:' + index + ',')
    if (value.nodeId === nodeId) {
      position = index
      return true
    }
  })
  return position
}
export const addNode = (node, arr) => {
  var index = findIndex(node.prevId, arr)
  if (index != null) {
    arr.splice(index + 1, 0, node)
  }
}
export const addNewNode = (newNode, node, arr) => {
  addNode(newNode, arr)
  findParent(newNode, node)
}
/**
 *
 * @param {*} node 为完整节点
 * @param {*} nodeDel 为删除节点
 * @param {*} arr 为节点node遍历后数组
 */
export const delNode = (nodeDel, node, arr) => {
  // console.log(nodeDel)
  var index = findIndex(nodeDel.nodeId, arr)
  if (index != null) {
    arr.splice(index, 1)
  }
  deleteNode(nodeDel, node)
}
export const deleteNode = (nodeDel, node) => {
  if (node.nodeId === nodeDel.prevId) {
    // console.log(node)
    if (nodeDel.childNode != null) {
      nodeDel.childNode.prevId = node.nodeId
      nodeDel = nodeDel.childNode
    } else {
      nodeDel = null
    }
    node.childNode = nodeDel
    return
  }
  if (node.childNode != null) {
    return deleteNode(nodeDel, node.childNode)
  }
}
export const findParent = (newNode, node) => {
  if (node.nodeId === newNode.prevId) {
    if (node.childNode != null) {
      node.childNode.prevId = newNode.nodeId
    }
    newNode.childNode = node.childNode
    node.childNode = newNode
    return
  }
  if (node.childNode != null) {
    return findParent(newNode, node.childNode)
  }
}
export const delConditionNode = (condNodeDel, node) => {
  var index = null
  node.conditionNodes.some((cond, i) => {
    if (cond.nodeId === condNodeDel.nodeId) {
      index = i
      return true
    }
  })
  if (index != null) {
    node.conditionNodes.splice(index, 1)
  }
  // 只剩下一个条件分支
}
export const setConditionFactor = (condNode, node) => {
  node.conditionNodes.some((cond, i) => {
    if (cond.nodeId === condNode.nodeId) {
      cond.properties = condNode.properties
      return true
    }
  })
}
export const checkProperties = (node) => {

}
