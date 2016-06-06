




title: Additive Number - 加性数字
date: 2016-06-06 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-06-06 21:40:47-->
---

### Additive Number - 加性数字
**Description**: Additive number is a string whose digits can form additive sequence.

A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

For example:
"112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8
"199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Given a string containing only digits '0'-'9', write a function to determine if it's an additive number.

Follow up:
How would you handle overflow for very large input integers?
 
思路：straight forward迭代, 首先生成第一/二个数,检查和是否与剩下的序列依次匹配. i,j为第一/二个数的长度, i<=len/2, 和的长度>=max(i,j)
     
完整的java代码如下：

```java
public class AdditiveNumber {

    /**https://leetcode.com/discuss/70102/java-recursive-and-iterative-solutions
     * 简洁快速. straight forward迭代, 生成第一/二个数,检查和是否与剩下的序列依次匹配.
     i,j为第一/二个数的长度, i<=len/2, 和的长度>=max(i,j)
     * @param num
     * @return
     */
    public boolean isAdditiveNumber(String num) {
        int len = num.length();
        for (int i=1; i<=len/2; ++i)    //TODO i,j表示长度
            for (int j=1; Math.max(j, i) <= len-i-j; ++j)   //TODO 和的长度限制tricky
                if (isValid(i, j, num)) return true;
        return false;
    }
    private boolean isValid(int i, int j, String num) {
        if (num.charAt(0)=='0' && i>1) return false;
        if (num.charAt(i)=='0' && j>1) return false;
        String sum;
        Long x1 = Long.parseLong(num.substring(0, i));
        Long x2 = Long.parseLong(num.substring(i, i+j));
        for (int start = i+j; start!=num.length(); start += sum.length()) {
            x2 = x2+x1;
            x1 = x2-x1;
            sum = x2.toString();
            if (!num.startsWith(sum, start)) return false;
        }
        return true;
    }

}
```
