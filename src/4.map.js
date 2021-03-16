// 我想测试map是否能每次循环时将数组中的每一项和索引传递给我
export const map = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
};
