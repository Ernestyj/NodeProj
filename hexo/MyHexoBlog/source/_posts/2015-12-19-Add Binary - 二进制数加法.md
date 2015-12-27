



title: Add Binary - 二进制数加法
date: 2015-12-19 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-19 21:40:47-->
---

### Add Binary - 二进制数加法

**Description**: Given two binary strings, return their sum (also a binary string).
 
 For example,
 a = "11"
 b = "1"
 Return "100".

注意：java中涉及字符串与字符操作比较慢，且字符与整型数转换麻烦容易出错（字符本身也可以作为整数）。

完整的java代码如下（写得比较繁琐，但是速度超过94.27%提交结果）：

```java
public class AddBinary {

    public static void main(String[] args) {
        System.out.println("*****RESULT*****");
        System.out.println(new AddBinary().addBinary("11", "1"));
    }


    //TODO int与char转换过程易出错
    public String addBinary(String a, String b) {
        int aLen = a.length(), bLen = b.length();
        int len = aLen > bLen ? aLen : bLen;
        char[] aChars, bChars;
        char[] res = new char[len + 1];
        if (len == aLen){
            aChars = a.toCharArray();
            bChars = new char[len];
            int diff = len-bLen;
            for (int i=0; i<len; i++){
                if (i<diff) bChars[i] = '0';
                else bChars[i] = b.charAt(i-diff);
            }
        } else {
            aChars = new char[len];
            int diff = len-aLen;
            for (int i = 0; i<len; i++){
                if (i<diff) aChars[i] = '0';
                else aChars[i] = a.charAt(i-diff);
            }
            bChars = b.toCharArray();
        }
        int temp = 0, extra = 0;
        for (int i = len-1; i>=0; i--){
            temp = getInt(aChars[i]) + getInt(bChars[i]) + extra;
            res[i+1] = getChar(temp%2); //TODO i+1易出错
            extra = temp/2;
            if (temp>1 && i-1 == -1) { //超出长度
                res[0] = '1';
                return new String(res);
            }
        }
        return new String(Arrays.copyOfRange(res, 1, len+1));   //TODO i+1易出错
    }
    private int getInt(char c){
        if (c == '0') return 0;
        else return 1;
    }
    private char getChar(int i){
        if (i == 0) return '0';
        else return '1';
    }

}
```
