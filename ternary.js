
function isoddoreven(num){

    //modular operator %

    if(num%2==0){
        return"even"
    }else{
        return"odd"
    }
}

console.log(isoddoreven(20))
console.log(isoddoreven(203))
console.log(isoddoreven(210))


////  ternary operation

function checkifAlarge(a,b,c){
    return a>b? a>c? "large" : "nolarge" : "notlarge"
}

console.log(checkifAlarge(1,2,3))
console.log(checkifAlarge(3,2,1))
console.log(checkifAlarge(2,1,3))

