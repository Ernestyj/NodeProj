




title: Pascal's Triangle
date: 2016-02-06 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-06 21:40:47-->
---

### Pascal's Triangle
**Description**: Given numRows, generate the first numRows of Pascal's triangle.

 For example, given numRows = 5,
 Return
 [
&nbsp;&nbsp;&nbsp;&nbsp;[1],
&nbsp;&nbsp;&nbsp;[1,1],
&nbsp;&nbsp;[1,2,1],
&nbsp;[1,3,3,1],
 [1,4,6,4,1]
 ]

 思路：时间复杂度O(1+2+3+...+n)=O(n^2)，空间上只需要二维数组来存储结果;因为是求解每一行结果，所以空间上没有更优的办法.

完整的java代码如下：

```java
public class PascalTriangle {

    /**
     * 时间复杂度O(1+2+3+...+n)=O(n^2)，空间上只需要二维数组来存储结果;
     因为是求解每一行结果，所以空间上没有更优.
     * @param numRows
     * @return
     */
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> result = new ArrayList<>();
        if (numRows==0) return result;
        List<Integer> pre = new ArrayList<>();
        List<Integer> cur = new ArrayList<>();
        pre.add(1);
        result.add(pre);
        int row = 1;
        while (row < numRows){
            cur.add(1);
            for (int i=0; i<pre.size()-1; i++){
                cur.add(pre.get(i) + pre.get(i+1));
            }
            cur.add(1);
            result.add(cur);
            pre = cur;
            cur = new ArrayList<>();
            row++;
        }
        return result;
    }

}
```
