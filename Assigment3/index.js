let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);    

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == 'CE') {
            buttonText = 'c';
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == 'DEL') {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }

        else if (buttonText == '÷') {
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

