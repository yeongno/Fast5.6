class Person5{
  private static CITY = "Seoul";
  public hello(){
    console.log("안녕하세요", Person5.CITY);
  }
  public change(){
    Person5.CITY = "LA";
  }
};

const p6 = new Person5();
p6.hello();
// p6.hello(); //static 사용시 objact에서는 해당 함수를 메소드라고 생각 하지 않는다.

const p7 = new Person5();
p7.hello();
p6.change();
p7.hello();


// Person5.hello();
// Person5.CITY;