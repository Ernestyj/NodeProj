




title: Validate Binary Search Tree - 验证二叉搜索树
date: 2016-01-18 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-19 21:40:47-->
---

### Validate Binary Search Tree - 验证二叉搜索树
**Description**: Given a binary tree, determine if it is a valid binary search tree (BST).
 Assume a BST is defined as follows:
 1 The left subtree of a node contains only nodes with keys less than the node's key.
 2 The right subtree of a node contains only nodes with keys greater than the node's key.
 3 Both the left and right subtrees must also be binary search trees.

 思路：递归。类似二叉树的中序遍历。

参考：http://www.programcreek.com/2012/12/leetcode-validate-binary-search-tree-java/

完整的java代码如下（给出两种递归方式）：

```java
public class ValidateBinarySearchTree {

    public static void main(String[] args) {
        System.out.println("*****RESULT*****");
    }

    //Definition for a binary tree node.
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) {
            val = x;
        }
    }


    /**
     * http://www.programcreek.com/2012/12/leetcode-validate-binary-search-tree-java/
     * @param root
     * @return
     */
    public boolean isValidBST(TreeNode root) {
        return dfs(root, Double.NEGATIVE_INFINITY, Double.POSITIVE_INFINITY);
    }
    private boolean dfs(TreeNode root, double min, double max){
        if (root == null) return true;
        if (min>=root.val || root.val>=max) return false;
        return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
    }


    private boolean isValid = true;
    private TreeNode pre = null;
    /**与上述方法时间复杂度一致
     * 另一种递归思路,类似Recover Binary Search Tree
     * 注意pre存的是中序次序的上一个节点
     * @param root
     * @return
     */
    public boolean isValidBST1(TreeNode root) {
        inOrder(root);
        return isValid;
    }
    private void inOrder(TreeNode root){
        if (root == null) return;
        inOrder(root.left);
        if (pre == null) pre = root;
        else {
            if (pre.val >= root.val){
                isValid = false;
                return;
            }
            pre = root;
        }
        inOrder(root.right);
    }

}
```
