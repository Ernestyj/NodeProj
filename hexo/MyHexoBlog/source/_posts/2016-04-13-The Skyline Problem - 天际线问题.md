




title: The Skyline Problem - 天际线问题
date: 2016-04-13 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-13 21:40:47-->
---

### The Skyline Problem - 天际线问题
**Description**: A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).
A key point is the left endpoint of a horizontal line segment.

原题链接：https://leetcode.com/problems/the-skyline-problem/
 
思路：借助大顶堆，时间O(NlogN) 空间O(N)。
1 把这些矩形拆成两个点，一个左上顶点，一个右上顶点。将所有顶点按照横坐标排序后，开始遍历这些点。
2 遍历时，通过一个大顶堆来得知当前图形的最高位置。堆顶是所有顶点中最高的点，只要这个点没被移出堆，说明这个最高的矩形还没结束。
3 对于左顶点，我们将其加入堆中。对于右顶点，我们找出堆中其相应的左顶点，然后移出这个左顶点，同时也意味这这个矩形的结束。
4 代码中，为了区分左右顶点，左顶点高度值是负数，而右顶点高度值则存的是正数。注意，堆中先加入一个0高度，帮助我们在只有最矮的建筑物时选择最低值

参考链接：https://segmentfault.com/a/1190000003786782

完整的java代码如下：

```java
public class TheSkylineProblem {

    /**时间O(NlogN) 空间O(N)
     * https://segmentfault.com/a/1190000003786782
     * 把这些矩形拆成两个点，一个左上顶点，一个右上顶点。将所有顶点按照横坐标排序后，开始遍历这些点。
     遍历时，通过一个大顶堆来得知当前图形的最高位置。堆顶是所有顶点中最高的点，只要这个点没被移出堆，说明这个最高的矩形还没结束。
     对于左顶点，我们将其加入堆中。对于右顶点，我们找出堆中其相应的左顶点，然后移出这个左顶点，同时也意味这这个矩形的结束。
     代码中，为了区分左右顶点，左顶点高度值是负数，而右顶点高度值则存的是正数。
     注意:堆中先加入一个0高度，帮助我们在只有最矮的建筑物时选择最低值
     * @param buildings
     * @return
     */
    public List<int[]> getSkyline(int[][] buildings) {
        List<int[]> result = new ArrayList<>();
        List<int[]> height = new ArrayList<>();
        for(int[] b:buildings) {    // 构建左右顶点混合列表
            height.add(new int[]{b[0], -b[2]}); // 左高度为负数
            height.add(new int[]{b[1], b[2]});  // 右高度为正数
        }
        Collections.sort(height, (a, b) -> {    // 按横坐标排序，相同横坐标其纵坐标小的在前
            if(a[0] != b[0]) return a[0] - b[0];
            else return a[1] - b[1];
        });
        Queue<Integer> pq = new PriorityQueue<>(11, (i1,i2) -> (i2-i1));    // 构建大顶堆，按照纵坐标来判断大小
        pq.offer(0);    // 将地平线值0先加入堆中
        int prev = 0;   // prev用于记录上次keypoint的高度
        for(int[] h:height) {
            if(h[1] < 0) pq.offer(-h[1]);   // 将左顶点加入堆中
            else pq.remove(h[1]);    // 将右顶点对应的左顶点移去
            int cur = pq.peek();
            if(prev != cur) {   // 如果堆的新顶部和上个keypoint高度不一样，则加入一个新的keypoint
                result.add(new int[]{h[0], cur});
                prev = cur;
            }
        }
        return result;
    }

}
```
