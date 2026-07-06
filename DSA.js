// let s="   hello world "
// let arr=s.split(" ")
// console.log(arr)

// var lengthOfLastWord = function (s) 
// {
//     let arr = s.split(" ")
//     let word
//     for (let i=0;i<arr.length;i++) 
//     {
//         if (arr[i] != ``) 
//         {
//             word=arr[i]
//         }
//     }
//     return word.length
// }

// console.log(lengthOfLastWord("   Hel lo wo rld "))

// var plusOne = function(digits) {
//     let arr=[]
//     let str
//     let number=0
//     let i=0
//     while(i!=digits.length)
//     {
//         number=number+digits[i]
//         number=number*10
//         i++
//     }
//     number=(number/10)+1
//     str=String(number)
//     for(let j=0;j<str.length;j++)
//     {
//         arr.push(Number(str[j]))
//     }
//     return arr
// }

// console.log(plusOne([9]))

// var addBinary = function (a, b) {
//     const bin1 = a
//     const bin2 = b
//     const sum = parseInt(bin1, 2) + parseInt(bin2, 2)
//     let res = sum.toString(2)
//     res=String(res)
//     return typeof res
// }

// console.log(addBinary("11111", "1010"))

// var sqrt=function(number)
// {
//     let i=2
//     while(i<number)
//     {
//         let count=0
//         if(count<=1)
//         {
//             if(number%i==0)
//             {
//                 count++
//             }
//         }
//         else{
//             return sqrt(number-1)
//         }
//         i++
//     }
// }
// console.log(sqrt(112))



// var mySqrt=function(x)
// {
//     let i=2
//     while(i<x)
//     {
//         if(x%i==0 && i*i==x)
//         {
//             return i
//         }
//         else {
//             i++
//         }
//     }
//     return mySqrt(x-1)
// }
// debugger
// console.log(mySqrt(675))


var getPrimefactor=function(x)
{
    let divisor=x
    let i=2
    let arr=[]
    while(divisor!=1)
    {
        if(divisor%i==0)
        {
            divisor=divisor/i
            arr.push(i)
        }
        else{
            i++
        }
    }
    return arr
}
console.log(getPrimefactor(654372))