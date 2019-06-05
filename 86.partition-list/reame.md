## 链表 LinkedList 
- 算法
- 数据结构 链表
- webpack 跑起来
### 给定一个链表和一个特定值x，对链表进行分割，使所有小于x的结点都在大于或等于x的结点之前，保证原来的顺序
- LinkedList (n)linkedListNode 
- 输出数据可以不连续
- head -> next -> node1 ->..node -> tail -> next = null
- head = 1 -> 4 -> 3 -> 2 -> 5-> 2 x= 3
- 1 -> 2 -> 2 -> 4 -> 3 -> 5 

1. 一分为二,分为两个链表 再用next将两个链表连接起来  
小的链表 next -> 大链表的头结点   
lowerHeader  
lowerTail  
highHeader  
highTail        
lowerHeader = head  
当4来的时候,跳过,1 -> next 将1结点 ,next 设为null  
1 -> lowerHeader -> next 2 -> 2  
4 -> highHeader -> ... -> 5  
