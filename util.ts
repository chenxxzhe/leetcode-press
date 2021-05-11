// 辅助函数, 便于调试
export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
}

export function createTree(arr: number[]): TreeNode {
  const root = new TreeNode(arr[0])
  const nodeList = [root]
  let curNode = root
  for (let i = 1; i < arr.length; i++) {
    const v = arr[i]
    curNode = nodeList[Math.ceil(i/2) - 1]
    if (v !== null) {
      const node = new TreeNode(v)
      if (i & 1) {
        curNode.left = node
      } else {
        curNode.right = node
      }
      nodeList.push(node)
    } else {
      nodeList.push(null)
    }
  }
  return root
}