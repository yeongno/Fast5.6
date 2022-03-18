class Person {
  name;
  constructor(name: string){//class에서 object의 매개변수를 받을 수있는 생성자
    this.name = name;
  }
}

const p1 = new Person("Mark");//Person이라는 objact가 p1에 할당

console.log(p1);