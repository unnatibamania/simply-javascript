const person = {
    name: 'John',
    age: 20,
    getAge(){
        return this.age;
    }
}

const p = person.getAge;
console.log(p());
console.log(person.getAge());



function wtf(){
    console.log('in wtf', this);
}

wtf();

const obj = {
    name: 'John',
    age: 20,
    wtf: wtf,
    func: ()=>{
        console.log('in func', this);
    }
}

const callFunc = obj.func;

callFunc();

obj.wtf();
obj.func();