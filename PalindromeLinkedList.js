// Day7#100DaysOfChallenge
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 var reverse = (head) => {
  if(head === null || head.next === null) return head;
  let prev = null;
  let curr = head;
  let next = head.next;
  
  while(curr != null){
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
  }
  return prev;
};

/**
* @param {ListNode} head
* @return {boolean}
*/
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  
  while(fast !== null && fast.next !== null){
      slow = slow.next;
      fast = fast.next.next;
  }
  console.log(head, slow);    
  slow = reverse(slow);
  fast = head;
   console.log(head, slow);  
  while(slow !== null && fast !== null){
      if(slow.val !== fast.val) return false;
      slow = slow.next;
      fast = fast.next;
  }
  return true;
};