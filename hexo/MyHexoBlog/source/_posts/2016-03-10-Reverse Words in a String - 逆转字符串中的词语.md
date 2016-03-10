




title: Reverse Words in a String - 逆转字符串中的词语
date: 2016-03-10 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-10 21:40:47-->
---

### Reverse Words in a String - 逆转字符串中的词语
**Description**: Given an input string, reverse the string word by word.

For example,
 Given s = "the sky is blue",
 return "blue is sky the".
 
思路：字符串裁剪与分割。

完整的java代码如下：

```java
public class ReverseWordsInString {

    public static void main(String[] args){
        System.out.println(new ReverseWordsInString().reverseWords("a"));
    }

    public String reverseWords(String s) {
        if (s.length()==0) return "";
        String trimed = s.trim();
        if (trimed.length()==0) return "";
        String[] strings = trimed.split("\\s+");
        StringBuilder builder = new StringBuilder();
        for (int i=strings.length-1; i>=0; i--){
            builder.append(strings[i]+" ");
        }
        return builder.toString().trim();
    }

}
```
