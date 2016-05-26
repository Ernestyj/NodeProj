




title: Word Pattern - 单词模式
date: 2016-05-26 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-26 21:40:47-->
---

### Word Pattern - 单词模式
**Description**: Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 
思路：一、借助哈希与集合；
二、注意哈希表put方法会返回前一次放入的值，根据这个特点简化代码。

完整的java代码如下：

```java
public class WordPattern {

    //简洁
    public boolean wordPattern(String pattern, String str) {
        String[] strings = str.split(" ");
        if (strings.length != pattern.length()) return false;
        HashMap index = new HashMap();
        for (Integer i=0; i<strings.length; ++i){   //TODO Integer不能写成int
            if (index.put(pattern.charAt(i), i) != index.put(strings[i], i))
                return false;
        }
        return true;
    }

    public boolean wordPattern1(String pattern, String str) {
        String[] strings = str.split(" ");
        if (pattern.length()!=strings.length) return false;
        HashMap<Character, String> map = new HashMap<>();
        HashSet<String> set = new HashSet<>();
        for (int i=0; i<pattern.length(); i++){
            char c = pattern.charAt(i);
            if (!map.containsKey(c)) {
                if (!set.contains(strings[i])) {
                    map.put(c, strings[i]);
                    set.add(strings[i]);
                }
                else return false;
            } else {
                if (!map.get(c).equals(strings[i])) return false;
            }
        }
        return true;
    }

}
```
