




title: Binary Tree Right Side View - 二叉树右视图
date: 2016-03-28 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-28 21:40:47-->
---

### Binary Tree Right Side View - 二叉树右视图
**Description**: Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

原题链接：https://leetcode.com/problems/binary-tree-right-side-view/

思路：层次遍历取最后一个元素。

完整的java代码如下：

```java
public class BinaryTreeRightSideView {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root==null) return result;
        Queue<TreeNode> q = new LinkedList<>();
        Queue<TreeNode> qNext = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()){
            TreeNode n = q.poll();
            if (n.left!=null) qNext.offer(n.left);
            if (n.right!=null) qNext.offer(n.right);
            if (q.isEmpty()){
                result.add(n.val);
                if (!qNext.isEmpty()){
                    q = new LinkedList<>(qNext);
                    qNext = new LinkedList<>();
                }
            }
        }
        return result;
    }

}
```
