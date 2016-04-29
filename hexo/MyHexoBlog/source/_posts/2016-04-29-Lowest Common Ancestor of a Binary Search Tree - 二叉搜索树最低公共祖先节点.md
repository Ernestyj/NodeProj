




title: Lowest Common Ancestor of a Binary Search Tree - 二叉搜索树最低公共祖先节点
date: 2016-04-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-29 21:40:47-->
---

### Lowest Common Ancestor of a Binary Search Tree - 二叉搜索树最低公共祖先节点
**Description**: Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

思路：二分搜索。


完整的java代码如下：

```java
public class LowestCommonAncestorOfBinarySearchTree {

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    //简洁版
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        while ((root.val - p.val) * (root.val - q.val) > 0)
            root = p.val < root.val ? root.left : root.right;
        return root;
    }

    static TreeNode node;
    public TreeNode lowestCommonAncestor1(TreeNode root, TreeNode p, TreeNode q) {
        binarySearch(root, p, q);
        return node;
    }
    private void binarySearch(TreeNode root, TreeNode p, TreeNode q){
        if (root==null) return;
        int min = p.val, max = q.val;
        if (p.val>q.val) {
            min = q.val;
            max = p.val;
        }
        if (max<root.val) binarySearch(root.left, p ,q);
        else if (root.val<min) binarySearch(root.right, p, q);
        else node = root;
    }

}
```
