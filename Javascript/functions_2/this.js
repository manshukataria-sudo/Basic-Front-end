const student={
    name:"Chaman",
    age:20,
    marksE:8,
    marksM:10,
    marksS:10,
    avg:function(){
        console.log(this);
        console.log(`${this.name} has got an average of ${(this.marksE+this.marksM+this.marksS)/3}`)
    }
};
//console.log(student.avg());
student.avg();
console.log(student);

function test(){
    console.log(this);
}
test();