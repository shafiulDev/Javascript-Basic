
// array odd summetion 
var arr = [5, 56, 2, 6, 8, 21, 9, 35, 9, 20]
var sum= 0
for ( var i= 0; i < arr.length; i++){
 
    if(arr[i] % 2 == 1){

     sum=sum+arr[i]
       
    }
 
}
console.log('Odd sum = ' +sum)



//array even summetion 
var arr = [5, 56, 2, 6, 8, 21, 9, 35, 9, 20]
var sum= 0
for ( var i= 0; i < arr.length; i++){
 
    if(arr[i] % 2 == 0){

     sum=sum+arr[i]
       
    }
 
}

console.log('Even sum = ' +sum)



// search in the array 
var arra= [1, 21, 12, 21,54, 85,]
var find= 544
var isFalse= false
for(var i = 0; i < arra.length; i++ ){
    if (arra[i]==find){
        console.log('The index number is = ' +i)
        isFalse=true
        break
    }
}
if(!isFalse){
    console.log(' Data is not found')
}