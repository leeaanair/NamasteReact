// function x() {
//     console.log(this);

//     function y(){
//         console.log(this);
//     }

//     y();
// }

// x();


const person = {
    name : "Leeaa",
    print : function(){
        console.log(this);
    },

    printName : () => {
        console.log(this);
    },

    printName2 : (context) => {
        console.log(context);
    }

}

const person2 = {
    name : "Kishore"
}


person.print(); //person
console.log("Heheheeheh"); //window

person.printName(); //window
person.printName(person); //window
console.log("Seeing a workaround");

person.printName2(); //undefined since you did not pass any context
person.printName2(person); //person

person.print.call(person2); //person2
person.print.call();    //window
person.print.call(person); //person