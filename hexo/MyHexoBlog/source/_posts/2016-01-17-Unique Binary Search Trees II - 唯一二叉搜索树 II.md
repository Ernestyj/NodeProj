



title: Unique Binary Search Trees II - 唯一二叉搜索树 II
date: 2016-01-17 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-01-17 21:40:47-->
---

### Unique Binary Search Trees II - 唯一二叉搜索树 II

**Description**: Given n, generate all structurally unique BST's (binary search trees) that store values 1...n.

原题链接：https://leetcode.com/problems/unique-binary-search-trees-ii/

 思路：DP与回溯，在循环中进行递归，类似NQueens.

参考：http://www.programcreek.com/2014/05/leetcode-unique-binary-search-trees-ii-java/

完整的java代码如下：

```java
public class UniqueBinarySearchTreesII {

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
     * DP与回溯:在循环中进行递归,类似NQueens.
     * @param n
     * @return
     */
    public List<TreeNode> generateTrees(int n) {
        if (n == 0) return new LinkedList<>();
        return generateTrees(1, n);
    }
    private List<TreeNode> generateTrees(int start, int end) {
        List<TreeNode> list = new LinkedList<>();
        if (start > end) {  //空节点
            list.add(null);
            return list;
        }
        for (int i = start; i <= end; i++) {
            List<TreeNode> lefts = generateTrees(start, i - 1);
            List<TreeNode> rights = generateTrees(i + 1, end);
            for (TreeNode left : lefts) {
                for (TreeNode right : rights) {
                    TreeNode node = new TreeNode(i);
                    node.left = left;
                    node.right = right;
                    list.add(node);
                }
            }
        }
        return list;
    }

}
```
