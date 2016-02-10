




title: Best Time to Buy and Sell Stock I & II - 买股票的最佳时机I&II
date: 2016-02-10 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-10 21:40:47-->
---

### Best Time to Buy and Sell Stock I & II - 买股票的最佳时机I&II

Best Time to Buy and Sell Stock I

**Description**: Say you have an array for which the ith element is the price of a given stock on day i. If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

思路：最一般的方法是嵌套遍历找到最大买入卖出差,但超时.
用一维动态规划(双重):记录出现过的最低价作为买入价格,计算当天售出的收益.

完整的java代码如下：

```java
public class BestTimeToBuyAndSellStock {

    /**
     * 最一般的方法是嵌套遍历找到最大买入卖出差,但超时.
     一维动态规划(双重):记录出现过的最低价作为买入价格,计算当天售出的收益.
     P(i)=Max(P(i-1), price[i]-B(i))
     B(i)=Min(B(i-1), price[i])
     * @param prices
     * @return
     */
    public int maxProfit(int[] prices) {
        int min = Integer.MAX_VALUE;
        int profit = 0;
        for (int i=0; i<prices.length; i++){
            min = Math.min(min, prices[i]);
            profit = Math.max(profit, prices[i]-min);
        }
        return profit;
    }

}
```

Best Time to Buy and Sell Stock II

**Description**: Say you have an array for which the ith element is the price of a given stock on day i. Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). 

However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

思路：贪心方法:递增序前后元素差之和.

完整的java代码如下：

```java
public class BestTimeToBuyAndSellStockII {

    /**
     * 贪心方法:递增序前后元素差之和.
     * @param prices
     * @return
     */
    public int maxProfit(int[] prices) {
        if (prices.length<2) return 0;
        int profit = 0;
        for (int i=1; i<prices.length; i++){
            if (prices[i]>prices[i-1])
                profit += prices[i]-prices[i-1];
        }
        return profit;
    }

}
```
