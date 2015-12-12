



title: Jump Game II - 跳数游戏
date: 2015-11-28 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-28 21:40:47-->
---

### Jump Game II - 跳数游戏

**Description**: Given an array of non-negative integers, you are initially positioned at the first index of the array.

 Each element in the array represents your maximum jump length at that position.
 
 Your goal is to reach the last index in the minimum number of jumps.
 
 For example:
 Given array A = [2,3,1,1,4]
 The minimum number of jumps to reach the last index is 2.
 (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

首先明白，这个题只要我们求跳数，怎么跳、最后距离是多少都没让求，不要做无必要的计算。

贪心思路：
last:用最小跳数jumps可达的最大距离；
curr:用jumps + 1跳可达的最大距离；（贪心值）
有curr = max(i+nums[i]), 0 <= i <= last

分析图：
http://www.cnblogs.com/lichen782/p/leetcode_Jump_Game_II.html

完整的java代码如下：

```java
public class JumpGame {

    public static void main(String[] args) {
        int[] nums = {2,3,1,1,4};
        System.out.println("*****RESULT*****");
        System.out.println(new JumpGame().jump(nums));
    }


    /**
     * 首先明白，这个题只要我们求跳数，怎么跳、最后距离是多少都没让求，不要做无必要的计算。
     * 分析图：http://www.cnblogs.com/lichen782/p/leetcode_Jump_Game_II.html
     * 贪心：
     * last:用最小跳数jumps可达的最大距离；
     * curr:用jumps + 1跳可达的最大距离；（贪心值）
     * 有curr = max(i+nums[i]), 0 <= i <= last
     * @param nums
     * @return
     */
    public int jump(int[] nums) {
        int jumps = 0;
        int last = 0;
        int curr = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (i > last) {
                ++jumps;
                last = curr;
            }
            curr = Math.max(curr, i + nums[i]);
        }
        return jumps;
    }
}
```
