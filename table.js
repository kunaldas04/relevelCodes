
function printable(num){

    for(let i=1; i<=num ;i++){


        //prient table of i.

        let table=""
        for(j=1;j<=10;j++){
            table+=(i*j).toString()+" "
        }
        console.log(table)
    }  


}

printable(10)