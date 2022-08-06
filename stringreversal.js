
//var x ="Mumbai"
//var output = x[5]+x[4]+x[3]+x[2]+x[1]+x[0]
//console.log(output)

//var x = "Mumbai is a city"


function reversestring(str){
    var output=""
    for( let i=str.length-1;i>=0;i--){
        output=output+str[i]
    }
    console.log(output)
}

reversestring("Mumbai")
reversestring("Kunal")
reversestring("Mumbai is a city")