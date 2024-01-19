// Write a JavaScript function findMostExpensiveCar to return most expensive car for given car objects. 
// Car object has key as name of car and value as price of car.
// Sample Use:
// {'hyundai': 35000, 'tesla':100000, 'MG': 80000}. 
// // returns The most expensive car is tesla 

 let cars = {'hyundai': 35000, 'tesla':100000, 'MG': 80000, 'Maruti' : 200000}

let findMostExpensiveCar= (cars) => {

    let highestcost = 0
      let   carName = ""

    for(let car in cars)
    {
        if(cars[car] > highestcost)
        {
          carName = car
          highestcost = cars[car]
        }
      
    }
    return `The most expensive car is ${carName}`
}
console.log (findMostExpensiveCar(cars))

