


title: Reverse Nodes in k-Group - 按k个一组逆转链表节点
date: 2015-11-05 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-05 21:40:47-->
---

### Reverse Nodes in k-Group - 按k个一组逆转链表节点

**Description**: Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

 If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
 You may not alter the values in the nodes, only nodes itself may be changed.

 Only constant memory is allowed.

 For example,
 Given this linked list: 1->2->3->4->5
 For k = 2, you should return: 2->1->4->3->5
 For k = 3, you should return: 3->2->1->4->5

思路：首先搞清楚怎么逆转一个单链表。其实O(n)就可以了。第一个肯定是last one，然后我们每遍历到一个node，就把它放到最链表的首位，最后一个就成为第一个了。
参考：[Reverse Nodes in k-Group [学习如何逆转一个单链表]](http://www.cnblogs.com/lichen782/p/leetcode_Reverse_Nodes_in_kGroup.html)

这个算法按照普通的逻辑思维去做，极易出错。写算法前再花一点时间想想有没有更简洁的方法，别急于下手。好的算法一般都是简单明了，思路清晰。

对于很多算法，我们可以抓住问题中的不变量，以此不变量为线索，开展下去（ex. 逆转链表中，第一个数肯定是last one，抓住这个last one，算法的思路就清晰了，写的过程中也不易出错）。

java代码如下：

```java
public class ReverseNodesInKGroup {

    public static void main(String[] args) {
        ListNode l11 = new ListNode(1);
        ListNode l12 = new ListNode(2);
        ListNode l13 = new ListNode(3);
        ListNode l14 = new ListNode(4);
        ListNode l15 = new ListNode(5);
        l11.next = l12; l12.next = l13; l13.next = l14; l14.next = l15; l15.next = null;
        ListNode l21 = null;

        ListNode node = new ReverseNodesInKGroup().reverseKGroup(l11, 2);
        while (node != null){
            System.out.print(node.val + " ");
            node = node.next;
        }
    }

    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    /**
     * http://www.cnblogs.com/lichen782/p/leetcode_Reverse_Nodes_in_kGroup.html
     *
     * @param head
     * @param k
     * @return
     */
    public ListNode reverseKGroup(ListNode head, int k) {
        if(head == null || k == 1) return head;
        ListNode dummy = new ListNode(0);   //因为有“放到链表首位”的操作，需要一个dummy的头节点
        dummy.next = head;
        ListNode pre = dummy;
        int i = 0;
        while(head != null){
            i++;
            if(i % k ==0){
                pre = reverse(pre, head.next);
                head = pre.next;
            }else {
                head = head.next;
            }
        }
        return dummy.next;
    }
    /**首先，搞清楚怎么逆转一个单链表。其实O(n)就可以了。
     * 第一个肯定是last one，然后我们每遍历到一个node，就把它放到最链表的首位，最后一个就成为第一个了。
     * Reverse a link list between pre and next exclusively
     * an example:
     * a linked list:
     * 0->1->2->3->4->5->6
     * |           |
     * pre        next
     * after call pre = reverse(pre, next)
     *
     * 0->3->2->1->4->5->6
     *          |  |
     *          pre next
     * @param pre
     * @param next
     * @return the reversed list's last node, which is the precedence of parameter next
     */
    private ListNode reverse(ListNode pre, ListNode next){
        ListNode last = pre.next;   //where first will be doomed "last"
        ListNode cur = last.next;
        while(cur != next){
            last.next = cur.next;
            cur.next = pre.next;
            pre.next = cur;
            cur = last.next;
        }
        return last;
    }
```
