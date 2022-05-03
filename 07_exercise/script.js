// Write a function that reverses a number: given a number, reverse its digits. 

Examples: <br>
Input: 1234 <br>
Output: 4321 <br> <br>
Input: 100000000 <br>
Output: 1 <br> <br>
Input: -321 <br>
Output: -123

Estimated time: 15 minutes <br>
Total points: 15

function flipInt(n){
    var digit, result = 0
    while (n) {
        digit = n % 10
        result = (result * 10) + digit
        n = n/10|0
    }
    return result
}
 alert()

