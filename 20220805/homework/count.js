/*
统计数组中各个项出现的次数
*/
//1.
// {
//   const arr = [1, 2, 2, 3, 3, 3, 10, 4, 4, 5, 5, 5, 5, 6, 6, 7];
//   let obj = {};
//   arr.forEach((el) => {
//     if (obj[el]) {
//       obj[el]++;
//     } else {
//       obj[el] = 1;
//     }
//   });
//   console.log(obj);
// }
{
  const arr = [1, 2, 2, 3, 3, 3, 10, 4, 4, 5, 5, 5, 5, 6, 6, 7]
  let obj = {}
  for (const item of arr) {
    if (obj[item]) {
      //如果重复:次数加一
      obj[item]++
    } else {
      //如果不重复:次数为1
      obj[item] = 1
    }
  }
  console.log(obj)
}
//2.使用数组的高阶方法reduce
{
  const arr = [1, 2, 2, 3, 3, 3, 10, 4, 4, 5, 5, 5, 5, 6, 6, 7]
  const obj = arr.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur)) {
      acc[cur]++
    } else {
      acc[cur] = 1
    }
    return acc
  }, {})
  console.log(obj)
}
//3.使用map(映射)数据结构,解决不足之处(键可以不是字符串)
{
  const arr = [1, 2, 2, 3, 3, 3, 10, 4, 4, 5, 5, 5, 5, 6, 6, 7]
  const obj = arr.reduce((acc, cur) => {
    if (acc.has(cur)) {
      acc.set(cur, acc.get(cur) + 1)
    } else {
      acc.set(cur, 1)
    }
    return acc
  }, new Map())
  console.log(obj)
}

/*
去除数组中的重复项
*/
{
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7]
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
}
//2.使用Set
// {
//   const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7];
//   const newArr = new Set(arr);
//   console.log(newArr);
// }
{
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7]
  console.log([...new Set(arr)])
}
{
  const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7]
  console.log(Array.from(new Set(arr)))
}
