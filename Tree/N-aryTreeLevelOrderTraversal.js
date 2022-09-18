/** Day12#100DaysOfChallenge
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  console.log(root);
  let res = [];
  let queue = [root];
  
  while(queue.length !== 0){
      let size = queue.length;
      let level = [];
      for(let i=0; i<size; ++i){
          let curr = queue.shift();
          //console.log(curr);
          if (!curr) continue;
          level.push(curr.val);
          queue.push(...curr.children);
      }
      if(level.length !== 0) res.push(level);
  }
  return res;
};