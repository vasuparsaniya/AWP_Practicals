const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2]) 

if (operation === 'add') {
    console.log(operation + ' is ' + (operator1 + operator2));
}

if (operation === 'sub') {
    console.log(operation + ' is ' + (operator1 - operator2));
}

if (operation === 'mul') {
    console.log(operation + ' is ' + (operator1 * operator2));
}

if (operation === 'div') {
    console.log(operation + ' is ' + (operator1 / operator2));
}