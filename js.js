let output = document.getElementById('display');
output.value = '0';

function lub() {
    output.value = '';
}

function lunone() {
    output.value = output.value.slice(0, -1);
}

function add(value) {
    if (output.value == '0') {
        output.value = value;
    } else {
    output.value += value;
}}

function show() {
    try {
        output.value = eval(output.value);
    } catch (e) {
        output.value = 'Error';
    }
}