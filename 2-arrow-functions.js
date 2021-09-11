 const pevent = {
     name: 'Birthday Party',
     guestList: ['Sunil', 'Asha', 'Sudha', 'K'],
     // We should not be using arrow function below. In case of methods, better to use old functions or ES6 shorthand
     // If we use arrow function it will point to whatever this is outside the function, and 'this' is pointing to global here.
     // If we use a standard function here 'this' will properly point to the enclosing object.
     getGuestList() {
         console.log("Guest list for " + this.name)

         // This will not work because we have used standard function. 'this' will point to global since it is anonymous function
         this.guestList.forEach(function (guest) {
            console.log(guest + ' is a guest attending ' + this.name)
        })

         // This Works because since we have used arrow functions, 'this' will now point to whatever 'this' is outside the function
         // To overcome this we can use that = this and use 'that' inside the function.
         this.guestList.forEach((guest) => {
             console.log(guest + ' is a guest attending ' + this.name)
         })
     }
 }


pevent.getGuestList();


// Use standard functions in case of methods - functions inside object
// Use arrow functions for anonymous functions so that they carry the this.