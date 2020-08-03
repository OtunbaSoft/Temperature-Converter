const scales = document.getElementById('unit-1');
const scales2 = document.querySelector('#unit-2');
const errorMsg = document.getElementById('error');

const tempValue = document.getElementById('input');
const screen = document.querySelector('.display');
const convertTemp = document.querySelector('.btn').addEventListener('click' , convertScale);

function convertScale () {
    //let unit = scales[i].innerHTML;
    let calcCelsius = (eval ((5/9)*(tempValue.value - 32))).toFixed(2);
    let calcFahrenheit = (eval (((9/5) * tempValue.value) + 32)).toFixed(2); 

    let txt = scales.selectedIndex;
    let card = scales.options[txt].text;
    let txt2 = scales2.selectedIndex;
    let card2 = scales2.options[txt2].text;

    if(tempValue.value === ''){
        tempValue.value = '';
        errorMsg.innerHTML = '';
    }else{

    if((card === 'Celsius' && card2 === 'Fahrenheit')){
        screen.innerHTML = `${tempValue.value} &#8451 is equal to ${calcFahrenheit} &#8457`;
        tempValue.value = '';
        errorMsg.innerHTML = '';
    } else if((card === 'Fahrenheit' && card2 === 'Celsius')){
        screen.innerHTML = `${tempValue.value} &#8457 is equal to ${calcCelsius} &#8451`;
        tempValue.value = '';
        errorMsg.innerHTML = '';
    } else if((card === 'Celsius' && card2 === 'Celsius')){
        errorMsg.innerHTML = `The result is same!`;
        screen.innerHTML = '';
        tempValue.value = '';
    } else if((card === 'Fahrenheit' && card2 === 'Fahrenheit')){
        errorMsg.innerHTML = `The result is same!`;
        screen.innerHTML = '';
        tempValue.value = '';
    } else{    
        errorMsg.innerHTML = '';
        tempValue.value = '';
    }
}
}









