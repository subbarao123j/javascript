what is string operaton in java Script
how exactly u deal with the string
some simple and comlex also 
any matter you write it doesnot matter to me whle saving and using i will convert into which format i need an SVGFEFuncAElement.apply

var city = "ongoleKonda"
user can do it anyway..cannot force to do in particular way >>u devlope in ownway
usr types in any form title case..first letter caps and rest small >>how to achieve this
no inbuilt function for 

var city = "ongoleKonda"
undefined
city.toUpperCase()
"ONGOLEKONDA"
city.toLowerCase()
"ongolekonda"

when you talk about string each letter/variable of string can read separately
index star with zero...thats how it goes 
inshort i can say that >>how to overcome this

var city = "ongoleKonda"
undefined
city[0]
"o"
city[1]
"n"
city.length
11
var city = "    London  "
undefined
city.length

var city = "   ongoleKonda   "

city.trim()

when you are running in console it is cming , when u run actual code you will not see this unknown thing


trim can remove emty space 

var email = "subbarao"
var emilid ="Subbarao"

email == emilid


var email = "subbarao"
var emilid ="Subbarao"

email == emilid
false
email.toUpperCase() == emilid.toUpperCase()
true

user can type it in any form and i can handle situation that is what developer is alla bout 

u r not forcing user to enter something 

var email = "subbarao"
var emilid ="Subbarao"

email.charAt(0)
"s"
email[0}
VM980:1 Uncaught SyntaxError: Unexpected token '}'
email[0)
VM991:1 Uncaught SyntaxError: Unexpected token ')'
email(0)
VM1000:1 Uncaught TypeError: email is not a function
    at <anonymous>:1:1
(anonymous) @ VM1000:1
email[0]
"s"

be practical to standardways..why because people are using ur website fro any part of the world so if it s not updated problem
above code standard way is chatAt methiod 

it return value 

var email = "subbarao"
var emilid ="Subbarao"

email.charAt(0)
"s"
email.slic(1)
VM1084:1 Uncaught TypeError: email.slic is not a function
    at <anonymous>:1:7
(anonymous) @ VM1084:1
email.slice(1)
"ubbarao"
email.slice(2)
"bbarao"
email.slice(1,3)
"ub"
email.slice(1,4)
"ubb"

in short it wont count highter limit ...if you give (1,4) then before 4 value it returns 
if i write na...like 
it wont count higher limit...what ever is there it wwill return

now the functionality we require that 

var city = "amstEdam"
undefined
city.charAt(0)
"a"
city.charAt(0).toUpperCase()
"A"
city.slice(1).toLowerCase()
"mstedam"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"Amstedam"

it gives first letter in caps and rest all gives in small automatically

this is how we start building logic..there is no pattern 

cramming means memorising...  we should understand ...you have to understand ur way and make it ..it works in that way



clear 

var mydata = "Welcome to JavaScript"
undefined
mydata.replace('JavaScript', 'JS')
"Welcome to JS"
var mydata = "JavaScript Welcome to JavaScript"
undefined
mydata.replace('JavaScript', 'JS')
"JS Welcome to JavaScript"

this is how you do ...how will we do ..first occurence...global replacement 

mydata.replace(/JavaScript/g, 'JS')
"JS Welcome to JS"

if you want to remove the first occurence..go with ..if yhou want to remove all the occurence
// to replace globally
var city = "   London    .  "
undefined
city.replace(/ /g,'')
"London."
replace what .. with what ..... able to remove 

There is no direct way , we have to iterate 

go there and remove ..i will in loop

nth Charcter  ,,There is no direct method  ,, some how you ahve to build logic around that
they build logic but no direct way ,, the first thing is   ,, anywhere open that is very much obious,,,  


string and math operations..we weill discuss 
yesterday code alreay pushed 
how to push pull the code , anyway part of ir Course 

when you are on the git i will tell you how to make pull request also

























