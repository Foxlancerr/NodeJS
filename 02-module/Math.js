//way1 to export module
module.exports.greet = "Hello world";
module.exports.age = 50;

function Add(a, b){
    return a + b;
}

function Sub(a,b){
    return a - b;
}

//way2 to export modules
exports.combo = {
    Add,
    Sub
}

//way3 to export modules
exports.Mul = (a,b)=> a * b;



