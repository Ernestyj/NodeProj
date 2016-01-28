




title: Convert Sorted List to Binary Search Tree - 将有序链表转化为平衡二叉树
date: 2016-01-27 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-27 21:40:47-->
---

### Convert Sorted List to Binary Search Tree - 将有序链表转化为平衡二叉树
**Description**: Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
 
 思路：1 获取链表长度后,自底向上(中序顺序)递归建树；
 2 先将链表转为数组,再自顶向下(先根再左右子树)递归建树。

完整的java代码如下（含两种方式）：

```java
public class ConvertSortedListToBinarySearchTree {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    //获取链表长度后,自底向上(中序顺序)递归建树
    private ListNode node = null;
    public TreeNode sortedListToBST(ListNode head) {
        if (head==null) return null;
        node = head;
        int len = 0;
        while (node!=null){
            len++;
            node = node.next;
        }
        node = head;
        return sortedListToBST(0, len-1);
    }
    private TreeNode sortedListToBST(int l, int r){
        if (l>r) return null;
        int m = (l+r)/2;
        TreeNode left = sortedListToBST(l, m-1);
        TreeNode root = new TreeNode(node.val);
        node = node.next;
        TreeNode right = sortedListToBST(m+1, r);
        root.left = left;
        root.right = right;
        return root;
    }


    //先将链表转为数组,再自顶向下(先根再左右子树)递归建树
    public TreeNode sortedListToBST1(ListNode head) {
        if (head==null) return null;
        ListNode node = head;
        List<Integer> list = new ArrayList<>();
        while (node!=null){
            list.add(node.val);
            node = node.next;
        }
        return sortedArrayToBST(list, 0, list.size()-1);
    }
    private TreeNode sortedArrayToBST(List<Integer> nums, int l, int r){
        if (l>r) return null;
        int m = (l+r)/2;
        TreeNode root = new TreeNode(nums.get(m));
        root.left = sortedArrayToBST(nums, l, m-1);
        root.right = sortedArrayToBST(nums, m+1, r);
        return root;
    }

}
```
