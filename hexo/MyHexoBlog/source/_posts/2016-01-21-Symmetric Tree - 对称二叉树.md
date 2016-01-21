




title: Symmetric Tree - 对称二叉树
date: 2016-01-21 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-21 21:40:47-->
---

### Symmetric Tree - 对称二叉树
**Description**: Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

Note: Bonus points if you could solve it both recursively and iteratively.

原题链接：https://leetcode.com/problems/symmetric-tree/

 思路：递归（与Same Tree类似），或者迭代（使用两个队列）。

完整的java代码如下：

```java
public class SymmetricTree {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    /**
     * 递归:思路类似Same Tree
     * @param root
     * @return
     */
    public boolean isSymmetric(TreeNode root) {
        if (root==null) return true;
        return isSymmetricHelper(root.left, root.right);
    }
    private boolean isSymmetricHelper(TreeNode p, TreeNode q) {
        if(p == null && q == null) return true;
        else if(p != null && q != null){
            if(p.val == q.val)  //TODO 注意交换次序
                return isSymmetricHelper(p.left, q.right) && isSymmetricHelper(p.right, q.left);
        }else return false;
        return false;
    }

    /**
     * 迭代:使用两个队列
     * @param root
     * @return
     */
    public boolean isSymmetric1(TreeNode root) {
        if (root==null) return true;
        Queue<TreeNode> leftQ = new LinkedList<>();
        Queue<TreeNode> rightQ = new LinkedList<>();
        leftQ.offer(root.left);
        rightQ.offer(root.right);
        while (!leftQ.isEmpty() && !rightQ.isEmpty()){
            TreeNode l = leftQ.poll();
            TreeNode r = rightQ.poll();
            if (l==null && r==null) continue;
            else if (l==null || r==null) return false;

            if (l.val != r.val) return false;
            else{   //TODO 注意交换次序
                leftQ.offer(l.left);
                leftQ.offer(l.right);
                rightQ.offer(r.right);
                rightQ.offer(r.left);
            }
        }
        return true;
    }

}
```
