
function cangotopark(temp, israining){
    if(temp>=20 && temp<=25 && !israining){
        console.log("children can go to park")
    
    }else if (temp>=18 && temp<=20 && israining){
        console.log("children can't go to park")
    }else{
        console.log ("invalid")
    }
}
 cangotopark(24)
 cangotopark(19)
 cangotopark(10)