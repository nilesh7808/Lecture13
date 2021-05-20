const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for (let btn of buttons) {

    btn.addEventListener('click', (e) => {
        // console.log(e.target);
        let btnText = e.target.innerText;

        if (btnText === 'x') {
            screen.value += '*';
        } else if (btnText === 'C') {
            screen.value = "";
        } else if (btnText === '=') {
            try {
                screen.value = eval(screen.value);
            } catch (e) {
                screen.value = "Invalid Operation";
            }
        } else {
            screen.value += btnText;
        }

    })

}