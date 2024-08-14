function sayGoodbye() {
    return function(name){
        console.log(`Goodbye ${name}`)
    }
}

sayGoodbye()('Dar');