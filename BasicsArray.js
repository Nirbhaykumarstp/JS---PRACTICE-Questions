// Reverse an array
function reverseArray(a) {
    if (a.length == 1) {
        return a
    }
    else {
        let startIndex = 0
        let lastIndex = a.length - 1
        while (!(startIndex == lastIndex)) {
            let temp = a[startIndex]
            a[startIndex] = a[lastIndex]
            a[lastIndex] = temp
            startIndex++
            lastIndex--
        }
        return a
    }
}

console.log(reverseArray([1, 2, 3]))

// Largest No. in an array
function findLargest(numbers) {
    if (numbers.length == 1) {
        return numbers[0]
    }
    else {

        for (let i = 0; i < numbers.length; i++) {
            let largest = numbers[i]
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] >= largest) {
                    largest = numbers[j]
                }
            }
            return largest
        }

    }
}
console.log(findLargest([54, 84, 64, 45]))

// smallest number in an array
function findSmallest(numbers) {
    if (numbers.length == 1) {
        return numbers[0]
    }
    else {

        for (let i = 0; i < numbers.length; i++) {
            let smallest = numbers[i]
            for (let j = 0; j < numbers.length; j++) {
                if (numbers[j] <= smallest) {
                    smallest = numbers[j]
                }
            }
            return smallest
        }

    }
}
console.log(findSmallest([-2, -4, -10, 59, 100, -10]))

// Sum of an array
function sumArray(arr) {
    if (arr.length == 1) {
        return arr[0]
    }
    else {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
        return sum
    }
}

console.log(sumArray([2, 3, 4, 5, 6, 7, 8, 9, 0]))

/// count even Odd numbers in an array
function countEvenOdd(arr) {
    let countEven = 0
    let countOdd = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            countEven = countEven + 1
        }
        else {
            countOdd = countOdd + 1
        }
    }
    return {
        "countEven": countEven,
        "countOdd": countOdd
    }
}
console.log(countEvenOdd([3, 45, 6, 7, 85, 4]))

// Find second largest element in an Array
function secondLargest(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] >= arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
    return arr[arr.length - 2]
}
console.log(secondLargest([3, 2, 45, 35, 4, 34, 3, 4553, 22, 44, 223, 98, 43, 76, 45, 223]))

// optimal solution
function secondLargest(arr) {
    let largest = -Infinity
    let s_largest = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            s_largest = largest
            largest = arr[i]
        }
        else {
            if (arr[i] > s_largest && arr[i] != largest) {
                s_largest = arr[i]
            }
        }
    }
    return s_largest
}
console.log(secondLargest([8, 6, 7, 9, 4, 8.5, 8, 8.5, 8.1, 8.9, 9]))

//Searching for an elemnt

function searchElem(target, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i
        }
    }
    return -1
}
console.log(searchElem(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


function binarySearch(target, arr) {
    let start = 0
    let end = arr.length - 1

    while (start <= end) {
        let mid = Math.floor((start + end + 1) / 2)
        if (arr[mid] == target) {
            return mid
        }
        else if (target < arr[mid]) {
            end = mid - 1
        }
        else if (target > arr[mid]) {
            start = mid + 1
        }
    }
    return -1
}

console.log(binarySearch(5, [3, 4, 5, 6, 7, 8, 9, 10, 12]))

// Remove the dublicates from sorted array
function removeDuplicate(arr) {
    let duplicate = arr[0]
    let i = 1
    while (i < arr.length) {
        if (arr[i] == duplicate) {
            arr.splice(i, 1)
            duplicate = arr[i]
        }
        else {
            duplicate = arr[i]
        }
        i++
    }
    return arr
}
console.log(removeDuplicate([1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 44, 55]))

function removeDuplicate(arr) {
    if (arr.length == 0) {
        return arr
    }
    let i = 1
    while (i < arr.length) {
        if (arr[i] == arr[i - 1]) {
            arr.splice(i, 1)
        }
        else {
            i++
        }
    }
    return arr
}
console.log(removeDuplicate([1, 1, 2, 3, 4, 4, 4, 5, 6, 6, 7, 44, 55, 88, 99, 100, 34, 53, 233, 2233, 22334, 221123]))

function moveAllzrs(arr) {
    if (arr.length == 1) {
        return arr
    }
    else {
        let zeroElement = 0
        while (zeroElement < arr.length) {
            if (arr[zeroElement] == 0 && zeroElement < arr.length) {
                let j = zeroElement + 1
                while (j < arr.length) {
                    if (arr[j] != 0) {
                        let temp = arr[j]
                        arr[j] = arr[zeroElement]
                        arr[zeroElement] = temp
                        j++
                        zeroElement++
                    }
                    else {
                        j++
                    }
                }
            }
            zeroElement++
        }
        return arr
    }
}
console.log(moveAllzrs([0, 3, 8, 5, 0, 7, 8, 5, 7]))

// Rotate array by one unit
function rotateArray(list) {
    let temp = list[list.length - 1]
    for (let i = list.length - 2; i >= 0; i--) {
        list[i + 1] = list[i]
    }
    list[0] = temp
    return list
}
console.log(rotateArray([3, 4, 5, 6, 7]))

//frequency of each element-- factory function
function getFrequency(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(obj).includes(`${arr[i]}`)) {
            obj[`${arr[i]}`]++
        }
        else {
            obj[`${arr[i]}`] = 1
        }
    }
    return obj
}
console.log(getFrequency([1, 1, 2, 3, 4, 2]))

// Two sum problem-- give the indices of the numbers whsoe sum is equal to target
// function twoSum(arr,target)
// {
//     let indices
//     for(let start=0;start<arr.length-1;start++)
//     {
//         for(let next=start+1;next<arr.length;next++)
//         {
//             if(arr[start]+arr[next]==target)
//             {
//                 indices=[start,next]
//             }
//         }
//     }
//     return indices
// }
// console.log(twoSum([6,6,4,5,3,4,5],9))

function twoSum(arr, target) {
    let indices = []
    const obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!Object.keys(obj).includes(`${target - arr[i]}`)) {
            obj[`${arr[i]}`] = i
        }
        else {
            indices = [arr.indexOf(target - arr[i]), i]
            return indices
        }
    }
}
console.log(twoSum([4, 6, 5, 4, 7], 11))

// find largest difference in an array such that the largest appears after the smallest element
function getLargestDifference(arr) {
    let smallest = Math.min(...arr)
    arr = arr.slice(arr.indexOf(smallest) + 1)
    let largest = Math.max(...arr)
    console.log(largest - smallest)
}
getLargestDifference([7, 1, 5, 3, 6, 4])

// find largest difference in a array
// function getbigDifference(arr)
// {
//     let largest=-1
//     let smallest=arr[0]
//     for(let i=1;i<arr.length;i++)
//     {
//         if(arr[i]<=smallest)
//         {
//             largest=smallest
//             smallest=arr[i]
//         }
//     }
//     return largest-smallest
// }
// console.log(getbigDifference([7,1,5,3,6,4,53]))

// function getbigDifference(arr)
// {
//     let largest=-1
//     let smallest=arr[0]
//     for(let i=1;i<arr.length;i++)
//     {
//         if(arr[i]<=smallest)
//         {
//             largest=smallest
//             smallest=arr[i]
//         }
//         else if(arr[i]>=largest)
//         {
//             largest=arr[i]
//         }
//     }
//     return largest-smallest
// }
// console.log(getbigDifference([4,3,3,4,5,3,54,4,3,4,50]))
// function getLargestDifference(arr)
// {
//     let difference=-1
//     let min=arr[0]
//     for(let i=1;i<arr.length;i++)
//     {
//         if(arr[i]<=min && arr[i]-min>=difference)
//         {
//             min=arr[i]
//         }
//     }
// }
// getLargestDifference([2,7,1,3,10])

//Second level in solving array Problem

//1 find common elemnt in two array
// function findCommon(a1,a2)
// {
//     let common=[]
//     if(a1.length!=0 && a2.length!=0)
//     {
//         for(let i=0;i<a1.length;i++)
//         {
//             for(let j=0;j<a2.length;j++)
//             {
//                 if(a1[i]==a2[j])
//                 {
//                     common.push(a1[i])   
//                 }
//             }
//         }
//         return common
//     }
//     else{
//         return 0
//     }
// }

// console.log(findCommon([1,2,2,3],[2,2,3,4]))

function commonElement(a1, a2) {
    let uniqueElem = new Set(a1)
    let common = []
    for (let i = 0; i < a2.length; i++) {
        if (uniqueElem.has(a2[i]) && !common.includes(a2[i])) {
            common.push(a2[i])
        }
    }
    return common
}
console.log(commonElement([1, 2, 3, 5, 6], [6, 2, 3, 4, 5]))

// Find union of two arrays
function getUnion(a1, a2) {
    if (a1.length == 0) {
        return a2
    }
    else if (a2.length == 0) {
        return a1
    }
    else {
        let combined = [...a1, ...a2]
        combined = [...new Set(combined)]
        return combined
    }
}
console.log(getUnion([1, 2, 3, 1, 2, 3], [3, 4, 5, 6, 7, 8]))

// left rotate by k=1
function rotateLeft(arr) {
    let temp = arr[0]
    for (let i = 0; i <= arr.length - 2; i++) {
        arr[i] = arr[i + 1]
    }
    arr[arr.length - 1] = temp
    return arr
}
console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// left rotate array by k=2
function leftRotatebyk(arr, k) {
    if (k == 0) {
        return arr
    }
    else {
        let temp = arr[0]
        for (let i = 0; i <= arr.length - 2; i++) 
        {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = temp
        k--
        return leftRotatebyk(arr,k)
    }
}
console.log(leftRotatebyk([1,2,3,4,5],2))

//find the leaders in a array
function getLeaders(arr)
{
    let leaders=[arr[arr.length-1]]
    for(let i=arr.length-2;i>=0;i--)
    {
        if(arr[i]>arr[i+1])
        {
            leaders.push(arr[i])
        }
    }
    return leaders.sort((a,b)=>{
        return a-b
    })
}
console.log(getLeaders([16, 17, 4, 3, 5, 2]))

//sort array of 0 1 and 2s
let arr=[0,1,2,1,2]
arr=arr.sort((a,b)=>{
    return a-b
})
console.log(arr)

// function sort0sAnd1s(arr)
// {
//     for(let i=0;i<arr.length;i++)
//     {
//         for(let j=i+1;j<arr.length;j++)
//         {
//             if(i<arr.length-2 && arr[i]>arr[j])
//             {
//                 let temp=arr[i]
//                 arr[i]=arr[j]
//                 arr[j]=temp
//             }
//         }
//     }
//     return arr
// }
// console.log(sort0sAnd1s([0,2,1,2,2]))

function sort0sAnd1s(arr)
{
    let count0=0
    let count1=0
    let count2=0
    let sortedArr=[]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
            count0++
        }
        else if(arr[i]==1)
        {
            count1++
        }
        else{
            count2++
        }
    }
    for(let c0=0;c0<count0;c0++)
    {
        sortedArr.push(0)
    }
    for(let c1=0;c1<count1;c1++)
    {
        sortedArr.push(1)
    }
    for(let c2=0;c2<count2;c2++)
    {
        sortedArr.push(2)
    }
    return sortedArr
}
console.log(sort0sAnd1s([0,2,1,2,2,0,1,0]))