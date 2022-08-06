


function  find2pnums(a){
    for(let i=2; (i<a-2 || a<5); i++){
        if (isprime(i) && isprime(a-i)){
            console.log(i,a-i)
            break
        }
    }
}

find2pnums(10)
find2pnums(15)
find2pnums(4)
find2pnums(200)