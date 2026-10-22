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
