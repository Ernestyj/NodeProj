


title: Merge K Sorted Lists - 合并K个有序链表
date: 2015-11-03 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-03 21:40:47-->
---

### Merge K Sorted Lists - 合并K个有序链表

**Description**: Merge k sorted linked lists and return it as one sorted list.
Analyze and describe its complexity.

思路：二分法（分治法）
时间复杂度：nklogk
分析：假设总共有k个list，每个list的最大长度是n，那么运行时间满足递推式T(k) = 2T(k/2)+O(n*k)。根据主定理，可以算出算法的总复杂度是O(nklogk)

java代码如下：

```java
public class MergeKSortedLists {

    public static void main(String[] args) {
        ListNode l11 = new ListNode(2);
        ListNode l12 = new ListNode(3);
        ListNode l13 = new ListNode(5);
        l11.next = l12; l12.next = l13; l13.next = null;
        ListNode l21 = null;
        ListNode[] lists = new ListNode[0];

        ListNode node = new MergeKSortedLists().mergeKLists1(lists);
        while (node != null){
            System.out.print(node.val + " ");
            node = node.next;
        }
    }

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }
    
    /**
     * 二分法（分治法）
     * http://blog.csdn.net/linhuanmars/article/details/19899259
     *
     * 时间复杂度：nklogk
     * 分析：假设总共有k个list，每个list的最大长度是n，那么运行时间满足递推式T(k) = 2T(k/2)+O(n*k)。
     * 根据主定理，可以算出算法的总复杂度是O(nklogk)
     *
     * @param lists
     * @return
     */
    public ListNode mergeKLists1(ListNode[] lists) {
        if (lists == null) return null;
        return mergeSort(lists, 0, lists.length - 1);
    }
    private ListNode mergeSort(ListNode[] lists, int left, int right){
        if (left < right){
            int mid = (left + right) / 2;
            return mergeTwoLists(mergeSort(lists, left, mid),
                    mergeSort(lists, mid + 1, right));
        }
        return lists.length == 0 ? null : lists[left];  //TODO 注意new ListNode[0];时的边界条件
    }
```
