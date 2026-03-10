let marks=50;
if(marks>=90 && marks<=100){
    console.log("you got grade- A")
    //grade="A";
}
else if(marks>=80 && marks<=89){
    console.log("you got grade-B")
    //grade="B";
}
else if(marks>=70 && marks<=79){
    console.log("you got grade-C")
    //grade="C";
}
else if(marks>=60 && marks<=69){
    console.log("you got grade- D")
    //grade="D";
}
else  console.log("Fail");

let age=20;
let ticketprice=undefined;
if(age>=10 && age<=20){
    ticketprice=20;
}
else if(age>=21 && age<=40){
    ticketprice=80;
}
else if(age>=41 && age<=100){
    ticketprice=100;
}

let year=2026;
if(year%4==0){
    console.log(`${year} is a leap year`);
}
else console.log("not a leap year");

let pamount=999;
let damount=undefined;
if(pamount>=500 && pamount<=1000){
    damount=pamount-(10*pamount/100);
    console.log(`you have to pay ${damount}`);
}else if(pamount>=100 && pamount<=499){
    damount=pamount-(5*pamount/100);
    console.log(`you have to pay ${pamount}`);
}
else console.log(`you have to pay ${pamount} amount is less than discount range`)

let weight=60;
let height=1;
let bmi=weight/(height)**2;
if(bmi<18.5){
    console.log(`your bmi score is ${bmi} amd you are underweight`)
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log(`your bmi score is ${bmi} and you are healthy`)
}else if(bmi>=25.0 && bmi<=29.9){
    console.log(`your bmi score is ${bmi} and you are overweight`)
}else if(bmi>=30.0){
    console.log(`your bmi score is ${bmi} and you are obese`)
}

for(let i=10;i>=-20;i--){
    if(i%2==0){
        console.log(i)
    }
}

// let students={
//     name:"Nirbhay",
//     age:20,
//     marks:64,
// }
// students.grade="c";
// console.log(students);
// console.log(students["marks"]);

let name="javastring"
let reverse="";
console.log(length.name);