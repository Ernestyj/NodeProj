




title: Minimum Depth of Binary Tree - 二叉树最小深度
date: 2016-01-30 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-30 21:40:47-->
---

### Minimum Depth of Binary Tree - 二叉树最小深度
**Description**: Given a binary tree, find its minimum depth.
 The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
 
 思路：1 递归。类似Maximum Depth Of Binary Tree,注意边界条件不同.
2 类似层次遍历,使用队列,并额外使用一个队列存储深度.
 
完整的java代码如下（含两种方法）：

```java
public class MinimumDepthOfBinaryTree {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * 类似Maximum Depth Of Binary Tree,注意边界条件不同.
     * @param root
     * @return
     */
    public int minDepth(TreeNode root) {
        if (root == null) return 0;
        return getMin(root);
    }
    private int getMin(TreeNode root){
        if (root == null) return Integer.MAX_VALUE; //不是返回0
        if (root.left == null && root.right == null) {  //新增条件
            return 1;
        }
        return Math.min(getMin(root.left), getMin(root.right)) + 1;
    }

    /**
     * 类似层次遍历,使用队列,并额外使用一个队列存储深度.
     * @param root
     * @return
     */
    public int minDepth1(TreeNode root) {
        if (root==null) return 0;
        Queue<TreeNode> nodes = new LinkedList<>();
        Queue<Integer> counts = new LinkedList<>();
        nodes.offer(root);
        counts.offer(1);
        while (!nodes.isEmpty()){
            TreeNode node = nodes.poll();
            int count = counts.poll();
            if (node.left!=null){
                nodes.offer(node.left);
                counts.offer(count+1);
            }
            if (node.right!=null){
                nodes.offer(node.right);
                counts.offer(count+1);
            }
            if (node.left==null && node.right==null){
                return count;
            }
        }
        return 0;
    }

}
```
