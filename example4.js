"use strict";
class Person3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name + " Lee";
    }
    set name(n) {
        this._name = n;
    }
}
const p4 = new Person3("Mark", 39);
console.log(p4.name); //get을 하는 함수 getter
p4.name = "Woongjae"; //set을 하는 함수 setter
console.log(p4.name); //get을 하는 함수 getter
