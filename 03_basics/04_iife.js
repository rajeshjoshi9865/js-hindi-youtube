// Immediately Invoked Function Expression(IIFE)

(function chai(){
    // named iife
    console.log(`Db connected`);
    
})();

((name) => {
    console.log(`db connected two ${name}`);
    
})("rajesh")