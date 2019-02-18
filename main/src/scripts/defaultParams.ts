// [DEFAULT PARAMETERS]

console.log('DEFAULT PARAMETERS!');

//normal parameter passing in a particular function.
const countdownTimer = (start: number) => {
    console.log(start);
    while(start > 0) {
        start--;
    }
    console.log('Done !', start);
};
 
countdownTimer(10);

//now assigning the function params with some value, which is called default params
//output will be same as above

const countdownTimerAgain = (start: number = 10) => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done !', start);

};
//countdownTimerAgain(); case 1, just uncomment and test
//here if we pass 20 in the countdownTimerAgain, it will override 10 with 20
countdownTimerAgain(20); //case 2, just umcomment and test
