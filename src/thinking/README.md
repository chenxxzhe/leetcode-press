# 解题心得、套路


## 总体思路

逐个方法考虑

低性能,易实现  ->  高性能,难实现

- 暴力枚举(枚举可能空间,然后取取最值)
- O(n) 法, 总有办法遍历一次就可以,要有信念; 可以从头到尾; 也可以首尾向内, 或者双指针开始(例如滑动窗口)
- 动态规划
- 二分法(分治是更高维度的思路, 子组可以应用别的算法)


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

找东西,用表,用索引


## 暴力枚举

给出所有可能的情况,取最值

通常,暴力法都是低效的,因而需要考虑如何提升效率,

想办法**删减可能空间**

存在多个影响因素时, 如果有些因素线性的,例如index, 可以在遍历该因素时, 对其他因素做局部线性处理(排序,比大小)
- [盛最多水的容器](/solution/medium/11.container-with-most-water.html)

## 二分

- 二分法适用于离散的,有具体范围的数组, 寻找符合条件的元素;
- 要排序过;
- 通过限定左右边界并不断中间切割直到找到元素.
- 二分法可以使用在其他方法中, 只要有具体范围就可以二分.

- [简单搜索](/solution/medium/172.binary-search.html)

## 递归

对于任意递归形式的问题, 可以从**结果**向最初递归, 也可以由**最初**向结果构建


BFS
将当前状态下,所有的下一步操作作为递归入口

- [22. 括号生成](/solution/medium/22.generate-parentheses.html)

DFS

## 分治

分治三步走, 基准, 分开, 合成

分开要选择对立的几种情况, 一定要选择到对立的情况才能得出正确解

例如, 最大子串问题, 分开对立的就是, 左, 中, 右; 环的分开对立就是, 考虑"首"不考虑"尾" 与 考虑"尾"不考虑"首"

----

## number

- 改变数字排序, 尽量使用运算, 而不是变成字符串来处理; (是否提速有待考证...)

---
## String

- 优先考虑正则

## 比较相同

不一定要双方都有完整的数据才能开始比较, 可以仅仅比较局部数据, 如果不同就可以剪枝了

## 状态机

先画图, 再编码, 遍历字符串要多遍历一位用于判断是否已读完全部: `i <= s.length`

- [字符串转换整数](/solution/medium/08.string-to-integer-atoi.html)


---
## Array

可排序数组

- 可以先排序再处理, 要注意不不一定数字才能排序, 字符也可以
- 遍历可以考虑跳过无用的值, 从而提速

不可排序数组

环, 需要拆环, 分成两种情况, 有首无尾, 有尾无首

### 滑动窗口:

- [最大无重复子串](/solution/hard/03.longest-substring-without-repeating-characters.html)

### 动态规划

dp 的一些哲学

- 本质是 **递归 + 缓存**, 更进一步地将递归改为迭代;
- 结果可能是最后一个元素, 也可能 dp 数组中间的一个元素. 反正要设计成将要求的结果保存到 dp 数组
- dp 是遍历所有结果,考虑如何遍历结果;
- dp 一定要是单调的,也就是遍历的结果是递增的或递减的
- 如何拆环: 1. 要头不要尾 与 要尾不要头 (打家劫舍2); 2. 分治 中间情况 与 两端情况 (最大子序和环形);

适用的场景: 问题的解与问题的规模有关, 可以递推计算, 由上一个规模以及当前状态, 计算出解. 像分治的思维

分步走
1. 状态定义: dp[i] 表示什么意思; 知道如何定义, 就很容易得出状态转移方程 ; 常用定义: 1. 前 n 项的 XX; 2. 前 n 项中, 必须使用 a[n] 的 XX;
2. 初始状态: dp[0] = ?
3. 状态转移函数:  f(n) = g(f(n-1)); 考虑如何用 n-1 构建 n, 考虑 n-1 可以分成 p + q = n - 1 两部分来构建
4. 解: dp 列表中的最值
5. 空间复杂度优化: 一维数组可以通过两个变量连续迭代变换来实现.


多维DP
- 观察有几个变量,将独立的变量作为维度, 非独立的变量选择值域较小的作为维度, 剩下最后一个变量是结果. 例子: 1473 `dp[room][color][block] = minCost`
- 初始化时要先分配地址空间, 根据求最大值或最小值, 默认值为 0 或者 Infinity
- 转移方程, 有几个维度就先 **无脑** 写几重循环, 然后根据情况来剪枝.

状态压缩, 降维
- 排列组合题, 可以将数组 `nums [n]` 的所有子集, 表示为 `subSetIds [0, 2^n]` 的数组, 其中每个数作为 ID 代表 `nums` 的某个子集

- [22. 括号生成](/solution/medium/22.generate-parentheses.html)
- [213. 打家劫舍2](/solution/medium/213.house-robber-2.html)
- [1473. 粉刷房子3](/solution/hard/1473.paint-house-iii.html)

### 矩阵

将变换拆解为多个变换, 例如右旋 90° 可以拆解为 水平翻转 + 对角线翻转

### 栈

单调栈
- [43.接雨水](/solution/hard/42.trapping-rain-water.html)


### 回溯

- [46.全排列](/solution/medium/46.permutations.html)
- [47.全排列2](/solution/medium/47.permutations-ii.html)
- [51.N 皇后](/solution/hard/51.n-queens.html)

### 链表

无脑加哨兵节点(用于抛弃), 然后再考虑

滑动窗口

- [19. 删除链表的倒数第 N 个结点](/solution/medium/19.remove-nth-node-from-end-of-list.html)

---


## 树

所谓 `前 中 后 序遍历` 就是对节点的操作顺序是
- 前: 先操作 再遍历左右;
- 中: 先左,操作,右;
- 后: 先左右,后操作.

遍历分为 递归, 迭代(栈) 两种
