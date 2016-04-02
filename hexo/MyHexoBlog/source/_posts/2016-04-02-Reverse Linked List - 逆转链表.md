




title: Reverse Linked List - 逆转链表
date: 2016-04-02 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-02 21:40:47-->
---

### Reverse Linked List - 逆转链表
**Description**: Reverse a singly linked list.
 Hint: A linked list can be reversed either iteratively or recursively. Could you implement both?

思路：递归或迭代。
迭代示意图：http://www.programcreek.com/2013/12/in-place-reorder-a-singly-linked-list-in-java/
递归参考链接：http://www.programcreek.com/2014/05/leetcode-reverse-linked-list-java/

完整的java代码如下：

```java
public class ReverseLinkedList {

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    //递归
    public ListNode reverseList(ListNode head) {
        if(head==null || head.next==null) return head;
        ListNode second = head.next;    //pin the second node
        head.next = null;   //TODO set first's next to be null
        ListNode rest = reverseList(second);
        second.next = head;
        return rest;
    }

    //迭代
    public ListNode reverseList1(ListNode head) {
        if (head==null) return null;
        ListNode pre = head, curr = head.next;
        while (curr!=null){
            ListNode temp = curr.next;
            curr.next = pre;
            pre = curr;
            curr = temp;
        }
        head.next = null;   //TODO 易漏
        return pre;
    }

}
```
