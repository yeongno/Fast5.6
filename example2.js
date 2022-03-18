"use strict";
class Person1 {
    constructor(age) {
        this.name = "Mark";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
}
const p2 = new Person1(39);
console.log(p2);
// p2.age=12;
console.log(p2.age);
