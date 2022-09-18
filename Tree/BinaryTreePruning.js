// Day13#100DaysOfChallenge

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 var myPruneTree = (root) => {
  if(root === null) return false;
  
  let left  = myPruneTree(root.left);
  let right = myPruneTree(root.right);
  
  if(!left && !right) {
      root.left  = null;
      root.right = null;
       if(root.val !== 1) return false;
  }
  else if(!left)  root.left = null;
  else if(!right) root.right = null;
 
  return true;
  
};

/**
* @param {TreeNode} root
* @return {TreeNode}
*/
var pruneTree = function(root) {
  
  myPruneTree(root);
  if(root.left === null && root.right === null && root.val !== 1) return null;
  return root;
  
};