



title: Longest Substring Without Repeating Characters - 最长无重复子串
date: 2015-11-21 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-21 21:40:47-->
---

### Longest Substring Without Repeating Characters - 最长无重复子串

**Description**: Given a string, find the length of the longest substring without repeating characters.

For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3. For "bbbbb" the longest substring is "b", with the length of 1.
 
思路：
1. 滑动窗口法：维护一个窗口，每次关注窗口中的字符串，在每次判断中，左窗口和右窗口选择其一向前移动。同样是维护一个HashSet，①正常情况下移动右窗口，如果没有出现重复则继续移动右窗口；②如果发现重复字符，则说明当前窗口中的串已经不满足要求，继续移动右窗口不可能得到更好的结果，此时移动左窗口，直到不再有重复字符为止，中间跳过的这些串中不会有更好的结果，因为他们不是重复就是更短。
复杂度：因为左窗口和右窗口都只向前，所以两个窗口都对每个元素访问不超过一遍，因此时间复杂度为O(2*n)=O(n),是线性算法。空间复杂度为HashSet的size,也是O(n)。
参考：http://blog.csdn.net/linhuanmars/article/details/19949159
2. 每次定一个起点pre，然后从起点走到有重复字符位置，过程用一个HashSet维护当前字符集，认为是constant操作，这样算法要进行两层循环，复杂度是O(n^2)。
参考：http://blog.csdn.net/likecool21/article/details/10858799 中的解析图

完整的java代码如下：

```java
public class LongestSubstringWithoutRepeatingCharacters {

    public static void main(String[] args) {
        String s = "bbbbb";
        int x = new LongestSubstringWithoutRepeatingCharacters().lengthOfLongestSubstring(s);
//        int x = lengthOfLongestSubstring1(s);
        System.out.print(x);
    }


    /**
     * 滑动窗口法 TODO
     * 思路：维护一个窗口，每次关注窗口中的字符串，在每次判断中，左窗口和右窗口选择其一向前移动。
     * 同样是维护一个HashSet,①正常情况下移动右窗口，如果没有出现重复则继续移动右窗口；
     * ②如果发现重复字符，则说明当前窗口中的串已经不满足要求，继续移动右窗口不可能得到更好的结果，
     * 此时移动左窗口，直到不再有重复字符为止，中间跳过的这些串中不会有更好的结果，
     * 因为他们不是重复就是更短。
     *
     * 复杂度：因为左窗口和右窗口都只向前，所以两个窗口都对每个元素访问不超过一遍，
     * 因此时间复杂度为O(2*n)=O(n),是线性算法。空间复杂度为HashSet的size,也是O(n)。
     * http://blog.csdn.net/linhuanmars/article/details/19949159
     * @param s
     * @return
     */
    public int lengthOfLongestSubstring(String s) {
        if (s == null || s.length() == 0) return 0;
        if (s.length() == 1) return 1;
        char[] chars = s.toCharArray();
        Set<Character> set = new HashSet<>();
        int r = 0, l = 0;
        int max = 0;
        while (r < chars.length){
            if (!set.contains(chars[r])) set.add(chars[r]);
            else {
                if (max < r - l) max = r - l;
                while (chars[r] != chars[l]){
                    set.remove(chars[l]);
                    l++;
                }
                l++;
            }
            r++;
        }
        return Math.max(max, r - l);
    }


    /**
     * 此算法利于理解
     * 思路：每次定一个起点pre，然后从起点走到有重复字符位置，过程用一个HashSet维护当前字符集，
     * 认为是constant操作，这样算法要进行两层循环，复杂度是O(n^2)
     * 参考http://blog.csdn.net/likecool21/article/details/10858799中的图
     * @param s
     * @return
     */
    public static int lengthOfLongestSubstring1(String s) {
        if (s == null || s.length() == 0) return 0;
        if (s.length() == 1) return 1;
        char[] arr = s.toCharArray();
        HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        int pre = 0;
        for (int i = 0; i < arr.length; i++) {
            if (!map.containsKey(arr[i])) {
                map.put(arr[i], i);
            } else {
                pre = Math.max(pre, map.size());
                i = map.get(arr[i]);
                map.clear();
            }
        }
        return Math.max(pre, map.size());
    }

}
```
