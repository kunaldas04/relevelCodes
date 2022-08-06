

// function isPrime(n)
// {

// 	if (n <= 1)
// 		return false;


// 	for (let i = 2; i < n; i++)
// 		if (n % i == 0)
// 			return false;

// 	return true;
// }

// function printPrime(n)
// {  
// 	for (let i = 2; i <= n; i++) {
// 		if (isPrime(i))
// 			console.log(i +" ");
// 	}
// }


// 	let n = 5;
// 	printPrime(n);




    function findprimenum(n){
        for (let i=2;i<=n;i++){
            let isPrime=true
            for(let j=2;j<=i-1;j++){
                if(i%j==0){
                    isPrime=false
                    break
                }
            }
            if(isPrime){
                console.log(i)
            }
        }
    }

    findprimenum(7)

 