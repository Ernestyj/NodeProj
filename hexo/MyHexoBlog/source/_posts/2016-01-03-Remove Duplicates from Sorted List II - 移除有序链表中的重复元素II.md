



title: Remove Duplicates from Sorted List II - 移除有序链表中的重复元素II
date: 2016-01-03 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-03 21:40:47-->
---

### Remove Duplicates from Sorted List II - 移除有序链表中的重复元素II

**Description**: Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

 For example,
 Given 1->2->3->3->4->4->5, return 1->2->5.
 Given 1->1->1->2->3, return 2->3.

思路：遍历中探测当前节点的下两个节点。
心得：这道题刚做的时候，思路非常不清晰，导致写到后面节点间关系理不清，算法无法写下去。对于链表类型的题目，要格外注意节点间关系，引入头节点前的dummy节点是很常用的技巧。
     
参考：http://www.programcreek.com/2014/06/leetcode-remove-duplicates-from-sorted-list-ii-java/。

完整的java代码如下：

```java
public class RemoveDuplicatesFromSortedListII {

    public static void main(String[] args) {
        System.out.println("*****RESULT*****");
    }

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }


    /**
     * 遍历中探测当前节点的下两个节点
     * http://www.programcreek.com/2014/06/leetcode-remove-duplicates-from-sorted-list-ii-java/
     * @param head
     * @return
     */
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode p = dummy;
        while(p.next!=null && p.next.next!=null){
            if(p.next.val == p.next.next.val){
                int dup = p.next.val;
                while(p.next!=null && p.next.val==dup){
                    p.next = p.next.next;
                }
            }else{
                p = p.next;
            }

        }
        return dummy.next;
    }

}
```
