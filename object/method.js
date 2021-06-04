 var obj1 = {
     x : 20,
     y : 26,
     z : 30
 }

 console.log(Object.keys(obj1))
 console.log(Object.values(obj1))
 console.log(Object.entries(obj1))

 var obj2 = Object.assign({}, obj1)
 obj2.x= 800
 console.log(obj2)
 console.log(obj1)