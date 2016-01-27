




title: Convert Sorted Array to Binary Search Tree - 将有序数组转化为平衡二叉树
date: 2016-01-27 20:44:49
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-27 21:40:49-->
---

### Convert Sorted Array to Binary Search Tree - 将有序数组转化为平衡二叉树
**Description**: Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 
 思路：递归，类似二分搜索。因为中序序列的中间数为根.

完整的java代码如下：

```java
public class ConvertSortedArrayToBinarySearchTree {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    /**
     * 递归:类似二分搜索.因为中序序列的中间数为根.
     * @param nums
     * @return
     */
    public TreeNode sortedArrayToBST(int[] nums) {
        if (nums.length == 0) return null;
        return sortedArrayToBST(nums, 0, nums.length-1);
    }
    private TreeNode sortedArrayToBST(int[] nums, int l, int r){
        if (l>r) return null;
        int m = (l+r)/2;
        TreeNode root = new TreeNode(nums[m]);
        root.left = sortedArrayToBST(nums, l, m-1);
        root.right = sortedArrayToBST(nums, m+1, r);
        return root;
    }

}
```
