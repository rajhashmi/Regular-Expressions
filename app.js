/* 
What are Regular Expressions ?

1. Allow us to check a series of character for `Matches`.
    e.g. it allow us to check a form field to try and match a valid email address.
        -it must have an @ symbol at a certain position.
        -it must end in an extension like .com or .org or co.uk.
    Regular Expressions allow us to check these kinds of things .
*/

const str = "Hello, my name is Shahid Hashmi, again my name is shahid hashmi";

let regEx = str.match(/Shahid/);
console.log(regEx) // shahid
// it will give some more information about the string (index, input and groups);

//it's matching 🥳. but wait there are 2 word that should match shahid so for that we use [flag g after slash].
let regEx_G = str.match(/shahid/g) // g is using for to match all shahid world in the sentence.
console.log(regEx_G);

// now it should match but it's look like it's not working why? ooh the second letter is small so if we want to use in case insensitive use flag i

let regEx_GE = str.match(/shahid/gi); // I dont care about captal case, I want all the matching letter. so using i flag.
console.log(regEx_GE);

//============================================ character Sets

// let's say i want to match a word that start with any letter but end with [at].
let str2 = "cat bat boat"; // the boat is not true in this case

let regEx_GE_Set = str2.match(/[cb]at/gi);
console.log(regEx_GE_Set); // cat and bat NOT boat.

// suppose there are alot first letter you want to match [abcdefghij] this is pretty long so we can use range in more efficeint way
console.log(str2.match(/[a-g]at/gi)); // this will work same will all the alphabet.
// let suppose I dont want to match all letter except [c] hmm 🤔. we can use Negation by using zor ^.
console.log(str2.match(/[^a]at/gi));// it will match all letter but not a

//=========================== Repeating Characters ===========================

// let's see if you want to match all the number in string for E.g the phone number. [0-9][0-9][0-9][0-9][0-9]....and so on but this not the right way to do.
let num = `123456789101100000`;
// using [+] operator after the character sets. hmm🤔? what plus do? the plus operator is knows as quantifier, in simple words one or more.
console.log(num.match(/[0-9]+/gi)); 
// but we want to match 11 digit numbers...🥹 we can give another quantifier in regEx which is {} we can pass exactly how many number we have to match consecutive digits. 
console.log(num.match(/[0-9]{11}/gi)) // now just matching 11 digits.
// what if you want to match in range like minimum can 11 digits and maximum can 15;
console.log(num.match(/[0-9]{11,15}/gi));
// if we want minimum range we will not give maximum;
console.log(num.match(/[0-9]{10,}/gi));

// ================================ Metacharacters ===========

//  \d match any digit character (same as [0-9]);
//  \D match non-digit characters
//  \w match any word character (a-z, A-Z, 0-9 and _)
//  \W match a non-word character
//  \s match a whiterspace character (space, tabs etc)
//  \t match a tab character only.
//  \B Find a match, but not at the beginning/end of a word
// d -- match the literal character, "d"
// \d -- match any digit character


// ================================ special characters ========

// ? this character meaning it can occur zero or one time, before one character
// colou?r
// color 
// . this means any letter at that place can be 
// cat.
// catd , catw, 

// let see we want to match 5 letters and it should also match from back as well as for E.g (hello) let's see in this case (helloshahid) no not work because it's matching hello from beginer but from last it's not matching.

let str3 = "hello";
console.log(str3.match(/^[a-z]{5}$/gi)); 
// ^ (caret): It asserts the start of the string. Everything following it in the regular expression should match from the beginning of the string.
// $ (dollar sign): It asserts the end of the string. Everything preceding it in the regular expression should match up to the end of the string

// pipe is | same as or operator
// p|t
// p|tyre
// (p|t)tyre        
let str4 = "hello";
console.log(str4.match(/(h|t)ello/gi));
