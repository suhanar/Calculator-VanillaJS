(function(){
    let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll('.btn');
let equals = document.querySelector('.green')
let clear = document.querySelector('.red')

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        
        let val = e.target.dataset.num;
        screen.value += val;
        
        console.log(e.target.dataset.num);
    })
})
clear.addEventListener('click',function(e){
    screen.value = ''
})
equals.addEventListener('click',function(e){
    if(screen.value == ''){
        screen.value = '';
    }
    else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
})

})();


