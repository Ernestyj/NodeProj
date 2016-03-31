




title: Bitwise AND of Numbers Range - 整数区间按位与
date: 2016-03-31 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-31 21:40:47-->
---

### Bitwise AND of Numbers Range - 整数区间按位与
**Description**: Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.
 For example, given the range [5, 7], you should return 4.

思路：依次将n最靠右的1置零,直到小于等于m。
普通的将每个数按位操作会超时。

完整的java代码如下：

```java
public class BitwiseANDOfNumbersRange {

    //http://www.programcreek.com/2014/04/leetcode-bitwise-and-of-numbers-range-java/
    public int rangeBitwiseAnd(int m, int n) {
        while (n>m) n &= n-1;   //依次将n最靠右的1置零,直到小于等于m
        return n;
    }

    //超时
    public int rangeBitwiseAnd1(int m, int n) {
        int res = m;
        for (int i=m+1; i<=n; i++) res &= i;
        return res;
    }

}
```
