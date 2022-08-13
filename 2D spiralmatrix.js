
// 2d array (multi-dimensional array)


function printspiralmatrix(matrix){
    
    let startRow = 0
    let startcol = 0
    let endrow = matrix.length-1
    let endcol = matrix[0].length-1
    
    while(startRow<endrow && startcol<endcol){
    for(let i=startcol; i<=endcol; i++){
        console.log(matrix[startRow][i])
    }
    startRow = startRow+1
    for(let i=startRow; i<=endrow; i++){
        console.log(matrix[i][endcol])
    }
    endcol = endcol-1
    for(let i=endcol; i>=startcol; i--){
        console.log(matrix[endrow][i])
    }
    endrow = endrow-1
    for(let i=endrow; i>=startRow; i--){
        console.log(matrix[i][startcol])
    }
    startcol=startcol+1
  }
}

const matrix =[
               
               [1,2,3,4],
               [5,6,7,8],
               [9,10,11,12],
               [13,14,15,16]
]

printspiralmatrix(matrix)