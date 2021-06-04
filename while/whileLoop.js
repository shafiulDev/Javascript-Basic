// var i = 0 

// while( i<10 ){
//     console.log( 'md shafiul Islam')
//     i++
// }
var running = true
while(running){
    var rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9){
        console.log  ('Winner winner chicken dinner')
        running = false
    }else{
        console.log('You have got '+rand )
    }
}