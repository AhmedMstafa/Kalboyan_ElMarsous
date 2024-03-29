var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
function add(a, b) {
    return a + b;
}
function printResult(result, printMode) {
    if (printMode === 'console') {
        console.log(result);
    }
    else if (printMode === 'alert') {
        alert(result);
    }
}
var results = [];
var names = ['Max'];
buttonElement.addEventListener('click', function () {
    var num1 = +num1Input.value;
    var num2 = +num2Input.value;
    var result = add(num1, num2);
    var resultContainer = {
        res: result,
        print: function () {
            console.log(this.res);
        }
    };
    results.push(resultContainer);
    // results.push(5);
    // results[0].print();
    printResult(result, 'console');
    printResult(result, 'alert');
    // printResult(result, 'window');
});
