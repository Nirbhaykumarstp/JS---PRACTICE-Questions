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
