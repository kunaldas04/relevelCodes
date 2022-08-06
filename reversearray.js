
 function reversearray(array){

    const result = []
    let j=0
    for(let i=array.length-1; i>=0 ; i--){
        result[j]=array[i]
        j++
    }
    console.log(result)
}

reversearray([1,2,3,4,5,6])
reversearray([1,4,6,7,9,10])
     