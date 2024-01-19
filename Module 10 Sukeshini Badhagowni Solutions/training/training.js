// var num = [212, 434, 78, 112, 99, 434, 212];
// // let res = num.every ((eachEle) => {
// //     if(eachEle%2 == 0)
// //     {
// //         return eachEle
// //     }
// // })
// // console.log(res)
// console.log(num)
// let res = num.sort((x,y) => { 
//     console.log(x)
//     console.log(y)
//     console.log (x + "---" + y)
//     return y-x})
// console.log(res)

// let str =["cat", "tiger", "bat", "hen", "lion","leopard"]
// console.log(str.sort().reverse())

// let res = num.reduce((sum, eachvalue) => {
//     return sum = sum+eachvalue
// }, 0)
// console.log(res)


let arr = [9.2, 3, 0.8, 77.2, 53.87]
let sum = arr.reduce((sum, eachele) => {
    return sum = sum + eachele
}, 0)
console.log(sum)