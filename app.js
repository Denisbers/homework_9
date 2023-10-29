let numOrStr = prompt('input number or string');
console.log(numOrStr)

const myVariable = isNaN(+numOrStr) || numOrStr.trim()

switch (myVariable) {
    case null:
        console.log('ви скасували')
        break;
    case ``:
        console.log('Empty String')
        break;
    case true:
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
        break;
}



/*
if (numOrStr === null) {
    console.log('ви скасували')
} else if (numOrStr.trim() === '') {
    console.log('Empty String');
} else if (isNaN(+numOrStr)) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}
*/