




title: Missing Number - 缺失的数
date: 2016-05-15 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-15 21:40:47-->
---

### Missing Number - 缺失的数
**Description**: Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

For example, Given nums = [0, 1, 3] return 2.

Note: Your algorithm should run in linear runtime complexity.
 Could you implement it using only constant extra space complexity?

思路：一、位操作(i与num[i]异或)
二、先求[1,n]间的和,再减去给定数组之和
三、普通置换思路

完整的java代码如下：

```java
public class MissingNumber {

    //位操作(i与num[i]异或)
    public int missingNumber(int[] nums) {
        int xor = 0, i = 0;
        for (i=0; i<nums.length; i++) {
            xor = xor^i^nums[i];
        }
        return xor^i;
    }

    //先求[1,n]间的和,再减去给定数组之和
    public int missingNumber1(int[] nums) {
        int len = nums.length;
        int sum = 0;
        for(int n: nums) sum += n;
        return len*(len+1)/2 - sum;
    }

    //普通置换思路
    public int missingNumber2(int[] nums) {
        int i = 0;
        for (i=0; i<nums.length; i++){
            while (nums[i]!=-1 && nums[i]!=i) {
                if (nums[i]>=nums.length) nums[i] = -1; //标记缺失位
                else swap(nums, i, nums[i]);    //i与num[i]置换归位
            }
        }
        for (i=0; i<nums.length; i++){
            if (nums[i]==-1) break;
        }
        return i;
    }
    private void swap(int[] nums, int i, int j){
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

}
```
