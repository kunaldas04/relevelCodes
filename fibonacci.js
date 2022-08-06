
function findNthpositioninfibseries(n){
    var result
    if(n<1) return -1
    if(n==1) return 0
    if(n==2) return 1
    let i=2
    let series =[0,1]
    while(i<=n-1){
        let newnum =series[i-1]+series[i-2]
        series.push(newnum)
        i++
    }
    console.log(series[i-1])

}
findNthpositioninfibseries(5)
findNthpositioninfibseries(24)
