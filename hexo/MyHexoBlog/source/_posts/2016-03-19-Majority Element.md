




title: Majority Element
date: 2016-03-19 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-19 21:40:47-->
---

### Majority Element
**Description**: Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 You may assume that the array is non-empty and the majority element always exist in the array.

思路：1.先排序，O(nlog(n))
2.使用哈希表，O(n)
但是测试用例显示方法1速度更快。

完整的java代码如下：

```java
public class MajorityElement {

    //nlog(n)
    public int majorityElement(int[] nums) {
        if (nums.length<=2) return nums[0];
        Arrays.sort(nums);
        return nums[nums.length / 2];
    }

    //n
    public int majorityElement1(int[] nums) {
        if (nums.length<=2) return nums[0];
        int indice = nums.length/2;
        Map<Integer, Integer> map = new HashMap<>();
        for (int n : nums){
            if (!map.containsKey(n)) map.put(n, 1);
            else{
                int temp = map.get(n);
                if (temp+1>indice) return n;
                map.put(n, temp+1);
            }
        }
        return 0;
    }

}
```
