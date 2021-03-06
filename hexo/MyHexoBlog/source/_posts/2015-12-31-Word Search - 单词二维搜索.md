



title: Word Search - 单词二维搜索
date: 2015-12-31 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-31 21:40:47-->
---

### Word Search - 单词二维搜索

**Description**: Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
 Given board =
 [ ['A','B','C','E'],
 ['S','F','C','S'],
 ['A','D','E','E'] ]
 word = "ABCCED", -> returns true,
 word = "SEE", -> returns true,
 word = "ABCB", -> returns false.

思路：回溯法。将当前搜索字符标记为“#”表示已搜索过，搜索方向包括上下左右四种。

参考：http://www.programcreek.com/2014/06/leetcode-word-search-java/

完整的java代码如下：

```java
public class WordSearch {

    public static void main(String[] args){
        System.out.println("*****RESULT*****");
        System.out.println();
    }


    /**
     * http://www.programcreek.com/2014/06/leetcode-word-search-java/
     * 回溯法
     * @param board
     * @param word
     * @return
     */
    public boolean exist(char[][] board, String word) {
        int m = board.length;
        int n = board[0].length;
        for(int i=0; i<m; i++){
            for(int j=0; j<n; j++){
                if(dfs(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
    private boolean dfs(char[][] board, String word, int i, int j, int k){
        int m = board.length;
        int n = board[0].length;
        if(i<0 || j<0 || i>=m || j>=n) return false;
        if(board[i][j] == word.charAt(k)){
            char temp = board[i][j];
            board[i][j]='#';    //mark
            if(k==word.length()-1){
                return true;
            }else if(dfs(board, word, i-1, j, k+1)
                    ||dfs(board, word, i+1, j, k+1)
                    ||dfs(board, word, i, j-1, k+1)
                    ||dfs(board, word, i, j+1, k+1)){
                return true;
            }
            board[i][j]=temp;
        }
        return false;
    }

}
```
