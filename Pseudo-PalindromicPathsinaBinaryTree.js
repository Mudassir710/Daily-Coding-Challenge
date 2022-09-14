/** Day15#100DaysOfChallenge
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var getPseudoPalindromicPaths = (root, numbers) => {
  if(!root) return 0;
  if(numbers.has(root.val)) {
      numbers.delete(root.val);
  }
  else {
      numbers.add(root.val);  
  }
  
 if(root.left == null && root.right == null){
      return numbers.size <= 1 ? 1 : 0; 
  } 
  
  const left = getPseudoPalindromicPaths(root.left, new Set(numbers));    
  const right = getPseudoPalindromicPaths(root.right, new Set(numbers));
  
  return left + right;

}
/**
* @param {TreeNode} root
* @return {number}
*/
var pseudoPalindromicPaths  = function(root) {
  
  
  return getPseudoPalindromicPaths(root, new Set());
};