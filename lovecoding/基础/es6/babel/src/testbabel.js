let a = 10;

class Foo{
    constructor(age){
        this.age = age
    }
    showAge(){
        console.log(this.age);
    }
}

let foo = new Foo(18);