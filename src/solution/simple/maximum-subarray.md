# Maximum Subarray

https://leetcode-cn.com/problems/maximum-subarray/

## Solution

### 找出全部 O(n!)

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  let subLen = 1
  let max = -Infinity
  for (;subLen <= len; subLen++) {
    for (let i=0; i < len - subLen + 1; i++) {
      const count = nums.slice(i, i + subLen).reduce((sum, j) => sum + j, 0)
      if (count > max) {
        max = count
      }
    }
  }
  return max
};
```

提交，超时，输入的数组长度有几万，失败。

### 一次遍历,找出最大 O(n)

从第一个正数开始，判断下一个数是否添加到当前数组：
1. 正数就添加
2. 负数小于当前之和也添加
3. 不添加的话，就跳到正数重新开始

对于全负数组，可记录当前最大数，其结果就是最大数

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  let maxSum = -Infinity
  let sum = 0
  let maxNum = -Infinity
  for (let i = 0; i < len; i++) {
    const v = nums[i]
    // 对付全负数数组
    maxNum = Math.max(v, maxNum)
    // 找非负数开始
    if (sum === 0 && v < 0 || sum + v < 0) {
      sum = 0
      continue
    }
    sum += v
    maxSum = Math.max(sum, maxSum)
  }
  return Math.max(maxSum, maxNum)
};
```

### 分治



## Solve

