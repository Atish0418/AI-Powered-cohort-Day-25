// 1) Create a function that takes a callback and executes it after every 'n' seconds indefinitely.
function baarbarrchalao(fn, time){
    setInterval(fn, time);
}

// baarbarrchalao(function(){
//     console.log("hello");
// }, 2000);

// 2) Implement a function that returns a function with a preset greeting (Closure)
function greetKaro(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
        
    }
}

var greetingfnc = greetKaro("Hello!");
greetingfnc("Atish");

// 3) Implement a function that takes a callback and only executes it once (HOF + Closure)
function onlyOnceCaller(cb){
    let executed = false;
    return function(){
        if(!executed){
            executed = true;
            cb();
        } 
    }
}

var newfnc = onlyOnceCaller(function(){
    console.log("ran");
})

newfnc();
newfnc()


// 4) Implement a function that throttles another function (HOF + Closures)
function throt(fn, delay){
    let lastcall = 0;
    return function(){
        let current = Date.now();
        if(current - lastcall >= delay){
            lastcall = current;
            fn();
        } 
    }
}

var newFnc = throt(function(){
    console.log("Will run un 2 seconds"); 
},2000)

    