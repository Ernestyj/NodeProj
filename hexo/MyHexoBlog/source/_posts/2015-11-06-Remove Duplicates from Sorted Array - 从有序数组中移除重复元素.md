


title: Remove Duplicates from Sorted Array - 从有序数组中移除重复元素
date: 2015-11-06 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-06 21:40:47-->
---

### Remove Duplicates from Sorted Array - 从有序数组中移除重复元素

**Description**: Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

 Do not allocate extra space for another array, you must do this in place with constant memory.

 For example, Given input array nums = [1,1,2], Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

思路：注意题目要求不分配新的数组空间，而在原数组内in place置换。可以用index存不同数字的个数，遍历数组判断当前值是否和前一个值不一样。如果不一样，就是一个新的值，更新数组并对index加1。

这个算法虽然很简单，但是我在拿到题目的时候却采用了一种很笨、很容易出错且耗时很多的方法（运行测试用例的时候超时了，那么挫的代码就不好意思贴上来了）。

对于这类数组in place操作的问题，可以用一个指针指向要操作的位，用另一个指针来遍历数组，然后进行相关操作。

java代码如下：

```java
public class RemoveDuplicatesFromSortedArray {

    public static void main(String[] args) {
        int[] nums = {-2, -1, 0, 0, 1, 2, 2, 4, 6};
//        int[] nums = {1};

        System.out.println("************************");
        int count = new RemoveDuplicatesFromSortedArray().removeDuplicates(nums);
        System.out.println(count);
        for (int i : nums) System.out.print(i + " ");

    }

    /**
     * 用index存不同数字的个数，遍历数组判断当前值是否和前一个值不一样。
     如果不一样，就是一个新的值，更新数组并对index加1。
     * @param nums
     * @return
     */
    public int removeDuplicates(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int index = 1;
        for (int i = 1; i < nums.length; i++){
            if (nums[i] != nums[i - 1]) nums[index++] = nums[i];
        }
        return index;
    }
}
```
