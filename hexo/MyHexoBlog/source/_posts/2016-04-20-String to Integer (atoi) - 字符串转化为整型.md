




title: String to Integer (atoi) - 字符串转化为整型
date: 2016-04-20 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-20 21:40:47-->
---

### String to Integer (atoi) - 字符串转化为整型
**Description**: Implement atoi to convert a string to an integer.
 Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

思路：此题用例极易出错,注意各种条件

参考链接：https://leetcode.com/discuss/32813/java-solution-with-4-steps-explanations

完整的java代码如下：

```java
public class StringToInteger {

    /**TODO 此题用例极易出错,注意各种条件
     * https://leetcode.com/discuss/32813/java-solution-with-4-steps-explanations
     * @param str
     * @return
     */
    public int myAtoi(String str) {
        int i = 0, sign = 1, total = 0;
        if(str.length() == 0) return 0;
        //1. Remove Spaces
        while(str.charAt(i)==' ' && i<str.length()) i++;
        //2. Handle signs
        if(str.charAt(i)=='+' || str.charAt(i)=='-'){
            sign = str.charAt(i)=='+' ? 1 : -1;
            i++;
        }
        //3. Convert number and avoid overflow
        while(i<str.length()){
            int digit = str.charAt(i)-'0';
            if(digit<0 || digit>9) break;
            //check if total will be overflow after 10 times and add digit
            if(Integer.MAX_VALUE/10<total || Integer.MAX_VALUE/10==total && Integer.MAX_VALUE%10<digit)
                return sign==1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            total = 10*total + digit;
            i++;
        }
        return total*sign;
    }
}
```
