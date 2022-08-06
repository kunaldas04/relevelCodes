
function calbricks(){

   let lofwall =24
   let hofwall =8
   let thickness =0.6
   let volofwall = lofwall*hofwall*thickness
   let volofbrick = 24*12*8
   let mortar = 15

   let noofbricks =(((100-mortar)/100)*volofwall*(100*100*100)/volofbrick)
   console.log(Math.ceil(noofbricks))
}

calbricks()