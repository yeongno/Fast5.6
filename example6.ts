class Students{
  // mark: string = 'male';
  // [index: string]: string;
  [index: string]: "male" | "female";
  mark1:"female" = "female";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a)

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b);