




title: Binary Tree Level Order Traversal -二叉树层次遍历
date: 2016-01-22 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-22 21:40:47-->
---

### Binary Tree Level Order Traversal -二叉树层次遍历
**Description**: Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
 For example:
 Given binary tree {3,9,20,#,#,15,7},
 return its level order traversal as: [ [3], [9,20], [15,7] ]

 思路：广度优先搜索，使用队列实现。
     a. 队列初始化，将根节点压入队列。
     b. 当队列不为空，进行如下操作：弹出一个节点，访问；若左子节点或右子节点不为空，将其压入队列。
     由于题目要求按层返回结果,需要利用两个队列.

完整的java代码如下：

```java
public class BinaryTreeLevelOrderTraversal {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    /**
     * 广度优先搜索，使用队列实现。
     a. 队列初始化，将根节点压入队列。
     b. 当队列不为空，进行如下操作：弹出一个节点，访问；若左子节点或右子节点不为空，将其压入队列。
     由于题目要求按层返回结果,需要利用两个队列.
     * @param root
     * @return
     */
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> temp = new ArrayList<>();
        if (root==null) return result;
        Queue<TreeNode> curQueue = new LinkedList<>();
        Queue<TreeNode> nextQueue = new LinkedList<>();
        curQueue.offer(root);
        while (!curQueue.isEmpty()){
            TreeNode node = curQueue.poll();
            temp.add(node.val);
            if (node.left!=null) nextQueue.offer(node.left);
            if (node.right!=null) nextQueue.offer(node.right);
            if (curQueue.isEmpty()) {
                result.add(temp);
                temp = new ArrayList<>();
                curQueue = nextQueue;
                nextQueue = new LinkedList<>();
            }
        }
        return result;
    }

}
```
