



title: Combinations - 组合数
date: 2015-12-29 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-29 21:40:47-->
---

### Combinations - 组合数

**Description**: Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
 
 For example,
 If n = 4 and k = 2, a solution is:
 [ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4] ]

思路：回溯法。

类似的问题有：Combination Sum(含重复或不重复元素)、Permutation等。

完整的java代码如下：

```java
public class Combinations {

    public static void main(String[] args){
        System.out.println("*****RESULT*****");
        System.out.println();
        Combinations instance = new Combinations();
        instance.combine(4, 2);
        for (List<Integer> ints : instance.result){
            for (Integer i : ints) System.out.print(i + " ");
            System.out.println();
        }
    }


    private List<List<Integer>> result = new ArrayList<>();
    private List<Integer> temp = new ArrayList<>();
    public List<List<Integer>> combine(int n, int k) {
        if (n == 0 || k == 0) return result;
        backTrack(n, k, 1);
        return result;
    }
    private void backTrack(int n, int k, int x){
        if (k == 0){
            result.add(new ArrayList<>(temp));
        }
        for (int i=x; i<=n; i++){
            temp.add(i);
            backTrack(n, k - 1, i + 1);
            temp.remove(temp.size()-1);
        }
    }

}
```
