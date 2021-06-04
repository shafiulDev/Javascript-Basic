
var arr1 = [12, 3, 6, 23]
var arr2 = [10, 3, 6, 50]
var arr3 = [8, 65, 6, 1]
function totalFunction(arr){
    var sum = 0
    for(i = 0; i < arr.length; i++){
        sum+=arr[i]
        }
        return sum//IT is a return statement for java script 
    }
    var a = totalFunction(arr1)
    var b = totalFunction(arr2)
    var c = totalFunction(arr3)
    

    console.log(a, b ,c)