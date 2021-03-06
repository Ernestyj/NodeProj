




title: Super Ugly Number - 超级丑数
date: 2016-06-14 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-06-14 21:40:47-->
---

### Super Ugly Number - 超级丑数
**Description**: Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k. For example, [1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32] is the sequence of the first 12 super ugly numbers given primes = [2, 7, 13, 19] of size 4.

Note:
(1) 1 is a super ugly number for any given primes.
(2) The given numbers in primes are in ascending order.
(3) 0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.

思路：与Ugly Number II思路一致, O(kN)
 
完整的java代码如下：

```java
	public int nthSuperUglyNumber(int n, int[] primes) {
        int k = primes.length;
        int[] idx = new int[k];
        int[] uglys = new int[n];
        uglys[0] = 1;
        for (int i=1; i<n; i++){
            uglys[i] = Integer.MAX_VALUE;
            for (int j=0; j<k; j++){
                uglys[i] = Math.min(uglys[i], uglys[idx[j]]*primes[j]);
            }
            for (int j=0; j<k; j++){
                if (uglys[idx[j]]*primes[j]==uglys[i]) idx[j]++;
            }
        }
        return uglys[n-1];
    }
```
