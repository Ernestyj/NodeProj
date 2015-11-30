



title: Permutations - 全排列
date: 2015-11-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-29 21:40:47-->
---

### Permutations - 全排列

**Description**: Given a collection of numbers, return all possible permutations.
 
 For example,
 [1,2,3] have the following permutations:
 [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].

回溯法：从集合依次选出每一个元素，作为排列的第一个元素，然后对剩余的元素进行全排列，如此递归处理。
时间复杂度：n! 空间复杂度：（in place置换）

以abc为例子：
1. a和a交换(固定a), 求后面bc的全排列： abc, acb。 求完后，a 和 b交换； 得到bac,开始第二轮
2. b和b交换(固定b), 求后面ac的全排列： bac, bca。 求完后，b 和 c交换； 得到cab,开始第三轮
3. c和c交换(固定c), 求后面ba的全排列： cab, cba.

分析图：http://segmentfault.com/a/1190000002710424

完整的java代码如下：

```java
public class Permutations {

    public static void main(String[] args) {
        int nums[] = { 1,3,2 };
        new Permutations().permute(nums);
        System.out.println();
    }


    private List<List<Integer>> result = new ArrayList<>();
    private List<Integer> temp;
    /**
     * 回溯法：从集合依次选出每一个元素，作为排列的第一个元素，然后对剩余的元素进行全排列，如此递归处理。
     * 时间复杂度：n! 空间复杂度：（in place置换）
     * 以abc为例子：
     1. a和a交换(固定a), 求后面bc的全排列： abc, acb。 求完后，a 和 b交换； 得到bac,开始第二轮
     2. b和b交换(固定b), 求后面ac的全排列： bac, bca。 求完后，b 和 c交换； 得到cab,开始第三轮
     3. c和c交换(固定c), 求后面ba的全排列： cab, cba.
     * http://blog.csdn.net/randyjiawenjie/article/details/6313729
     * @param nums
     */
    public List<List<Integer>> permute(int[] nums) {
        permutation(nums, 0, nums.length);
        return result;
    }
    private void permutation(int[] str, int start, int len) {
        if (start == len - 1) {
            temp = new ArrayList<>();
            for (int i = 0; i < len; i ++) {
                temp.add(str[i]);
            }
            result.add(temp);
        }
        else {
            for (int i = start; i < len; i ++) {
                swap(str, start, i);
                permutation(str, start + 1, len);
                swap(str, start, i);
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
