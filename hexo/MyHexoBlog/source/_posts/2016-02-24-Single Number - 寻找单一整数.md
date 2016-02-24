




title: Single Number - 寻找单一整数
date: 2016-02-24 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-24 21:40:47-->
---

### Single Number - 寻找单一整数
**Description**: Given an array of integers, every element appears twice except for one. Find that single one.
 Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
 
思路：
1 异或(此法不消耗额外空间),只有两不同位异或才会返回1,所有相同整数异或结果为整数0.
2 集合
3 哈希表

完整的java代码如下：

```java
public class SingleNumber {

    //异或(此法不消耗额外空间),只有两不同位异或才会返回1,所有相同整数异或结果为整数0.
    public int singleNumber(int[] nums) {
        if (nums.length==1) return nums[0];
        for (int i=1; i<nums.length; i++) nums[0] = nums[0]^nums[i];
        return nums[0];
    }

    //集合
    public int singleNumber1(int[] nums) {
        Set<Integer> set = new HashSet<>();
        for (int n : nums){
            if (!set.add(n)) set.remove(n);
        }
        return (int)set.toArray()[0];
    }

    //哈希表
    public int singleNumber2(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i=0; i<nums.length; i++){
            if (!map.containsKey(nums[i])){
                map.put(nums[i], 1);
            } else {
                map.put(nums[i], map.get(nums[i])+1);
            }
        }
        for (Integer i : map.keySet()){
            if (map.get(i)==1) return i;
        }
        return -1;
    }

}
```
