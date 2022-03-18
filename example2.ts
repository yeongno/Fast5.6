class Person1{
  name: string = "Mark";
  age!: number;//값이 number로 할당 되지 않아도 에러를 일으키지 않음 undefined반환

  constructor(age:number){
    if(age === undefined){
      this.age =20;
    }else{
      this.age=age;
    }
  }
}

const p2 = new Person1(39);

console.log(p2);
// p2.age=12;
console.log(p2.age);