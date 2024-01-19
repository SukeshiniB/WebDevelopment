class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) { //name
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size   //30
    }
    set(key, val) {
        const index = this.hash(key)  //30 
        //this.table[index] = val   //Bruce
        const bucket = this.table[index] //name
        if(!bucket){
            this.table[index] = [[key, val]] 
        }else{ 
            const sameKeyItem = bucket.find(item => item[0] === key) 
            if(sameKeyItem) {
                sameKeyItem[1] += val 
            } else {
                bucket.push([key, val]) 
            }
        }
    }   
    get(key) {
        const index = this.hash(key) //30
        //return this.table[index]
        const bucket = this.table[index] 
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }
    remove(key) {
        const index = this.hash(key)
        //this.table[index] = undefined
        const bucket = this.table[index] 
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1)
            }
        }
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i])
            } 
        }
    }
}

// const table = new HashTable(50)

// table.set("name", "Bruce")
// table.set("age", 25)
// table.display()

// console.log(table.get("name"))
// table.set("mane", "clark")
// table.remove("name")
// table.display()
// You are working on a Score Analysis project where you are required to keep a track of the total score made
// by each player in the game.
// The first function, Capture Score, will store the corresponding score in the Hash Table. 
// The table should also be able to add a new score to the existing score if the same player’s data is added again.
// The second function, Get Score, will allow the user to fetch the total score of a player by passing the player 
// name.If two players have the same name, the Table should be able to handle the clash and store data accordingly.

const scoreAnalysis = new HashTable(30)

do{
    var input = 0
    input = parseInt(prompt("Enter 1 to enter details and 2 to view final score of any player"))
    switch (parseInt(input)){
        case 1: 
            playerName = prompt("Enter the name of the player")
            playerScore = parseInt(prompt("Enter the score value"))
            scoreAnalysis.set(playerName,playerScore)
            console.log(scoreAnalysis)
            break;
        case 2:
            playerName = prompt("Enter the name of the player")
            console.log(scoreAnalysis.get(playerName))
            break;
        default :
            console.log("Invalid Input")
            break;
        }

}while(input >=1 && input <=2)


