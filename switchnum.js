
function identifynum(num){
    if(num>0){
        console.log("positive")
    }else if(num<0){
        console.log("negative")
    }else if (num==0){
        console.log("zero")
    }else{
        console.log("invalid")
    }
}
identifynum(10)
identifynum(-10)
identifynum(0)
identifynum("abc")