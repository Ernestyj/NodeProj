




title: Insertion Sort List - 插入排序链表
date: 2016-03-06 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-06 21:40:47-->
---

### Insertion Sort List - 插入排序链表
**Description**: Sort a linked list using insertion sort.
 
思路：插入排序就是每一步都将一个待排数据按其大小插入到已经排序的数据中的适当位置，直到全部插入完毕。

完整的java代码如下：

```java
public class InsertionSortList {

    public class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode insertionSortList(ListNode head) {
        if (head==null) return null;
        if (head.next==null) return head;
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        ListNode pre = head;
        ListNode curr = head.next;
        while (curr!=null) {
            if (curr.val<pre.val){
                pre.next = curr.next;
                ListNode p = dummy;
                ListNode q = dummy.next;
                while (q!=null){
                    if (curr.val<q.val){
                        p.next = curr;
                        curr.next = q;
                        break;
                    }
                    p = q;
                    q = q.next;
                }
                curr = pre.next;
            } else {
                pre = curr;
                curr = curr.next;
            }
        }
        return dummy.next;
    }

}
```
