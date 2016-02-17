




title: Sum Root to Leaf Numbers - 二叉树所有路径之和
date: 2016-02-17 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-17 21:40:47-->
---

### Sum Root to Leaf Numbers - 二叉树所有路径之和
**Description**: Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number. Find the total sum of all root-to-leaf numbers.

 For example,
   1
  / \\
 2   3
 The root-to-leaf path 1->2 represents the number 12.
 The root-to-leaf path 1->3 represents the number 13.
 Return the sum = 12 + 13 = 25.
 
思路：典型的root->leaf路径问题，遍历所有path并更新sum。传递的变量是当前节点的路径和curSum,则下一层的节点对应的路径和为curSum*10 + node.val。注意当根到叶的路径很长时,curSum容易溢出.
     
参考：http://www.programcreek.com/2014/05/leetcode-sum-root-to-leaf-numbers-java/

完整的java代码如下：

```java
public class SumRootToLeafNumbers {

    //Definition for a binary tree node.
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    /**
     * http://www.programcreek.com/2014/05/leetcode-sum-root-to-leaf-numbers-java/
     * 典型的root->leaf路径问题，遍历所有path并更新sum。
     传递的变量是当前节点的路径和curSum,则下一层的节点对应的路径和为curSum*10 + node.val。
     注意当根到叶的路径很长时,curSum容易溢出.
     * @param root
     * @return
     */
    public int sumNumbers(TreeNode root) {
        if (root==null) return 0;
        return getSum(root, 0, 0);
    }
    private int getSum(TreeNode node, int curSum, int sum){
        if (node==null) return sum; //TODO return 0;也可以,sum只有在叶子节点才触发计算
        curSum = curSum*10 + node.val;

        if (node.left==null && node.right==null){   //叶子节点
            return sum + curSum;
        }
        //左右子树
        return getSum(node.left, curSum, sum) + getSum(node.right, curSum, sum);
    }

    //http://blog.csdn.net/linhuanmars/article/details/22913699
    //另一种递归风格,但速度较慢
    public int sumNumbers1(TreeNode root) {
        return helper(root,0);
    }
    private int helper(TreeNode root, int sum) {
        if(root == null) return 0;
        if(root.left==null && root.right==null)
            return sum*10 + root.val;
        return helper(root.left,sum*10+root.val) + helper(root.right,sum*10+root.val);
    }

}
```
