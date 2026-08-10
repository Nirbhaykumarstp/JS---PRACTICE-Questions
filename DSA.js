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
// console.log(mySqrt(25))


// var getPrimefactor=function(x)
// {
//     let divisor=x
//     let i=2
//     let arr=[]
//     while(divisor!=1)
//     {
//         if(divisor%i==0)
//         {
//             divisor=divisor/i
//             arr.push(i)
//         }
//         else{
//             i++
//         }
//     }
//     return arr
// }
// console.log(getPrimefactor(654372))

// class Node
// {
//     constructor(data)
//     {
//         this.data=data
//         this.next=null

//     }
// }
// class LinkedList
// {
//     constructor(head)
//     {
//         this.head=null
//     }
//     append(value)
//     {
//         let newNode=new Node(value)
//         if(!this.head)
//         {
//             this.head=newNode
//             return
//         }
//         let current=this.head
//         while(current.next)
//         {
//             current=current.next
//         }
//         current.next=newNode
//     }
//     prepend(value)
//     {
//         let newNode = new Node(value)  
//         if(this.head)
//         {
//             newNode.next = this.head    
//         }
//         this.head = newNode            
//     }
// }

// let list=new LinkedList()

// console.log(list)


var getNoways=(n)=>{
    if(n==0 || n==1)
        return 1
    let left=getNoways(n-1)
    let right=getNoways(n-2)
    return left+right
}
console.log(getNoways(50))

//print no. from 1 to n using recursion
function increment(i,n)
{
    if(i>n)
        return
    console.log(i)
    increment(i+1,n)
}
increment(1,5)

//print no from n to 1 using recursion
function decrement(i,n)
{
    if(i<1)
        return
    console.log(i)
    decrement(i-1,n)
}
decrement(10,10)

//print the no. from n to 1 with backtracking NO USE OF i-1
function backtracking_D(i,n)
{
    if(i>n)            //base case ko do tarike se lagaya ja sakta hai age se bhi or piche se bhi
        return
    backtracking_D(i+1,n)
    console.log(i)
}
backtracking_D(1,5)

//print the no.from 1 to n using backtracking (no use increament operator)
function backtracking_E(i,n)
{
    if(i<1)
        return
    backtracking_E(i-1,n)
    console.log(i)
}
backtracking_E(10,10)

// Parametrized recursion
function summation(i,sum)
{
    if(i<1)
    {
        console.log(sum)
        return
    }
    summation(i-1,sum+i)
}
debugger
summation(5,0)

function reverseArray(arr,i)
{
    if(i>=arr.length-i-1)
        return arr
    let temp=arr[i]
    arr[i]=arr[arr.length-i-1]
    arr[arr.length-i-1]=temp
    return reverseArray(arr,i+1)
}

let numbers=[1,2,3,4,5,6,7]
numbers=reverseArray(numbers,0)
console.log(numbers)

function swap(arr, l, r)
{
    console.log(arr[l],arr[r])
    let c=arr[r]
    arr[r]=arr[l]
    arr[l]=c
    console.log(arr[l],arr[r])
}

function reverse(l,r)
{
    if(l>=r)
    {
        return arr
    }
    else{
        swap(arr,l,r)
        return reverse(l+1,r-1)
    }
}
let arr=[55,32,4,52,23,45]
console.log(reverse(0,arr.length-1))

//A string is palindrome or not using recursion
function isPalindrome(l,r)
{
    if(l==r)
    {
        return true
    }
    else if(str[l]==str[r])
    {
        return isPalindrome(l+1,r-1)
    }
    else 
        return false
}
let str="racecar"
console.log(isPalindrome(0,str.length-1))

// multiple recursion call--fibonacci

function findTerm(n)
{
    if(n<=1)
        return n
    else 
    {
        let last=findTerm(n-1)
        let secondLast=findTerm(n-2)
        return last+secondLast
    }
}
console.log(findTerm(3))

//staircase climbing
function noofWays(n)
{
    if(n<=2)
        return n
    else{
        let oneStair=noofWays(n-1)
        let twoStair=noofWays(n-2)
        return oneStair+twoStair
    }
}
console.log(noofWays(3))

// //subsequences using multiple recursion and backtracking--pattern print subsequences whose sum is k
function subsequences(i,sub,check,sum)
{
    if(i>=arr.length)
    {
        if(check==sum)
        {
            console.log(sub)
        }
        return
    }
    let val=arr[i]
    sub.push(val)
    sum=sum+val
    subsequences(i+1,sub,check,sum)  // take the subsequence
    sub.pop()
    sum=sum-val
    subsequences(i+1,sub,check,sum)   // not take the subsequence
}
const arr=[3,2,5]
subsequences(0,[],5,0)