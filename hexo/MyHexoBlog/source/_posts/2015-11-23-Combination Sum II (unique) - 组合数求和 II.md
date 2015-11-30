



title: Combination Sum II (unique) - 组合数求和 II
date: 2015-11-23 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-23 21:40:47-->
---

### Combination Sum II (unique) - 组合数求和 II

**Description**: Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T. Each number in C may only be used once in the combination.
 
 Note: All numbers (including target) will be positive integers.
 Elements in a combination (a1, a2, … , ak) must be in non-descending order. (ie, a1 ≤ a2 ≤ … ≤ ak).
 The solution set must not contain duplicate combinations.
 
 For example, given candidate set 10,1,2,7,6,1,5 and target 8, 
 A solution set is: 
 [1, 7] 
 [1, 2, 5] 
 [2, 6] 
 [1, 1, 6] 
 
思路：回溯法（与Combination Sum I的思路基本一致）。此题是典型的回溯法类型，注意元素不可以重复。

完整的java代码如下：

```java
public class CombinationSumUnique {

    public static void main(String[] args) {
        int[] nums = {10,1,2,7,6,1,5};
        System.out.println("*****RESULT*****");
        CombinationSumUnique instance = new CombinationSumUnique();
        instance.combinationSum2(nums, 8);
        for (List<Integer> ints : instance.result){
            for (Integer i : ints) System.out.print(i + " ");
            System.out.println();
        }
    }


    private List<List<Integer>> result = new ArrayList<>();
    private List<Integer> temp = new ArrayList<>();
    public List<List<Integer>> combinationSum2(int[] candidates, int target) {
        if(candidates == null || candidates.length == 0) return result;
        Arrays.sort(candidates);
        backTrack(candidates, target, 0);
        return result;
    }
    //入参candidates增序
    private void backTrack(int[] nums, int target, int k){
        if (target == 0){
            if (!result.contains(temp)) //可能有重复结果
                result.add(new ArrayList<>(temp));
            return;
        }
        for (int i = k; i < nums.length; i++){
            if (target < nums[i]) return;
            temp.add(nums[i]);
            backTrack(nums, target - nums[i], i + 1);   //传入i + 1而非i表明不可以重复
            temp.remove(temp.size() - 1);
        }
    }

}
```
