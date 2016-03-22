




title: Dungeon Game - 地牢游戏
date: 2016-03-22 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-22 21:40:47-->
---

### Dungeon Game - 地牢游戏
**Description**: 原题链接 https://leetcode.com/problems/dungeon-game/

思路：DP:用hp[i,j]表示进入[i,j]前所需的最小生命值,
     有hp[i,j] = min{hp[i+1,j]-dungeon[i,j], hp[i,j+1]-dungeon[i,j]},大括号内的两个值均需不小于零.

完整的java代码如下：

```java
public class DungeonGame {

    /**
     * DP:用hp[i,j]表示进入[i,j]前所需的最小生命值,
     有hp[i,j] = min{hp[i+1,j]-dungeon[i,j], hp[i,j+1]-dungeon[i,j]},大括号内的两个值均需不小于零.
     * @param dungeon
     * @return
     */
    //另一种风格
    public int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length;
        int n = dungeon[0].length;
        int[][] hp = new int[m][n];
        hp[m-1][n-1] = 1-dungeon[m-1][n-1];
        if (hp[m-1][n-1]<1) hp[m-1][n-1] = 1;
        for (int i=m-2; i>=0; i--) {
            hp[i][n-1] = hp[i+1][n-1]-dungeon[i][n-1];
            if (hp[i][n-1]<1) hp[i][n-1] = 1;
        }
        for (int j=n-2; j>=0; j--) {
            hp[m-1][j] = hp[m-1][j+1]-dungeon[m-1][j];
            if (hp[m-1][j]<1) hp[m-1][j] = 1;
        }
        for (int i=m-2; i>=0; i--){
            for (int j=n-2; j>=0; j--){
                int down = hp[i+1][j]-dungeon[i][j];
                if (down<1) down = 1;
                int right = hp[i][j+1]-dungeon[i][j];
                if (right<1) right = 1;
                hp[i][j] = Math.min(down, right);
            }
        }
        return hp[0][0];
    }
    //OJ速度更快
    public int calculateMinimumHP1(int[][] dungeon) {
        int m = dungeon.length;
        int n = dungeon[0].length;
        int[][] hp = new int[m+1][n+1];
        for (int i=0; i<m; i++) hp[i][n] = 9999;    //TODO 不能用Integer.MAX,否则溢出为负数
        for (int j=0; j<n; j++) hp[m][j] = 9999;
        hp[m-1][n] = 1; hp[m][n-1] = 1;
        for (int i=m-1; i>=0; i--){
            for (int j=n-1; j>=0; j--){
                int down = hp[i+1][j]-dungeon[i][j];
                if (down<1) down = 1;
                int right = hp[i][j+1]-dungeon[i][j];
                if (right<1) right = 1;
                hp[i][j] = Math.min(down, right);
            }
        }
        return hp[0][0];
    }

}
```
