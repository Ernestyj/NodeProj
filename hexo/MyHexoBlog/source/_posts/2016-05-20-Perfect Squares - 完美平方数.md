




title: Perfect Squares - 完美平方数
date: 2016-05-20 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-20 21:40:47-->
---

### Perfect Squares - 完美平方数
**Description**: Given a positive integer n, find the least number of perfect square numbers (for example, 1, 4, 9, 16, ...) which sum to n.

For example, given n = 12, return 3 because 12 = 4 + 4 + 4; given n = 13, return 2 because 13 = 4 + 9.


思路：DP: dp[k] = Min{ dp[k-i*i]+1 },  n-i*i>=0 && i>=1

参考链接：https://leetcode.com/discuss/62526/an-easy-understanding-dp-solution-in-java

完整的java代码如下：

```java
    public int numSquares(int n) {
        int[] dp = new int[n+1];
        dp[0] = 0;
        for (int k=1; k<=n; k++){
            dp[k] = dp[k-1]+1;
            int i = 2;
            while (k-i*i>=0){
                int temp = dp[k-i*i]+1;
                if (temp<dp[k]) dp[k] = temp;
                i++;
            }
        }
        return dp[n];
    }
```
