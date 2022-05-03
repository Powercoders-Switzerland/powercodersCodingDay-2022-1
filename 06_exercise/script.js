
// Write a function called *weekNumbersToWords* when given an input array of numbers 1-7, it outputs an array of the weeksdays written out. You must use a switch, not if/else.


const weekNumbersToWords = day => {
    if (day < 1 || day > 7) return null
 
    switch (day) {
     case 1:
       return 'Sunday'
       break;
     case 2:
       return 'Monday'
       break;
     case 3:
       return 'Tuesday'
       break;
     case 4:
       return 'Wednesday'
       break;
     case 5:
       return 'Thursday'
       break;
     case 6:
       return 'Friday'
       break;
     case 7:
       return 'Saturday'
    }
 }
 
 console.log(weekNumbersToWords(7))