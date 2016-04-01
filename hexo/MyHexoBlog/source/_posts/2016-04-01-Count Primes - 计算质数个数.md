




title: Count Primes - 计算质数个数
date: 2016-04-01 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-01 21:40:47-->
---

### Count Primes - 计算质数个数
**Description**: Count the number of prime numbers less than a non-negative number, n.

原题链接：https://leetcode.com/problems/count-primes/

思路：The Sieve of Eratosthenes uses an extra O(n) memory and
     its runtime complexity is O(n log log n). if the current number is p, we can always mark off multiples of p starting at p2, then in increments of p: p2 + p, p2 + 2p, ... the terminating loop condition can be p < √n, When the loop terminates, all the numbers in the table that are non-marked are prime.

完整的java代码如下：

```java
public class CountPrimes {

    /**https://leetcode.com/problems/count-primes/
     * The Sieve of Eratosthenes uses an extra O(n) memory and
     its runtime complexity is O(n log log n).
     * if the current number is p, we can always mark off multiples of p
     starting at p2, then in increments of p: p2 + p, p2 + 2p, ...
     the terminating loop condition can be p < √n,
     When the loop terminates, all the numbers in the table that are non-marked are prime.
     * @param n
     * @return
     */
    public int countPrimes(int n) {
        boolean[] isPrime = new boolean[n];
        for (int i=2; i<n; i++) isPrime[i] = true;
        for (int i=2; i*i<n; i++) { //TODO i*i<n is cheaper than i<sqrt(n)
            if (!isPrime[i]) continue;
            for (int j=i*i; j<n; j+=i) isPrime[j] = false;
        }
        int count = 0;
        for (int i=2; i<n; i++) if (isPrime[i]) count++;
        return count;
    }

}
```
