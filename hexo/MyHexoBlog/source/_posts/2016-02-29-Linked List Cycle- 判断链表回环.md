




title: Linked List Cycle- 判断链表回环
date: 2016-02-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-29 21:40:47-->
---

### Linked List Cycle- 判断链表回环
**Description**: Given a linked list, determine if it has a cycle in it.

Follow up: Can you solve it without using extra space?
 
思路：
一、将访问过的节点都指向一个预设的特殊节点,有回环则会访问到此特殊节点。
二、使用快慢双指针,有回环则快指针会追上慢指针。

完整的java代码如下：

```java
public class LinkedListCycle {

    class ListNode {
        int val;
        ListNode next;
        ListNode(int x) {
            val = x;
            next = null;
        }
    }

    //使用快慢双指针,有回环则快指针会追上慢指针
    public boolean hasCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;
        while (fast!=null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
            if (slow==fast) return true;
        }
        return false;
    }


    //将访问过的节点都指向一个预设的特殊节点,有回环则会访问到此特殊节点
    public boolean hasCycle1(ListNode head) {
        ListNode p = head;
        ListNode dummy = new ListNode(Integer.MAX_VALUE);
        ListNode next = null;
        while (p!=null){
            if (p==dummy) return true;
            next = p.next;
            p.next = dummy;
            p = next;
        }
        return false;
    }

}
```
