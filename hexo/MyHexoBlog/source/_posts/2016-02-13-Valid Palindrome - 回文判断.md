




title: Valid Palindrome - 回文判断
date: 2016-02-13 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-02-13 21:40:47-->
---

### Valid Palindrome - 回文判断
**Description**: Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example, "A man, a plan, a canal: Panama" is a palindrome.(amanaplanacanalpanama)
 "race a car" is not a palindrome.(raceacar)

Note: Have you consider that the string might be empty? For the purpose of this problem, we define empty string as valid palindrome.

思路：正则表达式与双指针。

完整的java代码如下：

```java
public class ValidPalindrome {

    /**
     * 正则表达式与双指针。
     * @param s
     * @return
     */
    public boolean isPalindrome(String s) {
        if (s==null) return false;
        if (s.length()<=1) return true;
        s = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        int l=0, r=s.length()-1;
        while (l<r){
            if (s.charAt(l++)!=s.charAt(r--)) return false;
        }
        return true;
    }

}
```
