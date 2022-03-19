"use strict";
class AbstractPerson {
    constructor() {
        this._name = 'Mark';
    }
}
// new AbstractPerson() 기능이 완벽하지 않기에 이렇게 만들 순 없음
class Person12 extends AbstractPerson {
    constructor(name) {
        super();
        this._name = name;
        console.log(name);
    }
    setName(name) {
        this._name = name;
        console.log("123");
    }
}
const z = new Person12("hi");
// z.setName();
