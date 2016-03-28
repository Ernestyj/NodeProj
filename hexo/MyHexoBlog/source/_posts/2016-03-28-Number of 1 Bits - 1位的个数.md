




title: Number of 1 Bits - 1位的个数
date: 2016-03-28 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-28 21:40:47-->
---

### Number of 1 Bits - 1位的个数
**Description**: Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).
 For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

完整的java代码如下：

```java
public class NumberOf1Bits {

    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int count = 0;
        for (int i=0; i<32; i++){
            if (((n>>i)&1)==1) count++;
        }
        return count;
    }

}
```
