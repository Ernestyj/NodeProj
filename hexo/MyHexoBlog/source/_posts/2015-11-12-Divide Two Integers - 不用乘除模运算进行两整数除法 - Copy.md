


title: Divide Two Integers - 不用乘除模运算进行两整数除法
date: 2015-11-12 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-11-12 21:40:47-->
---

### Divide Two Integers - 不用乘除模运算进行两整数除法

**Description**: Divide two integers without using multiplication, division and mod operator. If it is overflow, return MAX_INT.

方法1：笔算法，即按照笔算思路按字符进行运算，易错；
方法2：转换为减法，但是普通减法会超时。可以利用批量减法来提速。
方法3：将数拆分为一组基的线性组合，结合位运算进行减法。
参考http://www.programcreek.com/2014/05/leetcode-divide-two-integers-java/
方法4：
参考http://www.lifeincode.net/programming/leetcode-divide-two-integers-java/

对于后三种方法，有一个公共部分（边界值处理）比较关键：
```java
		//handle special cases
       if(divisor == 0) return Integer.MAX_VALUE;
       //TODO （入参不可能溢出）只有结果才可能溢出，且只有Integer.MIN_VALUE / -1这一种情况会溢出
       if(divisor == -1 && dividend == Integer.MIN_VALUE) return Integer.MAX_VALUE;
       //get sign
       boolean isPositive = false;
       if (dividend < 0 && divisor < 0 || dividend > 0 && divisor > 0) isPositive = true;
       //get positive values
       long l = Math.abs((long)dividend);
       long r = Math.abs((long)divisor);
```
注意入参不可能溢出，只有结果才可能溢出，且只有Integer.MIN_VALUE / -1这一种情况会溢出。

完整的java代码如下：

```java
public class DivideTwoIntegers {

    public static void main(String[] args) {
        int l = Integer.MIN_VALUE;
        int r = 1;

        System.out.println("*****RESULT*****");
        int x = new DivideTwoIntegers().divide1(l, r);
        System.out.println(x);

    }

    // 另一种思路 TODO http://www.lifeincode.net/programming/leetcode-divide-two-integers-java/

    /**TODO
     * http://www.programcreek.com/2014/05/leetcode-divide-two-integers-java/
     * 任何一个整数可以表示成以2的幂为底的一组基的线性组合，即num=a0*2^0+a1*2^1+a2*2^2+...+an*2^n。
     * 基于以上这个公式以及左移一位相当于乘以2，我们先让除数左移直到大于被除数之前得到一个最大的基。
     * 然后接下来我们每次尝试减去这个基，如果可以则结果增加2^k,然后基继续右移迭代，直到基为0为止。
     *
     * 因为这个方法的迭代次数是按2的幂直到超过结果，所以时间复杂度为O(logn)。
     *
     * @param dividend
     * @param divisor
     * @return
     */
    public int divide(int dividend, int divisor) {
        //handle special cases
        if(divisor==0) return Integer.MAX_VALUE;
        if(divisor==-1 && dividend == Integer.MIN_VALUE) return Integer.MAX_VALUE;
        //get positive values
        long pDividend = Math.abs((long)dividend);
        long pDivisor = Math.abs((long)divisor);

        int result = 0;
        while(pDividend>=pDivisor){
            //calculate number of left shifts
            int numShift = 0;
            while(pDividend>=(pDivisor<<numShift)){
                numShift++;
            }
            //dividend minus the largest shifted divisor
            result += 1<<(numShift-1);
            pDividend -= (pDivisor<<(numShift-1));
        }
        if((dividend>0 && divisor>0) || (dividend<0 && divisor<0)) return result;
        else return -result;
    }


    // 转化为减法，为防止超时采用批量减 TODO 注意采用普通减法会超时
    public int divide1(int dividend, int divisor) {
        //handle special cases
        if(divisor == 0) return Integer.MAX_VALUE;
        //TODO （入参不可能溢出）只有结果才可能溢出，且只有Integer.MIN_VALUE / -1这一种情况会溢出
        if(divisor == -1 && dividend == Integer.MIN_VALUE) return Integer.MAX_VALUE;
        //get sign
        boolean isPositive = false;
        if (dividend < 0 && divisor < 0 || dividend > 0 && divisor > 0) isPositive = true;
        //get positive values
        long l = Math.abs((long)dividend);
        long r = Math.abs((long)divisor);
        int tempResult = positiveDivide1(l, r);
        return isPositive == true ? tempResult : -tempResult;
    }
    //入参有l > r > 0
    private int positiveDivide1(long l, long r){
        int count = 0;
        int times = 1;
        while (l >= times * r){
            l -= times * r;
            count += times;
            times++;
        }
        while (l >= r){
            l -= r;
            count++;
        }
        return count;
    }
}
```
