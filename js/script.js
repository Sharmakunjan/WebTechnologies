//console.log("Hello world I am learning javascript!!!");
/*let a=6;
console.log(typeof(a))
let b=7;
let sum= a+b;
console.log(sum);*/

/*var a=4;
var b=6;
console.log(typeof(b));
var multiplication = a*b;
console.log("The multiplication of two numbers are" + multiplication);*/

/*const PI =3.14;
let radius = window.prompt("Enter Radius");
let circumference = 2 * PI * radius
console.log("The circumference of a circle is " + circumference);*/

/*let age = window.prompt("Enter the age of the Dog")
function bark(){
    if (age>10){
    console.log("The Dog is old.");
    }
    else{
        console.log("The dog is young.");
    }
}
bark();

function sleep(){
    if (age>10){
        console.log(age);
        console.log("The Dog wakes up at night.");
    }
    else{
        console.log("The dog sleeps early.");
    }
    }
sleep();*/
 
document.getElementById("myBtn").onclick = function(){
    let radius = document.getElementById("myNumber").value;
    console.log(radius);
    const PI = 3.14;
    let circumference= 2 * radius * PI;
    /*document.getElementById("circumference").innerHTML = circumference;*/
    document.getElementById("circumference").append(circumference);
    alert("Hello CG10")

}