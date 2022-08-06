
function printResult(grade){

    switch(grade){
        case "A+":{
            console.log("Distinction")
            break
        }
        case "A":{
            console.log("First class")
            break
        }
        case "B":{
            console.log("Pass")
            break
        }
        case "C":{
            console.log("Fail")
            break
        }
        default :{
            console.log ("Invalid value")
        }

    
    }
    
}

printResult("A+")
printResult("A")
printResult("B")
printResult("C")
printResult("D")

