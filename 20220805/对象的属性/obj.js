"use strict";
/*
对象的计算属性[]
和.属性的区别
使用obj[xx]和obj.xx
*/
{
  let arr = [];
  //将数组当做对象来用
  arr["福建"] = "福州";
  for (const key in arr) {
    console.log(key);
  }
  console.log(arr);
}
{
  let cs = new Object();
  cs.name = "crystal";
  cs.gender = "male";
  cs._age = 21;
  cs["address"] = "福建省";
  cs["city postcode"] = "361000";
  cs[0] = "c";
  console.log(cs);
  for (const key in cs) {
    console.log(key);
  }
  //判断一个对象中是否有某个属性
  console.log("age" in cs);
  console.log("_age" in cs);
  console.log(cs.hasOwnProperty("address"));
  //删除属性
  delete cs["city postcode"];
  console.log(cs);
}
