This is not a dynamic ConvolverNode, it is coming from html5 and javscript combination 

// localStorage
//presistent
> save wrt to browser 
We will see how we can save it, use it and delete it

localStorage.setItem('_eejktokm','sdfsdfdf43433')
undefined
localStorage.getItem('_eejktokm')
"sdfsdfdf43433"
localStorage.removeItem('_eejktokm')
undefined
localStorage.setItem('token','sdfsdfdf43433')
undefined
localStorage.setItem('token','mytoken')
undefined

There are two pages has no connection , one is about Home and another one is About page 
we are in the same city , don't know that address , then we meet at comon place 
Common storage globals torage 
Local storage drawback - it will be always there until we delete it 
I ti sis Persitent 
local storage is better option compared to cookies only drawback is actually persistent and devloper can use my data and other website also can use same data 


//sessiion Storage 
> It is tab specific it is best part 
> save with respect to tab 


> It is not persistent  as soon as close it wil not be there 

sessionStorage.setItem("_token2_","vvv")
undefined
sessionStorage.removeItem("_token2")
undefined
sessionStorage.removeItem("_token2_")
undefined
sessionStorage.setItem("_token2_","vvv")
undefined
sessionStorage.getItem("_token2_","vvv")
"vvv"

sessionStorage.getItem("_token2_")
"vvv"


>session is page specific and tab specific and not perminent because user is using pages na 
>amount of storage data he is saving in local and global 

////////cookies
cookies save wrt to website link or URL 
cookies has expire Time 
it is url specifc thing , storage is less and ithas expirty tiem also 

cookies dont save wrt to tab it saves wrt to url 
in coginito mode no cookies set 

document.cookies
undefined
document.cookie ="name = test user; expires = fri, 26 Aug 2020 01:00:00 UTC; path=/"
"name = test user; expires = fri, 26 Aug 2020 01:00:00 UTC; path=/"

to read cookies document.cookies you can get it actually


> what is the difference above three check...thisis how these three are defined 

//remember me.. where they will save your user name and password either in the cookies, or in the session or on the local storage 

//That dependent on security and dependent on their requirmetn , in any of them they can save it 

//ever notice or not 
//every conversation will be used for the recomondation engine because your siri is on your phone and google now is on ur phone..

//realtime usecases 

//it supports for any browser for any website

ES6
////////
revise 
help u out 

var name = "Avenger";
var rating =4.5;
var type = "action";
var ind = "Hollywood";

es5

var data = "The "+name+" is an "+type+"movie with rating as "+rating+" and from "+ind+"."

var name = "Avenger";
var rating =4.5;
var type = "action";
var ind = "Hollywood";

es5

var data = "The "+name+" is an "+type+"movie with rating as "+rating+" and from "+ind+"."

//es6 
it becomes very clean 

var data = ~ The ${name} is an ${type} movie with rating as  ${raitng} and from ${ind}.
data


var name = "Avenger";
var rating =4.5;
var type = "action";
var ind = "Hollywood";

es5

var data = "The "+name+" is an "+type+"movie with rating as "+rating+" and from "+ind+"."
VM96:6 Uncaught ReferenceError: es5 is not defined
    at <anonymous>:6:1
(anonymous) @ VM96:6
var name = "Avenger";
var rating =4.5;
var type = "action";
var ind = "Hollywood";


var data = "The "+name+" is an "+type+"movie with rating as "+rating+" and from "+ind+"."
undefined
data
"The Avenger is an actionmovie with rating as 4.5 and from Hollywood."
var data = ~ The ${name} is an ${type} movie with rating as  ${raitng} and from ${ind}.
data
VM128:1 Uncaught SyntaxError: Unexpected identifier
var data = ~ The ${name} is an ${type} movie with rating as  ${raitng} and from ${ind}.
ind
VM149:1 Uncaught SyntaxError: Unexpected identifier
var data = ~ The ${name} is an ${type} movie with rating as  ${ratitng} and from ${ind}.
ind
VM173:1 Uncaught SyntaxError: Unexpected identifier
var data = ~ The ${name} is an ${type} movie with rating as  ${ratitng} and from ${ind}.

VM190:1 Uncaught SyntaxError: Unexpected identifier
data
"The Avenger is an actionmovie with rating as 4.5 and from Hollywood."

> one is better than other 
>Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.
 They were called "template strings" in prior editions of the ES2015 specification