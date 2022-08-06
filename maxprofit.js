

// function findmaxprofit(array){

// 	let maxprofit = 0
// 	let buyingprice = 0
// 	let sellingprice = 0
// 	let changebuyingprice = true

// 	for(let i=0; i<array.length ; i++){
// 		sellingprice = array[i+1]
// 		if(changebuyingprice){
// 		buyingprice = array[i]
// 		}
// 		if(sellingprice<buyingprice){
//            changebuyingprice = true
		   
// 		}else{
// 			let profit = sellingprice-buyingprice
// 			if(profit>maxprofit){
// 				maxprofit=profit
// 			}
// 			changebuyingprice = false
// 		}
// 	}
// 	console.log(maxprofit)

// }

// findmaxprofit([100,180,260,310,40,535,695])




function findmaxprofit(array){

	let maxprofit = 0
	let buyingprice = 0
	let sellingprice = 0
	let changebuyingprice = true

	for(let i=0; i<array.length ; i++){
		sellingprice = array[i+1]
		if(changebuyingprice){
		buyingprice = array[i]
		}
		if(sellingprice<buyingprice){
           changebuyingprice = true
		   
		}else{
			let profit = sellingprice-buyingprice
			if(profit>maxprofit){
				maxprofit=profit
			}
			changebuyingprice = false
		}
	}
	console.log(maxprofit)

}

findmaxprofit([80,220,295,450,60,647,945])