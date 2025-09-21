/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let head = new ListNode(1, 
    new ListNode(2, 
        new ListNode(3, 
            new ListNode(4, 
                new ListNode(5, null)))))

//


var reverseList = function(head) {
    
    if (!head) return null
    if ( head.next === null) return head

    let newHead = reverseList(head.next)
    head.next.next = head
    head.next = null
    
    return newHead
    
};

reverseList(head)





//     let reverseHead = []
//     let headLength = head.length


//     for (let i = 0; i < headLength; i++ ) {
//         let lastValue = head.pop()
//         reverseHead.push(lastValue)
//      }

// return reverseHead