




title: Course Schedule II - 课程调度II
date: 2016-04-06 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-04-06 21:40:47-->
---

### Course Schedule II - 课程调度II
**Description**: 
There are a total of n courses you have to take, labeled from 0 to n - 1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.
There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

For example:
2, [[1,0]]
There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]
4, [[1,0],[2,0],[3,1],[3,2]]
There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

思路：Course Schedule I思路一致，有向图BFS(边列表):队列存没有依赖的节点

完整的java代码如下：

```java
public class CourseSchedule {

    /**
     * http://www.programcreek.com/2014/05/leetcode-course-schedule-java/
     * 有向图BFS(边列表):队列存没有依赖的节点
     * @param numCourses
     * @param prerequisites
     * @return
     */
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int len = prerequisites.length;
        if(numCourses==0 || len==0) return true;
        // counter for number of prerequisites
        int[] pCount = new int[numCourses];
        for(int i=0; i<len; i++) pCount[prerequisites[i][0]]++;
        //store courses that have no prerequisites
        LinkedList<Integer> queueNoPre = new LinkedList<>();
        for(int i=0; i<numCourses; i++){
            if(pCount[i]==0) queueNoPre.add(i);
        }
        // number of courses that have no prerequisites
        int numNoPre = queueNoPre.size();
        while(!queueNoPre.isEmpty()){
            int top = queueNoPre.remove();
            for(int i=0; i<len; i++){
                // if a course's prerequisite can be satisfied by a course in queue
                if(prerequisites[i][1]==top){
                    pCount[prerequisites[i][0]]--;  //依赖减一
                    if(pCount[prerequisites[i][0]]==0){ //若依赖清零了
                        numNoPre++;
                        queueNoPre.add(prerequisites[i][0]);
                    }
                }
            }
        }
        return numNoPre == numCourses;
    }

}
```
