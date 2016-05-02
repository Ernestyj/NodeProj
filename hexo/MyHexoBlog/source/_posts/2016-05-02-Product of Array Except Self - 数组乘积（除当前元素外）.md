




title: Product of Array Except Self - 数组乘积（除当前元素外）
date: 2016-05-02 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-02 21:40:47-->
---

### Product of Array Except Self - 数组乘积（除当前元素外）
**Description**: Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Solve it without division and in O(n).

For example, given [1,2,3,4], return [24,12,8,6].

Follow up:
Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

思路：先从左往右求积,再从右往左求积.

参考链接：https://leetcode.com/discuss/46104/simple-java-solution-in-o-n-without-extra-space

完整的java代码如下：

```java
public class ProductOfArrayExceptSelf {

    /**
     * https://leetcode.com/discuss/46104/simple-java-solution-in-o-n-without-extra-space
     * 先从左往右求积,再从右往左求积.
     * @param nums
     * @return
     */
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] res = new int[len];
        res[0] = 1;
        for (int i=1; i<len; i++) {
            res[i] = res[i-1] * nums[i-1];
        }
        int right = 1;
        for (int i = len-1; i>=0; i--) {
            res[i] *= right;
            right *= nums[i];
        }
        return res;
    }

}
```
