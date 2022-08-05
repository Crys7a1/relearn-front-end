"use strict";
//不使用第三个变量,交换两个变量
var a = 1;
var b = 2;
//1.
a = a + b; //a:3 b:2
b = a - b; //b:1 a:3
a = a - b; //a:2 b:1

//2.
// a = a ^ b;
/*001
  010 = 011  a:3
*/
// b = a ^ b;
/*011
  010 = 001 b:1
*/
// a = a ^ b;
/*011
  001 = 010 a:2
*/
console.log(a, b);
