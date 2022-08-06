

function checktime(time){
    
    if(time>=5 && time<=11){
        console.log("this is morning")
    }
    else if(time>=12 && time<=16){
        console.log("this is afternoon")
    }
    else if(time>=17 && time<=20){
        console.log("this is evening ")
    }
    else if(time>=21 && time<24){
        console.log("this is night")
    }

}
    

checktime(7)
checktime(15)
checktime(17)
checktime(22)

