{
  let cs = new Object()
  cs.name = 'crystal'
  cs.gender = 'male'
  cs.age = 21
  cs.introduce = function () {
    console.log(`1my name is ${this.name},gender is ${this.gender},age is ${this.age}`)
  }
  console.log(cs)
  cs.introduce()
}
{
  let cs = {
    name: 'crystal',
    gender: 'male',
    age: 21,
    introduce() {
      console.log(`2my name is ${this.name},gender is ${this.gender},age is ${this.age}`)
    },
  }
  console.log(cs)
  cs.introduce()
}
{
  function Coder(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
    this.introduce = function () {
      console.log(`3my name is ${this.name},gender is ${this.gender},age is ${this.age}`)
    }
  }
  let cs = new Coder('crystal', 'male', 21)
  console.log(cs)
  cs.introduce()
}

{
  class Coder {
    constructor(name, gender, age) {
      this.name = name
      this.gender = gender
      this.age = age
    }
    introduce() {
      console.log(`4my name is ${this.name},gender is ${this.gender},age is ${this.age}`)
    }
  }
  let cs = new Coder('crystal', 'male', 21)
  console.log(cs)
  cs.introduce()
}
