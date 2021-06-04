function sqr(n){
    return n*n
}
console.log(sqr(3))


// first class  function 
function something(a, b) {
    return a + b
    
}
var ans = something
console.log(ans(5, 10))
console.log(typeof ans)

// using array in the function
var arr = []
arr.push(ans)
console.log(arr)
console.log(arr[0](5, 10))

// using function in the object 
var obj  =  {
    num : ans
}
console.log(obj)
console.log(obj.num(5, 20))
