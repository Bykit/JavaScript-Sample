
window.onload=()=>{
    // querySelector()和querySelectorAll()方法
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button');
    
    // forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数
    // innerText属性
    // toString()方法
    // substr()
    // id属性
    // eval()全局函数
    buttons.forEach((item) => {
        item.onclick = () => {
            if (item.id == 'clear'){
                display.innerText = '';
            } else if (item.id == 'backspace'){
                let string = display.innerText.toString();
                display.innerText = string.substr(0, string.length - 1);
            } else if (display.innerText != '' && item.id =='equal'){
                display.innerText = eval(display.innerText);
            } else if (display.innerText == '' && item.id == 'equal'){
                display.innerText = 'Empty!';
                setTimeout(() => (display.innerText = ''), 2000);
            } else {
                display.innerText += item.id;
            }
        }
    })

    // classList属性
    /* toggle()方法
        在元素中切换类名。
        第一个参数为要在元素中移除的类名，并返回 false。
        如果该类名不存在则会在元素中添加类名，并返回 true。*/
    const themeToggleBtn = document.querySelector('.theme-toggler');
    const calculator = document.querySelector('.calculator');
    // const toggleIcon = document.querySelector('.toggler-icon');
    // let isDark = true;
    themeToggleBtn.onclick = () => {
        calculator.classList.toggle('day');
        themeToggleBtn.classList.toggle('active');
        // isDark = !isDark;
    }
}