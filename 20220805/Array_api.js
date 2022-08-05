{
  console.log(`map方法 对数组中的每个元素操作 *2`);
  let arr = [-1, -3, 1, -5, 10, 7, 9];
  let arr2 = arr.map(value => value * 2);
  console.log(arr2);
}
{
  console.log(`filter方法 过滤数组中小于0的元素`);
  let arr = [-1, -3, 1, -5, 10, 7, 9];
  arr = arr.filter(value => value >= 0);
  console.log(arr);
}
{
  console.log(`reduce 方法`);
  let arr = [1, 2, 3, 4, 5, 6];
  let result = arr.reduce((acc, cur) => {
    // console.log(acc, cur);
    return acc + cur;
  }, 0);
  console.log(result);
}
{
  console.log(`every 方法 判断每个值是否大于0`);
  let arr = [1, 2, 3, 4, 5, 6];
  let flag = arr.every(value => value > 0);
  console.log(flag);
}
{
  console.log(`some 方法 判断至少有一个值大于0`);
  let arr = [-1, -2, -3, -4, -5, -6];
  let flag = arr.some(value => value > 0);
  console.log(flag);
}
