var arr1 = [12, 3, 6, 23]
var arr2 = [10, 3, 6, 50]
var arr3 = [8, 65, 6, 1]



// var sum = 0
// for(i = 0; i < arr1.length; i++){
//     sum+=arr1[i]
//     }
// console.log(sum)
function totalFunction(arr){
var sum = 0
for(i = 0; i < arr.length; i++){
    sum+=arr[i]
    }
console.log(sum)
}
totalFunction(arr1)
totalFunction(arr2)
totalFunction(arr3)