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

// Method 2 
// Bit Method 

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var getPseudoPalindromicPaths = (root, count) => {
  if(!root) return 0;
  count ^= 1 << root.val;
  const left = getPseudoPalindromicPaths(root.left, count);    
  const right = getPseudoPalindromicPaths(root.right, count);
  let res = left + right ;
 if(root.left == null && root.right == null && (count & (count - 1)) == 0){
       ++res;
  } 
  
  return res;
}
/**
* @param {TreeNode} root
* @return {number}
*/
var pseudoPalindromicPaths  = function(root) {
  
  
  return getPseudoPalindromicPaths(root, 0);
};