/*TOPIC Specify Only the Lower Number of Matches
You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string hah with the 
letter a appearing at least 3 times, your regex 
would be /ha{3,}h/.

let A4 = "haaaah";


*/

let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/; // you can change here
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

/*
In order, the three test calls 
would return true, false, and true.
*/

console.log(multipleA.test(A4));
console.log(multipleA.test(A2))
console.log(multipleA.test(A100));


//EXAMPLE
/*Change the regex haRegex to match 
the word Hazzah only when it has four or more letter z's.

*/

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

console.log(result);




// TOPIC Specify Exact Number of Matches
/*You can specify the lower and upper
 number of patterns with quantity specifiers 
 using curly brackets. Sometimes you only want a specific number of matches.

To specify a certain number of patterns,
 just have that one number between the curly brackets.
*/
/*
For example, to match only the
 word hah with the letter a 3 times, your regex would be /ha{3}h/.
*/
let E4 = "haaaah";
let E3 = "haaah";
let E100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(E4);
multipleHA.test(E3);
multipleHA.test(E100);

/*
In order, the three test calls
 would return false, true, and false.
*/
console.log(multipleHA.test(E4)) // false
console.log(multipleHA.test(E3)); // true
console.log(multipleHA.test(E100)); // false


//EXAMPLE

/*Change the regex timRegex 
to match the word Timber 
only when it has four letter m's.*/

/*
Solution 1 (Click to Show/Hide)
From hint 1 we defined how to find
 mmmm in the timStr. From hint 2 we 
 observe that we need to find the word Timmmmber=Tim{4}ber.
We simpply add the exact word in our 
timRegex value and the final result is:

*/

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let answer = timRegex.test(timStr);

console.log(answer);
//output true



//EXAMPLE

/*Change the regex favRegex to match
 both the American English (favorite) and the British English (favourite) version of the word.
*/

let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let output = favRegex.test(favWord);

/*
sed the question mark, ? symbol, if so,
 have you placed it in the correct position?
*/
console.log(output);
//true



//TOPIC  Positive and Negative Lookahead
// This is good for checking of Password
//PASSWORD CHECKER

/*Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of lookaheads: positive lookahead and negative lookahead.

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lo
okahead is used as (?!...) where the ...
*/

//HINTS
/*
The second lookahead is also similar to that given in the example - (?=\D*\d) - however, this expression too must be modified to pass all test cases. Remember to specify the exact amount of numbers you
 want to appear at the end of the string.
*/

/*Lookaheads are a bit confusing but
 some examples will help.*/

let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);

/*
Both of these match calls would return ["q"].

A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
let match = checkPass.test(password);

console.log(match); // true
console.log(checkPass.test(password)) // true

/*
Use lookaheads in the pwRegex to 
match passwords that are greater
 than 5 characters long, and have 
 two consecutive digits.*/



let sampleWord = "astronaut";
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
let resultAnswer = pwRegex.test(sampleWord);

console.log(resultAnswer); // false




//TOPIC Check For Mixed Grouping of Characters
/*Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses ().

If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g

Then check whether the desired string groups are in the test string by using the test() method.
*/
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);

console.log(testRegex.test(testStr));

//The test method here would return true.



/*Hint 1
Use a|b to check for either a or b.

Hint 2
Your regex should use mixed grouping like /P(engu|umpk)in/g.

Hint 3
Use .* to allow for middle names.

*/
 //Solution 1 (Click to Show/Hide)
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let resultOutput = myRegex.test(myString);
console.log(resultOption);




//TOPIC  Remove Whitespace from Start and End
/*Sometimes whitespace characters around 
strings are not wanted but are there. Typical processing 
of strings is to remove the whitespace at the start and 
end of it.

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The String.prototype.trim() method would work here, but you'll need 
to complete this challenge using regular expression */

//SOLUTION

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let answerResult = hello.replace(wsRegex, ""); // Change this line
console.log(answerResult);