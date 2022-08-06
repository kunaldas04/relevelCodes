
var add = function(a,b){
    console.log(a+b)
}
add(40,20)


function addandprintmessage(funadd, message){
    funadd(50,40)
    console.log(message)
}
addandprintmessage(add,"hello")