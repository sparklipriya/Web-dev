// closure - combination of function bundeded with reference to its surrounding state
// when you bind a function with its required data  ( closure/lexical scope/surrounding state - function + data(lexical scope))


function init(){
    let name = "Priya";
    function displayName(){
        // let name = "Yadav";
        console.log(name);
    }
    return displayName; // reference of function is shared
}
let inner = init();
// as let is block variable - so name variable memory is free-
//  but it is giving output as the displayName() is buinded by its data - closure  ( name ka reference is binded with function)
// nested function bind with its data values
inner();

// significance-
// 1. function factory
// 2. encapsulation
// 3. callback functions
