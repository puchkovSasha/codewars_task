function even_or_odd(number) {

    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }

}

let test1 = even_or_odd(7);

console.log('test1: ', test1);

function even_or_oddd(number) {
    return number % 2 ? 'Odd' : 'Even';
}

let test2 = even_or_oddd(2);

console.log('test2: ', test2);