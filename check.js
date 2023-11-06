// program to check if an array contains a specified value

const array = ['Ajay', 'Devang', 'Shubham', 'Rishi'];

const hasValue = array.indexOf('Rishi') !== -1;

// check the condition
if(hasValue) {
    console.log('Array contains a value.');
} else {
    console.log('Array does not contain a value.');
}