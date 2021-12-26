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

// btn[0].addEventListener("click", clearAll);
// btn[1].addEventListener("click", erase);
// btn[2].addEventListener("click", function () { nmbr('%') });
// btn[3].addEventListener("click", function () { nmbr('/') });
// btn[4].addEventListener("click", function () { nmbr('7') });
// btn[5].addEventListener("click", function () { nmbr('8') });
// btn[6].addEventListener("click", function () { nmbr('9') });
// btn[7].addEventListener("click", function () { nmbr('*') });
// btn[8].addEventListener("click", function () { nmbr('4') });
// btn[9].addEventListener("click", function () { nmbr('5') });
// btn[10].addEventListener("click", function () { nmbr('6') });
// btn[11].addEventListener("click", function () { nmbr('-') });
// btn[12].addEventListener("click", function () { nmbr('1') });
// btn[13].addEventListener("click", function () { nmbr('2') });
// btn[14].addEventListener("click", function () { nmbr('3') });
// btn[15].addEventListener("click", function () { nmbr('+') });
// btn[17].addEventListener("click", function () { nmbr('0') });
// btn[18].addEventListener("click", function () { nmbr('.') });
// btn[19].addEventListener("click", calculate);

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