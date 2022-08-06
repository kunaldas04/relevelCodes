
function getdigitsum(num){
    var numstr = num.toString()

    if(numstr.length<3){
        console.log(-1)
        return
    }
    let sum = 0
    for (let i=1; i<=numstr.length-2; i++){
        sum+=Number(numstr[i])
    }
    console.log(sum)
}
getdigitsum(123456)
getdigitsum(12)
getdigitsum(9)
getdigitsum(7071)