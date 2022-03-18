class ClassName {
  private static instance: ClassName | null = null;  
  public static getInstance(): ClassName {
    //ClassName 으로부터 만든 object 가 없으면, 만들어서 리턴
    if(ClassName.instance===null){
      ClassName.instance = new ClassName();
    }

    return ClassName.instance;
  }
  private constructor(){}
}

const c = ClassName.getInstance();
const d = ClassName.getInstance();

console.log(c === d);
