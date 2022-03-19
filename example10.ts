abstract class AbstractPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
}

// new AbstractPerson() 기능이 완벽하지 않기에 이렇게 만들 순 없음

class Person12 extends AbstractPerson{
  constructor(name:string){
    super();
    this._name = name;
    console.log(name);
  }
  setName(name: string): void {
    this._name = name;
    console.log("123")
  }

}

const z = new Person12("hi");
// z.setName();