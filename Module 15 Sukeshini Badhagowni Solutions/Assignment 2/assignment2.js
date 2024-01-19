// You are working on a project where you need to store the Movie Cast using a Stack
// Create a method to Add a new cast member which will read the name of a member and add it to the Stack.
// Create another method called Show Cast which will display all names stored in the Stack.

class Stack{
    constructor()
    {
        this.items = []; //stack
    }

    //push -> inserting elements in the stack
    add(element) {
        return this.items.push(element);
    }
    
    showCast() {
        console.log("Movie Cast:");
        for (let i = this.items.length - 1; i >= 0; i--) {
          console.log(this.items[i]);
        }
      }
}

let cast = new Stack()
cast.add("Actor1")
cast.add("Actor2")
cast.add("Actor3")
cast.showCast()