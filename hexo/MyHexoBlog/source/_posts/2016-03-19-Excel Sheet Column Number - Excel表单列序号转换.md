




title: Excel Sheet Column Number - Excel表单列序号转换
date: 2016-03-19 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-19 21:40:47-->
---

### Excel Sheet Column Number - Excel表单列序号转换
**Description**: Related to question Excel Sheet Column Title
 Given a column title as appear in an Excel sheet, return its corresponding column number.
 For example:
 A -> 1
 B -> 2
 C -> 3
 ...
 Z -> 26
 AA -> 27
 AB -> 28

完整的java代码如下：

```java
public class ExcelSheetColumnNumber {

    public static void main(String[] args) {
        System.out.println(new ExcelSheetColumnNumber().titleToNumber("AA"));
    }

    public int titleToNumber(String s) {
        char[] chars = new StringBuilder(s).reverse().toString().toCharArray();
        int n = 1;
        for (int i=0; i<chars.length; i++){
            if (i==0) n += (chars[i]-'A');
            else n += (chars[i]-'A'+1)*Math.pow(26, i);
        }
        return n;
    }

}
```
