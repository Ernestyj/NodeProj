



title: Search In Rotated Sorted Array
date: 2015-11-15 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-15 21:40:47-->
---

### Search In Rotated Sorted Array

**Description**: Suppose a sorted array is rotated at some pivot unknown to you beforehand. (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2). You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array.

假设数组是A，每次左边缘为l，右边缘为r，还有中间位置是m。在每次迭代中，分三种情况：
（1）如果target==A[m]，那么m就是我们要的结果，直接返回；
（2）如果A[m]<A[r]，那么说明从m到r一定是有序的（没有受到rotate的影响），那么我们只需要判断target是不是在m到r之间，如果是则把左边缘移到m+1，否则就target在另一半，即把右边缘移到m-1。
（3）如果A[m]>=A[r]，那么说明从l到m一定是有序的，同样只需要判断target是否在这个范围内，相应的移动边缘即可。

根据以上方法，每次我们都可以切掉一半的数据，所以算法的时间复杂度是O(logn)，空间复杂度是O(1)。

参考：http://blog.csdn.net/linhuanmars/article/details/20525681

完整的java代码如下：

```java
public class SearchInRotatedSortedArray {

    public static void main(String[] args) {
        int[] nums = {4, 5, 6, 7, 0, 1, 2};

        System.out.println("*****RESULT*****");
        int index = new SearchInRotatedSortedArray().search(nums, 0);
        System.out.println(index);
    }

    /**
     * http://blog.csdn.net/linhuanmars/article/details/20525681
     * 假设数组是A，每次左边缘为l，右边缘为r，还有中间位置是m。在每次迭代中，分三种情况：
     （1）如果target==A[m]，那么m就是我们要的结果，直接返回；
     （2）如果A[m]<A[r]，那么说明从m到r一定是有序的（没有受到rotate的影响），
     那么我们只需要判断target是不是在m到r之间，如果是则把左边缘移到m+1，
     否则就target在另一半，即把右边缘移到m-1。
     （3）如果A[m]>=A[r]，那么说明从l到m一定是有序的，同样只需要判断target是否在这个范围内，
     相应的移动边缘即可。
     * 根据以上方法，每次我们都可以切掉一半的数据，所以算法的时间复杂度是O(logn)，空间复杂度是O(1)。
     * @param nums
     * @param target
     * @return
     */
    public int search(int[] nums, int target) {
        if (nums == null || nums.length == 0) return 0;
        int l = 0, r = nums.length - 1;
        int m = 0;
        while (l <= r){
            m = (l + r) / 2;
            if (target == nums[m]) return m;
            if (nums[m] < nums[r]) {
                if (nums[m] < target && target <= nums[r]) l = m + 1;
                else r = m - 1;
            } else {
                if (nums[l] <= target && target < nums[m]) r = m - 1;
                else l = m + 1;
            }
        }
        return -1;
    }
}
```
