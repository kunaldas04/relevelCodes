
function printrbmt(num){
    for(let i=0;i<=100;i++){
        if(i%15 ==0){
            console.log(i,"=>mindbuzz")
        }else if (i%3== 0){
            console.log(i,"=>relevel")
        }else if (i%5 ==0){
            console.log(i,"=>buzz")
        }else{
            console.log(i,"=>tse number condition fail")
        }
    }
}

printrbmt(3)
printrbmt(5)
printrbmt(15)