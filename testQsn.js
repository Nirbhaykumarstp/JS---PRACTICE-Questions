// // leap year
// function isLeap(year)
// {
//     if((year%4==0 && year%100!==0) || year%400==0)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(isLeap(2024))

// find desired pairs
// function findPairs(arr,k)
// {
//     if(k==0 || arr.length==0)
//     {
//         return -1
//     }
//     else{
//         let count=0
//         let start=0
//         let end=arr.length-1
//         while(start!=end)
//         {
//             if(arr[start]==arr[end])
//             {
//                 if((start*end)%k==0)
//                 {
//                     count++
//                 }
//             }
//             start++
//             end--
//         }
//         return count
//     }
// }
// console.log(findPairs([1,2,3,4],2))

//check for perfect number
function isPerfect(num)
{
    let dec=num-1
    let sum=0
    while(dec!=0)
    {
        if(num%dec==0)
        {
            sum=sum+dec
        }
        dec--
    }
    if(sum==num)
    {
        return true
    }
    else{
        return false
    }
}
console.log(isPerfect(28))

// sum of digits of number
function sumOfdigits(num)
{
    if(num%10==0)
    {
        return num
    }
    else
    {
        let sum=0
        while(num!=0)
        {
            sum=sum+num%10
            num=Math.floor(num/10)
        }
        return sum
    }
}
console.log(sumOfdigits(2))

function reverseNum(num)
{
    if(num%10==0)
    {
        return num
    }
    else{
        let reversedNum
        while(num!=0)
        {
            reversedNum=(reversedNum+(num%10))*10
            num=Math.floor(num/10)
        }
        return reversedNum
    }
}
console.log(reverseNum(234))


