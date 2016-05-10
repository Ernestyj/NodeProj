




title: Binary Tree Paths - 二叉树路径
date: 2016-05-10 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-10 21:40:47-->
---

### Binary Tree Paths - 二叉树路径
**Description**: Given a binary tree, return all root-to-leaf paths.

原题链接：https://leetcode.com/problems/binary-tree-paths/
 
思路：递归。

参考链接：https://leetcode.com/discuss/52072/accepted-java-simple-solution-in-8-lines

完整的java代码如下：

```java
    public List<String> binaryTreePaths(TreeNode root) {
        List<String> result = new ArrayList<>();
        if (root!=null) searchBT(root, "", result);
        return result;
    }
    private void searchBT(TreeNode root, String path, List<String> result) {
        if (root.left==null && root.right==null) result.add(path+root.val);
        if (root.left!=null) searchBT(root.left, path+root.val+"->", result);
        if (root.right!=null) searchBT(root.right, path+root.val+"->", result);
    }
```
