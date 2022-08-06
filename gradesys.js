
function gradesyst(score){
    if(score>=90){
        console.log("a")
    }else if(score>79 && score<90){
        console.log("b")
    }else if (score>59 && score<80){
        console.log("c")
    }else if (score>33 && score<60){
        console.log("d")
    }else{
        console.log("f")
    }
}

gradesyst(92)
gradesyst(82)
gradesyst(72)
gradesyst(52)
gradesyst(20)