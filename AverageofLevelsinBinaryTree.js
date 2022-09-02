/** Day10#100DaysOfChallenge
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var averageOfLevels = function(root) {
    
  var queue = [];
  var ans = [];
  queue.push(root);
  
  while(queue.length !== 0){
      let size = queue.length;
      let sum = 0;
      for(let i=0; i<size; ++i){
          let root = queue.shift();
          sum+=root.val;
          if(root.left !== null) queue.push(root.left);
          if(root.right !== null) queue.push(root.right);
      }
      ans.push(sum/size);
  }
  return ans;
  
};