




title: House Robber - 房屋偷窃
date: 2016-03-28 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-28 21:40:47-->
---

### House Robber - 房屋偷窃
**Description**: You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
 Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

思路：DP, s(i)=max{s(i-1), s(i-2)+nums(i)}

完整的java代码如下：

```java
public class HouseRobber {
    
    //DP, s(i)=max{s(i-1), s(i-2)+nums(i)}
    public int rob(int[] nums) {
        if (nums.length==0) return 0;
        if (nums.length==1) return nums[0];
        int[] s = new int[nums.length];
        s[0] = nums[0];
        s[1] = Math.max(s[0], nums[1]);
        if (nums.length==2) return s[1];
        for (int i=2; i<nums.length; i++){
            s[i] = Math.max(s[i-1], s[i-2]+nums[i]);
        }
        return s[nums.length-1];
    }

}
```
