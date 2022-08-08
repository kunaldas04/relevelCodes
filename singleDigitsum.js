
function findsingledigitsum(num){
    //1.convert number to string.
    //=> because u can't find length a number
    const numstr = num.toString()
    if(numstr.length==1){
        return numstr
    }
    let sum=0
    //2. sum all digit of the number.
    for (i=0; i<numstr.length; i++){
          sum+=Number(numstr[i])
    }
    if(sum>9){
        findsingledigitsum(sum)
    }else{
        console.log(sum)
    }
    

}
findsingledigitsum(12345)