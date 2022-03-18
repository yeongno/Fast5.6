"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        //ClassName 으로부터 만든 object 가 없으면, 만들어서 리턴
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const c = ClassName.getInstance();
const d = ClassName.getInstance();
console.log(c === d);
