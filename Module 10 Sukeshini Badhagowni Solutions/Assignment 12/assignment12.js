// Write a function which gives the sum of all the amount in that friends list using reduce method.
// Write a function which sort the friendsArray in ascending order.
// Write a function which sort the friendsArray in descending order.
// Write a function which gives a single object among the friendsArray whose amount is largest.
// Write a function which gives a single object among the friendsArray whose amount is smallest.

const friendsArray = [
    { id: 1, name: "Abhay", amount: 2000 }, 
    { id: 2, name: "Bunty", amount: 3000 },
    { id: 4, name: "Dimple", amount: 1000 },
    { id: 5, name: "Erica", amount: 2370 }
];

function sumOfAmounts(friendsArray) {
    const totalAmount = friendsArray.reduce((accumulator, friend) => {
    return accumulator + friend.amount; 
    }, 0);
    return totalAmount;
    }
    
    console.log(sumOfAmounts(friendsArray)); 

    const sortFriendsArrayAscen = (friendsArray) => {
        return friendsArray.sort((a, b) => a.amount - b.amount);
    };
    console.log(sortFriendsArrayAscen(friendsArray))

    const sortFriendsArrayDesc = (friendsArray) => {
        return friendsArray.sort((a, b) => b.amount - a.amount);
    };
    console.log(sortFriendsArrayDesc(friendsArray))


    function findFriendWithLargestAmount(friendsArray) {
        let largest = friendsArray[0];
        for (let i = 1; i < friendsArray.length; i++) {
        if (friendsArray[i].amount > largest.amount) {
        largest = friendsArray[i];
        }
        }
        return largest;
        }
        
        console.log(findFriendWithLargestAmount(friendsArray));

        function findFriendWithSmallerAmount(friendsArray) {
            let smallest = friendsArray[0];
            for (let i = 1; i < friendsArray.length; i++) {
            if (friendsArray[i].amount < smallest.amount) {
            smallest = friendsArray[i];
            }
            }
            return smallest;
            }
            
            console.log(findFriendWithSmallerAmount(friendsArray));



   

    // const result3 = value3 ?? "10";
