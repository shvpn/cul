let output = document.getElementById('display');

function lub() {
    output.value = '';
}

function lunone() {
    output.value = output.value.slice(0, -1);
}

function add(value) {
    output.value += value;
}

function show() {
    try {
        output.value = eval(output.value);
    } catch (e) {
        output.value = 'Error';
    }
}