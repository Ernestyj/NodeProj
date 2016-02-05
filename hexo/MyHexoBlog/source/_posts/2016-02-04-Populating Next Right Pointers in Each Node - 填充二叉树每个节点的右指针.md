




title: Populating Next Right Pointers in Each Node - 填充二叉树每个节点的右指针
date: 2016-02-04 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-04 21:40:47-->
---

### Populating Next Right Pointers in Each Node - 填充二叉树每个节点的右指针
**Description**: Populate each next pointer to point to its next right node.
 If there is no next right node, the next pointer should be set to NULL. Initially, all next pointers are set to NULL.
 
 Note: 
 You may only use constant extra space.
 You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

 思路：
 1 用Populating Next Right Pointers in Each Node II解法可行(类似二叉树层次遍历)；
2 由于题目中的二叉树是完全二叉树,找到规律可用递归求解(OJ排名82%);
（1）根节点的左子树，其next是该根节点的右子树;
（2）根节点的右子树，其next是该根节点next节点的左子树.
参考：https://gist.github.com/benjaminwu7/4700435

完整的java代码如下（第二种方法）：

```java
public class PopulatingNextRightPointersInEachNode {

    public static class TreeLinkNode {
        int val;
        TreeLinkNode left, right, next;
        TreeLinkNode(int x) { val = x; }
    }


    //用Populating Next Right Pointers in Each Node II解法可行(类似二叉树层次遍历)

    /**
     * 由于题目中的二叉树是完全二叉树,找到规律可用递归求解(OJ排名82%);
     1. 根节点的左子树，其next是该根节点的右子树;
     2. 根节点的右子树，其next是该根节点next节点的左子树.
     * https://gist.github.com/benjaminwu7/4700435
     * @param root
     */
    public void connect(TreeLinkNode root) {
        if(root == null) return;
        TreeLinkNode leftN = root.left;
        TreeLinkNode rightN = root.right;
        while(leftN != null){   //链接兄弟节点,及这对兄弟节点下所有相邻的堂兄弟节点对
            leftN.next = rightN;
            leftN = leftN.right;
            rightN = rightN.left;
        }
        connect(root.left);
        connect(root.right);
    }

}
```
