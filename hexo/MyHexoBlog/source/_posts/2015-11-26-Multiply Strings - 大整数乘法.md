



title: Multiply Strings - 大整数乘法
date: 2015-11-26 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-26 21:40:47-->
---

### Multiply Strings - 大整数乘法

**Description**: Given two numbers represented as strings, return multiplication of the numbers as a string.
Note: The numbers can be arbitrarily large and are non-negative.

思路：首先我们把每一位相乘，得到一个没有进位的临时结果，然后把临时结果从低位起依次进位。对于一个m位整数乘以n位整数的结果，最多只有m+n位。
要点：1. 字符串逆转问题；2. 进位（开辟m+n长度数组足以存储所有进位）；3. 结果最高位为0的情况。
参考图：http://www.cnblogs.com/TenosDoIt/p/3735309.html

完整的java代码如下：

```java
	/**
     * http://www.cnblogs.com/TenosDoIt/p/3735309.html
     * 首先我们把每一位相乘，得到一个没有进位的临时结果，然后把临时结果从低位起依次进位。
     * 对于一个m位整数乘以n位整数的结果，最多只有m+n位。
     * @param num1
     * @param num2
     * @return
     */
    public String multiply(String num1, String num2) {
        if (num1.equals("0") || num2.equals("0")) return "0";
        char[] l = new StringBuilder(num1).reverse().toString().toCharArray();
        char[] r = new StringBuilder(num2).reverse().toString().toCharArray();
        int[] ints = new int[num1. length() + num2.length()];
        for (int i = 0; i < num1.length(); i++){
            for (int j = 0; j < num2.length(); j++){
                ints[i + j] += (l[i] - '0') * (r[j] - '0');
            }
        }
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < ints.length; i++){
            builder.append(ints[i] % 10);
            if (i + 1 < ints.length) ints[i + 1] += ints[i] / 10;
        }
        if (builder.charAt(ints.length - 1) == '0') builder.deleteCharAt(ints.length - 1);
        return builder.reverse().toString();
    }
```
