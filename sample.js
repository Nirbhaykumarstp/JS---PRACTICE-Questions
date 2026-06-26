// let marks = 50;
// if (marks >= 90 && marks <= 100) {
//     console.log("you got grade- A")
//     //grade="A";
// }
// else if (marks >= 80 && marks <= 89) {
//     console.log("you got grade-B")
//     //grade="B";
// }
// else if (marks >= 70 && marks <= 79) {
//     console.log("you got grade-C")
//     //grade="C";
// }
// else if (marks >= 60 && marks <= 69) {
//     console.log("you got grade- D")
//     //grade="D";
// }
// else console.log("Fail");

// let age = 20;
// let ticketprice = undefined;
// if (age >= 10 && age <= 20) {
//     ticketprice = 20;
// }
// else if (age >= 21 && age <= 40) {
//     ticketprice = 80;
// }
// else if (age >= 41 && age <= 100) {
//     ticketprice = 100;
// }

// let year = 2026;
// if (year % 4 == 0) {
//     console.log(`${year} is a leap year`);
// }
// else console.log("not a leap year");

// let pamount = 999;
// let damount = undefined;
// if (pamount >= 500 && pamount <= 1000) {
//     damount = pamount - (10 * pamount / 100);
//     console.log(`you have to pay ${damount}`);
// } else if (pamount >= 100 && pamount <= 499) {
//     damount = pamount - (5 * pamount / 100);
//     console.log(`you have to pay ${pamount}`);
// }
// else console.log(`you have to pay ${pamount} amount is less than discount range`)

// let weight = 60;
// let height = 1;
// let bmi = weight / (height) ** 2;
// if (bmi < 18.5) {
//     console.log(`your bmi score is ${bmi} amd you are underweight`)
// }
// else if (bmi >= 18.5 && bmi <= 24.9) {
//     console.log(`your bmi score is ${bmi} and you are healthy`)
// } else if (bmi >= 25.0 && bmi <= 29.9) {
//     console.log(`your bmi score is ${bmi} and you are overweight`)
// } else if (bmi >= 30.0) {
//     console.log(`your bmi score is ${bmi} and you are obese`)
// }

// for (let i = 10; i >= -20; i--) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// let students={
//     name:"Nirbhay",
//     age:20,
//     marks:64,
// }
// students.grade="c";
// console.log(students);
// console.log(students["marks"]);

// let name = "javastring"
// let reverse = "";
// console.log(length.name);

// 2nd assignment

// first question
// var thisisAnarray = ["nirbhay", "kumar", "jatin", "harsh", "gagan"];
// thisisAnarray.forEach((ele) => {
//     console.log(ele);
// });

//second question
// let str = "nirbhay ''";
// for (let g = 0; g <= str.length; g++) {
//     if(str[g]==='){
//         console.log("yes it contains")
//     }
//     console.log(str[g]);
// }
// console.log(typeof (str));
// console.log(str)

// third question
// let strng = "nirbhay";
// let reversestr = "";
// for (let s = strng.length - 1; s >= 0; s--) {
//     reversestr = reversestr + strng[s];
// };

// console.log(reversestr);

//fourth question
// let obj = {
//     name: "nirbhay",
//     lastname: "kumar",
//     age: 20,
//     email: "nirbhay@gmail.com",
// };
// delete obj.lastname;
// console.log(obj);

//fifth question
// obj.designation = "SD";
// console.log(obj);

// //sixth question
// let digits = [56, 6, 7, 34, 345, 22, 44];
// let sumdigits = digits.reduce(function (acc, val) {
//     return acc + val;
// }, 0);

//seventh question
// let number = 35;
// for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//         console.log(`${number} is not a prime number`);
//         break
//     }
//     else console.log(`${number} is a prime number`);
//     break
// };

// //8th question
// let firstval = 0;
// let secondval = 1;
// let sum=0;
// console.log(secondval);
// for (let d = 0; d <= 5; d++) {
//     sum=firstval+secondval;
//     firstval = secondval;
//     secondval=sum;
//     console.log(secondval);
// }

//ninth question
// let num = 0;
// let fact = 1;
// if (num == 0) {
//     console.log(`The factorial of ${num} is 1`)
// }
// else if(num!==0){
//     while(num != 1) {
//     fact = fact * num;
//     num--;
// }
// }
// console.log(fact);

// qusetion 10
// for(let o=1;o<=100;o++)
// {
//     if(o%2!=0) console.log(o);
//}


// NEXT ASSIGNMENT
//q1--
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

// function reverse(num)
// {
//     let rev=0;
//     let digit=0;
//     while(num)
//     {
//         digit=(num%10);
//         rev=rev+digit;
//         rev=rev*10;
//         num=Math.floor(num/10);
//     }
//     return rev;
// }

// console.log(reverse(12345));

//q2--
// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function checkpalindrome(str) {
//     let revrs = "";
//     for (let i = (str.length) - 1; i >= 0; i--) {
//         revrs = revrs + str[i];
//     }
//     if (revrs == str) {
//         console.log(`${str} is an palindrome`);
//     } else console.log(`${str} is not a palindrome`);
// }

// checkpalindrome("madam");

//q3
// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// q4
// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// function sortalphabetically(word) 
// {
//     const arr = word.split("");
//     arr.sort();
//     const sortedstr = arr.join("");
//     return sortedstr;
// }

// const word="Yuvraj Singh";
// console.log(sortalphabetically(word));
// const word2="ViratKohLi";
// console.log(sortalphabetically(word2));

//q5
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
// function capitalizeletter(sentnc) {
//     if (sentnc) {
//         let arr = sentnc.split(" ");
//         for (let i = 0; i < arr.length; i++) {
//             arr[i]=arr[i].toUpperCase();
//         }
//         sentnc = arr.join(" ");
//         return sentnc;
//     }
// }
// let sentnc = "hello need any help";

// console.log(capitalizeletter(sentnc));

//q6  Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
//Example string : 'Web Development Tutorial'
//Expected Output : 'Development'

// function FindMaxWord(sentence) {
//     let arr = sentence.split(" ")
//     let largeword = arr[0]

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i].length > largeword.length) {
//             largeword = arr[i]
//         }
//     }

//     return largeword
// }
// let sentence = "web development tutorials is good for learning ithasgreatexperience";
// console.log(FindMaxWord(sentence))

//q7
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

// function vowelcount(sentnc)
// {
//     var countvowel = 0;
//     for (let i = 0; i < sentnc.length; i++) {
//         if (sentnc[i] == "a" || sentnc[i] == "e" || sentnc[i] == "i" || sentnc[i] == "o" || sentnc[i] == "u" || sentnc[i] == "A" || sentnc[i] == "E" || sentnc[i] == "I" || sentnc[i] == "O" || sentnc[i] == "U") {
//             countvowel = countvowel + 1;
//         }
//     }
//     return countvowel;
// }
// let sentnc = "The Quick Brown Fox";
// console.log(vowelcount(sentnc));

//q8
// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not using recursion.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// function CheckPrimeNo(number,divisor){
//     if(number==divisor || number==2){
//         console.log(`${number} is a prime number`)
//         return
//     }
//     else if(number%divisor==0){
//         console.log(`${number} is not a prime number`)
//         return
//     }
//     else CheckPrimeNo(number,divisor+1)
// }

// CheckPrimeNo(3,2)

//q9
//Create a for loop that prints the first 10 even numbers.

// for(let i=0;i<20;i++)
// {
//     if(i%2==0){
//         console.log("The even no is",i);
//     }
// }

//q10  Find the sum of all quotients when dividing numbers 1 to 9 by 3

// let number=[1,2,3,4,5,6,7,8,9]
// let sumOfQuotients=number.reduce(function(sum,val){
//     return sum+Math.floor(val/3)
// },0)
// console.log(sumOfQuotients)


// let i=0
// let sum=0
// while(i!==number.length-1){
//     sum=sum+number[i]/3
//     i++
// }
// console.log(sum)

//destructuring an array
// let arr = [4, 5, 6, 6, 7, 5, 4, 3, 3]
// let [a, , , ...rest] = arr    
// console.log(a, rest)

let obj = { id: 1, vid: 2, cid: 3, did: 4 }
var { id, vid, cid, did } = obj
console.log(id, vid, cid, did)

let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }    //this is an spread operator
console.log(obj1)

let obj2 = {
    name: "nirbhay",
    surname: "kumar",
    age: 20
}
console.log({ ...obj2, name: "sushil" })


//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays

// var result = function (a, b) {
//     if ((a && b) && (a.length == b.length)) {
//         for (let s = 0; s < b.length; s++) {
//             for (let o = 0; o < a.length; o++) {
//                 if (Math.sqrt(b[s]) == a[o]) {
//                     return true
//                 } else return false
//             }
//         }
//     } else return "Array are of not same length or arrays are empty"
// }
// let a = []
// let b = []
// console.log(result(a,b))

// console.log([].length)


// //next program
// function isValidWalk(walk) {
//   //insert brilliant code here
//   if(walk){
//     let minutes=0
//     for(let d=0;d<walk.length;d++)
//       {
//         if(walk[d]=="n" || walk[d]=="s" || walk[d]=="e" || walk[d]=="w"){
//           minutes=minutes+1
//         }
//       }
//     if(minutes==10){
//       return true
//     }else return false    
//   }else return 0
// }
// console.log(isValidWalk(["n","s","w","e"]))

// let a=[5,6,7,8,9,3,4]
// let c=[...a]    // this will make an copy of the array and not storing the refrence of a
// console.log(a)
// console.log(c)

// let a = [5,6,7,8,9,3,4]
// let c = a     // this is passing the refrence not the copy of that array
// console.log(a)
// c[0] = 10

// console.log(c)
// console.log(a)

// let h=[1,2]
// let l=[3,4]
// let o=[...h,...l]   // this will crreate a new array o in a memory 
// o=[[...h],[...l]]  //created a nested array using spread operator
// console.log(o)
console.log(-1+89)
