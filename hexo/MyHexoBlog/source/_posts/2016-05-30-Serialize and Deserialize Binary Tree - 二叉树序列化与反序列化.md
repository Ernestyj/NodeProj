




title: Serialize and Deserialize Binary Tree - 二叉树序列化与反序列化
date: 2016-05-30 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-30 21:40:47-->
---

### Serialize and Deserialize Binary Tree - 二叉树序列化与反序列化
**Description**: Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
 
思路：一、层次遍历顺序序列化与反序列化；
二、按先序遍历顺序(递归)序列化与反序列化。

参考链接：https://leetcode.com/discuss/73461/short-and-straight-forward-bfs-java-code-with-a-queue
https://leetcode.com/discuss/66117/easy-to-understand-java-solution

完整的java代码如下：

```java
    public class Codec {
        // Encodes a tree to a single string.
        public String serialize(TreeNode root) {
            if (root==null) return "";
            LinkedList<TreeNode> queue = new LinkedList<>();
            queue.offer(root);
            StringBuilder builder = new StringBuilder();
            while (!queue.isEmpty()){
                TreeNode node = queue.poll();
                if (node==null) builder.append("n,");   //null节点用"n"标记
                else {
                    builder.append(node.val+",");
                    queue.offer(node.left);
                    queue.offer(node.right);
                }
            }
            return builder.toString();
        }

        // Decodes your encoded data to tree.
        public TreeNode deserialize(String data) {
            if (data.equals("")) return null;
            String[] strings = data.split(",");
            LinkedList<TreeNode> queue = new LinkedList<>();    //队列存非空父节点
            TreeNode root = new TreeNode(Integer.valueOf(strings[0]));
            queue.offer(root);
            for (int i=1; i<strings.length; i++){
                TreeNode p = queue.poll();
                if (!strings[i].equals("n")){
                    TreeNode left = new TreeNode(Integer.valueOf(strings[i]));
                    p.left = left;
                    queue.offer(left);
                }
                if (!strings[++i].equals("n")){
                    TreeNode right = new TreeNode(Integer.valueOf(strings[i]));
                    p.right = right;
                    queue.offer(right);
                }
            }
            return root;
        }
    }
```
