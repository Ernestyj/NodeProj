




title: ZigZag Conversion - Z字形转换
date: 2016-04-02 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-02 21:40:47-->
---

### ZigZag Conversion - Z字形转换
**Description**: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

原题链接：https://www.google.com/search?q=ZigZag+Conversion&oq=ZigZag+Conversion&aqs=chrome..69i57j0l5.461j0j1&sourceid=chrome&ie=UTF-8

思路：找到数组映射规律。

参考链接：http://www.cnblogs.com/springfor/p/3889414.html

完整的java代码如下：

```java
public class ZigZagConversion {

    /**
     * http://www.cnblogs.com/springfor/p/3889414.html
     * 数学规律题(不大可能出现)
     * @param s
     * @param nRows
     * @return
     */
    public String convert(String s, int nRows) {
        if(s==null || s.length()==0 || nRows<=0) return "";
        if(nRows == 1) return s;
        StringBuilder res = new StringBuilder();
        int size = 2*nRows-2;
        for(int i=0;i<nRows;i++){
            for(int j=i;j<s.length();j+=size){
                res.append(s.charAt(j));
                if(i!=0 && i!=nRows-1){//except the first row and the last row
                    int temp = j+size-2*i;
                    if(temp<s.length()) res.append(s.charAt(temp));
                }
            }
        }
        return res.toString();
    }

}
```
