



title: Spiral Matrix - 螺旋矩阵
date: 2015-12-07 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-07 21:40:47-->
---

### Spiral Matrix - 螺旋矩阵

**Description**: Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

 For example,
 Given the following matrix:
 [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
 ]
 You should return [1,2,3,6,9,8,7,4,5].

注意：若只剩下一行/列，则只处理此行/列，其余按circle方式处理。
参考：http://www.programcreek.com/2013/01/leetcode-spiral-matrix-java/

完整的java代码如下：

```java
public class SpiralMatrix {

    public static void main(String[] args) {
        int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
        System.out.println("*****RESULT*****");
        List<Integer> result = new SpiralMatrix().spiralOrder(matrix);
        for (Integer i : result) System.out.print(i + " ");
    }

    /**
     * 若只剩下一行/列，则只处理此行/列，其余按circle方式处理
     * http://www.programcreek.com/2013/01/leetcode-spiral-matrix-java/
     * @param matrix
     * @return
     */
    public ArrayList<Integer> spiralOrder(int[][] matrix) {
        ArrayList<Integer> result = new ArrayList<Integer>();
        if(matrix == null || matrix.length == 0) return result;
        int m = matrix.length;
        int n = matrix[0].length;
        int x=0;
        int y=0;
        while(m>0 && n>0){
            //if one row/column left, no circle can be formed
            if(m==1){
                for(int i=0; i<n; i++) result.add(matrix[x][y++]);
                break;
            }else if(n==1){
                for(int i=0; i<m; i++) result.add(matrix[x++][y]);
                break;
            }
            //below, process a circle
            //top - move right
            for(int i=0;i<n-1;i++) result.add(matrix[x][y++]);
            //right - move down
            for(int i=0;i<m-1;i++) result.add(matrix[x++][y]);
            //bottom - move left
            for(int i=0;i<n-1;i++) result.add(matrix[x][y--]);
            //left - move up
            for(int i=0;i<m-1;i++) result.add(matrix[x--][y]);
            x++;
            y++;
            m=m-2;
            n=n-2;
        }
        return result;
    }
}
```
