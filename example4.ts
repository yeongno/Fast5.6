class Person3{
  public constructor(public _name: string, private age?:number){}

  get name() {
    return this._name + " Lee";
  }
  set name(n: string){
    this._name = n;
  }
  }

const p4 = new Person3("Mark", 39);
console.log(p4.name);//get을 하는 함수 getter
p4.name ="Woongjae";//set을 하는 함수 setter
console.log(p4.name);//get을 하는 함수 getter
