



title: Remove Duplicates from Sorted List - 移除有序链表中的重复元素
date: 2016-01-04 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-04 21:40:47-->
---

### Remove Duplicates from Sorted List - 移除有序链表中的重复元素

**Description**: Given a sorted linked list, delete all duplicates such that each element appear only once.
 
 For example,
 Given 1->1->2, return 1->2.
 Given 1->1->2->3->3, return 1->2->3.

思路：直接往后遍历，根据前后节点值是否相等做相应处理。或者用Remove Duplicates from Sorted List II 的思路，遍历中探测当前节点的下两个节点。

完整的java代码如下：

```java
public class RemoveDuplicatesFromSortedList {

    public static void main(String[] args) {
        System.out.println("*****RESULT*****");
    }

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }


    public ListNode deleteDuplicates(ListNode head) {
        if (head == null) return head;
        ListNode p = head;
        while (p.next != null){
            if (p.val == p.next.val){
                p.next = p.next.next;
            } else {
                p = p.next; //TODO 只有值不同时才往下走
            }
        }
        return head;
    }

    //利用RemoveDuplicatesFromSortedListII思路
    public ListNode deleteDuplicates1(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode p = dummy;
        while(p.next!=null && p.next.next!=null){
            if(p.next.val == p.next.next.val){
                int dup = p.next.val;
                p = p.next; //与RemoveDuplicatesFromSortedListII的唯一区别，多了此语句，来存储重复节点一次
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
