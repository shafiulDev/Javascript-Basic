function add(a,b) {
    return a+b
    
}
function manipulate(a, b, func){
    var c= a+b
    var d= a-b
    function maltiply( ) {
        var m= func(a,b)
        return c*d*m
        
    }
    return maltiply
}
var maltiply = manipulate(5,3,add)
console.log(maltiply())