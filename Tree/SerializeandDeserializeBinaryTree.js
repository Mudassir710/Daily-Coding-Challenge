// Day5#100DaysOfChallenge
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
  let ans = [];
  
  const serialized = (root) => {
      if(root === null) {
          ans.push(null);
          return;
      }
      ans.push(root.val);
      serialized(root.left);
      serialized(root.right);
  }
  serialized(root);
  return ans;
};

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  var deSerialized = (data) => {
      if(data.length === 0) return null;
      
      var val = data.shift();
      if(val === null) return null;
      var root = new TreeNode(val);
      root.left = deSerialized(data);
      root.right = deSerialized(data);
      return root
  };
  return deSerialized(data);
};

/**
* Your functions will be called as such:
* deserialize(serialize(root));
*/