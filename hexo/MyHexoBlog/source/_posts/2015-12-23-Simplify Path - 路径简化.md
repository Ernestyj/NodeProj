



title: Simplify Path - 路径简化
date: 2015-12-23 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2015-12-23 21:40:47-->
---

### Simplify Path - 路径简化

**Description**: Given an absolute path for a file (Unix-style), simplify it.
 
 For example,
 path = "/home/", => "/home"
 path = "/a/./b/../../c/", => "/c"
 
 思路：先将输入用/分隔开得到字符数组，然后再分情况判断。算法过程使用到栈数据结构。

完整的java代码如下：

```java
public class SimplifyPath {

    public static void main(String[] args) {
//        String path = "/a/./b/../../c/";
//        String path = "/home/";
        String path = "/home//foo/";
        System.out.println("*****RESULT*****");
        System.out.println(new SimplifyPath().simplifyPath(path));
    }


    public String simplifyPath(String path) {
        String[] strings = path.split("/");
        Stack<String> stack = new Stack<>();
        for (int i=1; i<strings.length; i++){
            String s = strings[i];
            if (s.length() != 0){
                if (s.equals(".")){
                }else if (s.equals("..")){
                    if (!stack.isEmpty()) stack.pop();
                }else {
                    stack.push(strings[i]);
                }
            }
        }
        if (stack.isEmpty()) return "/";
        else {
            StringBuilder builder = new StringBuilder();
            Object[] array = stack.toArray();
            for (Object o : array) builder.append("/" + o);
            return builder.toString();
        }
    }

}
```
