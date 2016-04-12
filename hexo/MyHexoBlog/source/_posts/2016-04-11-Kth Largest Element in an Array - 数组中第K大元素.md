




title: Kth Largest Element in an Array - 数组中第K大元素
date: 2016-04-11 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-11 21:40:47-->
---

### Kth Largest Element in an Array - 数组中第K大元素
**Description**: Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.
 For example, Given [3,2,1,5,6,4] and k = 2, return 5.
 Note:  You may assume k is always valid, 1 ≤ k ≤ array's length.
 
思路：采用快速排序的思想选择第K大元素

参考链接：https://leetcode.com/discuss/45627/ac-clean-quickselect-java-solution-avg-o-n-time

完整的java代码如下：

```java
public class KthLargestElementInArray {

    /**
     * https://leetcode.com/discuss/45627/ac-clean-quickselect-java-solution-avg-o-n-time
     * O(n)
     * @param a
     * @param k
     * @return
     */
    public int findKthLargest(int[] a, int k) {
        int n = a.length;
        int p = quickSelect(a, 0, n-1, n-k+1);
        return a[p];
    }
    // return the index of the kth smallest number
    private int quickSelect(int[] a, int lo, int hi, int k) {
        // use quick sort's idea, put nums that are <= pivot to the left, put nums that are  > pivot to the right
        int i = lo, j = hi, pivot = a[hi];
        while (i<j) {
            if (a[i++]>pivot) swap(a, --i, --j);
        }
        swap(a, i, hi);
        int m = i-lo+1; // count the nums that are <= pivot from lo
        if (m==k) return i;   // pivot is the one!
        else if (m>k) return quickSelect(a, lo, i-1, k);    // pivot is too big, so it must be on the left
        else return quickSelect(a, i+1, hi, k-m);// pivot is too small, so it must be on the right
    }
    private void swap(int[] a, int i, int j) {
        int tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    public int findKthLargest1(int[] nums, int k) {
        Arrays.sort(nums);
        return nums[nums.length-k];
    }

}
```
