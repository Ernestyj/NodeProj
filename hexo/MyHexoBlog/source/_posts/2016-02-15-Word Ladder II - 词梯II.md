




title: Word Ladder II - 词梯II
date: 2016-02-15 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-15 21:40:47-->
---

### Word Ladder II - 词梯II
**Description**: Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
 1 Only one letter can be changed at a time
 2 Each intermediate word must exist in the word list
 
 For example,
 Given: beginWord = "hit" endWord = "cog"
 wordList = ["hot","dot","dog","lot","log"]
 Return
 [ ["hit","hot","dot","dog","cog"],
 ["hit","hot","lot","log","cog"] ]
 
 Note:
 All words have the same length.
 All words contain only lowercase alphabetic characters.

思路：分支限界法(BFS,最短路径),与Word Ladder思路类似,不同点在于
     1 不能直接从wordList中直接删除访问过的字符串,需要引入两个新的集合,只有转换步数发生变化,才从字典中移除(观察到不同转换序列不可能出现重复的词,除了首尾两个词);
     2 引入的数据结构WordNode多一个字段

参考：http://www.programcreek.com/2014/06/leetcode-word-ladder-ii-java/

注意：将chars字符数组转换成String千万别写成了chars.toString(); ，不小心犯了这个低级错误会很麻烦。

完整的java代码如下：

```java
public class WordLadderII {

    public static void main(String[] args) {
        String beginWord = "a";
        String endWord = "c";
        Set<String> wordList = new HashSet<>();
        wordList.add("a");
        wordList.add("b");
        wordList.add("c");
        List<List<String>> result = new WordLadderII().findLadders(beginWord, endWord, wordList);
        for (List<String> list : result){
            for (String s : list){
                System.out.print(s + " ");
            }
            System.out.println();
        }
    }

    class WordNode{
        String word;
        List<String> transformList; //TODO 这里可以改成存储WordNode pre来优化性能

        public WordNode(String word, List<String> oldTransformList){
            this.word = word;
            transformList = new ArrayList<>(oldTransformList);
            transformList.add(word);
        }
        public int getSteps(){
            return transformList.size();
        }
    }

    /**
     * 分支限界法(BFS,最短路径),与Word Ladder思路类似,不同点在于
     1 不能直接从wordList中直接删除访问过的字符串,需要引入两个新的集合;
     2 引入的数据结构WordNode多一个字段
     * http://www.programcreek.com/2014/06/leetcode-word-ladder-ii-java/
     * @param beginWord
     * @param endWord
     * @param wordList
     * @return
     */
    public List<List<String>> findLadders(String beginWord, String endWord, Set<String> wordList) {
        List<List<String>> result = new ArrayList<>();
        Queue<WordNode> queue = new LinkedList<>();
        queue.offer(new WordNode(beginWord, new ArrayList<>()));
        wordList.add(endWord);
        //不能直接从wordList中直接删除访问过的字符串,引入两个新的集合
        Set<String> visited = new HashSet<>();
        Set<String> unVisited = new HashSet<>(wordList);
        int minSteps = Integer.MAX_VALUE;
        int preSteps = 1;
        while (!queue.isEmpty()){
            WordNode top = queue.poll();
            int curSteps = top.getSteps();
            if (top.word.equals(endWord)) {
                if (curSteps > minSteps) return result;
                minSteps = curSteps;
                result.add(top.transformList);
            }

            //只有转换步数发生变化,才从字典中移除(观察到不同转换序列不可能出现重复的词,除了首尾两个词)
            if (curSteps > preSteps) {
                unVisited.removeAll(visited);
                preSteps = curSteps;
            }

            char[] chars = top.word.toCharArray();
            for (int i=0; i<chars.length; i++){
                char origin = chars[i];
                for (char c='a'; c<='z'; c++){
                    if (chars[i]!=c) chars[i] = c;
                    String newString = new String(chars);   //TODO 千万别写成了chars.toString();
                    if (unVisited.contains(newString)){
                        queue.offer(new WordNode(newString, top.transformList));
                        visited.add(newString);
                    }
                }
                chars[i] = origin;
            }
        }
        return result;
    }

}
```
