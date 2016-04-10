




title: Shortest Palindrome - 最短回文
date: 2016-04-10 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-10 21:40:47-->
---

### Shortest Palindrome - 最短回文
**Description**: Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
 For example:
 Given "aacecaaa", return "aaacecaaa".
 Given "abcd", return "dcbabcd".
 
思路：一、普通方法，寻找从第一个字符起的最长回文串,再逆转剩余部分并拼接到字符串首部。此法速度慢，险些超时。
二、使用KMP思想，1.求字符串s的翻转s_rev
     2.将两个字符串进行拼接：{s}#{s_rev}
     3.找出新字符串中最长公共前缀后缀长度comLen
     4. s_rev.substring(0, s.length() - comLen)就是在原字符串头部插入的子串部分

参考链接：https://leetcode.com/discuss/61416/my-9-lines-three-pointers-java-solution-with-explanation
https://segmentfault.com/a/1190000003059361

完整的java代码如下：

```java
public class ShortestPalindrome {

    /** 此解易理解,但3%接近超时
     * https://leetcode.com/discuss/61416/my-9-lines-three-pointers-java-solution-with-explanation
     * 寻找从第一个字符起的最长回文串,再逆转剩余部分并拼接到字符串首部
     * @param s
     * @return
     */
    public String shortestPalindrome(String s) {
        int i = 0, end = s.length()-1, j = end;
        char chs[] = s.toCharArray();
        while(i < j) {
            if (chs[i] == chs[j]) {
                i++; j--;
            } else {    //重置
                i = 0; end--; j = end;
            }
        }
        return new StringBuilder(s.substring(end+1)).reverse().append(chs).toString();
    }

    /**
     * https://segmentfault.com/a/1190000003059361
     * 思路：1.求字符串s的翻转s_rev
     2.将两个字符串进行拼接：{s}#{s_rev}
     3.找出新字符串中最长公共前缀后缀长度comLen
     4. s_rev.substring(0, s.length() - comLen)就是在原字符串头部插入的子串部分
     * @param s
     * @return
     */
    public String shortestPalindrome1(String s) {
        StringBuilder builder = new StringBuilder(s);
        return builder.reverse().substring(0, s.length() - getCommonLength(s)) + s;
    }
    private int getCommonLength(String str) {
        StringBuilder builder = new StringBuilder(str);
        String rev = new StringBuilder(str).reverse().toString();
        builder.append("#").append(rev);
        int[] p = new int[builder.length()];
        for (int i = 1; i < p.length; i++) {
            int j = p[i - 1];
            while (j > 0 && builder.charAt(i) != builder.charAt(j)) j = p[j - 1];
            p[i] = j == 0 ? (builder.charAt(i) == builder.charAt(0) ? 1 : 0) : j + 1;
        }
        return p[p.length - 1];
    }
}
```
