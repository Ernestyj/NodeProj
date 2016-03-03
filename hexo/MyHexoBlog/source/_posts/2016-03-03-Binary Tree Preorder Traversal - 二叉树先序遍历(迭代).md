




title: Binary Tree Preorder Traversal - 二叉树先序遍历(迭代)
date: 2016-03-03 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-03 21:40:47-->
---

### Binary Tree Preorder Traversal - 二叉树先序遍历(迭代)
**Description**: Given a binary tree, return the preorder traversal of its nodes' values.
 
思路：迭代法使用栈.

完整的java代码如下：

```java
public class BinaryTreePreorderTraversal {

    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        if (root==null) return result;
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        while (!stack.isEmpty()){
            TreeNode node = stack.pop();
            result.add(node.val);
            if (node.right!=null) stack.push(node.right);
            if (node.left!=null) stack.push(node.left);
        }
        return result;
    }

}
```
