// Assignments 1-67

// Chapter 01
//Task 01
alert('Welcome')

//Task 02
alert('Error! Please enter a valid password.')

//Task 03
alert('Welcome to JS land.. \nHappy Coding!')

//Task 04
alert('Welcome to JS land...')
alert('Happy Coding!')

//Task 05 from console
alert("Hello, i can run JS from my browser's console")

// Chapter 02
//Task 01
var username;

//Task 02
var myName = 'Salman Ahmed';

//Task 03
var message;
message = 'Hello World';
alert(message)

//Task 04
var stName = prompt('Enter Name: ')
alert(stName)
var stAge = prompt('Enter Age: ')
alert(stAge+' years old')
var stCert = prompt('Enter Certificate: ')
alert(stCert)

//Task 05
var str = "PIZZA";
var string='';
for(i=-3;i<=str.length;i++ ){
	string += str+'\n';
	str = str.substring(0, str.length - 1);
}
alert(string)

//Task 06
var email = prompt('Enter Email Address:')
alert('My email address is: '+email)

//Task 07
var book = 'A smarter way to learn JavaScript';
alert('I am trying to lern from book '+book)

//Task 08
document.write('Yah! i can write HTML content through JavaScript');

//Task 09
var line = '▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬';
alert(line)

// Chapter 03
// Task 01
var age = prompt('Enter Age: ');
alert('I am '+age+' years old')

//Task 02
var url_segment = window.location.href.split('/');
alert(url_segment)
var script_name = url_segment[url_segment.length - 1];
if (localStorage[script_name]) {
    localStorage[script_name] = parseInt(localStorage[script_name]) + 1;
}
else {
    localStorage[script_name] = 1;
}
alert("You've visited this site "+ localStorage[script_name] + " times");

//Task 03
var birthYear = parseInt(prompt('Enter birth year: '));
alert('My birth year is: '+birthYear+'\nDatatype of my declared variable is '+ typeof(birthYear))

//Task 04
vName = prompt('Enter Your Name: ')
pTitle = prompt('Enter Product Name: ')
qty = prompt('Enter Quantity: ')
alert(vName+' ordered '+ qty+' '+pTitle+' on ABC clothing store')

// Chapter 04
//Task 01
var a,b,c;

//Task 02
var a, _a, $a, AAA, studentClass;
var 1_a, -a, @a, *a, var='a';

//Task 03
document.write('<h1>Rules for naming JS Variables</h1><p>Variable names can only contain alphabets, numbers, $ and _.For example $my_1stVariable<br>Variables must begin with a $ , _ or alphabet. For example $name, _name or name<br>Variable names are case sensitive.<br>Variable names should not be JS keyword.</p>')

// Chapter 05
//Task 01
firstNum = parseInt(prompt('Enter First Name: '));
secondNum = parseInt(prompt('Enter Second Name: '));
result = firstNum + secondNum;
document.write('Sum of '+firstNum+' + '+secondNum+' is '+ result);

//Task 02
firstNum = parseInt(prompt('Enter First Name: '));
secondNum = parseInt(prompt('Enter Second Name: '));
opr = prompt('Enter Operator: ');
if(opr == '+'){
	result = firstNum + secondNum;
}else if(opr == '-'){
	result = firstNum - secondNum;
}else if(opr == '*'){
	result = firstNum * secondNum;
}else if(opr == '/'){
	result = firstNum / secondNum;
}else{
	result = 'Invalid input!';
}
document.write('Result of '+firstNum+' '+opr+' '+secondNum+' is '+ result);

//Task 03
var variable;
document.write('Value after variable declaration is '+variable);
variable = 5;
document.write('<br>Initial value: '+variable);
variable = ++variable;
document.write('<br>Value after increment: '+variable);
variable = variable+1;
document.write('<br>Value after addition: '+variable);
variable = --variable;
document.write('<br>Value after decrement: '+variable);
variable = variable / 3;
document.write('<br>The remainder is: '+variable);

//Task 04
var ticketPrice = parseInt(prompt('Enter ticket price: '));
var ticketQty = parseInt(prompt('Enter ticket quantity: '));
var billAmount = ticketPrice * ticketQty;
document.write('Total cost to buy '+ticketQty+' to a funland is '+billAmount);

//Task 05
var no = parseInt(prompt('Generate number of: '));
document.write('Table of '+no+'<br>')
for(i=0;i<=10;i++){
	result = i*no;
	document.write(no+' x '+i+' = '+ result+'<br>');
}

//Task 06
var getcel = parseFloat(prompt('Enter celcius: '))
var fer = (getcel * 9 / 5) +32;
document.write(getcel + ' is ' + fer + '<br>')
var getfer = parseFloat(prompt('Enter Fahrenheit: '))
var cel = (5/9) * (getfer-32);
document.write(getfer + ' is ' + Math.round(cel))

//Task 07
var priceItem1 = parseInt(prompt('Enter Price of Item One: '));
var qtyItem1 = parseInt(prompt('Enter Quantity of Item One: '));
var priceItem2 = parseInt(prompt('Enter Price of Item Two: '));
var qtyItem2 = parseInt(prompt('Enter Quantity of Item Two: '));
var shipCharge = parseInt(prompt('Enter Shipping Charges: '));
var total = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shipCharge;
document.write('<h1>Shopping Cart</h1>')
document.write('<p>Price of item 1: '+ priceItem1 +'<br>')
document.write('Quantity of item 1: '+ qtyItem1 +'<br>')
document.write('Price of item 2: '+ priceItem2 +'<br>')
document.write('Quantity of item 2: '+ qtyItem2 +'<br>')
document.write('Shipping Charges: '+ shipCharge +'<br>')
document.write('Total cost of your order is: '+ total +'</p>');

//Task 08
var totalMarks = parseFloat(prompt('Total Marks: '));
var obtainMarks = parseFloat(prompt('Marks Obtained: '));
var per =  (totalMarks*obtainMarks)/100;
document.write('<h1>Mark Sheet</h1>')
document.write('<p>Total Marks: '+ totalMarks +'<br>')
document.write('Marks Obtained: '+ obtainMarks +'<br>')
document.write('Percentage: '+ per +'%</p>');

//Task 09
var curr =  (10 * 104.80) + (25 * 28);
document.write('<h1>Currency in PKR</h1>')
document.write('<p>Total currency in PKR: '+ curr +'<p>')

//Task 10
var num = 10;
var exp = (num + 5) * 10 / 2;
document.write('Result is: ' + exp);

//Task 11
var cYear = parseFloat(prompt('Current year: '));
var bYear = parseFloat(prompt('Birth year: '));
var age =  cYear - bYear;
document.write('<h1>Age Calculator</h1>')
document.write('<p>Current year: '+ cYear +'<br>')
document.write('Birth year: '+ bYear +'<br>')
document.write('Age: '+ age +'</p>');

//Task 12
var favSnack = parseFloat(prompt('favorite snack: '));
var cAge = parseFloat(prompt('current age: '));
var mAge =  parseFloat(prompt('maximum age: '));
var estAmount = parseFloat(prompt('estimated amount per day: '));
var estItems = estAmount * (mAge - cAge);
document.write('<h1>The Lifetime Supply Calculator</h1>')
document.write('<p>Favorite snack: '+ favSnack +'<br>')
document.write('Current age: '+ cAge +'<br>')
document.write('Maximum age: '+ mAge +'<br>')
document.write('Estimated amount per day: '+ estAmount +'<br>')
document.write('You will need ' + estItems + ' to last you until the ripe old age of ' + mAge + ' </p>')

// Chapter 06-09
//Task 1
var a = parseInt(prompt('Enter number: '));
document.write('<h3>Result</h3>')
document.write('<p>The value of a is: '+ a +'<br>')
document.write('--------------------------- </p>')

document.write('<p>The value of ++a is: '+ (++a) +'<br>')
document.write('Now the value of a is: ' + a + '</p>')

document.write('<p>The value of a++ is: '+ (a++) +'<br>')
document.write('Now the value of a is: ' + a + '</p>')

document.write('<p>The value of --a is: '+ (--a) +'<br>')
document.write('Now the value of a is: ' + a + '</p>')

document.write('<p>The value of a-- is: '+ (a--) +'<br>')
document.write('Now the value of a is: ' + a + '</p>')

//Task 2
var a = 2, b = 1;
var result = --a;
document.write('<p>a is: '+ a +'<br>')
document.write('b is: '+ b +'<br>')
document.write('Result: ' + result + '</p>')

var result = --a - --b;
document.write('<p>a is: '+ a +'<br>')
document.write('b is: '+ b +'<br>')
document.write('Result: ' + result + '</p>')

var result = --a - --b + ++b;
document.write('<p>a is: '+ a +'<br>')
document.write('b is: '+ b +'<br>')
document.write('Result: ' + result + '</p>')

var result = --a - --b + ++b + b--;
document.write('<p>a is: '+ a +'<br>')
document.write('b is: '+ b +'<br>')
document.write('Result: ' + result + '</p>')

//Task 3
var name = prompt('Enter Name: ')
alert('Welcome ' + name)

//Task 5
var no = parseInt(prompt('Generate number of: '));
no = no?no:5;
document.write('Table of '+no+'<br>')
for(i=0;i<=10;i++){
	result = i*no;
	document.write(no+' x '+i+' = '+ result+'<br>');
}

//Task 6
totalMarks = 100;
sub1 = prompt('First subject name: ')?prompt('First subject name: '):'Subject 1';
sub2 = prompt('Second subject name: ')?prompt('Second subject name: '):'Subject 2';
sub3 = prompt('Third subject name: ')?prompt('Third subject name: '):'Subject 3';
sub1_marks = parseFloat(prompt('Enter '+ sub1 +' marks: '))?parseFloat(prompt('Enter '+ sub1 +' marks: ')):0;
sub2_marks = parseFloat(prompt('Enter '+ sub2 +' marks: '))?parseFloat(prompt('Enter '+ sub2 +' marks: ')):0;
sub3_marks = parseFloat(prompt('Enter '+ sub3 +' marks: '))?parseFloat(prompt('Enter '+ sub3 +' marks: ')):0;
sub1_per = (totalMarks*sub1_marks)/100;
sub2_per = (totalMarks*sub2_marks)/100;
sub3_per = (totalMarks*sub3_marks)/100;
document.write('<table style="min-width:70%;"><tr style="text-align:left;"><th>Subjects</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th><tr><td>'+sub1+'</td><td>'+totalMarks+'</td><td>'+ sub1_marks +'</td><td>'+ sub1_per +'%</td></tr><tr><td>'+sub2+'</td><td>'+totalMarks+'</td><td>'+ sub2_marks +'</td><td>'+ sub2_per +'%</td></tr><tr><td>'+sub3+'</td><td>'+totalMarks+'</td><td>'+ sub3_marks +'</td><td>'+ sub3_per +'%</td></tr><tr><td></td><td><b>'+(totalMarks*3)+'</b></td><td><b>'+ (sub1_marks+sub2_marks+sub3_marks) +'</b></td><td><b>'+ ((sub1_per + sub2_per + sub3_per) / 3) +'%</b></td></tr></table>')

// Chapter 09-11
//Task 1
city = prompt('Enter city name: ');
if(city.toLowerCase() == 'karachi'){
	alert('Welcome to city of lights')
}

//Task 2
gender = prompt('Enter your gender: ');
if(gender.toLowerCase() == 'male'){
	alert('Good Morning Sir')
}else if(gender.toLowerCase() == 'female'){
	alert('Good Morning Ma’am')
}

//Task 3
color = prompt('Enter color: ');
if(color.toLowerCase() == 'red'){
	alert('Must Stop')
}else if(color.toLowerCase() == 'yellow'){
	alert('Ready to move')
}else if(color.toLowerCase() == 'green'){
	alert('Move now')
}else{
	alert('Please enter one of the color of road traffic signal!')
}

//Task 4
fuel = parseFloat(prompt('Enter remaining fuel: '));
if(fuel < 0.25){
	alert('Please refill the fuel in your car')
}

//Task 5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

//Task 6
var totalMarks, obtainedMarks, per, grade, remarks;
totalMarks = parseFloat(prompt('Enter total marks: '));
obtainedMarks = parseFloat(prompt('Enter obtained marks: '));
per = (100 * obtainedMarks) / totalMarks;
if(per >= 80){
	grade = 'A-one';
}else if(per >= 70){
	grade = 'A';
}else if(per >= 60){
	grade = 'B';
}else if(per < 60){
	grade = 'Fail';
}

if(grade == 'A-one'){
	remarks = 'Excellent';
}else if(grade = 'A'){
	remarks = 'Good';
}else if(grade == 'B'){
	remarks = 'You need to improve';
}else if(grade == 'Fail'){
	remarks = 'Sorry';
}

document.write('<h1>Mark Sheet</h1>')
document.write('<p>Total marks: '+ totalMarks +'<br>')
document.write('Marks Obtained: '+ obtainedMarks +'<br>')
document.write('Percentage: '+ Math.round((per + Number.EPSILON) * 100) / 100 +'%<br>')
document.write('Grade: '+ grade +'<br>')
document.write('Remarks: ' + remarks +' </p>')

//Task 7
var secret = Math.floor(Math.random() * 11);
var num = parseInt(prompt('Enter any number between 0-10: '));
if(secret == num){
	alert('Bingo! Correct answer')
}else if((num + 1) == secret){
	alert('Close enough to the correct answer')
}

//Task 8
var num = parseInt(prompt('Enter number: '));
if (num % 3 == 0){
	alert(num+ ' is divisible by 3!')
}

//Task 9
var num = parseInt(prompt('Enter number: '));
if(num % 2 == 0){
	alert(num+ ' is even number!')
}else if(Math.abs(num % 2) == 1){
	alert(num+ ' is odd number!')
}

//Task 10
var temp = parseInt(prompt('Enter temperature: '));
if(temp > 40){
	alert('It is too hot outside.')
}else if(temp > 30){
	alert('The Weather today is Normal.')
}else if(temp > 20){
	alert('Today’s Weather is cool.')
}else if(temp > 10){
	alert('OMG! Today’s weather is so Cool.')
}

//Task 11
var firstNum, secondNum, opr, result;
firstNum = parseInt(prompt('Enter first number: '));
secondNum = parseInt(prompt('Enter second number: '));
opr = prompt('Enter operation: ');
if(opr == '+'){
	result = firstNum + secondNum;
}else if(opr == '-'){
	result = firstNum - secondNum;
}else if(opr == '*'){
	result = firstNum * secondNum;
}else if(opr == '/'){
	result = firstNum / secondNum;
}else if(opr == '%'){
	result = firstNum % secondNum;
}
alert('Result: '+result)

// Chapter 12-13
// Task 01
var input = prompt('Enter character: ');
if(/^[A-Z]$/i.test(input)){
	if(input == input.toUpperCase()){
		alert(input + ' is uppercase letter!')
	}else if(input == input.toLowerCase()){
		alert(input + ' is lowercase letter!')
	}
}else if(/^\d+$/.test(input)){
	alert(input + ' is number!')
}

// Task 02
firstNum = parseInt(prompt('Enter first number: '));
secondNum = parseInt(prompt('Enter second number: '));
if(firstNum == secondNum){
	alert('Both entered numbers are equal.')
}else if(firstNum > secondNum){
	alert(firstNum + ' is larger than ' + secondNum)
}else if(secondNum > firstNum){
	alert(secondNum + ' is larger than ' + firstNum)
}

// Task 03
num = parseInt(prompt('Enter number: '));
if(num == 0){
	alert('Entered number is zero')
}else if(num > 0){
	alert(num + ' is positive')
}else if(num < 0){
	alert(num + ' is negative')
}

// Task 04
str = prompt('Enter letter: ');
if(/^[aeiou]$/.test(str.toLowerCase())){
	alert('true');
}else{
	alert('false')
}

// Task 05
var orgPassword = 'password';
password = prompt('Enter password: ');
if(orgPassword == password){
	alert('Correct! The password you entered matches the original password');
}else if(!password){
	alert('Please enter your password')
}else{
	alert('Incorrect password')
}

// Task 06
var greeting;
var hour = 13;
if (hour < 18) {
	greeting = "Good day";
}else{
	greeting = "Good evening";
}

// Task 07
time = prompt('Enter time: ');
if(time >= 0 && time < 1200){
	alert('Good Morning!');
}else if(time >= 1200 && time < 1700){
	alert('Good Afternoon!')
}else if(time >= 1700 && time < 2100){
	alert('Good Evening!')
}else if(time >= 2100 && time <= 2359){
	alert('Good Night!')
}else{
	alert('Invalid input, please try again!')
}

// Chapter 14-16
// Task 01
students = [];

// Task 02
students = new Array();

// Task 03
students = [];
students = ["Ahmad", "Farooq", "Bakar", "Waqas"];

// Task 04
studentIDs = [];
studentIDs = [5,7,9,11];

// Task 05
studentData = [];
studentData = [false,true];

// Task 06
studentData = [];
studentData = [5,"Ahmad",7,"Farooq",9,"Ali",11,"Imran"];

// Task 07
degree = [];
degree = [ 'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
count = 1;
document.write('<h2>Qualifications:</h2>');
degree.forEach(function(element) { 
	document.write(count+') '+element+'<br>');
	count++;
});

// Task 08
var students = [], score = [], per;
for (i=1; i <= 3; i++) {
	students.push(prompt('Enter Name of Student#'+i));
}
for (i=1; i <= 3; i++) {
	score.push(parseFloat(prompt('Enter Score of Student#'+i)));
}
for (var i=0; i < students.length; i++) {
  	per = (100 * score[i]) / 500;
  	document.write('Score of '+students[i]+' is '+score[i]+'. Percentage is '+per+'%<br>');
}

// Task 09
var colors = ['red','green','blue'];
function displayColors(title='Colors:'){
	document.write('<h1>' + title + '</h1>');
	for (i=1; i <= colors.length; i++) {
		document.write(i+') '+colors[i-1]+'<br>');
	}
	document.write('<br>');
}
displayColors('Colors:')

colors.unshift(prompt('Add color at begining of list: '));
displayColors('Colors list after adding color at begining:')

colors.push(prompt('Add color at end of list: '));
displayColors('Colors list after adding color at end:')

// Task 10
var scores = [];
function displayList(title='Scores:',isSorted){
	if(isSorted == 1){
		scores.sort();
	}
	document.write('<b>' + title + '</b>');
	for (i=1; i <= scores.length; i++) {
		document.write(scores[i-1]);
		document.write(i < scores.length?', ':'.');
	}
	document.write('<br>');
}

scores.push(prompt('Add students score: '));
scores.push(prompt('Add students score: '));
scores.push(prompt('Add students score: '));
scores.push(prompt('Add students score: '));
displayList('Scores of students: ',0)
displayList('Ordered Scores of students: ',1)

// Task 11
var cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar', 'Hyderabad'];
document.write('<b>Cities list:</b> ');
for (i=1; i <= cities.length; i++) {
	document.write(cities[i-1]);
	document.write(i < cities.length?', ':'.');
}
document.write('<br>');
var selectedCities = cities.slice(2,5);
document.write('<b>Selected cities list:</b> ');
for (i=1; i <= selectedCities.length; i++) {
	document.write(selectedCities[i-1]);
	document.write(i < selectedCities.length?', ':'.');
}
document.write('<br>');

// Task 12
var arr = ['This', 'is', 'my', 'cat'];
document.write('<b>Array:</b><br>' + arr + '<br>' )
document.write('<b>String:</b><br>' )
document.write(arr.join().replace(/,/g, ' '));

// Task 13
var arr = [' Keyboard',   ' Mouse', ' LCD', ' Speakers'];
document.write('<b>Devices</b><br>' + arr +'<br>')
for (i=1; i <= arr.length; i++) {
	document.write('<b>Out</b><br>'+arr[i-1]);
	document.write(i < arr.length?'<br> ':'.');
}

// Task 14
var arr = [' Keyboard',   ' Mouse', ' LCD', ' Speakers'];
document.write('<b>Devices</b><br>' + arr +'<br>')
for (i=arr.length; i >= 1; i--) {
	document.write('<b>Out</b><br>'+arr[i-1]);
	document.write(i > 0?'<br> ':'.');
}

// Task 15
var phones = ['Nokia','Samsung','Haier','Apple','Motorolla','Sony'];
document.write('<select>');
for (i=1; i <= phones.length; i++) {
	document.write('<option>'+phones[i-1]+'</option>');
}
document.write('</select>');

// Chapter 17-20
// Task 01
var students = [];
students = [
   ["ABC", 24, 18000],
   ["EFG", 30, 30000],
   ["IJK", 28, 41000],
   ["EFG", 31, 28000],
];

// Task 02
var arr = [];
arr = [
   [0,1,2,3],
   [1,0,1,2],
   [2,1,0,1]
];

// Task 03
for(var i of [1,2,3,4,5,6,7,8,9,10]) document.write(i+'<br>');

// Task 04
var no = parseInt(prompt('Generate multiplication table of: '));
var lenght = parseInt(prompt('Enter lenght for table: '));
document.write('Table of: '+no+'<br>Lenght: '+lenght+'<br>')
for(i=1;i<=lenght;i++){
	result = i*no;
	document.write(no+' x '+i+' = '+ result+'<br>');
}





// Chapter 21-25
// Task 01
fname = prompt("Enter First Name: ")
lname = prompt("Enter Last Name: ")
fullName = fname + " " + lname;
alert(fullName);

// Task 02
mobile = prompt("Enter favourite mobile phone model: ")
alert("My favourite phone is: "+mobile+ "Lenght of string is: " +mobile.length);

// Task 03
word = "Pakistani";
alert("String: "+word +"\nLength of string: "+word.indexOf('n'));

// Task 04
hello = "Hello World";
alert("String: "+hello+"\nLast index of: "+hello.lastIndexOf('l'));

// Task 05
third = "Pakistani";
alert("String: "+third +"\nCharacter at 3rd index: "+third.charAt(3));


// Task 06
fname = prompt("Enter First Name: ")
lname = prompt("Enter Last Name: ")
fullName = fname.concat(" "+ lname)
alert(fullName);

// Task 07
city = "Hyderabad";
alert("City: "+city+"\nAfter replacement: "+city.replace("Hyder", "Islam"));

// Task 08
message = "Ali and Sami are best friends. They play cricket and football together";
alert(message.replace(/and/g, "&"));

// Task 09
value = "472";
document.write("Value: " + value + "\nType: " + typeof(value))
value = parseInt(value);
document.write("<br>Value: " + value + "\nType: " +typeof(value))

// Task 10
userInput = prompt("Enter any word: ")
alert("User Input: " + userInput + "\nUpperCase: " + userInput.toUpperCase())

// Task 11
userInput = prompt("Enter any word: ")
alert("User Input: " + userInput + "\nTitle Case: " + userInput.charAt(0).toUpperCase() + userInput.substring(1))

// Task 12
num = 35.36;
num = num.toString();
alert("Number: " + num + "\nResult: " + num.split('.').join(''))

// Task 13
userName = prompt("Enter username (only alphabets allowed): ")
if (!/^[a-zA-Z]+$/.test(userName)) { 
    alert("Invalid Username!")
}else{
	alert("Valid Username!")
}

// Task 14
A = ["cake", "apple pie", "cookie", "chips", "patties"];
userInput = prompt("Enter item to search: ")
if(A.includes(userInput.toLowerCase())){
	alert(userInput + ' is available at index '+ A.indexOf(userInput.toLowerCase()) + ' in our bakery');
}else{
	alert('We are sorry, ' + userInput + ' is not available in our bakery!')
}

// Task 15
password = prompt("Enter password: ")
var letter = /[a-zA-Z]/;
var number = /[0-9]/;

if (password.length < 6 ) {
    alert('Password must be at least of six characters!')
}else if(!letter.test(password)){
	alert('Password must contain alphabet!')
}else if(!number.test(password)){
	alert('Password must contain number!')
}else if(/^\d/.test(password)){
	alert('Password can not begin with number!')
}else{
	alert('You have entered a valid password!')
}

// Task 16
var str = 'University of Karachi';
var ar = str.split(''); 
ar.forEach(function(entry) {
  document.write(entry+'<br>');
});

// Task 17
userInput = prompt('Enter any word: ');
alert("User input: "+userInput +"\nLast Character of input: "+userInput.substr(userInput.length - 1));

// Task 18
str = "“The quick brown fox jumps over the lazy dog";
var count = (str.toLowerCase().match(/the/g) || []).length;
alert('There are '+ count + ' occurence of the word "the"')

// Chapter 26-30
// Task 01
userInput = Number(prompt("Enter number: "));
alert(typeof(userInput)+"\nNumber: " + userInput + "\nRound of value: " + Math.round(userInput) + "\nFloor value: " +  Math.floor(userInput) + "\nCiel value: " + Math.ceil(userInput));

// Task 02
userInput = Number(prompt("Enter number: "));
alert(typeof(userInput)+"\nNumber: " + userInput + "\nRound of value: " + Math.round(userInput) + "\nFloor value: " +  Math.floor(userInput) + "\nCiel value: " + Math.ceil(userInput));

// Task 03
userInput = Number(prompt("Enter number: "));
alert('Absolute value of '+ userInput + ' is ' + Math.abs(userInput))

// Task 04
alert('Random dice value: ' + Math.floor((Math.random() * 6) + 1))

// Task 05
var value = '';
if(Math.floor((Math.random() * 2) + 1) == 1){
	value = 'Heads'
}else{
	value = 'Tails';
}
alert('Random coin value: ' + value  )

// Task 06
alert('Random number between 1 & 100: ' + Math.floor((Math.random() * 100) + 1))

// Task 07
userInput = prompt("Enter your weight: ");
alert('Your weight is ' + userInput.replace(/[^\d.]/g, '') + ' Kilograms')

// Task 08
secret = 7;
userInput = Number(prompt("Enter number between 1 & 10: "));
if (userInput == secret){
	alert('Congratulations!')
}else{
	alert('Invalid number!')
}

// Chapters 31-34
// Task 01
alert(new Date());

// Task 02
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
alert(months[new Date().getMonth()])

// Task 03
daylist = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
alert(daylist[new Date().getDay()])

// Task 04
if(new Date().getDay() == 0 || new Date().getDay() == 6){
	alert('Its Fun day!')
}else{
	alert('Its not Fun Day.')
}

// Task 05
if(new Date().getDate() <= 16){
	alert('First fifteen days of month')
}else{
	alert('Last days of month')
}

// Task 07
var dt = new Date();
var h =  dt.getHours(), m = dt.getMinutes();
var result = (h > 12) ? 'PM' : 'AM';
alert(result)

// Task 08
laterDate = new Date(new Date().getFullYear(), 11, 31)
alert('Later Date: '+ laterDate)

// Task 09
Ramadan_ = new Date(new Date().getFullYear(), 3, 24);
to_day = new Date(new Date().toLocaleString());
timeDiff  =  to_day.getTime() - Ramadan_.getTime();
days      = timeDiff / (1000 * 3600 * 24); 
alert(Math.round(days) +' days have passed since 1st Ramadan, 2020' )

// Task 10
ref = new Date(new Date().getFullYear(), 11, 5, 2015);
beg = new Date(new Date().getFullYear(), 0, 1, 2015);
timeDiff  =  ref.getTime() - beg.getTime();
sec      = timeDiff / 1000; 
alert(Math.round(sec) +' seconds had passed since begning of 2015' )

// Task 11
date = new Date(new Date().toLocaleString());
reset = new Date(date - 1*60*60*1000); 
newdate = new Date(reset);
alert('Current Date: '+ date + '\n1 hour ago, it was '+ newdate.toString());

// Task 12
current = new Date(new Date().toLocaleString());
newdate = current.setFullYear(current.getFullYear() -100);
alert('Current Date: '+ new Date(new Date().toLocaleString()) + '\n100 years back, it was '+ new Date(newdate).toString());

// Task 13
age = prompt("Enter your age: ")
current = new Date(new Date().toLocaleString());
newdate = current.setFullYear(current.getFullYear() - age);
alert('Your age is: '+ age + '\nYour birth year is: '+ new Date(newdate).getFullYear());

// Task 14
consumerName = 'Muhammad Ahmad';
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
no_units = 410;
charges_unit = 16;
late_fee = 350;

document.write('<h1>K-Electric Bill</h1>')
document.write('<p>Consumer Name: <b>'+ consumerName +'</b></p>')
document.write('<p>Month: <b>'+ months[new Date().getMonth()] +'</b></p>')
document.write('<p>Number of Units: <b>'+ no_units +'</b></p>')
document.write('<p>Charges per Unit: <b>'+ charges_unit +'</b></p><br>')

document.write('<p>Net Amount Payable (Within due date): <b>'+ no_units * charges_unit  +'</b></p>')
document.write('<p>Late payment surcharge: <b>'+ late_fee +'</b></p>')
document.write('<p>Gross Amount Payable (after due date): <b>'+ (no_units * charges_unit + late_fee) +'</b></p>')

// Chapter 35-38
// Task 01
function getCurrentDate(){
	alert(new Date());
}
getCurrentDate()

// Task 02
function greetUser(firstname, lastname){
	alert('Welcome '+firstname +' '+ lastname + ' !');
}
greetUser('Ahmad','Mujtaba')

// Task 03
function sumTwoNumbers(){
	num1 = parseInt(prompt('Enter first number: '))
	num2 = parseInt(prompt('Enter second number: '))
	alert('Sum is: '+ (num1 + num2))
}
sumTwoNumbers()

// Task 04
function calculator(num1,num2,opr){
	if(opr == '*'){
		result = num1 * num2;
	}else if(opr == '/'){
		result = num1 / num2;
	}else if(opr == '+'){
		result = num1 + num2;
	}else if(opr == '-'){
		result = num1 - num2;
	}else{
		result = 'Error in calculating values!';
	}
	alert('Result: '+ result)
}
calculator(2,5,'*')

// Task 05
function squareIt(number) {
  alert(number ** 2)
}
squareIt(5)

// Task 06
function sFact(num)
{
    var rval=1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    alert(rval)
}
sFact(2)


// Task 07
function counting(num1,num2)
{
	for(i=num1; i<=num2; i++){
		document.write(i + '<br>')
	}
}
counting(2,10)

// Task 10
function isPalindrome(str) {
 alert('Enter word is Palindrome: '+ (str == str.split('').reverse().join('')));
}
isPalindrome('racecar');

// Task 11
function toTitleCase(str) {
	sentence = '';
    str.replace(/\w\S*/g, function(str){
    	sentence +=  (str.charAt(0).toUpperCase() + str.substr(1).toLowerCase()) + ' ';
    });
    alert(sentence)
}
toTitleCase('the quick brown fox')

// Task 12
function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    alert('Entered Sentence: ' + string + '\nLongest word: ' + word);
}
longestWord('Web Development Tutorial')

// Task 13
function findletter(str,letter){

	alert(str.toLowerCase().split(letter.toLowerCase()).length-1);

}
findletter('JSResourceS.com','J')