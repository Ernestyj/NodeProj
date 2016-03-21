




title: Binary Search Tree Iterator - 二叉查找树迭代器
date: 2016-03-21 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-21 21:40:47-->
---

### Binary Search Tree Iterator - 二叉查找树迭代器
**Description**: Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
 Calling next() will return the next smallest number in the BST.
 Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.

思路：从根节点开始入栈，只要存在左节点就一直入栈;不存在左节点就出栈访问节点值，然后继续遍历出栈那个节点的右节点。
注意题目要求空间复杂度为O(h)，栈内存的数据随next()调用而发生动态变化。

完整的java代码如下：

```java
public class BSTIterator {
    //空间复杂度O(h)
    private Stack<TreeNode> stack = null;
    //从根节点开始入栈，只要存在左节点就一直入栈;
    //不存在左节点就出栈访问节点值，然后继续遍历出栈那个节点的右节点。
    public BSTIterator(TreeNode root) {
        stack = new Stack<>();
        while (root!=null){
            stack.push(root);
            root = root.left;
        }
    }
    /** @return whether we have a next smallest number */
    public boolean hasNext() {
        return !stack.isEmpty();
    }
    /** @return the next smallest number */
    public int next() {
        TreeNode node = stack.pop();
        int result = node.val;
        if (node.right!=null){
            node = node.right;
            while (node!=null){
                stack.push(node);
                node = node.left;
            }
        }
        return result;
    }

}
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}
```
