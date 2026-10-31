// Reverse an array
function reverseArray(a) {
    if (a.length == 1) 
    {
        return a
    }
    else 
    {
        let startIndex = 0
        let lastIndex=a.length-1
        while(!(startIndex==lastIndex))
        {
            let temp=a[startIndex]
            a[startIndex]=a[lastIndex]
            a[lastIndex]=temp
            startIndex++
            lastIndex--
        }
        return a
    }
}

console.log(reverseArray([1,2,3]))

// Largest No. in an array
function findLargest(numbers)
{
    if(numbers.length==1)
    {
        return numbers[0]
    }
    else{
        
        for(let i=0;i<numbers.length;i++)
        {
            let largest=numbers[i]
           for(let j=0;j<numbers.length;j++)
            {
                if(numbers[j]>=largest)
                {
                    largest=numbers[j]
                }
            }
            return largest
        }
        
    }
}
console.log(findLargest([54,84,64,45]))

// smallest number in an array
function findSmallest(numbers)
{
    if(numbers.length==1)
    {
        return numbers[0]
    }
    else{
        
        for(let i=0;i<numbers.length;i++)
        {
            let smallest=numbers[i]
           for(let j=0;j<numbers.length;j++)
            {
                if(numbers[j]<=smallest)
                {
                    smallest=numbers[j]
                }
            }
            return smallest
        }
        
    }
}
console.log(findSmallest([-2,-4,-10,59,100,-10]))

// Sum of an array
function sumArray(arr)
{
    if(arr.length==1)
    {
        return arr[0]
    }
    else
    {
        let sum=0
        for(let i=0;i<arr.length;i++)
        {
            sum=sum+arr[i]
        }
        return sum
    }
}

console.log(sumArray([2,3,4,5,6,7,8,9,0]))

/// count even Odd numbers in an array
function countEvenOdd(arr)
{
    let countEven=0
    let countOdd=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            countEven=countEven+1
        }
        else{
            countOdd=countOdd+1
        }
    }
    return{
        "countEven":countEven,
        "countOdd":countOdd
    }
}
console.log(countEvenOdd([3,45,6,7,85,4]))

// Find second largest element in an Array
function secondLargest(arr)
{
    for(let i=0;i<arr.length-1;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>=arr[j])
            {
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    console.log(arr)
    return arr[arr.length-2]
}
console.log(secondLargest([3,2,45,35,4,34,3,4553,22,44,223,98,43,76,45,223]))

// optimal solution
function secondLargest(arr)
{
    let largest=-Infinity
    let s_largest=-Infinity
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest)
        {
            s_largest=largest
            largest=arr[i]
        }
        else
        {
            if(arr[i]>s_largest && arr[i]!=largest)
            {
                s_largest=arr[i]
            }
        }
    }
    return s_largest
}
console.log(secondLargest([8,6,7,9,4,8.5,8,8.5,8.1,8.9,9]))

//Searching for an elemnt

function searchElem(target,arr)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==target)
        {
            return i
        }
    }
    return -1
}
console.log(searchElem(5,[1,2,3,4,5,6,7,8,9,0]))


function binarySearch(target,arr)
{
    let start=0
    let end=arr.length-1

    while(start<=end)
    {    
        let mid=Math.floor((start+end+1)/2)
        if(arr[mid]==target)
        {
            return mid
        }
        else if(target<arr[mid])
        {
            end=mid-1
        }
        else if(target>arr[mid])
        {
            start=mid+1
        }
    }
    return -1
}

console.log(binarySearch(5,[3,4,5,6,7,8,9,10,12]))

// Remove the dublicates from sorted array
function removeDuplicate(arr)
{
    let duplicate=arr[0]
    let i=1
    while(i<arr.length)
    {
        if(arr[i]==duplicate)
        {
            arr.splice(i,1)
            duplicate=arr[i]
        }
        else{
            duplicate=arr[i]
        }
        i++
    }
    return arr
}
console.log(removeDuplicate([1,1,2,3,4,4,5,6,6,7,44,55]))

function removeDuplicate(arr)
{
    if(arr.length==0)
    {
        return arr
    }
    let i=1
    while(i<arr.length)
    {
        if(arr[i]==arr[i-1])
        {
            arr.splice(i,1)
        }
        else{
            i++
        }
    }
    return arr
}
console.log(removeDuplicate([1,1,2,3,4,4,4,5,6,6,7,44,55,88,99,100,34,53,233,2233,22334,221123]))

function moveAllzrs(arr)
{
    if(arr.length==1)
    {
        return arr
    }
    else
    {
        let zeroElement=0
        while(zeroElement<arr.length)
        {
            if(arr[zeroElement]==0 && zeroElement<arr.length)
            {
                let j=zeroElement+1
                while(j<arr.length)
                {
                    if(arr[j]!=0)
                    {
                        let temp=arr[j]
                        arr[j]=arr[zeroElement]
                        arr[zeroElement]=temp
                        j++
                        zeroElement++
                    }
                    else{
                        j++
                    }
                }
            }
            zeroElement++
        }
        return arr
    }
}
console.log(moveAllzrs([0,3,8,5,0,7,8,5,7]))

// Rotate array by one unit
function rotateArray(list)
{
    let temp=list[list.length-1]
    for(let i=list.length-2;i>=0;i--)
    {
        list[i+1]=list[i]
    }
    list[0]=temp
    return list
}
console.log(rotateArray([3,4,5,6,7]))

//frequency of each element-- factory function
function getFrequency(arr)
{
    let obj={}
    for(let i=0;i<arr.length;i++)
    {
        if(Object.keys(obj).includes(`${arr[i]}`))
        {
            obj[`${arr[i]}`]++
        }
        else{
            obj[`${arr[i]}`]=1
        }
    }
    return obj
}
console.log(getFrequency([1,1,2,3,4,2]))