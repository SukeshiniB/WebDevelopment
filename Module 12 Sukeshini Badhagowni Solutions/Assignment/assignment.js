function agecalculation() {
    let result = document.getElementById('msg');
    let date = document.getElementById('CDate').value
    let month = document.getElementById('CMonth').value
    let year = document.getElementById('CYear').value
    var mydate = new Date(`${year}-${month}-${date}`);
    const today = new Date();
    let actualDate = today.getDate() - mydate.getDate() ;
    let actualMonth = today.getMonth() - mydate.getMonth();
    let actualYear = today.getYear() - mydate.getYear();
    function checkInput() {
        console.log(date)
        if (date === "") {
            result.innerText = "Please enter date"
        }
        else if (month === "") {
            result.innerText = "Please enter month"
        }
        else if (year === "") {
            result.innerText = "Please enter year"
        }
        else if(month > 12)
        {
            result.innerText = "Please provide Month value in range from 1 to 12"
        }
        else if (date > 31 || date <= 0) {
            result.innerText = "Date can be between 1 to 31 only"
        }
        else if (month == 2 && date > 28) {
            result.innerText = "Please enter valid date"
        }
        else if (month == 4 && date > 30 || month == 6 && date > 30 || month == 9 && date > 30 || month == 11 && date > 30) {
            result.innerText = "Please provide valid Date with respect to Month"
        }
        else if (year.length !== 4) {
            result.innerText = "Provide year in format YYYY"
        }
        else if (mydate.getYear() > today.getYear()) {
            result.innerText = "Invalid year input"
        }
       
        else if (actualMonth < 0) {
            actualMonth = 12 + actualMonth
            actualYear = actualYear - 1
            result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
            if (actualDate < 0) {
                //console.log(today.getDate())
                actualDate = today.getDate() - actualDate
                if (actualMonth == 0) {
                    result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
                }
                else {
                    actualMonth = actualMonth - 1
                    result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
                }
            }
        }
        // else if (actualDate < 0) {
        //     //console.log(today.getDate())
        //     actualDate = today.getDate() - actualDate
        //     if (actualMonth == 0) {
        //         result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
        //     }
        //     else {
        //         actualMonth = actualMonth - 1
        //         result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
        //     }
        // }
        else {
            result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
        }
   
    } checkInput()
}

agecalculation()

// function agecalculation() {
//     let result = document.getElementById('msg');
//     let date = document.getElementById('CDate').value
//     let month = document.getElementById('CMonth').value
//     let year = document.getElementById('CYear').value
//     var mydate = new Date(`${year}-${month}-${date}`);
//     const today = new Date();
//     let actualDate = today.getDate() - mydate.getDate();
//     let actualMonth = today.getMonth() - mydate.getMonth();
//     let actualYear = today.getYear() - mydate.getYear();
//     function checkInput() {
//         console.log(date)
//         if (date === "") {
//             result.innerText = "Please enter date"
//         }
//         else if (month === "") {
//             result.innerText = "Please enter month"
//         }
//         else if (year === "") {
//             result.innerText = "Please enter year"
//         }
//         else if (date > 31 || date <= 0) {
//             result.innerText = "Date can be between 1 to 31 only"
//         }
//         else if (month == 2 && date > 28) {
//             result.innerText = "Please enter valid date"
//         }
//         else if (month == 4 && date > 30 || month == 6 && date > 30 || month == 9 && date > 30 || month == 11 && date > 3) {
//             result.innerText = "Please provide valid Date with respect to Month"
//         }
//         else if (year.length !== 4) {
//             result.innerText = "Provide year in format YYYY"
//         }
//         else if (mydate.getYear() > today.getYear()) {
//             result.innerText = "Invalid year input"
//         }
        
//         else if (actualMonth < 0) {
//             actualMonth = 12 + actualMonth
//             actualYear = actualYear - 1
//             result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//         }
//         else if (actualDate < 0) {
//             //console.log(today.getDate())
//             actualDate = today.getDate() - actualDate
//             if (actualMonth == 0) {
//                 result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//             }
//             else {
//                 actualMonth = actualMonth - 1
//                 result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//             }
//         }
//         else {
//             result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//         }
   
//     } checkInput()
//     // function ageFormula()
//     // {
//     //       var mydate =  new Date(`${year}-${month}-${date}`);

//     //  const today=new Date();
//     //  let actualDate = today.getDate()-mydate.getDate();
//     //  let actualMonth = today.getMonth()-mydate.getMonth();
//     //  let actualYear = today.getYear()-mydate.getYear();
//     //  result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//     //     if(actualMonth < 0)
//     //     {
//     //         actualMonth = 12 + actualMonth
//     //         actualYear = actualYear - 1
//     //         result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//     //     }
//     //     if(actualDate<0)
//     //     {
//     //         //console.log(today.getDate())
//     //         actualDate = today.getDate() - actualDate
//     //         if (actualMonth == 0)
//     //         {
//     //             result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//     //         }
//     //         else 
//     //         {
//     //             actualMonth = actualMonth - 1
//     //             result.innerText = `Your age is ${actualYear} years, ${actualMonth} months and ${actualDate} days`
//     //         }
//     //     }
//     // }ageFormula()
// }
// agecalculation()

// // 28 may 2014 - 27 April 2023

// // 8y 10m 29d

// // month is >0 year - 1 


