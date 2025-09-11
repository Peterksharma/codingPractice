/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    list1 = [1,2,4]
    list2 = [1,3,4]

    endResults = []
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] <= list2[i]) {
            endResults.push(list1[i])
            endResults.push(list2[i])
        } else {
            endResults.push(list2[i])
            endResults.push(list1[i])
        }


    }
    if (list1.length == 0) {
        for (let i = 0; i < list2.length; i++) {
        endResults.push(list2[i])

        }
    }
    return endResults
};

mergeTwoLists()