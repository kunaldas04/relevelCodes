
function indeor(a,b,c){
    if(a>b && b>c){
        console.log("Decreasing")
    }
    else if(a<b && b<c){
        console.log("Increasing")
    }
     else{
        console.log("Neither")
    }
}

indeor(12,45,87)
indeor(90,32,22)
indeor(4,9,1)