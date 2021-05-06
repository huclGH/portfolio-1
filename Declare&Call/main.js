//Method_1
let personObj1 = new Object();
personObj1.firstname="John";
personObj1.lastname="Doe";
personObj1.age=50;
personObj1.eyeColor="Blue";
personObj1.smile = function(){
    document.write("^______^");
}
console.log(personObj1);

//Method_2
let personObj2 = {
    firstname: "Jane",
    lastname: "Smith",
    age: "49",
    eyeColor: "Green",
    smile:function(){
        document.write("-__-|||");
    }
}
console.log(personObj2);
//Method_3

function personObj3(firstname,lastname,age, eyeColor){
this.firstname= firstname;
this.lastname= lastname;
this.age= age;
this.eyeColor= eyeColor;
this.smile = function(){
    document.write("😎");
};
}

let newMan = new personObj3("Ryan","Chung","99","red");

console.log(newMan);
