
const body = document.getElementsByTagName('body')[0];
const squares = document.getElementsByClassName('squares');
const board = document.getElementById('board');

console.log(body);
console.log(squares);
console.log(board);

index = 0;
squares[index].classList.add('snake--body')
squares[++index].classList.add('snake--head')

body.addEventListener('keyup', (e)=>{
    console.log('keyup');
    console.log(e.key)
    if (e.key === 'ArrowRight'){
        if(squares[index - 1].classList.contains('snake--body')) {
            console.log('e');
            squares[index - 1].classList.remove('snake--body');
        }
        if(squares[index].classList.contains('snake--head')){
            console.log('e');
            squares[index].classList.remove('snake--head');
        }
        if(squares[index +1].classList.contains('snake--body')){
            console.log('e');
            squares[index+1].classList.remove('snake--body');
        }

        squares[index].classList.add('snake--body');
        squares[++index].classList.add('snake--head');
    }
})