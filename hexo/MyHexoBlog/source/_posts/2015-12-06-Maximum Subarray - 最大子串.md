



title: Maximum Subarray - 最大子串
date: 2015-12-06 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-06 21:40:47-->
---

### Maximum Subarray - 最大子串

**Description**: Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

 For example, given the array [−2,1,−3,4,−1,2,1,−5,4],
 the contiguous subarray [4,−1,2,1] has the largest sum = 6.

思路：动态规划。

完整的java代码如下：

```java
public class MaximumSubarray {

    public static void main(String[] args) {
        int[] nums = {-2,1,-3,4,-1,2,1,-5,4};
        System.out.println("*****RESULT*****");
        int result = new MaximumSubarray().maxSubArray(nums);
        System.out.println(result);
    }


    public int maxSubArray(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int len = nums.length;
        int local = nums[0];
        int global = nums[0];
        for (int k = 1; k < len; k++){
            //TODO 注意不是Math.max(local + nums[k], local);
            //若local + nums[k] < nums[k]则直接抛弃k前面的所有数
            local = Math.max(local + nums[k], nums[k]);
            global = Math.max(local, global);
        }
        return global;
    }

}
```
