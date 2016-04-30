




title: Lowest Common Ancestor of a Binary Tree - 二叉树最低公共祖先节点
date: 2016-04-30 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-30 21:40:47-->
---

### Lowest Common Ancestor of a Binary Tree - 二叉树最低公共祖先节点
**Description**: Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

思路：若当前子树同时含p和q,根节点为LCA;若只有其一,则LCA为其一;若都不含,则为null。

参考链接：https://leetcode.com/discuss/45386/4-lines-c-java-python-ruby

完整的java代码如下：

```java
public class LowestCommonAncestorOfBinaryTree {

    class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    /**
     * 若当前子树同时含p和q,根节点为LCA;若只有其一,则LCA为其一;若都不含,则为null.
     https://leetcode.com/discuss/45386/4-lines-c-java-python-ruby
     * @param root
     * @param p
     * @param q
     * @return
     */
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null || root == p || root == q) return root;
        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        if (left==null) return right;
        if (right==null) return left;
        return root;
    }

}
```
