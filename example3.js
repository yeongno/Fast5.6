"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p3 = new Person2("Mark", 39);
console.log(p3); //private age일 경우 p3.name만 가능
