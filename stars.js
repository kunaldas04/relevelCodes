
// stars in single line 

function printstars(num){
    for( let i=1; i<=num;i++)
    {
       let stars =""
       for (let j=1; j<=i; j++)
       {
        stars +="*"
       }
       console.log(stars)
    }
}
printstars(5)

