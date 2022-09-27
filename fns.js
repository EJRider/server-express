function add(n1, n2){
    return n1+n2;
}
//These are the same! 
const add = function(n1,n2){
    return n1+n2;
}

// Arrow function, same as the ones on top!(Use for server code)
const plus =  (n1 , n2) => {
    return n1+n2;
}
// Arrow function one liner (only works with one line of code)
const addition = (n1,n2) => n1+n2;

const sayHi = () => console.log("Hello! Wait, the function says to say Hi");

// $('button').on('click', () => {
//    people.push('Scmedan')
// })