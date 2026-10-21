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
