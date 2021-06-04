
var date = new Date()
var today = date.getDay()

  switch (today){
    case 0:
        console.log("Today is sunday")
        break

    case 1:
        console.log("Today is monday")
        break
    case 2:
            console.log("Today is tuesday")
            break
    case 3:
       console.log("Today is wednesday")
        break
    case 4:
        console.log("Today is thusday")
        break
    case 5:
        console.log("Today is friday")
        break
       
    case 6:
        console.log("Today is sarurday")
        break
    default:console.log('This is not valid number')
        
  }