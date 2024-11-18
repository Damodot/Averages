let valueTwo = document.getElementById('value2');
let reply = document.getElementById('value3');

// Min function
function min() {   
    if (valueTwo.value === "") {
        alert('No Numbers to calculate')
    }
    let func = valueTwo.value.split('');
    numbers = func.map(Number);
    reply.value = Math.min(...numbers)
}

// Max function
function max() {   
    if (valueTwo.value === '') {
        alert('No Numbers to calculate')
    }
    let func = valueTwo.value.split('');
    numbers = func.map(Number);
    reply.value = Math.max(...numbers)
}

//Range function
function range() {   
    if (valueTwo.value === '') {
        alert('No Numbers to calculate')
    }
    let func = valueTwo.value.split('');
    numbers = func.map(Number);
    reply.value = Math.max(...numbers) - Math.min(...numbers)
}

//Sort function
function sort() {
    if (valueTwo.value === '') {
        alert('No Numbers to calculate')
    }
    let func = valueTwo.value.split('')
    anodaFunc = func.sort()
    reply.value = anodaFunc.join('')
}

//Median Function
function median() {
    let func = valueTwo.value.split('');
    if (valueTwo.value === '') {
        alert('No Numbers to calculate')
    } else if((func.length % 2) === 1) {
        reply.value = func[parseInt(func.length / 2)]
    } else {
        evenMedian = parseInt(func.length / 2) - 1 
        secMedian = evenMedian + 1
        reply.value = (Number(func[evenMedian]) + Number(func[secMedian])) / 2
    }
}

//Average Function
function mean() {
    let func = valueTwo.value.split('');
    numberNew = func.map(Number)
    console.log(numberNew);
    let sum = numberNew.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
    let average = sum / numberNew.length;
    console.log(average);
    reply.value = average
}

// Clear Function
function clearFunction() {
    valueTwo.value = "";
    reply.value = "";
}

// Numbers functions
function numbOne() {
   valueTwo.value += '1'
}
function numbTwo() {
    valueTwo.value += '2'     
}
function numbThree() {
    valueTwo.value += '3'
}
function numbFour() {
    valueTwo.value += '4'
}
function numbFive() {
    valueTwo.value += '5'
}
function numbSix() {
    valueTwo.value += '6'
}
function numbSeven() {
    valueTwo.value += '7'
}
function numbEight() {
    valueTwo.value += '8'
}
function numbNine() {
    valueTwo.value += '9'
}
function numbZero() {
    valueTwo.value += '0'
}
function numbDot() {
    valueTwo.value += '.'
}
