




title: Basic Calculator - 基础计算器
date: 2016-04-17 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-17 21:40:47-->
---

### Basic Calculator - 基础计算器
**Description**: Implement a basic calculator to evaluate a simple expression string.
 The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
 You may assume that the given expression is always valid.

Some examples:
 "1 + 1" = 2
 " 2-1 + 2 " = 3
 "(1+(4+5+2)-3)+(6+8)" = 23

Note: Do not use the eval built-in library function.

思路：遇到"+"或"-"改变符号,遇到数字则读完数字并利用符号进行运算,遇到"("压栈结果与符号并重置结果与符号,遇到")"弹栈并计算结果.

参考链接：https://leetcode.com/discuss/39553/iterative-java-solution-with-stack

完整的java代码如下：

```java
public class BasicCalculator {

    /**
     * https://leetcode.com/discuss/39553/iterative-java-solution-with-stack
     * 遇到"+"或"-"改变符号,遇到数字则读完数字并利用符号进行运算,遇到"("压栈结果与符号并重置结果与符号,遇到")"弹栈并计算结果.
     * @param s
     * @return
     */
    public static int calculate(String s) {
        int sign = 1, result = 0;
        Stack<Integer> stack = new Stack<>();
        for (int i=0; i<s.length(); i++) {
            if (Character.isDigit(s.charAt(i))) {
                int sum = s.charAt(i)-'0';
                while (i+1<s.length() && Character.isDigit(s.charAt(i+1))) {
                    sum = sum*10 + s.charAt(i+1)-'0';
                    i++;
                }
                result += sum*sign;
            } else if (s.charAt(i) == '+')
                sign = 1;
            else if (s.charAt(i) == '-')
                sign = -1;
            else if (s.charAt(i) == '(') {
                stack.push(result);
                stack.push(sign);
                result = 0;
                sign = 1;
            } else if (s.charAt(i) == ')') {
                result = result*stack.pop() + stack.pop();
            }
        }
        return result;
    }

}
```
