

title: Add Two Numbers - 两个链表数相加
date: 2015-10-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-02 21:40:47-->
---

### Add Two Numbers - 两个链表数相加

**Description**: You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 **Input**: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 **Output**: 7 -> 0 -> 8

java代码如下：

```java
public class AddTwoNumbers {

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0);
        ListNode p1 = l1, p2 = l2, p3 = dummy;
        int carry = 0;
        while(p1!=null || p2!=null){
            if (p1!=null){
                carry += p1.val;
                p1 = p1.next;
            }
            if (p2!=null){
                carry += p2.val;
                p2 = p2.next;
            }
            p3.next = new ListNode(carry%10);
            p3 = p3.next;
            carry = carry/10;
        }
        if (carry==1) p3.next = new ListNode(1);
        return dummy.next;
    }

}
```
