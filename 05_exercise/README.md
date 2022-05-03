Write a function called *getLastValue*. Pass an array of strings to the function, which sorts the strings alphabetically and returns the last element.

Example: <br>
Input: ["Monday","Thursday","Saturday","Wednesday","Tuesday"] <br>
Output: Wednesday

Estimated time: 15 minutes <br>
Total points: 15 

var getLastValue = [ "Monday","Thursday","Saturday","Wednesday","Tuesday" ];
var sorted = getLastValue.sort(function(a, b) {

    if (a[a.length - 1] > b[b.length - 1])
        return 1;
    else if (a[a.length - 1] < b[b.length - 1])
        return -1;

    return 0;

})

console.log(sorted)