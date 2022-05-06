const add_numbers = (ev) => {
    // Your code here...
    console.log('add numbers');
    let num1 = document.querySelector('#num1').value;
    console.log(num1);

    let num2 = document.querySelector('#num2').value;
    console.log(num2);

    let result = Number(num1) + Number(num2);
    console.log(result);

    document.querySelector('#answer').innerHTML = result;
}

