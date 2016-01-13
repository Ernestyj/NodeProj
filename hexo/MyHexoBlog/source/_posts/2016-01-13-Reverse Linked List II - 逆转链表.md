



title: Reverse Linked List II - 逆转链表
date: 2016-01-13 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-13 21:40:47-->
---

### Reverse Linked List II - 逆转链表

**Description**: Reverse a linked list from position m to n. Do it in-place and in one-pass.
 
 For example:
 Given 1->2->3->4->5->NULL, m = 2 and n = 4,
 return 1->4->3->2->5->NULL.
 
 Note:
 Given m, n satisfy the following condition: 1 ≤ m ≤ n ≤ length of list.

思路：与Reverse Nodes In K Group思路类似。

完整的java代码如下：

```java
public class ReverseLinkedListII {

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
     * 与Reverse Nodes In K Group思路类似，
     * Reverse a link list between pre and next exclusively
     * a linked list:
     * 0->1->2->3->4->5->6
     * |           |
     * pre        next
     * after call pre = reverse(pre, next)
     * 0->3->2->1->4->5->6
     *          |  |
     *          pre next
     * @param head
     * @param m
     * @param n
     * @return
     */
    public ListNode reverseBetween(ListNode head, int m, int n) {
        ListNode dummy = new ListNode(0);   //因为有“放到链表首位”的操作，需要一个dummy的头节点
        dummy.next = head;
        ListNode pre = null;
        ListNode cur = dummy;
        ListNode last = null;   //where first will be doomed "last"
        int i = 0;
        while (i <= n){
            if (i == m-1){  //逆转开始
                pre = cur;
                last = pre.next;
                cur = last.next;
                i+=2;
                while (i <= n){
                    last.next = cur.next;
                    cur.next = pre.next;
                    pre.next = cur;
                    cur = last.next;
                    i++;
                }
                break;
            }
            cur = cur.next;
            i++;
        }
        return dummy.next;
    }

}
```
