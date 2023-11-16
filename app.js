var arr = ["name", "John", "lastname", "Black", "age", "23"];
var obj = {};

for (var i = 0; i < arr.length; i = i + 2) {
    var key = arr[i];
    var value = arr[i + 1];
    obj[key] = value;
}

console.log(obj);

function calculateAverage(...numbers) {

    if (numbers.length === 0) {
        return 0;
    }


    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let average = sum / numbers.length;

    return average;
}

console.log(calculateAverage(1, 2, 3, 4, 5));
console.log(calculateAverage(14, 56, 80));
console.log(calculateAverage(2, 9, 11, 10));

function getDataType(value) {
    console.log(typeof value);
}
getDataType('hello world!')

let counterElement = document.getElementById('counter')
let buttonPlus = document.getElementById('btn+')
let buttonMinus = document.getElementById('btn-')

buttonPlus.addEventListener('click', function () {
    counterElement.value = parseInt(counterElement.value) + 1
})

buttonMinus.addEventListener('click', function ()    {
    counterElement.value = parseInt(counterElement.value) -1
})

