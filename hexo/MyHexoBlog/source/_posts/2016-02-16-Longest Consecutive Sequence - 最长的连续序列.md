




title: Longest Consecutive Sequence - 最长的连续序列Word Ladder II - 词梯II
date: 2016-02-16 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-16 21:40:47-->
---

### Longest Consecutive Sequence - 最长的连续序列
**Description**: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
 Given [100, 4, 200, 1, 3, 2],
 The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

思路：因为排序至少要O(nlogn),先排序是不行的.这里使用哈希表.

参考：http://www.programcreek.com/2013/01/leetcode-longest-consecutive-sequence-java/

完整的java代码如下：

```java
public class LongestConsecutiveSequence {

    /**
     * http://www.programcreek.com/2013/01/leetcode-longest-consecutive-sequence-java/
     * 因为排序至少要O(nlogn),先排序是不行的.这里使用哈希表.
     * @param nums
     * @return
     */
    public int longestConsecutive(int[] nums) {
        if (nums.length==0) return 0;
        Set<Integer> set = new HashSet<Integer>();
        int longest = 0;
        for (int e : nums) set.add(e);
        for (int e : nums) {
            int left = e-1;
            int right = e+1;
            int count = 1;
            while (set.contains(left)){
                count++;
                set.remove(left);
                left--;
            }
            while (set.contains(right)){
                count++;
                set.remove(right);
                right++;
            }
            longest = Math.max(longest, count);
        }
        return longest;
    }

}
```
