const exp = document.getElementById('expression');
let exprsn = "";
const res = document.getElementById('result');

const btn = document.getElementsByClassName("buttons");

for (const element of btn) {
    element.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        switch (element.id) {
            case 'all_clear':
                clearAll();
                break;
            case 'erase':
                erase();
                break;
            case 'equals':
                calculate();
                break;
            case 'divide':
                exprsn += '/';
                exp.innerText += buttonText;
                break;
            case 'multiply':
                exprsn += '*';
                exp.innerText += buttonText;
                break;

            default:
                exprsn += buttonText;
                exp.innerText += buttonText;
                break;
        }
    })
}

function clearAll() {
    exprsn = "";
    exp.innerText = "";
    res.innerText = "";
}

function erase() {
    exp.innerText = exp.innerText.slice(0, exp.innerText.length - 1);
    exprsn = exprsn.slice(0, exprsn.length - 1);
}

function calculate() {
    res.innerText = '= ' + eval(exprsn);
}