/** Day9#100DaysOfChallenge
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


 var getNoOfGoodNodes = (root, max, res) => {
  //console.log(res);
  if(root == null) return ;
  if(root.val >= max) res.count += 1;
  max = Math.max(root.val, max);
  getNoOfGoodNodes(root.left, max, res);
  getNoOfGoodNodes(root.right, max, res);
};

/**
* @param {TreeNode} root
* @return {number}
*/
var goodNodes = function(root) {
  let res = {count : 0};
  getNoOfGoodNodes(root,Number.NEGATIVE_INFINITY, res);
  return res.count;
};