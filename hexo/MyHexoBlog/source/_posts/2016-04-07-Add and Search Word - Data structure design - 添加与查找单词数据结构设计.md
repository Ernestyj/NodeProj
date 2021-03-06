




title: Add and Search Word - Data structure design - 添加与查找单词数据结构设计
date: 2016-04-07 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-07 21:40:47-->
---

### Add and Search Word - Data structure design - 添加与查找单词数据结构设计
**Description**: Design a data structure that supports the following two operations:
 void addWord(word)
 bool search(word)
 search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
 
 For example:
 addWord("bad")
 addWord("dad")
 addWord("mad")
 search("pad") -> false
 search("bad") -> true
 search(".ad") -> true
 search("b..") -> true
 Note:
 You may assume that all words are consist of lowercase letters a-z.

思路：采用Implement Trie (Prefix Tree) 中的数据结构，搜索单词时使用回溯。回溯中注意返回条件，否则可能超时。

参考链接：http://www.programcreek.com/2014/05/leetcode-add-and-search-word-data-structure-design-java/

完整的java代码如下：

```java
public class AddAndSearchWordDesign {

    //http://www.programcreek.com/2014/05/leetcode-add-and-search-word-data-structure-design-java/
    class TrieNode {
        char c;
        HashMap<Character, TrieNode> children = new HashMap<>();
        boolean isLeaf;

        public TrieNode() {}
        public TrieNode(char c){
            this.c = c;
        }
    }

    // Your WordDictionary object will be instantiated and called as such:
    // WordDictionary wordDictionary = new WordDictionary();
    // wordDictionary.addWord("word");
    // wordDictionary.search("pattern");

    public class WordDictionary {
        private TrieNode root;

        public WordDictionary(){
            root = new TrieNode();
        }

        // Adds a word into the data structure.
        public void addWord(String word) {
            HashMap<Character, TrieNode> children = root.children;
            for (int i=0; i<word.length(); i++){
                char c = word.charAt(i);
                if (children.containsKey(c)){
                } else {
                    TrieNode node = new TrieNode(c);
                    children.put(c, node);
                    if (i==word.length()-1) node.isLeaf = true;
                }
                children = children.get(c).children;
            }
        }

        // Returns if the word is in the data structure. A word could
        // contain the dot character '.' to represent any one letter.
        public boolean search(String word) {
            return dfsSearch(root.children, word, 0);
        }

        private boolean dfsSearch(HashMap<Character, TrieNode> children, String word, int start){
            if (start==word.length()){
                if (children.size()==0) return true;
                else return false;
            }
            char c = word.charAt(start);
            if (children.containsKey(c)){
                if (start==word.length()-1 && children.get(c).isLeaf) return true;  //TODO 不加此条将超时
                return dfsSearch(children.get(c).children, word, start+1);
            } else if (c=='.') {
                for (Map.Entry<Character, TrieNode> child : children.entrySet()){
                    if (start==word.length()-1 && child.getValue().isLeaf) return true; //TODO 不能漏
                    if (dfsSearch(child.getValue().children, word, start+1))
                        return true;    //发现一条路径是可行的则返回true
                }
                return false;
            } else return false;
        }
    }

}
```
