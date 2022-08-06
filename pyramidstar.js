
// stars in pyramid pattern

function printstar(num){
    let star =""
    for(i=1;i<=num;i++){
        for (j=1; j<=num - i; j++){
            star += " ";
        }
        for (k=0; k<2*i-1; k++){
            star +="*";
        }
        star += "\n";
    }
    console.log(star)
}

printstar(5)