




title: Find Minimum in Rotated Sorted Array - 有序倒转数组的最小值
date: 2016-03-12 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-12 21:40:47-->
---

### Find Minimum in Rotated Sorted Array - 有序倒转数组的最小值
**Description**: Suppose a sorted array is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).
 Find the minimum element.
 You may assume no duplicate exists in the array.
 
思路：二分法。

完整的java代码如下：

```java
public class FindMinimumInRotatedSortedArray {

    public int findMin(int[] nums) {
        int l = 0, r = nums.length - 1;
        int m = 0;
        int min = Integer.MAX_VALUE;
        while (l <= r){
            m = (l+r)/2;
            if (min>nums[m]) min = nums[m];
            if (nums[m]<nums[r]) {
                r = m-1;
            } else {
                if (min>nums[r]) min = nums[r];
                l = m+1;
            }
        }
        return min;
    }

}
```
