




title: Peeking Iterator
date: 2016-05-23 20:44:47
categories: 
- 算法
tags: 
- java
- 算法
- LeetCode
<!--updated: 2016-05-23 21:40:47-->
---

### Peeking Iterator
**Description**: Given an Iterator class interface with methods: next() and hasNext(), design and implement a PeekingIterator that support the peek() operation -- it essentially peek() at the element that will be returned by the next call to next().
 
思路：提前取出下一个元素。

完整的java代码如下：

```java
    class PeekingIterator implements Iterator<Integer> {
        private Integer next = null;
        private Iterator<Integer> iterator = null;

        public PeekingIterator(Iterator<Integer> iterator) {
            // initialize any member here.
            this.iterator = iterator;
            if (iterator.hasNext()) this.next = iterator.next();
        }

        // Returns the next element in the iteration without advancing the iterator.
        public Integer peek() {
            return next;
        }

        // hasNext() and next() should behave the same as in the Iterator interface.
        // Override them if needed.
        @Override
        public Integer next() {
            Integer temp = next;
            if (iterator.hasNext()) next = iterator.next();
            else next = null;
            return temp;
        }

        @Override
        public boolean hasNext() {
            return next==null? false : true;
        }
    }
```
