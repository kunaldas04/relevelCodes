function findminmax(array){
	let min=Number.MAX_VALUE;
	let max=Number.MIN_VALUE;

	for(let i=0; i<array.length; i++){
		//for updating min element
		if(array[i]<min){
			min=array[i]
		}
		//for updating max element.
		if(array[i]>max){
			max=array[i]
		}
	}
	console.log("min:"+min);
	console.log("max:"+max);
}
findminmax([3,2,9,8])
findminmax([2,3,15,6])
