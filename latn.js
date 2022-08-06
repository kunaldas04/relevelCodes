
function latn(a,b,c){
    if(a>b && a>c){
        console.log(a+ " is largest")
    }else if(b>a && b>c){
        console.log(b+ " is largest")
    }else{
        console.log(c+ " is largest")
    }
}

latn(25,15,20)
latn(32,90,12)
latn(9,4,44)