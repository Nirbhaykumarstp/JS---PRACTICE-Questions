// console.log("*")
// console.log("***")
// console.log("*****")
// console.log("*******")
// console.log("*********")

// for (let r = 1; r <= 5; r++) {
//     let star = ""
//     let row = 0
//     if (row <= 5) {
//         for (let c = 1; c <= r + row; c++) {
//             star += "*"
//             row++
//         }
//         console.log(star)
//     }
// }

// process.stdout.write("hello ")

// Number printing
// let row=5
// for (let r = 1; r <= row; r++) 
// {
//     let sum=0
//     for (let c = 1; c <= r; c++) 
//     {
//         sum+=1
//        process.stdout.write(`${sum}`)
//     }
//     console.log()
// }

// Character printing
// let row=5 
// for (let r = 1; r <= 5; r++) 
// {
//     let ascii=65
//     for (let c = 1; c <= r; c++) 
//     {
//         process.stdout.write(`${String.fromCharCode(ascii)}`)
//         ascii+=1
//     }
//     console.log()
// }

// inverted right angle triangle
//let row=5
// for(let r=1;r<=row;r++)
// {
//     for(let s=5;s>=r;s--)
//     {
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//left slanted right angle triangle --combo of inverted triangleand right angle traingle
// let row=5
// for(let r=1;r<=row;r++)
// {
//     for(let s=5;s>=r;s--)
//     {
//         process.stdout.write(" ")
//     }
//     for(let c=1;c<=r;c++)
//     {
//         process.stdout.write("*")
//     }
//     console.log()
// }

//cross-- only works for odd no. only
// let row=9
// for(let r=1;r<=row;r++)
// {
//     for(let c=1;c<=row;c++)
//     {
//         if(r==c || r+c==row+1)
//         {
//             process.stdout.write("*")
//         }
//         else process.stdout.write(" ")
//     }
//     console.log()
// }

//v shape
// let row=6
// for(let r=1;r<=row;r++)
// {
//     for(let c=1;c<=(2*row)-1;c++)
//     {
//         if(r==c || r+c==2*row)
//         {
//             process.stdout.write("*")
//         }else  process.stdout.write(" ")
//     }
//     console.log()
// }

// var romanTointeger=function(s)
// {
//     let I=1
//     let V=5
//     let X=10
//     let L=50
//     let C=100
//     let D=500
//     let M=1000
//     let i=0

//     let integer=0
//     while(i<s.length)
//     {
//         if(s[i]=="V")
//         {
//             integer=integer+V
//         }
//         else if(s[i]=="I")
//         {
//             integer=integer+I
//         }
//         else if(s[i]=="X")
//         {
//             integer=integer+X
//         }
//         else if(s[i]=="M")
//         {
//             integer=integer+M
//         }
//         else if(s[i]=="L")
//         {
//             integer=integer+I
//         }
//         else if(s[i]=="D")
//         {
//             integer=integer+D
//         }
//         i++
//     }
//     return integer
// }

// console.log(romanTointeger("IX"))


// var longestCommonPrefix = function(strs) {
//     let word=""
//     for(let i=0;i<strs.length;i++)
//     {
//         let char=strs[0][i]
//         for(let j=0;j<strs[i].length;j++)
//         {
//             if(char!=strs[i][j]){
//                 return word
//             }
//         }
//         word=word+char   
//     }
//     return word
// };

// console.log(longestCommonPrefix(["flower","flow","flight"]))

var isValid = function(s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
console.log(isValid("{}"))


var Duplicates = function (nums) {
    let counter=0
    let newArr=[]
    for(let i=0;i<nums.length;i++)
    {
        let val=nums[i]
        for(let j=i+1;j<nums.length;j++)
        {
            if(val==nums[j] && !newArr.includes(val))
            {
                newArr[i]=val
            }
        }
    }
    return newArr
};

console.log(Duplicates([0,0,1,1,1,2,2,3,3,4]))

var removeElement = function(nums, val) {
    if(nums.length==0)
    {
        return 0
    }
    let count=0
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]==val)
        {
            nums[i]="_"
            count++
        }
    }
    return nums
}
let arr=[3,2,2,3]
console.log(removeElement(arr,2))