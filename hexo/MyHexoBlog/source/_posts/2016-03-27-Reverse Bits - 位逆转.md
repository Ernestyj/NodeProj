




title: Reverse Bits - 位逆转
date: 2016-03-27 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-27 21:40:47-->
---

### Reverse Bits - 位逆转
**Description**: Reverse bits of a given 32 bits unsigned integer.
 For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

完整的java代码如下：

```java
public class ReverseBits {

    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        for (int i=0; i<16; i++)
            n = swapBit(n, i, 32-i-1);
        return n;
    }
    private int swapBit(int n, int i, int j){
        int a = (n>>i)&1;
        int b = (n>>j)&1;
        if ((a^b)!=0) return n ^= (1<<i)|(1<<j);
        return n;
    }

}
```
