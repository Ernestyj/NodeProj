




title: Excel Sheet Column Title - Excel表单列标题转换
date: 2016-03-19 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-19 21:40:47-->
---

### Excel Sheet Column Title - Excel表单列标题转换
**Description**: Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 For example:
 1 -> A
 2 -> B
 3 -> C
 ...
 26 -> Z
 27 -> AA
 28 -> AB
  
思路：利用循环求余和商。注意标号从1开始，且结果要逆序。

参考链接：http://www.programcreek.com/2014/03/leetcode-excel-sheet-column-title-java/

完整的java代码如下：

```java
public class ExcelSheetColumnTitle {

    public static void main(String[] args) {
        System.out.println(new ExcelSheetColumnTitle().convertToTitle(1000));
    }

    //http://www.programcreek.com/2014/03/leetcode-excel-sheet-column-title-java/
    public String convertToTitle(int n) {
        StringBuilder sb = new StringBuilder();
        while(n > 0){
            n--;    //TODO 关键点,因为从1开始
            char ch = (char) (n % 26 + 'A');
            sb.append(ch);
            n /= 26;
        }
        return sb.reverse().toString();
    }

}
```
