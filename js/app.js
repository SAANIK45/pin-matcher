function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
       return getPin();
    }
}
document.getElementById('pin-genarate').addEventListener('click',function(){
    const pinView = document.getElementById('pin-value');
    pinView.value = getPin();
})
document.getElementById('key-pad').addEventListener('click',function(event){
    const numbers = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(numbers)){
        if(numbers == 'C'){
            calcInput.value='';
        }
    }else{
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + numbers;
        calcInput.value = newNumber;
    } 
})

document.getElementById('submit-btn').addEventListener('click',function(){
    const pinNumber = document.getElementById('pin-value').value;
    const pinTyped = document.getElementById('typed-numbers').value;
    if(pinNumber == pinTyped){
        document.getElementById('matched').style.display = 'block';
    }else{
        document.getElementById('not-matched').style.display = 'block';
    }
})