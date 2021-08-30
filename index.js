// Code your solution here!

function printString(myString) {
    console.log(myString[0]);
    if (myString.length > 1) {
        let mySubstring = myString.substring(1, myString.length);
        printString(mySubstring);
    } else {
        return true;
    }  
}

printString("pizza");

function reverseString(myString){
   if (myString === '') {
       return '';
   } else {
        return reverseString(myString.substr(1)) + myString.charAt(0);
   }
}

function isPalindrome(string) {
        if(string.length === 1) return true;
        if(string.length === 2) return str[0] === str[1];
        if(string[0] === string.slice(-1)) return isPalindrome(string.slice(1,-1))
        return false;
    }

function addUpTo(array, idx) {
    if (idx <= 0) 
        return 0;
    console.log(`array = ${array} and index = ${idx}`);
    // return (addUpTo(array.slice(1));
}



let maxValue = 0;
function maxOf(array) {
    console.log(array);
        if(!array[0]) return maxValue;
        if(array[0] > maxValue){
            maxValue = array[0]}
        return maxOf(array.slice(1))
}

function includesNumber(array, num) {

}