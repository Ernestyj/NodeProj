

title: Add Two Numbers - 两个链表数相加
date: 2015-10-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-10-29 21:40:47-->
---

### Add Two Numbers - 两个链表数相加

**Description**: You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 **Input**: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 **Output**: 7 -> 0 -> 8

思路：采用竖式法对链表数进行相加，注意进位。

java代码如下：

```java
public class AddTwoNumbers {

    public static void main(String[] args) {
        ListNode l11 = new ListNode(0);
        l11.next = null;
        ListNode l21 = new ListNode(7);
        ListNode l22 = new ListNode(3);
        l21.next = l22; l22.next = null;
        ListNode node = new AddTwoNumbers().addTwoNumbers(l11, l21);
        while (node != null){
            System.out.print(node.val + " ");
            node = node.next;
        }
    }

    // Definition for singly-linked list.
    public static class ListNode {
        int val;
        ListNode next;
        ListNode(int x) { val = x; }
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        StringBuilder builder = new StringBuilder();
        while (l1 != null){
            builder.append(l1.val);
            l1 = l1.next;
        }
        String first = builder.toString();
        builder = new StringBuilder();
        while (l2 != null){
            builder.append(l2.val);
            l2 = l2.next;
        }
        String second = builder.toString();

        int diffLength = first.length() - second.length();
        if (diffLength >= 0) second = populateZero(second, diffLength);
        else first = populateZero(first, Math.abs(diffLength)); //TODO 注意取绝对值

        builder = new StringBuilder();
        int carryVal = 0;   //进位值
        for (int i = 0; i < first.length(); i++){
            int temp = first.charAt(i) - '0' + second.charAt(i) - '0' + carryVal;
            int remainder = temp % 10;
            carryVal = temp / 10;
            if (i == first.length() - 1){   //最高位
                builder.append(remainder).append(carryVal == 0 ? "" : "1");
            } else {
                builder.append(remainder);
            }
        }

        String ans = builder.toString();
        ListNode[] nodes = new ListNode[ans.length()];
        for (int i = 0; i < ans.length(); i++){
            nodes[i] = new ListNode(Integer.parseInt(String.valueOf(ans.charAt(i))));
        }
        for (int i = 0; i < ans.length(); i++){
            if (i == ans.length() - 1) nodes[i].next = null;
            else nodes[i].next = nodes[i + 1];
        }

        return nodes[0];
    }

    private String populateZero(String s, int populateLength){
        StringBuilder builder = new StringBuilder(s);
        for (int i = 0; i < populateLength; i++){
            builder.append('0');
        }
        return builder.toString();
    }

}
```
