



title: Permutations II - 含重复元素的全排列
date: 2015-11-30 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-30 21:40:47-->
---

### Permutations II - 含重复元素的全排列

**Description**: Given a collection of numbers that might contain duplicates, return all possible unique permutations.
 
 For example,
 [1,1,2] have the following unique permutations:
 [1,1,2], [1,2,1], and [2,1,1].

此题与Permutations（无重复元素）思路一致，如下。
回溯法：从集合依次选出每一个元素，作为排列的第一个元素，然后对剩余的元素进行全排列，如此递归处理。
时间复杂度：n! 空间复杂度：（in place置换）

以abc为例子：
1. a和a交换(固定a), 求后面bc的全排列： abc, acb。 求完后，a 和 b交换； 得到bac,开始第二轮
2. b和b交换(固定b), 求后面ac的全排列： bac, bca。 求完后，b 和 c交换； 得到cab,开始第三轮
3. c和c交换(固定c), 求后面ba的全排列： cab, cba.

分析图：http://segmentfault.com/a/1190000002710424

注意：此题与Permutations（无重复元素）的不同在于输入集合含有重复元素。注意在回溯中添加跳过重复的判断（若不加则用例{1,-1,1,2,-1,2,2,-1}不通过）：
```java
if (i + 1 < len && nums[i] == nums[i + 1]) continue;    //跳过重复
```
此外，若算法过程中用List存储元素，再通过判同过滤元素将无法通过用例{2,2,-1,2,3}，而算法过程中用Set则可以通过。

完整的java代码如下：

```java
public class PermutationsII {

    public static void main(String[] args) {
        int nums[] = { 2,2,-1,2,3 };
        new PermutationsII().permuteUnique(nums);
        for (List<Integer> list : result){
            for (Integer i : list) System.out.print(i);
            System.out.println();
        }


    }

    private static List<List<Integer>> result = new ArrayList<>();
    private Set<List<Integer>> resultSet = new HashSet<>();
    private List<Integer> temp;
    /**注意：用例{1,-1,1,2,-1,2,2,-1}{2,2,-1,2,3}容易超时，注意添加跳过重复的逻辑判断
     * 回溯法：从集合依次选出每一个元素，作为排列的第一个元素，然后对剩余的元素进行全排列，如此递归处理。
     * 时间复杂度：n! 空间复杂度：（in place置换）
     * 以abc为例子：
     1. a和a交换(固定a), 求后面bc的全排列： abc, acb。 求完后，a 和 b交换； 得到bac,开始第二轮
     2. b和b交换(固定b), 求后面ac的全排列： bac, bca。 求完后，b 和 c交换； 得到cab,开始第三轮
     3. c和c交换(固定c), 求后面ba的全排列： cab, cba.
     * http://blog.csdn.net/randyjiawenjie/article/details/6313729
     * 分析图：http://segmentfault.com/a/1190000002710424
     * @param nums
     */
    public List<List<Integer>> permuteUnique(int[] nums) {
        Arrays.sort(nums);
        permutation(nums, 0, nums.length);
        result = new ArrayList<>(resultSet);
        return result;
    }
    private void permutation(int[] nums, int start, int len) {
        if (start == len - 1) {
            temp = new ArrayList<>();
            for (int i = 0; i < len; i ++) {
                temp.add(nums[i]);
            }
            resultSet.add(temp);
        }
        else {
            for (int i = start; i < len; i ++) {
                if (i + 1 < len && nums[i] == nums[i + 1]) continue;    //跳过重复
                swap(nums, start, i);
                permutation(nums, start + 1, len);
                swap(nums, start, i);
            }
        }

    }
    private void swap(int[] s, int i, int j) {
        int temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
}
```
