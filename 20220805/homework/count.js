/*
统计数组中各个项出现的次数
*/

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
// {
//   const arr = [1, 2, 2, 3, 3, 3, 10, 4, 4, 5, 5, 5, 5, 6, 6, 7];
//   let obj = {};
//   for (const item of arr) {
//     if (obj[item]) {
//       //如果重复:次数加一
//       obj[item]++;
//     } else {
//       //如果不重复:次数为1
//       obj[item] = 1;
//     }
//   }
//   console.log(obj);
// }
/*
去除数组中的重复项
*/
// {
//   const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7];
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr);
// }

// {
//   const arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7];
//   const newArr = new Set(arr);
//   console.log(newArr);
// }
"use strict";
let lisi = {
  name: "李四",
  gender: "男",
  age: 20,
  introduce() {
    // 解决this指向不正确的问题
    setTimeout(function () {
      console.log(this);
      //   console.log(
      //     `我的名字是${this.name}，性别${this.gender}，年龄${this.age}岁`
      //   );
    });
  },
};
// console.log(lisi);
lisi.introduce();
