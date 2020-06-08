function one() {
    console.log('one');

    setTimeout(() => {
        two();
    }, 0);
    
    three();
}

function two() {
    console.log('two');
    
}

function three() {
    console.log('three');
    
}

one();