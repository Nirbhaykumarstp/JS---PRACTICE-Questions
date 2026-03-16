let marks = 50;
if (marks >= 90 && marks <= 100) {
    console.log("you got grade- A")
    //grade="A";
}
else if (marks >= 80 && marks <= 89) {
    console.log("you got grade-B")
    //grade="B";
}
else if (marks >= 70 && marks <= 79) {
    console.log("you got grade-C")
    //grade="C";
}
else if (marks >= 60 && marks <= 69) {
    console.log("you got grade- D")
    //grade="D";
}
else console.log("Fail");

let age = 20;
let ticketprice = undefined;
if (age >= 10 && age <= 20) {
    ticketprice = 20;
}
else if (age >= 21 && age <= 40) {
    ticketprice = 80;
}
else if (age >= 41 && age <= 100) {
    ticketprice = 100;
}

let year = 2026;
if (year % 4 == 0) {
    console.log(`${year} is a leap year`);
}
else console.log("not a leap year");

let pamount = 999;
let damount = undefined;
if (pamount >= 500 && pamount <= 1000) {
    damount = pamount - (10 * pamount / 100);
    console.log(`you have to pay ${damount}`);
} else if (pamount >= 100 && pamount <= 499) {
    damount = pamount - (5 * pamount / 100);
    console.log(`you have to pay ${pamount}`);
}
else console.log(`you have to pay ${pamount} amount is less than discount range`)

let weight = 60;
let height = 1;
let bmi = weight / (height) ** 2;
if (bmi < 18.5) {
    console.log(`your bmi score is ${bmi} amd you are underweight`)
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`your bmi score is ${bmi} and you are healthy`)
} else if (bmi >= 25.0 && bmi <= 29.9) {
    console.log(`your bmi score is ${bmi} and you are overweight`)
} else if (bmi >= 30.0) {
    console.log(`your bmi score is ${bmi} and you are obese`)
}

for (let i = 10; i >= -20; i--) {
    if (i % 2 == 0) {
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

let name = "javastring"
let reverse = "";
console.log(length.name);

// 2nd assignment

// first question
var thisisAnarray = ["nirbhay", "kumar", "jatin", "harsh", "gagan"];
thisisAnarray.forEach((ele) => {
    console.log(ele);
});

//second question
let str = "nirbhay ''";
for (let g = 0; g <= str.length; g++) {
    if(str[g]==='){
        console.log("yes it contains")
    }
    console.log(str[g]);
}
console.log(typeof (str));
console.log(str)

// third question
let strng = "nirbhay";
let reversestr = "";
for (let s = strng.length - 1; s >= 0; s--) {
    reversestr = reversestr + strng[s];
};

console.log(reversestr);

//fourth question
let obj = {
    name: "nirbhay",
    lastname: "kumar",
    age: 20,
    email: "nirbhay@gmail.com",
};
delete obj.lastname;
console.log(obj);

//fifth question
obj.designation = "SD";
console.log(obj);

//sixth question
let digits = [56, 6, 7, 34, 345, 22, 44];
let sumdigits = digits.reduce(function (acc, val) {
    return acc + val;
}, 0);

//seventh question
let number = 35;
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        console.log(`${number} is not a prime number`);
        break
    }
    else console.log(`${number} is a prime number`);
    break
};

// //8th question
let firstval = 1;
let secondval = 1;
let sum=0;
for (let d = 0; d <= 5; d++) {
    sum=firstval+secondval;
    firstval = secondval;
    secondval=sum;
    console.log(secondval);

}

//ninth question
let num = 0;
let fact = 1;
if (num == 0) {
    console.log(`The factorial of ${num} is 1`)
}
else if(num!==0){
    while(num != 1) {
    fact = fact * num;
    num--;
}
}
console.log(fact);

// qusetion 10
for(let o=1;o<=100;o++)
{
    if(o%2!=0) console.log(o);
}