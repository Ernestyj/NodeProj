




title: Maximum Depth of Binary Tree -二叉树最大深度
date: 2016-01-24 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-24 21:40:47-->
---

### Maximum Depth of Binary Tree -二叉树最大深度
**Description**: Given a binary tree, find its maximum depth. The maximum depth is the number of nodes along the longest path from the root node
 down to the farthest leaf node.

 思路：DFS递归。

完整的java代码如下：

```java
public class MaximumDepthOfBinaryTree {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    public int maxDepth(TreeNode root) {
        if (root==null) return 0;
        int maxL = maxDepth(root.left);
        int maxR = maxDepth(root.right);
        return Math.max(maxL, maxR) + 1;
    }

}
```
