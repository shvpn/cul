let output = document.getElementById('display');
output.value = '0';
let point=true;
function lub() {
    output.value = '';
}

function lubone() {
    output.value = output.value.slice(0, -1);
}

function add(value) {
    if (value == '.'){
        if (output.value.includes('.')) {
            return;
        }
        if (output.value =="0"){
            output.value = '0.';
            return;
        }
        
    }
    // check if they just click = and then click a number clear the output before adding the number
    if (output.value == '0' || point==false&&!isNaN(value))  {
        output.value = '';
        output.value += value;
        point=true;
    }else{
        output.value += value;
        point=true;
    }


}

function show() {
    //stor all history using local storage
    let id = localStorage.length;
    localStorage.setItem(id, output.value);
    try {
        output.value = eval(output.value);
        point=false;
    } catch (e) {
        output.value = 'Error';
    }
}

function showhistory() {
    alert("Clicked");
    let history = document.getElementById('history');
    history.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);
        history.innerHTML += `<li>${value}</li>`;
    }
    setTimeout(() => {
        history.innerHTML = 'History';
    }, 3000);
    
    
}