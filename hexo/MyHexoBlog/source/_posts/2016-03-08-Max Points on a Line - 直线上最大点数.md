




title: Max Points on a Line - 直线上最大点数
date: 2016-03-08 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-03-08 21:40:47-->
---

### Max Points on a Line - 直线上最大点数
**Description**: Given n points on a 2D plane, find the maximum number of points that lie on the same straight line.
 
思路：为每个点计算其与其他点的斜率,斜率相同则在同一直线上.注意额外处理重复点和垂直线的情况.

参考链接：http://www.programcreek.com/2014/04/leetcode-max-points-on-a-line-java/

注意：double slope = (point1.y-point2.y)==0 ? 0.0 : (1.0*(point1.y-point2.y))/(point1.x-point2.x);
若写成 double slope = (1.0*(point1.y-point2.y))/(point1.x-point2.x); 
在slopeCount.containsKey(slope)判断中会出错，这个细节一定要注意！

完整的java代码如下：

```java
public class MaxPointsOnLine {

    class Point {
        int x;
        int y;
        Point() { x = 0; y = 0; }
        Point(int a, int b) { x = a; y = b; }
    }

    /**
     * http://www.programcreek.com/2014/04/leetcode-max-points-on-a-line-java/
     * 为每个点计算其与其他点的斜率,斜率相同则在同一直线上.注意额外处理重复点和垂直线的情况.
     * @param points
     * @return
     */
    public int maxPoints(Point[] points) {
        if(points == null || points.length == 0) return 0;
        Map<Double, Integer> slopeCount = new HashMap<>();
        int max = 0;
        for (int i=0; i<points.length; i++){
            Point point1 = points[i];
            int duplicate = 1;
            int vertical = 0;
            for (int j=i+1; j<points.length; j++){
                Point point2 = points[j];
                if (point1.x==point2.x) {
                    if (point1.y==point2.y) duplicate++;
                    else vertical++;
                } else {
                    //TODO 错误:double slope = (1.0*(point1.y-point2.y))/(point1.x-point2.x);
                    double slope = (point1.y-point2.y)==0 ? 0.0 :
                            (1.0*(point1.y-point2.y))/(point1.x-point2.x);
                    if (!slopeCount.containsKey(slope)) slopeCount.put(slope, 1);
                    else slopeCount.put(slope, slopeCount.get(slope)+1);
                }
            }
            for (Integer n : slopeCount.values()){
                if (n+duplicate>max) max = n+duplicate;
            }
            max = Math.max(vertical+duplicate, max);
            slopeCount.clear();
        }
        return max;
    }

}
```
