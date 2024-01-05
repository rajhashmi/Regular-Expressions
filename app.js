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

// now it should match but it's look like it's not working why? ooh the second letter is small so if we want to use in case sensitive use flag i

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

