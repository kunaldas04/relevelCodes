
function printwaveform(matrix){
    
    const colLength = matrix[0].length
    for(let i=0; i<colLength; i++){

        if(i%2==0){
            for(let j=0; j<matrix.length; j++){
                console.log(matrix[j][i])

            }
        }
        else{
            for( let j= matrix.length-1; j>=0; j--){
                console.log(matrix[j][i])
            }
        }
    }
}
const matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]

printwaveform(matrix)