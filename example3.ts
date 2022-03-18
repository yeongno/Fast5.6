class Person2{
  public constructor(public name: string, private age?:number){
    }
  }

const p3 = new Person2("Mark", 39);

console.log(p3);//private age일 경우 p3.name만 가능