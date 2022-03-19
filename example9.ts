class Parent{
  constructor(protected _name:string, private _age: number){
    console.log("3")
  }
  //protected는 public, private과 같은 접근제어자 역할로 외부에서는 접근 할수 없지만 상속관계가 있는 관계에만 사용 가능
  public print():void{
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age}입니다.`);
  }
  protected printName(): void{
    console.log(this._name);
  }
}
// const q = new Parent("Mark", 39);
// q.print();//q._name, q._age 와같이는 접근 못하지만 print()와 같이 내장 함수로 사용 가능
class Child extends Parent{//우선 Parent의 default 생성자를 가져옴
// public _age = 24; parent에서 private 이기에 덮어 씌우진 못함
  public gender = 'male';
  constructor(name: string,age: number){
    super(name,age);//parent의 생성자를 써서 세팅해야 함으로 super 메서드 사용
    console.log("1")
    this.printName();//항상 super를 먼저 호출해줘야함
    console.log("2")

  }
}
console.log("4");
const w = new Child("hey",5);
w.print();
