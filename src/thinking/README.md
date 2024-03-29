# 总体思路

逐个方法考虑

低性能,易实现  ->  高性能,难实现

- 暴力枚举(枚举可能空间,然后取取最值)
- O(n) 法, 总有办法遍历一次就可以,要有信念; 可以从头到尾; 也可以首尾向内, 或者双指针开始(例如滑动窗口)
- 动态规划
- 二分法(分治是更高维度的思路, 子组可以应用别的算法), 二叉树

任何问题都要考虑转换到基本的数据结构(队列, 链表, 树, 图, 栈, 堆), 运用其算法来解决

## 算法性能优化

- 预处理
- 空间换时间
- 位运算
- 数学定理,公式
- 省略
- 少改变数组,对象 i.e Array.pop ...
- 少变量
- 位运算(不能为了性能牺牲可读性)
- 少递归
- 少用对象的方法 i.e Array.prototype Object.prototype
- 找东西,用表,用索引

## 复杂度

时间: 限制 O(n) 就是只能遍历常数次
空间: 限制 O(1) 就是只能使用原始型变量, 或者使用传入的变量本身作为对象来记录

-----

# 算法常用模型 总结:

## 暴力枚举

最靠谱的方法, 一定可以做出来, 没思路可以先实现暴力枚举, 可以在此基础上优化进化: 剪枝, 缓存

通常暴力法都是低效的,因而需要考虑如何提升效率,

想办法**删减可能空间**

存在多个影响因素时, 如果有些因素线性的,例如index, 可以在遍历该因素时, 对其他因素做局部线性处理(排序,比大小)
- [盛最多水的容器](/solution/medium/11.container-with-most-water.html)


## 递归

对于任意递归形式的问题, 可以从**结果**向最初递归, 也可以由**最初**向结果构建

不一定要双方都有完整的数据才能开始比较, 可以仅仅比较局部数据, 如果不同就可以剪枝了

## BFS
维护一个任务队列, `while(tasks.length) {const task = tasks.pop()}`, 每次添加当前层所有分支

- [22. 括号生成](/solution/medium/22.generate-parentheses.html)

## 二分

- 二分法适用于离散的,有具体范围的数组, 寻找符合条件的元素;
- 要排序过;
- 通过限定左右边界并不断中间切割直到找到元素.
- 二分法可以使用在其他方法中, 只要有具体范围就可以二分.

- [简单搜索](/solution/medium/172.binary-search.html)

## 分治

分治三步走, 基准, 分开, 合成

分开要选择对立的几种情况, 一定要选择到对立的情况才能得出正确解

例如, 最大子串问题, 分开对立的就是, 左, 中, 右; 环的分开对立就是, 考虑"首"不考虑"尾" 与 考虑"尾"不考虑"首"

## 贪心

参考 [无重叠区间](/solution/medium/435.non-overlapping-intervals.html)


## 回溯

回溯 = DFS + hash去重 + 剪枝(不可能空间)

- [46.全排列](/solution/medium/46.permutations.html)
- [47.全排列2](/solution/medium/47.permutations-ii.html)
- [51.N 皇后](/solution/hard/51.n-queens.html)

## 动态规划

dp 的一些哲学

- 本质是 **递归 + 缓存**, 更进一步地将递归改为迭代;
- 结果可能是最后一个元素, 也可能 dp 数组中间的一个元素. 反正要设计成将要求的结果保存到 dp 数组
- dp 是遍历所有结果,考虑如何遍历结果;
- dp 一定要是单调的,也就是遍历的结果是递增的或递减的
- 如何拆环: 1. 要头不要尾 与 要尾不要头 (打家劫舍2); 2. 分治 中间情况 与 两端情况 (最大子序和环形);

适用的场景: 问题的解与问题的规模有关, 可以递推计算, 由上一个规模以及当前状态, 计算出解. 像分治的思维

分步走
1. 状态定义: dp[i] 表示什么意思; 知道如何定义, 就很容易得出状态转移方程 ; 常用定义: 1. 前 n 项的 XX; 2. 前 n 项中, 必须使用 `a[n]` 的 XX; 3. 字符串以 `str[n]` 结尾的 XX, 结尾位置固定为 `n`, 但开始位置不定
2. 初始状态: dp[0] = ?
3. 状态转移函数:  f(n) = g(f(n-1)); 考虑如何用 n-1 构建 n, 考虑 n-1 可以分成 p + q = n - 1 两部分来构建
4. 解: dp 列表中的最值
5. 空间复杂度优化: 一维数组可以通过两个变量连续迭代变换来实现.

动态规划题目分析的 4 个步骤：

- 确定状态
  - 研究最优策略的最后一步
  - 化为子问题
- 转移方程
  - 根据子问题定义得到
- 初始条件和边界情况
- 计算顺序


多维DP
- 观察有几个变量,将独立的变量作为维度, 非独立的变量选择值域较小的作为维度, 剩下最后一个变量是结果. 例子: 1473 `dp[room][color][block] = minCost`
- 初始化时要先分配地址空间, 根据求最大值或最小值, 默认值为 0 或者 Infinity
- 转移方程, 有几个维度就先 **无脑** 写几重循环, 然后根据情况来剪枝.

状态压缩, 降维
- 排列组合题, 可以将数组 `nums [n]` 的所有子集, 表示为 `subSetIds [0, 2^n]` 的数组, 其中每个数作为 ID 代表 `nums` 的某个子集

- [22. 括号生成](/solution/medium/22.generate-parentheses.html)
- [213. 打家劫舍2](/solution/medium/213.house-robber-2.html)
- [1473. 粉刷房子3](/solution/hard/1473.paint-house-iii.html)


------

# 数据结构与方法 总结

## number

- 改变数字排序, 尽量使用运算, 而不是变成字符串来处理; (是否提速有待考证...)
- 数值配对问题可以使用 XOR, n xor n = 0;  0 xor n = n; 参考: [只出现一次的数字](/solution/simple/136.single-number.html)


---
## String

- 优先考虑正则


---
## Array

### 循环

暴力枚举一般都是多层嵌套循环, 但有通用的优化:
- 可以使用双指针来减少一层循环
- 可以在每层循环开头剪枝, 减少遍历
- 有时可以使用数学计算来直接减少遍历数, 直接算出来, 不用逐个遍历

参看 [四数之和](/solution/hard/18.4sum.html)

### 可排序数组

- 可以先排序再处理, 要注意不不一定数字才能排序, 字符也可以
- 遍历可以考虑跳过无用的值, 从而提速

- 桶排序: 值域较小且有限, 可以使用一定的规则(字符转数字)直接映射到数组, 从而直接排序了

### 不可排序数组

环, 需要拆环, 分成两种情况, 有首无尾, 有尾无首

### 滑动窗口:

- [最大无重复子串](/solution/hard/03.longest-substring-without-repeating-characters.html)


### 矩阵

将变换拆解为多个变换, 例如右旋 90° 可以拆解为 水平翻转 + 对角线翻转

矩阵遍历, 一定要考虑两条斜线的遍历, 尤其是 ↙️ 右上到左下的遍历

---

## 栈

单调栈: 数组内部遍历一次比较距离; 通常是出栈时计算
- [43.接雨水](/solution/hard/42.trapping-rain-water.html)
- [739.每日温度](/solution/medium/739.daily-temperatures.html)

- 栈保存二元组 `(val, 入栈时的min)` 可以轻松实现 O(1) 获取 getMin(). 参看[155.最小栈](https://leetcode.cn/problems/min-stack/)


--------

## 链表

- 链表好用的属性: 双向链表, 虚拟头尾节点, 记录链表长度
- 快慢指针: 同起点, 慢走一步, 快走两步; 当快到终点, 慢到中间点(长度偶数就是左边)
- 使用递归来遍历链表, 可以实现单向链表的回溯
- 使用栈来遍历链表,也有不同的作用

滑动窗口

- [19. 删除链表的倒数第 N 个结点](/solution/medium/19.remove-nth-node-from-end-of-list.html)

双指针

有两个不同长度的 A B 链表,

可以同步遍历, 只有对于 a, 先遍历自己再遍历 b, 对于 b, 先遍历自己再遍历 a, 这样两个表遍历的长度就是一样了.


---


## 树

所谓 `前 中 后 序遍历` 就是对节点的操作顺序是
- 前: 先操作 再遍历左右;
- 中: 先左,操作,右;
- 后: 先左右,后操作.

遍历分为 递归, 迭代(栈) 两种

二叉搜索树, 中序遍历就是升序

相关题目
- [105.从前序与中序遍历序列构造二叉树](/solution/medium/105.construct-binary-tree-from-preorder-and-inorder-traversal.html)

## hashMap

时间与空间权衡的设计

底层实现: hash 函数 => 碰撞处理(拉链法, 开放寻址)

## 图

### 邻接表
- 相关题目: [课程表][https://leetcode.cn/problems/course-schedule/comments/]
- 结构 `[[1,2,3], [4]]` 表示 i0 可以出发到i1,i2,i3; i1 可以出发到 i4; 可以扩充为`邻接矩阵`.
- 判断图是否存在环, 可以遍历一遍数组, 将入度为0的节点加入任务队列, 每次弹出一个将子节点入度-1, 如果为0就将子节点入队; 统计遍历次数是否等于节点总数; 有环的话不会遍历全部节点


----

## 状态机

先画图, 再编码, 遍历字符串要多遍历一位用于判断是否已读完全部: `i <= s.length`

- [字符串转换整数](/solution/medium/08.string-to-integer-atoi.html)
