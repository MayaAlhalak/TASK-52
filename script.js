const number = document.querySelector(".number");
const selectOne = document.querySelector(".select-one");
const selectTwo = document.querySelector(".select-two");
const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

let x=0;
btn.addEventListener('click', function(){
    if ( number.value.length >0){
        console.log('number' , number.value);
        if (selectOne.value == 'mm' && selectTwo.value == 'cm'){
            x = number.value / 10;
            number.value = x;
        }
        if (selectOne.value == 'mm' && selectTwo.value == 'dcm'){
            x = number.value / 100;
            number.value = x;
        }
        if (selectOne.value == 'mm' && selectTwo.value == 'm'){
            x = number.value / 1000;
            number.value = x;
        }
        if (selectOne.value == 'mm' && selectTwo.value == 'km'){
            x = number.value / 10000;
            number.value = x;
        }
        if (selectOne.value == 'cm' && selectTwo.value == 'mm'){
            x = number.value * 10;
            number.value = x;
        }
        if (selectOne.value == 'cm' && selectTwo.value == 'dcm'){
            x = number.value / 10;
            number.value = x;
        }
        if (selectOne.value == 'cm' && selectTwo.value == 'm'){
            x = number.value / 100;
            number.value = x;
        }
        if (selectOne.value == 'cm' && selectTwo.value == 'km'){
            x = number.value / 1000;
            number.value = x;
        }
        if (selectOne.value == 'dcm' && selectTwo.value == 'mm'){
            x = number.value * 100;
            number.value = x;
        }
        if (selectOne.value == 'dcm' && selectTwo.value == 'cm'){
            x = number.value * 10;
            number.value = x;
        }
        if (selectOne.value == 'dcm' && selectTwo.value == 'm'){
            x = number.value / 10;
            number.value = x;
        }
        if (selectOne.value == 'dcm' && selectTwo.value == 'km'){
            x = number.value / 100;
            number.value = x;
        }
        if (selectOne.value == 'm' && selectTwo.value == 'mm'){
            x = number.value * 1000;
            number.value = x;
        }
        if (selectOne.value == 'm' && selectTwo.value == 'cm'){
            x = number.value * 100;
            number.value = x;
        }
        if (selectOne.value == 'm' && selectTwo.value == 'dcm'){
            x = number.value * 10;
            number.value = x;
        }
        if (selectOne.value == 'm' && selectTwo.value == 'km'){
            x = number.value / 1000;
            number.value = x;
        }
        if (selectOne.value == 'km' && selectTwo.value == 'mm'){
            x = number.value * 10000;
            number.value = x;
        }
        if (selectOne.value == 'km' && selectTwo.value == 'cm'){
            x = number.value * 1000;
            number.value = x;
        }
        if (selectOne.value == 'km' && selectTwo.value == 'dcm'){
            x = number.value * 100;
            number.value = x;
        }
        if (selectOne.value == 'km' && selectTwo.value == 'm'){
            x = number.value * 1000;
            number.value = x;
        }
        if (selectOne.value == selectTwo.value ){
            x = number.value;
            number.value = x;
        }
    }
    result.innerHTML = x;
    number.value = '';
})
