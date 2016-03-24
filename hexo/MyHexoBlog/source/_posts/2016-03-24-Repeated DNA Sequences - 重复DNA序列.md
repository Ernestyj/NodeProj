




title: Repeated DNA Sequences - 重复DNA序列
date: 2016-03-24 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-24 21:40:47-->
---

### Repeated DNA Sequences - 重复DNA序列
**Description**: All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.
 Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.
 For example, Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",
 Return: ["AAAAACCCCC", "CCCCCAAAAA"].

思路：滑动窗口。

完整的java代码如下：

```java
public class RepeatedDNASequences {

    public List<String> findRepeatedDnaSequences(String s) {
        List<String> result = new ArrayList<>();
        if (s.length()<10) return result;
        Map<String, Integer> map = new HashMap<>();
        for (int i=0; i<=s.length()-10; i++){
            String window = s.substring(i, i+10);
            if (!map.containsKey(window)) map.put(window, 1);
            else {
                int c = map.get(window);
                if (c==1) result.add(window);
                map.put(window, c+1);
            }
        }
        return result;
    }

}
```
