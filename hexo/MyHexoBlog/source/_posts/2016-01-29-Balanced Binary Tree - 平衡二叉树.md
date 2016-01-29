




title: Balanced Binary Tree - 平衡二叉树
date: 2016-01-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-29 21:40:47-->
---

### Balanced Binary Tree - 平衡二叉树
**Description**: Given a binary tree, determine if it is height-balanced.
 For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 
 思路：递归。类似Maximum Depth of Binary Tree。
 
完整的java代码如下：

```java
public class BalancedBinaryTree {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    public boolean isBalanced(TreeNode root) {
        if (root==null) return true;
        if (maxBalancedDepth(root)==-1) return false;
        return true;
    }
    private int maxBalancedDepth(TreeNode root){
        if (root==null) return 0;
        int lDepth = maxBalancedDepth(root.left);
        int rDepth = maxBalancedDepth(root.right);
        //TODO 增加以下剪枝条件提速
        if (lDepth==-1 || rDepth==-1) return -1;
        if (Math.abs(lDepth-rDepth)>1) return -1;

        return Math.max(lDepth, rDepth)+1;
    }

    //此法直观,但存在大量计算冗余
    public boolean isBalanced1(TreeNode root) {
        if (root==null) return true;
        int lDepth = maxDepth(root.left);
        int rDepth = maxDepth(root.right);
        if (Math.abs(lDepth-rDepth) <= 1) {
            return isBalanced(root.left) && isBalanced(root.right);
        } else return false;
    }
    private int maxDepth(TreeNode root){
        if (root==null) return 0;
        int lDepth = maxDepth(root.left);
        int rDepth = maxDepth(root.right);
        return Math.max(lDepth, rDepth)+1;
    }

}
```
