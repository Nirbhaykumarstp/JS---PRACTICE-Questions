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