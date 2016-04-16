




title: Count Complete Tree Nodes - 完全二叉树节点数
date: 2016-04-16 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-16 21:40:47-->
---

### Count Complete Tree Nodes - 完全二叉树节点数
**Description**: Given a complete binary tree, count the number of nodes.

思路：一、满二叉树节点数=2^h-1，递归计算
二、借助队列一层一层遍历，超时

参考链接：http://www.programcreek.com/2014/06/leetcode-count-complete-tree-nodes-java/

完整的java代码如下：

```java
public class CountCompleteTreeNodes {

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * http://www.programcreek.com/2014/06/leetcode-count-complete-tree-nodes-java/
     * 满二叉树节点数=2^h-1
     * @param root
     * @return
     */
    public int countNodes(TreeNode root) {
        int leftDepth = leftDepth(root);
        int rightDepth = rightDepth(root);
        if (leftDepth == rightDepth) return (1<<leftDepth)-1;
        else return 1+countNodes(root.left)+countNodes(root.right);
    }
    private int rightDepth(TreeNode root) {
        int h = 0;
        while (root!=null) {
            root = root.right;
            h++;
        }
        return h;
    }
    private int leftDepth(TreeNode root) {
        int h = 0;
        while (root!=null) {
            root = root.left;
            h++;
        }
        return h;
    }

    //超时
    public int countNodes1(TreeNode root) {
        if (root==null) return 0;
        LinkedList<TreeNode> q = new LinkedList<>();
        LinkedList<TreeNode> qNext = new LinkedList<>();
        int count = 1;
        q.offer(root);
        while (!q.isEmpty()){
            TreeNode n = q.poll();
            if (n.left!=null) qNext.offer(n.left);
            if (n.right!=null) qNext.offer(n.right);
            if (q.isEmpty()){
                if (!qNext.isEmpty()){
                    count += qNext.size();
                    q = qNext;
                    qNext = new LinkedList<>();
                } else return count;
            }
        }
        return count;
    }

}
```
