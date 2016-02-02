




title: Flatten Binary Tree to Linked List - 将二叉树转化为链表
date: 2016-02-02 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-02 21:40:47-->
---

### Flatten Binary Tree to Linked List - 将二叉树转化为链表
**Description**: Given a binary tree, flatten it to a linked list in-place.
 
 思路：dfs,先序 

完整的java代码如下：

```java
public class FlattenBinaryTreeToLinkedList {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }


    /**
     * dfs,先序
     * @param root
     */
    public void flatten(TreeNode root) {
        List<TreeNode> preOrderList = new ArrayList<>();
        preOrderTraversal(preOrderList, root);
        for (int i=0; i<preOrderList.size()-1; i++){
            TreeNode node = preOrderList.get(i);
            node.left = null;
            node.right = preOrderList.get(i+1);
        }
    }
    private void preOrderTraversal(List<TreeNode> preOrderList, TreeNode root){
        if (root==null) return;
        preOrderList.add(root);
        preOrderTraversal(preOrderList, root.left);
        preOrderTraversal(preOrderList, root.right);
    }

}
```
