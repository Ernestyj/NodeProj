




title: Maximum Product Subarray - 最大乘积子串
date: 2016-03-11 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-11 21:40:47-->
---

### Maximum Product Subarray - 最大乘积子串
**Description**: Find the contiguous subarray within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
 the contiguous subarray [2,3] has the largest product = 6.
 
思路：一维动态规划，考虑到乘积符号问题，同时记录最大值（正）与最小值（负），采用局部和全局变量追踪局部与最终结果。

完整的java代码如下：

```java
public class MaximumProductSubarray {

    // 一维动态规划，考虑到乘积符号问题，同时记录最大值（正）与最小值（负），
    // 采用局部和全局变量追踪局部与最终结果。
    public int maxProduct(int[] nums) {
        if(nums==null || nums.length==0) return 0;
        int max = nums[0];
        int min = nums[0];
        int globalMax = nums[0];
        for (int i=1; i<nums.length; i++){
            int temp1 = nums[i]*max;
            int temp2 = nums[i]*min;
            max = Math.max(Math.max(temp1, nums[i]), temp2);
            min = Math.min(Math.min(temp1, nums[i]), temp2);
            globalMax = Math.max(globalMax, max);
        }
        return globalMax;
    }

}
```
