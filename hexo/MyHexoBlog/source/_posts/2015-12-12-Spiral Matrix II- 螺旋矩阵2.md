



title: Spiral Matrix II- 螺旋矩阵2
date: 2015-12-12 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-12 21:40:47-->
---

### Spiral Matrix II- 螺旋矩阵2

**Description**: Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
 
 For example,
 Given n = 3,
 You should return the following matrix:
 [
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
 ]

思路：与Spiral Matrix的思路基本一致。

完整的java代码如下：

```java
public class SpiralMatrixII {

    public static void main(String[] args) {
        System.out.println("*****RESULT*****");
        int[][] matrix = new SpiralMatrixII().generateMatrix(5);
        for (int[] i : matrix){
            for (int j : i){
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }


    //若只剩下一行/列，则只处理此行/列，其余按circle方式处理
    public int[][] generateMatrix(int n) {
        int[][] matrix = new int[n][n];
        if (n == 0) return matrix;
        if (n == 1) {
            matrix[0][0] = 1;
            return matrix;
        }
        int x = 0, y = 0, k = 1, i = 0;
        while(n > 0){
            //if one row/column left, no circle can be formed
            if(n==1){
                matrix[x++][y] = k++;
                break;
            }
            //below, process a circle
            //top - move right
            for(i=0;i<n-1;i++) matrix[x][y++] = k++;
            //right - move down
            for(i=0;i<n-1;i++) matrix[x++][y] = k++;
            //bottom - move left
            for(i=0;i<n-1;i++) matrix[x][y--] = k++;
            //left - move up
            for(i=0;i<n-1;i++) matrix[x--][y] = k++;
            x++;
            y++;
            n=n-2;
        }
        return matrix;
    }

}
```
