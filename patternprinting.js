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
// for (let r = 1; r <= 5; r++) 
// {
//     let sum=0
//     for (let n = 1; n <= r; n++) 
//     {
//         sum+=1
//        process.stdout.write(`${sum}`)
//     }
//     console.log()
// }

// Character printing 
// for (let r = 1; r <= 5; r++) 
// {
//     let ascii=65
//     for (let n = 1; n <= r; n++) 
//     {
//         process.stdout.write(`${String.fromCharCode(ascii)}`)
//         ascii+=1
//     }
//     console.log()
// }

// inverted right angle triangle
// for(let r=1;r<=5;r++)
// {
//     for(let s=5;s>=r;s--)
//     {
//         process.stdout.write("* ")
//     }
//     console.log()
// }

//left slanted right angle triangle --combo of inverted triangleand right angle traingle
for(let r=1;r<=5;r++)
{
    for(let s=5;s>=r;s--)
    {
        process.stdout.write(" ")
    }
    for(let c=1;c<=r;c++)
    {
        process.stdout.write("*")
    }
    console.log()
}

//cross-- only works for odd no. only
for(let r=1;r<=7;r++)
{
    for(let c=1;c<=7;c++)
    {
        if(r==c || r+c==8)
        {
            process.stdout.write("*")
        }
        else process.stdout.write(" ")
    }
    console.log()
}

//v shape
for(let r=1;r<=5;r++)
{
    for(let c=1;c<=9;c++)
    {
        if(r==c || r+c==10)
        {
            process.stdout.write("*")
        }else  process.stdout.write(" ")
    }
    console.log()
}