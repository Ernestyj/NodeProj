




title: Different Ways to Add Parentheses - 不同添加括号的方式
date: 2016-05-05 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-05 21:40:47-->
---

### Different Ways to Add Parentheses - 不同添加括号的方式
**Description**: Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are +, - and *.

Example Input: Input: "2*3-4*5"
 (2*(3-(4*5))) = -34
 ((2*3)-(4*5)) = -14
 ((2*(3-4))*5) = -10
 (2*((3-4)*5)) = -10
 (((2*3)-4)*5) = 10
 Output: [-34, -14, -10, -10, 10]
 
思路：分治法:对于输入字符串，若其中有运算符，则将其分为两部分，分别递归计算其值，然后将左值集合与右值集合进行交叉运算，将运算结果放入结果集中；若没有运算符，则直接将字符串转化为整型数放入结果集中。

参考链接：http://blog.csdn.net/foreverling/article/details/49742089

完整的java代码如下：

```java
public class DifferentWaysToAddParentheses {

    /**
     * http://blog.csdn.net/foreverling/article/details/49742089
     * 分治法:对于输入字符串，若其中有运算符，则将其分为两部分，分别递归计算其值，然后将左值集合与右值集合进行交叉运算，
     将运算结果放入结果集中；若没有运算符，则直接将字符串转化为整型数放入结果集中。
     * @param input
     * @return
     */
    public List<Integer> diffWaysToCompute(String input) {
        List<Integer> res = new ArrayList<>();
        for (int i=0; i<input.length(); i++) {
            char ch = input.charAt(i);
            if (ch=='+' || ch=='-' || ch=='*') {
                List<Integer> left = diffWaysToCompute(input.substring(0, i));
                List<Integer> right = diffWaysToCompute(input.substring(i + 1));
                for (int n : left) {
                    for (int m : right) {
                        if (ch=='+') res.add(n+m);
                        else if (ch=='-') res.add(n-m);
                        else res.add(n*m);
                    }
                }
            }
        }
        if (res.size()==0)  res.add(Integer.parseInt(input));
        return res;
    }

}
```
