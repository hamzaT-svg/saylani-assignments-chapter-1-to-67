// // Saylani Javascript Assignment From Chapter 1 to 67
// // Name: Hamza Tasadaq
// // Email:hamzatasadaq01@gmail.com
// I join this course late so this is my first assignment
// // CHAPTER1

//  question1

alert("Welcome to the alerts question no 1 solved");


//question2
alert("Error! Please enter a valid password.");


// question3
alert("Welcome to JS Land...\nHappy Coding");

// question4
alert("Welcome to JS Land...");
alert("Happy Coding!");



// question5
console.log(alert("Hello.. I can run JS through my developers console"));



// question7
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


// // CHAPTER2               

// question 1

var userName;

// question2
var myName = "Muhammad Bilal";



// question 3
var message;
message = "Hello World";
alert(message);

// question 4
var name = "Hamza Tasadaq";
var age = 19;
var course="Certified Mobile Application Development";

alert(name);
alert(age + " years old");
alert(course);



// question 5
var All="PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(All);


// question 6
var email= "hamzatasadaq@gmail.com";
alert("My email address is " + email);



// question7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book); 

// question8
document.write("Yah! I can write HTML content through JavaScript<br><br>");



// question9
alert("▬▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬<br><br>");




// // CHAPTER3 

// question1
var age = 19;
alert("I am " + age + " years old<br><br>");

// question2
var count = 0;
if (window.performance) {
    console.info("window.performance works fine on this browser");
  }
    if (performance.navigation.type) {
      alert( "This page is reloaded" );
      count=count+1;
    } else {
      alert( "This page is not reloaded");
    }
alert("You have visited this site " + count + " times ");


// question3
var birthYear = 2001 + "\n";
document.write("My birth year is " + birthYear  + "<br>Data type of my declared variable is number<br><br>");


// question4
var visitorsName = "Hamza Tasadaq";
var productTitle = "T-shirt(s)";
var quantity = "10";
document.write(visitorsName.bold() + " ordered " + quantity.bold() + " " + productTitle.bold() + " on XYZ Clothing store<br><br>");


// // CHAPTER4                       
// question1
var varOne,varTwo,varThree;


// question2
var car;
var bus_no;
var school_2
var z;
var varName;
// // Illegal variables
// var var;
// var 2car;
// var this;
// var Any_any%No$;
// var ^thisvar;

// question3

var head="Rules for naming JS variables";
var contain1="numbers",contain2="$",contain3="_",contain4="letter",contain5="keywords";
var caseCondition = "sensitive";
document.write(head.bold()+ "<br><br><br>Variable names can only contain " + contain1 + ","
 + contain2 +" and "+contain3+" For example $my_1stVariable<br>"+
"Variables must begin with a "+contain4+" "+contain2+" or " + contain3+"."+
"For example $name, _name or name<br>Variable names are case "+caseCondition+ "<br>"+ 
"Variable names should not be JS "+contain5<br>+"<br></br>");



// // CHAPTER5                  
// question1
var num1=2;
var num2=4;
var sum;
sum=num1 +num2;
document.write("Sum of "+num1+" and "+num2+" is "+" "+sum+"<br>");

// question2
var num1=100;
var num2=76;
var sub;
sub=num1 - num2;
document.write("DIFFERRENCE of "+num1+" and "+num2+" is "+sub+"<br>");
multiplication
var num1=120;
var num2=3;
var mul;
mul=num1 * num2;
document.write("Product of "+num1+" and "+num2+" is "+mul+"<br>");

division
var num1=120;
var num2=3;
var div;
div=num1 / num2;
document.write("Division of "+num1+" by "+num2+" is "+div+"<br>");

modulus
var num1=12;
var num2=3;
var modulus;
modulus=num1 / num2;
document.write("Reminder of "+num1+" divided by "+num2+" is "+modulus+"<br>");



// question3
var anyVariable;


var remainder=anyVariable%3;
document.write("<br>The remainder is: "+remainder+"<br>");



// question4
var ticketPrice = 600;
var cost=ticketPrice*5;
document.write("Total cost to buy 5 tickets for a movie is "+ cost+"PKR<br>");


// question5
var num=9;
var head="Table of nine is";
document.write(head.bold());
for(var i=1;i<=10;i++)
{
    var tab=num*i;
    document.write("<br>"+(num)+" x "+(i)+" = "+tab);
}

// question6
var TemperatureCelsius = 25;
var TemperatureFahrenheit=(TemperatureCelsius*(9/5)+32);
document.write("<br><br>"+TemperatureCelsius+"°C is "+TemperatureFahrenheit+"°F");
TemperatureFahrenheit=100;
TemperatureCelsius=(TemperatureFahrenheit-32)*(5/9);
document.write("<br>"+TemperatureFahrenheit+"°F is "+TemperatureCelsius+" °F");


// question7
var priceItem1=650;
var priceItem2=100;
var QuanItem1=3;
var QuanItem2=7;
var shippingCharges = 100;
var totalCost=(priceItem1*QuanItem1)+(priceItem2*QuanItem2)+shippingCharges;
document.write("<br><br>Total cost of your order is "+totalCost);

// question8
var totalMarks=916;
var obtainedMarks=1100;
var percentage = (totalMarks/obtainedMarks)*100;
document.write("<br><br><br>Total Marks: "+totalMarks+"<br>");
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.write("Percentage: "+percentage+"%<br><br><br>");


// question9
var name="Currency in PKR";
document.write(name.bold());
var USD=10;
var SR=25;
var RS=(USD*104.80)+(SR*28);
document.write("<br>Total currency in PKR is: "+RS);


// question10
var num=4;
num=((num+5)*10)/2;
document.write("<br><br>The result is "+ num+"<br><br>");

// question11
var currentYear=2020;
var birthYear=2001;
var Age=currentYear-birthYear;
document.write("<br><br>Current Year is = "+currentYear+"<br>");
document.write("Birth Year is = "+birthYear+"<br>");
document.write("Your Age is = "+Age+"<br>");



// question12
var radius=20.0;
var circum=(2.0*3.142*radius);
var Area=(3.142*(20*20));
document.write("<br><br>Circumference of circle is:"+circum);
document.write("<br>Radius of circle is: "+radius+"<br>");
document.write("Area of circle is: "+Area+"<br><br>");

// question13
var favoriteSnack="chocolateChip";
var currentAge=19;
var estimatedMaxAge=65;
var amountPerDay=1;
var estimatedEat=(estimatedMaxAge-currentAge)*amountPerDay*365;
document.write("<br><br>You will need "+estimatedEat + " to last you until the ripe old age of "
+estimatedMaxAge);

 
// // Chapter 6-9                        

// question1
var a=10;
document.write("<br><br>The value of a is: "+a)
++a;
document.write("<br>The value of ++a is: "+a);
document.write("<br>Now the value of a is: "+a);

document.write("<br><br><br>The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+a);

document.write("<br><br><br>The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+a);

document.write("<br><br><br>The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+a+"<br><br>");

// question2
var result = --a - --b + ++b + b--;
--a;
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("result is "+result+"<br>");

// question3
var name=prompt("Whats your name?");
alert("Your name is "+name);


// question4
var num=prompt("Enter a number: ");
var num1=5;
var mul;
if(!num)
{
    for(var i=1;i<=10;i++)
    {
        mul=num1*i;
        document.write(num1+" x "+i+" = "+mul+"<br>");
    }
}
else
{
    for(var i=1;i<=10;i++)
    {
        mul=num*i;
        document.write(num+" x "+i+" = "+mul+"<br>");
    }
}
// question5
var sub1,sub2,sub3;
sub1=prompt("Enter first subject name");
sub2=prompt("Enter second subject name");
sub3=prompt("Enter third subject name");
var total_marks = 100;
var x=prompt("Enter obtained marks for subject one ");
var obtained_marks1 = parseInt(x);
var y=prompt("Enter obtained marks for subject two ");
var obtained_marks2 = parseInt(y);
var z=prompt("Enter obtained marks for subject three ");
var obtained_marks3 = parseInt(z);
var percent1=(obtained_marks1/total_marks)*100;
var percent2=(obtained_marks2/total_marks)*100;
var percent3=(obtained_marks3/total_marks)*100;
var Total=total_marks*3;
var TotalPercentage;
var obtained=obtained_marks1+obtained_marks2+obtained_marks3;
TotalPercentage=(obtained/Total)*100;
var head1 = "Subject";
var head2 = "Total Marks";
var head3 = "Obtained Marks";
var head4 = "Percentage";
document.write(head1.bold()+"&nbsp;&nbsp;&nbsp;"+head2.bold()+"&nbsp;&nbsp;&nbsp;"+head3.bold()+"&nbsp;&nbsp;&nbsp;"
+head4.bold()+"<br>"+sub1+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks1+"&nbsp;&nbsp;&nbsp;"+percent1+"<br>"
+sub2+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks2+"&nbsp;&nbsp;&nbsp;"+percent2+"<br>"
+sub3+"&nbsp;&nbsp;&nbsp;"+total_marks+"&nbsp;&nbsp;&nbsp;"+obtained_marks3+"&nbsp;&nbsp;&nbsp;"+percent3+"<br>"
+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+Total+"&nbsp;&nbsp;&nbsp;"+obtained+"&nbsp;&nbsp;&nbsp;"+"&nbsp;&nbsp;&nbsp;"+TotalPercentage+"<br>");


// // Chapter 9-11          

// question1
var city=prompt("Enter your city name?");
var xcity=city.toLocaleLowerCase();
if(xcity=="karachi")
{
    alert("Welcome to city of lights");
}
else{
    alert("We are not ordered to welcome you");
// }
// question2
var gender=prompt("Enter your gender");
gender=gender.toLowerCase();
if(gender=="male")
{
    alert("Good Morning Sir");
}
else if(gender=="female"){
    alert("Good Morning Ma'm");
}

// question3
var color=prompt("Input color of road traffic signal");
color=color.toLowerCase();
if(color==="red")
{
    alert("Must stop");
}
else if(color==="yellow")
{
    alert("ready to move");
}
else if(color==="green")
{
    alert("move now");
}
else
{
    alert("Enter right value");
}

question4
var fuel=prompt("Input remaining fuel in your car(in litres)");
fuelNum=parseFloat(fuel);
if(fuelNum<0.25)
{
    alert("Please refill the fuel in your car");
}
else if(fuelNum>=0.25)
{
    alert("Your fuel is ok now");
}

// question5
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
if("caq" < "car"){
    alert("caq is smaller than car");
}

// question6
var sub = prompt("Enter the marks for sub1");
var sub1=parseFloat(sub);
sub = prompt("Enter the marks for sub2");
var sub2=parseFloat(sub);
sub = prompt("Enter the marks for sub3");
var sub3=parseFloat(sub);
var obt=sub1+sub2+sub3;
var total=prompt("Enter the total marks");
total=parseFloat(total);
var percentage=(obt/total)*100;
var grade;
var remarks;
if(percentage>=80)
{  
    grade="A-one";
    remarks="excellent";
}
else if(percentage>=70)
{
    grade="A";
    remarks="Good";
}
else if(percentage>=60)
{
    grade="B"
    remarks="You need to improve";
}
else if(percentage<60)
{
    grade="fail";
    remarks="Sorry";
}
var marksheet="MarksSheet";
var tm="Total Marks";
var mo="Marks Obtained";
var perc = "Percentage";
var gra="Grade";
var rema ="Remarks";
document.write(marksheet.bold()+"<br>"+tm.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+total
+"<br>"+mo.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+obt+"<br>"+perc.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"+
percentage+"%"+"<br>"+gra.bold()+"&nbsp;&nbsp;:"+grade+"<br>"+rema.bold()+"&nbsp;&nbsp;&nbsp;&nbsp;"
+remarks);

// question7
var sec=Math.floor(Math.random()*10);
var guess=prompt("Guess the secret number");
guess=parseInt(guess);
if(guess===sec)
{
    alert("Bingo!Correct Answer aa");
}
else if((guess-1)===sec)
{
    alert("Close enough to the correct answer");
}


// question8
var che=prompt("Enter the number to check if its divisible by 3");
check=parseInt(che);
if(check%3===0)
{
    alert("Yes it is divisible by 3");
}
else 
{
    alert("No its not divisible by 3");
}

// question9
var eve=prompt("Enter the number to check for even or odd");
eve=parseInt(eve);
if(eve%2===0)
{
    alert("Even Number it is");
}
else
{
    alert("Its an Odd number");
}


// question10
var T=prompt("Enter the temperature");
var temp=parseInt(T);
if(temp>40)
{
    alert("It is too hot outside");
}
else if(temp>30)
{
    alert("The Weather today is normal");
}
else if(temp>20)
{
    alert("Today's weather is Normal");
}
else if(temp>10)
{
    alert("OMF! Today’s weather is so Cool.");
}

// question11
var num1=prompt("Enter first number");
num1=parseFloat(num1);
var num2=prompt("Enter second number");
num2=parseFloat(num2);
var result;
var sym=prompt("Enter the operation to perform (+, -, *, /, %)");
if(sym==="+")
{
    result=num1+num2;
    alert("The sum of two numbers is equal to:    " + result);
}
else if(sym==="-")
{
    result=num1-num2;
    alert("The difference of two numbers is equal to:   "+result);
}
else if(sym==="*")
{
    result=num1*num2;
    alert("The multiplication of two numbers is equal to:    "+result);
}
else if(sym==="/")
{
    result=num1/num2;
    alert("The division of two numbers is equal to:     "+result);
}
else if(sym==="%")
{
    result=num1%num2;
    alert("The remainder of two numbers is equal to:    "+result);
}
else
{
    alert("Enter right symbol please");
}

// // Chapter 12-13             
// question1
var num=prompt("Enter the number or string");
var num1=parseInt(num);
if(num.charCodeAt(0)>=65&&num.charCodeAt(0)<=90)
{
    alert("It is the upper case letter")
}
else if(num.charCodeAt(0)>=97&&num.charCodeAt(0)<=122)
{
    alert("It is the lower case letter");
}
else if(Number.isInteger(num1))
{
    alert("its an number");
}
else
{
    alert("It is something else");
}
 

alert(String.fromCharCode(65,66,67)); 


// question2
var num=prompt("Enter the first number");
var num1=parseInt(num);
num=prompt("Enter the second number");
var num2=parseInt(num);
if(num1>num2)
{
    alert("The number 1 is larger");
}
else if(num2>num1)
{
    alert("The number 2 is larger");
}
else if(num1==num2)
{
    alert("The number 1 and number 2 are equal");
}


// question3
var num=prompt("Enter the number");
var num1=parseInt(num);
if(num1===0)
{
    alert("The number is equal to zero");
}
else if(num1>0)
{
    alert("The number is positive");
}
else if(num1<0)
{
    alert("The number is negative");
}

// question4
var len=prompt("Enter a character i.e(The length of string 1)");
var str=len.length;
str=parseInt(str);
if(str===1)
{
    len=len.toLowerCase();
    if(len==="a"||len==="e"||len==="i"||len==="o"||len==="u")
    {
        alert("True its a vowel");
    }
    else{
        alert("False its not a vowel");
    }
}
else{
    alert("Please Enter a character i.e(The length of string 1)");
}


// question5

var pas1=prompt("Please! Enter a password");
var len=pas1.length;
len=parseInt(len);
while(len===0)
{
    alert("Please enter a password here");
    pas1=prompt("Please! Enter a password");
    len=pas1.length;
    len=parseInt(len);
    if(len!=0)
    {
        break;
    }
}
var pas2=prompt("Please!Re-Enter the password");
if(pas1===pas2)
{
    alert("Correct the password entered matches the original password");
}
else if(pas1!=pas2)
{
    alert("Incorrect password");
}


// question6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else
{
greeting = "Good evening";
alert(greeting);
 }

// question7
var time=prompt("Enter the time in 24 hours");
var timecheck=time.length;
while(timecheck!=4)
{
    alert("Enter the time in 24 hours");
    time=prompt("Enter the time in 24 hours");
    timecheck=time.length;
    if(timecheck===4)
    {
        break;
    }
}
if(time>=0000&time<1200)
{
    alert("Good morning");
}
else if(time>=1200&&time<1700)
{
    alert("Good afternoon");
}
else if(time>=1700&&time<2100)
{
    alert("Good evening")
}
else if(time>=2100&&time<=2359)
{
    alert("Good night");
}
else
{
    alert("Where are you coming out of the required condition Its 24 hour time program");
}




// // Chapter 14-16             
// question1
var arrStudent=[];


// question2
var studentArray=new Array();


// question3
var arrString=["Hamza","ammar","hassan","ali"];

// question4
var arrNum=[1,2,3,4,5];

// question5
var arrBoolean=[1,0,false,true];
alert(arrBoolean);


// question6
var arrMixed=[1,"bilal",true,'a'];
alert(arrMixed);

// question7
var qual="Qualifications";
document.write(qual.bold()+"&nbsp;");
var degrees=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M.Phil", "PhD"];
for(var i=0;i<=7;i++)
{
    document.write("<br>"+(i+1)+"&nbsp;)&nbsp;&nbsp;"+degrees[i]);
}

// question8
var arrName=new Array(3);
var arrScore=new Array(3);
var Marks=500;
var arrPercentage=new Array(3);
for(var i=0;i<3;i++)
{
   arrName[i]=prompt("Enter the student "+(i+1)+" name"); 
   arrScore[i]=prompt("Enter the score of student "+arrName[i]);
   arrScore[i]=parseFloat(arrScore[i]);
   arrPercentage[i]=(arrScore[i]/Marks)*100; 
}
//outputting the data
for(var i=0;i<3;i++)
{
    document.write("Score of&nbsp;&nbsp;"+arrName[i]+"&nbsp;is&nbsp;"+arrScore[i]+"&nbsp;Percentage:&nbsp;"+arrPercentage[i]+"%<br>");
}


// question9
var arrColor=["red","blue","green","yellow","purple"];
var size=arrColor.length;
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
var addbegin=prompt("Enter the color you want to add at the beggining"+
" of the array ");
arrColor.unshift(addbegin);
size=arrColor.length;
// Display the updated array in your browser.
var updated="The updated array is now after adding at the begininning is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
var addend=prompt("Enter the color you want to add at the end"+
" of the array");
arrColor.push(addend);
size=arrColor.length;
updated="The updated array is now after adding at the end is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
var addbegin21=prompt("Enter the 1st more color you want to add at the beggining"+
" of the array ");
var addbegin22=prompt("Enter the 2nd more color you want to add at the beggining"+
" of the array ");
arrColor.unshift(addbegin21,addbegin22);
size=arrColor.length;
// Display the updated array in your browser.
updated="The updated array after adding 2 more colors at the begininning is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
arrColor.shift();
size=arrColor.length;
updated="The updated array after removing ONE color from the begininning is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
arrColor.pop();
size=arrColor.length;
updated="The updated array after removing ONE color from the last is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
var index=prompt("Enter the index at which you want to add color to "+
"the array");
index=parseInt(index);
var addmid=prompt("Enter the color which you want to add in the desired index "+index);
arrColor.splice(index,0,addmid);
size=arrColor.length;
updated="The updated array after adding color at the desired index is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}
var index1=prompt("Enter the index at which you want to delete color to "+
"the array");
index1=parseInt(index1);
var removeColor=prompt("How many colors you want to remove");
removeColor=parseInt(removeColor);
arrColor.splice(index1,removeColor);
size=arrColor.length;
updated="The updated array after desired No of colors at the desired index is :"
document.write("<br>"+updated.bold()+"<br>");
for(var i=0;i<size;i++)
{
    document.write(arrColor[i]+"<br>");
}



// question10
alert("Enter the student's scores in an array I will sort it for you");
var Size=prompt("Enter the No of Students");
var Score=new Array(Size);
for(var i=0;i<Size;i++)
{
    Score[i]=prompt("Enter the student "+(i+1)+" Score here");
    Score[i]=parseInt(Score[i]);
}
document.write("Scores of students: ");
for(var i=0;i<Size;i++)
{
    document.write(Score[i]+"&nbsp;&nbsp;");
}
Score.sort(function(a,b){ return a-b;});
OR
Score.sort((a,b)=>a-b)
document.write("<br>");
document.write("Ordered Scores of students: ");
for(var i=0;i<Size;i++)
{
    document.write(Score[i]+"&nbsp;&nbsp;");
}

// question11
var CityNames=[];
var selectedCities=[];
var Size=prompt("Enter the number of cities");
Size=parseInt(Size);
while(Size<4)
{
    alert("Enter atleast 4 size to check the condition Please!");
    Size=prompt("Enter the number of cities again atleast four to continue");
    Size=parseInt(Size);
    if(Size>4||Size===4)
    {
        break;
    }
}
for(var i=0;i<Size;i++)
{
    CityNames[i]=prompt("Enter the name of "+(i+1)+" st city");
}
var cl="Cities List: ";
document.write(cl.bold());
for(var i=0;i<Size;i++)
{
    document.write(CityNames[i]+"&nbsp;&nbsp;");
}
document.write("<br>");
selectedCities=CityNames.slice(0,3); //Selects the first three elements of the array
Size=selectedCities.length;
var scl="Selected Cities List: ";
document.write(scl.bold());
for(var i=0;i<Size;i++)
{
    document.write(selectedCities[i]+"&nbsp;&nbsp;");
}        

// question12
var arr = ["This","is","my","cat"];
var singleString=arr.join(" ");
document.write("Array:<br>"+arr+"<br>"+"String:<br>"+singleString);

// question13
var arr=[];
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
var size=arr.length;
document.write("The first in policy is: "+arr+"<br>");
document.write("<br><br>The first out policy is: ");
for(var i=0;i<size;i++)
{
    document.write("<br>"+"OUT"+"<br>"+arr[i]);
}
arr.shift();
arr.shift();
arr.shift();
arr.shift();

// question14
var arr=[];
arr.unshift(2);
arr.unshift(3);
arr.unshift(4);
arr.unshift(5);
var size=arr.length;
document.write("<br>"+"The last in policy is: "+arr);
document.write("<br><br>The first out policy is: ");
for(var i=0;i<size;i++)
{
    document.write("<br>"+"OUT"+"<br>"+arr[i]);
}
arr.shift();
arr.shift();
arr.shift();
arr.shift();

// question15
var phoneArray=["Apple","Motorola","Nokia","Sony","Haier"];
var size=phoneArray.length;
for(var i=0;i<size;i++)
{
    document.write(phoneArray[i]+"<br>");
}


// // Chapter 17-20              
// question1
var miltiArray=[[1,"one"],[2,"two"],[3,"three"],[4,"four"]]; 

// question2
var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
var size =matrix.length;
for(var i=0;i<3;i++)
{
    for(var j=0;j<4;j++)
    { 
        document.write(matrix[i][j]);
    }
    document.write("<br>");
}

// question3
for(var i=0;i<10;i++)
{
    document.write((i+1)+"<br>");
}


// question4
var number = prompt("Enter a number to show its multiplication table");
number=parseInt(number);
var mul;
var length=prompt("Enter the length of multiplication table");
length=parseInt(length);
while(length===-1||length===0)
{
    alert("Please! Enter a positive number for length");
    length=prompt("Enter the length of multiplication table");
    length=parseInt(length);
    if(length>0)
    {
        break;
        alert("Correct Now see the table");
    }
}
document.write("Multiplication table of &nbsp;"+number+"<br>");
document.write("Length &nbsp;"+length+"<br>");
for(var i=1;i<=length;i++)
{
    mul=number*i;
    document.write("<br>"+number+" x "+i+" = "+mul);
}


// question5
var fruits = ["apple","banana","mango","orange","strawberry"];
var size=fruits.length;
for(var i=0;i<size;i++)
{
    document.write(fruits[i]+"<br>");
}
for(var i=0;i<size;i++)
{
    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
}

// question6
document.write("<b>Counting:</b><br>");
for(var i=1;i<=15;i++)
{
    document.write(i+" , ");
}
document.write("<br><br><b>Reverse Counting:</b><br>");
for(var i=15;i>=1;i--)
{
    document.write(i+" , ");
}
document.write("<br><br><b>Even:</b><br>");
for(var i=0;i<=20;i=i+2)
{
    document.write(i+" , ");
}
document.write("<br><br><b>Odd:</b><br>");
for(var i=1;i<=20;i=i+2)
{
    document.write(i+" , ");
}
document.write("<br><br><b>Series:</b><br>");
for(var i=0;i<=20;i=i+2)
{
    document.write(i+"k, ");
}



// question7
var A = ["cake","apple pie","cookie","chips","patties"];
var search=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
var size=A.length;
var check=false;
for(var i=0;i<=size;i++)
{
    if(search===A[i])
    {
        alert(search+" is available at index "+(i+1)+" of our bakery");
        check=true;
        break;
    }
}
if(check==false)
{
    alert("We are sorry "+search  +" is not available in our bakery");
}

// question8
A = [24, 53, 78, 91, 12]
var  A = [24, 53, 78, 91, 12];
var size=A.length;
var larger=A[0];
document.write("Array items: "+A.join(" , "));
for(var i=0;i<size;i++)
{
    if(A[i]>larger)
    {
        larger=A[i];
    }
}
document.write("<br>The largest number is "+larger+"<br><br>");


// question9
A = [24, 53, 78, 91, 12]
var  A = [24, 53, 78, 91, 12];
var size=A.length;
var small=A[0];
document.write("Array items: "+A.join(" , "));
for(var i=0;i<size;i++)
{
    if(A[i]<small)
    {
        small=A[i];
    }
}
document.write("<br>The smallest number is "+small+"<br><br>");


// question10
for(var i=1;i<=100;++i)
{
    if(i%5==0)
    {
        document.write(i+" , ");
    }
}

// // CHAPTER 21 to 25
// Q#1
var firstName=prompt("Enter the first Name: ");
var secondName=prompt("Enter the second Name: ");
var fullName=firstName+" "+secondName;
alert("Welcome "+fullName);

// Q#2
var favoriteMobile=prompt("Enter your favorite Mobile Phone Model: ");
var length=favoriteMobile.length;
document.write("<h3>My favorite Phone is : "+favoriteMobile+" "+"</h3>");
document.write("<h3>Length of String: "+length+"</h3>");

// Q#3
var str="Pakistani";
var index=str.indexOf('n');
document.write("<h3>String : "+str+" "+"</h3>");
document.write("<h3>Index of 'n' : "+index+"</h3>");

// Q#4
var str="Hello World";
var index=str.lastIndexOf('l');
document.write("<h3>String : "+str+" "+"</h3>");
document.write("<h3>Last index of 'l' : "+index+"</h3>");

// Q#5
var str="Pakistani";
var index=str.charAt(3);
document.write("<h3>String : "+str+" "+"</h3>");
document.write("<h3>Character at index 3 : "+index+"</h3>");

// Q#6
var firstName=prompt("Enter the first Name: ");
var secondName=prompt("Enter the second Name: ");
var a="asdf";
var fullName=firstName.concat(" ",secondName);
document.write("Welcome "+fullName);

// Q#7
var str="Hyderabad";
document.write("City: "+str+"<br>");
var rep=str.replace("Hyder","Islam");
document.write("After replacement: " + rep);

// Q#8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace=message.replace(/and/g,"&");
document.write("<b>Message:</b> "+message+"<br>");
document.write("<b>After replacement:</b> "+replace);

// Q#9
var str="472";
var strtype=typeof(str);
var num=parseInt(str);
var numtype=typeof(num);
document.write("Value: "+str+"<br>");
document.write("Type: "+strtype+"<br>");
document.write("Value: "+num+"<br>");
document.write("Type: "+numtype+"<br>");

// Q#10
var input=prompt("Enter the string");
var convert=input.toUpperCase();

document.write("User Input: "+input+"<br>");
document.write("Upper Case: "+convert);

// Q#11
var ent=prompt("Enter the input to convert to Title Case");
var str=ent.toLowerCase();
str=str.split("&nbsp;");
for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1); 
}
str=str.join(" ");
document.write("User Input: "+ent+"<br>");
document.write("Title case: "+str+"<br>");

// Q#12
var num = 35.36 ;
var number=35.36;
var inString=number.toString();
var replace=inString.replace(".","");
document.write("Number :"+number);
document.write("<br>Number :"+replace);

// Q#13
var userName=prompt("Enter your Input: ");
var message;
var split=[];
var arr=[];
for(var i=0;i<userName.length;i++)
{
    split[i]=userName.split("&nbsp;");
    arr[i]=userName.charCodeAt(i);
    if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
    {
            message="Correct User Name";
    }
    while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
    {
        alert("please enter a valid userName");                                                                                                                   
        userName=prompt("Enter your Input: ");
        for(var i=0;i<userName.length;i++)
        {
            split[i]=userName.split("&nbsp;");
            arr[i]=userName.charCodeAt(i);
            if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
            {
                break;
            }
        }
    }

}
alert(message);

// Q#14
var A=["cake", "apple pie","cookie", "chips", "patties"];
var userI=prompt("Enter the item for searching it?");
userInput=userI.toLowerCase();
var news;
var length=A.length;
var found=false;
for(var i=0;i<length;i++)
{
    if(userInput===A[i])
    {
        found=true;
        alert(userI+" is available at index "+(i+1)+" of our bakery");
        break;
    }
}
if(found===false)
{
   alert("WE are Sorry "+userI+" is not available in our bakery");
}

// Q#15
var password=prompt("Enter the password: ");
var splitPassword=[];
splitPassword=password.split("");
var formatPassword=splitPassword.join("");
document.write("Entered password: "+password+"<br>");
for(var i=0;i<formatPassword.length;i++)
{
    var message;
    var firstCondition=formatPassword.charCodeAt(0);
    var secondCondition=formatPassword.charCodeAt((i));
    var thirdCondition=formatPassword.charCodeAt(i);
    document.write("first condition: "+firstCondition+"<br><br>");
    document.write("2nd condition: "+secondCondition+"<br><br>");
    while((secondCondition<48&&secondCondition>30)||(secondCondition<=64&&secondCondition>=58)
    ||(firstCondition>=48&&firstCondition<=57)||(formatPassword.length<6)
    ||isNaN(secondCondition)||(secondCondition<=96&&secondCondition>=91)||(secondCondition>=123))
    {
        alert("Wrong password");
        password=prompt("Enter the password: ");
        splitPassword=password.split("");
        formatPassword=splitPassword.join("");
        firstCondition=formatPassword[0].charCodeAt(0);
        
    }
    if((firstCondition<49&&firstCondition>57)&&(formatPassword.length>=6))
    {
        document.write("Correct!");   
        break;
    }
}

// Q#16
var university="University of Karachi";
var Splited=[];
var arr=[];
Splited=university.split("");
var formatArray=Splited.join("");
for(var i=0;i<formatArray.length;i++)
{
    document.write(formatArray[i]+"<br>");
}

// Q#17
var string=prompt("Enter the number to display its last character ");
var leng=string.length;
var ind=string.charAt(leng-1);
document.write("User Input: "+string+"<br>");
document.write("Last Character: "+ind+"<br>");

// Q#18
var check=prompt("Enter string to count the occurence of word 'the'");
var countThe=(check.split("the").length - 1);
document.write("Text: "+check+"<br>");
document.write("There are "+countThe+ " occurences of the word 'the'");

// // CHAPTER 21 to 25


// // CHAPTER 26 TO 30

// question 1

var num=prompt("Enter the positive integer");
num=parseInt(num);
if(num>0)
{
    var roundoffNum=Math.round(num);
    var floorNum=Math.floor(num);
    var ceilNum=Math.ceil(num);
    document.write("number: "+num+"<br>");
    document.write("Round off value: "+roundoffNum+"<br>");
    document.write("Floor value: "+floorNum+"<br>");   
    document.write("Ceil value: "+ceilNum);  
}
while(num<0)
{
   alert("Please enter a postive num");
   num=prompt("Enter a positive number");
   num=parseInt(num);
   if(num>0)
   {
       alert("You entered positive");
       break;
   }
}

// question 2
var num=prompt("Enter the positive integer");
num=parseFloat(num);
if(num<0)
{
    var roundoffNum=Math.round(num);
    var floorNum=Math.floor(num);
    var ceilNum=Math.ceil(num);
    document.write("number: "+num+"<br>");
    document.write("Round off value: "+roundoffNum+"<br>");
    document.write("Floor value: "+floorNum+"<br>");   
    document.write("Ceil value: "+ceilNum);  
}
while(num>0)
{
   alert("Please enter a negative num");
   num=prompt("Enter a negative number");
   num=parseInt(num);
   if(num<0)
   {
       alert("You entered negative");
       break;
   }
}


// question3
var num=prompt("Enter the value to display absolute value: ");
num=parseInt(num);
var numAbsoluteValue=Math.abs(num); 
document.write("The absolute value of "+num+" is "+numAbsoluteValue);


// question4
var randomNum=Math.floor(Math.random()*7);
document.write("random dice value "+randomNum);

// question5
var num=Math.random()*2;
var coin=Math.floor(num);
var value;
if(coin===1)
{
    value="Heads";
}
else{
    value="Tails";
}
document.write(coin+"<br>");
document.write("random coin value: "+value+"<br>");

// question6
var randomNumber=Math.floor(Math.random()*100);
document.write("Random number between 1 and 100 is: "+randomNumber);

// question7
var weight=prompt("Enter your weight?");
weight=parseFloat(weight);
document.write("The weight of user is: "+weight+" kilograms");

// // question8
var randomNumber=Math.random()*10;
var num=Math.floor(randomNumber);
var input=prompt("Enter the number between 1 to 10","for example:5");
input=parseInt(input);
while(input<=0||input>10)
{
    alert("Please enter between 1 to 10 to find the number ");
    input=prompt("Please again Enter the number between 1 to 10","for-example:10");
input=parseInt(input);
if(input>=1&&input<=10)
{
    break;
}
}
if(input===num)
{
    alert("Congratulations you found the number");
}
else{
    alert("The number was not found between 1 to 10");
}

// // CHAPTER 26 TO 30


// // CHAPTER 31 TO 34

// question1
var date=new Date();
document.write(date);
 
// question2
var arrMonths=["January","February","March","April","May","June","July","August","September",
"October","November","December"];
var Month=new Date();
var month=Month.getMonth();
document.write("Current Month: "+arrMonths[month+1]);

// question3
var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Day=new Date();
var day=Day.getDay();
var CurrentDay=arrDays[day];
CurrentDay=CurrentDay.slice(0,3);
document.write("Today is: "+CurrentDay);


// question4
var arrDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var Day=new Date();
var day=Day.getDay();
var CurrentDay=arrDays[day];
CurrentDay=CurrentDay.slice(0,3);
if(CurrentDay==="Sat"||CurrentDay==="Sun")
{
    document.write("Its fun day");
}
else{
    document.write("Its a working day");
}

// question5
var Date=new Date();
var date=Date.getDate();
if(date<16)
{
    document.write("First fifteen days of the month");
}
else{
    document.write("Last days of the month");
}

// question6
var num=new Date();
var millisecondsSinceMidnight=num.getTime();
var InSeconds=(millisecondsSinceMidnight/1000);
var InMinutes=InSeconds/60;
document.write("Current date:- "+num+"<br>");
document.write("Ellapsed Milliseconds since Jan. 1, 1970:"+millisecondsSinceMidnight+"<br>");
document.write("Ellapsed Minutes since Jan. 1, 1970:"+InMinutes+"<br>");

// question7
var num=new Date();
var check=num.getHours();
if(check<12)
{
    alert("Its AM");
}
else{
    alert("Its PM");
}

// question8
var laterDate=new Date(2020,11,31);
document.write("Later Date: "+laterDate);

// question9
var num1=new Date(2020,3,24);
var num2=new Date();
sdr=num1.getTime();
edr=num2.getTime();
var num=Math.floor(((edr-sdr) / (1000 * 60 * 60 * 24)));
document.write(num+" days have passed since "+num1);

// question10
var num1=new Date(2020,0,1);
var num1c=num1.getTime();
var num2=new Date();
var num2c=num2.getTime();
var diff=num2c-num1c;
var secPassed=Math.floor((diff/1000));
document.write("On reference date "+num1+"  "+secPassed+" seconds  "+" had passed since beginning of 2020");

// question11
var currentDate=new Date();
var getHours=currentDate.getTime();
var currentTime=Math.floor(getHours/(1000*60*60));
getHours=getHours+(1000*60*60);
var incrementedTime=Math.floor(getHours/(1000*60*60));
var diff=incrementedTime-currentTime;
diff--;
var newDate=new Date();
newDate.setHours(diff);
document.write("Current date: "+currentDate+"<br>"+"One hour ahead it will be: "+newDate);

// question12
var currentDate=new Date();
var currentYear=currentDate.getFullYear();
var YearBack100=currentYear-100;
var YearBack100Date=new Date();
YearBack100Date.setFullYear(YearBack100);
alert("Current Date:"+currentDate+"\n"+"100 years back it was: "+YearBack100Date);

// question13
var age=prompt("Enter your age?");
age=parseInt(age);
var date=new Date();
var currentYear=date.getFullYear();
var HisAge=currentYear-age;
var dateofBirth=new Date(HisAge);
var yearDate=dateofBirth.setFullYear(HisAge);
var YearOfdateofBirth=dateofBirth.getFullYear();
document.write("Your age is: "+age+"<br>"+"Year of date of birth is: "+YearOfdateofBirth);


// question14

var name=prompt("Enter your name?");
var month=prompt("Enter the month?");
var units=prompt(name+" Please! Enter the units consumed in the month of "+month+"?");
units=parseFloat(units);
var chargesPerUnit=prompt(name+" Please enter the charges per unit?");
chargesPerUnit=parseFloat(chargesPerUnit);

var netAmountPayable=units*chargesPerUnit;
var NetAmountPayable=netAmountPayable.toFixed(2);
var LatePaymentSurcharge=(10/100)*NetAmountPayable;
var latePaymentSurcharge=LatePaymentSurcharge.toFixed(2);
var GrossAmountPayable=netAmountPayable+LatePaymentSurcharge;
GrossAmountPayable=GrossAmountPayable.toFixed(2);

var finalUnits=units.toFixed(2); 
var finalChargesPerUnit=chargesPerUnit.toFixed(2);

document.write("Customer Name: "+name+"<br>"+"Month: "+month+"<br>"+"Number of units: "
+finalUnits+"<br>"+"Charges per unit: "+finalChargesPerUnit+"<br><br><br>"+"Net Amount"+
"Payable (within due date) :"+NetAmountPayable+"<br>LatePaymentSurcharge :"+latePaymentSurcharge+
"<br>Gross Amount Payable (After due date): "+GrossAmountPayable);


// CHAPTER 35 to 38

// question1
displayDate();
function displayDate()
{
    var date=new Date();
    document.write(date);
}


// question2
var firstName=prompt("Enter the first Name: ");
var secondName=prompt("Enter the second Name: ");
greet(firstName,secondName);
function greet(fn,ln)
{
    var fullName=fn+ln;
    alert("Welcome "+fullName);
}


// question3
var num1=prompt("Enter first number:");
var num2=prompt("Enter second number:");
var sum=sum(num1,num2);
alert("The sum of "+num1+" and "+num2+" is: "+sum);
function sum(n1,n2)
{
    n1=parseInt(n1);
    n2=parseInt(n2);
    var sum=n1+n2;
    return sum;
}


// question4
var num1=prompt("Enter first number:");
var num2=prompt("Enter second number:");
var operator=prompt("Enter +,-,* or / to perform");
var check=false;
if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
{
    check=true;
}
else{
    check=false;
}
while(check===false)
{
    alert("Please enter right operation");
    operator=prompt("Enter the operatoion +,-,x or / to perform");
    if(operator==="+"||operator==="-"||operator==="*"||operator==="/")
    {
        check=true;
        break;
    }
}
var result=calculator(num1,num2,operator);
if(operator==="+")
{ 
    document.write("Number 1:"+num1+"<br>");
    document.write("Number 2:"+num2+"<br>");
    document.write("Operation: "+operator+"<br>");
    document.write("The sum of "+num1+" and "+num2+" is: "+result);
}
else if(operator==="-")
{
    document.write("Number 1:"+num1+"<br>");
    document.write("Number 2:"+num2+"<br>");
    document.write("Operation: "+operator+"<br>");
    document.write("The difference of "+num1+" and "+num2+" is: "+result)
}
else if(operator==="*")
{
    document.write("Number 1:"+num1+"<br>");
    document.write("Number 2:"+num2+"<br>");
    document.write("Operation: "+operator+"<br>");
    document.write("The product of "+num1+" and "+num2+" is: "+result)
}
else if(operator==="/")
{
    document.write("Number 1:"+num1+"<br>");
    document.write("Number 2:"+num2+"<br>");
    document.write("Operation: "+operator+"<br>");
    document.write("The division of "+num1+" and "+num2+" is: "+result)
}
function calculator(n1,n2,o)
{
    n1=parseInt(n1);
    n2=parseInt(n2);
    var result;
    if(o==="+")
    { 
        result=n1+n2;
    }
    else if(o==="-")
    {
        result=n1-n2;
    }
    else if(o==="*")
    {
        result=n1*n2;
    }
    else if(o==="/")
    {
        result=n1/n2;
    }
    return result;
}


// question5
var num=prompt("Enter a number to find its square?");
var result=square(num);
document.write("The square of "+num+" is = "+result);
function square(n)
{
    n=parseInt(n);
    var square=n*n;
    return square;
}

// question6
var fact=prompt("Enter a number to find its factorial?");
var result=factorial(fact);
document.write("The factorial of "+fact+" is = "+result);
function factorial(n)
{ 
    n=parseInt(n);
    var fact=1;
    for(var i=1;i<=n;i++)
    {
        var result=fact*(n-i);
        var fact=fact+result;
    }
    return fact;
}


// question7
var ns=prompt("Enter the starting number?");
var ne=prompt("Enter the ending number?");
while(ns>ne)
{
    alert("Enter right number");
    ns=prompt("Enter the starting number?");
    ne=prompt("Enter the ending number?");
    if(ns<=ne)
    {
        break;
    }
}
counting(ns,ne);
function counting(sn,en)
{
    sn=parseInt(sn);
    en=parseInt(en);
    for(var i=sn;i<=en;i++)
    {
        document.write(i+"<br>");
    }
}


// question8
Hypotenuse2 = Base2 + Perpendicular2
var b=prompt("Enter the base of triangle");
var p=prompt("Enter the prependicuar of trianlge");
var result=hypotenous(b,p);
document.write("The hypotenous of base"+b+" and "+" prependicular "+p+" is = "+result);
function hypotenous(b,p)
{
    b=parseInt(b);
    p=parseInt(p);
    var h=square(b,p);
    function square(b,p)
    {
        var bi=b*b;
        var pi=p*p;
        var sum=bi+pi;
        return sum;
    }
    return h;
}


// question9
var w=prompt("Enter the width of rectangle");
var h=prompt("Enter the height of rectamgle");
var result=Area(w,h);
document.write("The area of rectangle is: "+result);
function Area(w,h)
{
    w=parseFloat(w);
    h=parseFloat(h)
    var a=w*h;
    return a;
}


// question10
var s=prompt("Enter the string to check for palindrome");
palindrome(s);
function palindrome(s)
{
    var spl;
    spl=s.split("").reverse().join("");
    if(s===spl)
    {
        alert(s+" is a palindrome");
    }
    else{
        alert(s+" is not a palindrome");
    }
}

// question11
var s=prompt("Enter the string");
var s1=capital(s);
document.write(s1);
function capital(s)
{
   var s=s.split(" ");
   var len=s.length;
   for(i=0;i<len;i++)
   {
    s[i] = s[i][0].toUpperCase() + s[i].substr(1);
   }
   return s.join(" ");
    
}

// question12

var str=prompt("Enter the string");
var strr=fLW(str);
document.write("The longest word is: "+strr);
function fLW(str) {
    
    var string = str.match([a-z]/gi);
  var result = string[0];


  for(var i = 1 ; i < string.length ; i++)
  {
    if(result.length < string[i].length)
    {
    result = string[i];
    } 
  }
  return result;
  }



// question13
var str=prompt("Enter the string");
var letter=prompt("Enter letter");
var res=charCount(str,letter);
document.write(letter+" is "+res+" times");
function charCount(str, letter) 
{
 var letterCount = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letterCount += 1;
      }
  }
  return letterCount;
}



// question14
var radius=prompt("Enter the radius");
radius=parseInt(radius);
calcCircumference(radius);
calcArea(radius);
function calcCircumference(radius)
{
    var c=2*(3.14)*radius;
    document.write("The crcumference is: "+c+"<br>");
}
function calcArea(radius)
{
    var a=(3.14*radius*radius);
    document.write("The radius is: "+a);
}

// // Chapter 38 to 42
//  Question 1
var a=+prompt('Enter Value of a:');
var b=+prompt('Enter Value of b:');
a=parseInt(a);
b=parseInt(b);
function power(a,b){
    var product=1;
    for(var i=1;i<=b;i++){
        product*=a;
    }
    console.log(product);
}
power(a,b);

//Question 2
var year=parseInt(prompt('Enter Year:'));
if(year%2===0){
    console.log('Leap Year')
}
else{
    console.log('Not leap Year');
}

//Question 3
var a=parseInt(prompt('Enter value of a side:'));
var b=parseInt(prompt('Enter value of b side:'));
var c=parseInt(prompt('Enter value of c side:'));

function calculateS(a,b,c){
    var  s = ( a + b + c ) / 2;
    calculateArea(s);

    
}
function calculateArea(s){
    var area = (s - a)*(s - b)*(s - c);
    area=s*(area);
    console.log(`area is ${area}`);
}
calculateS(a,b,c);

//Question 4
function averageCalculate(math,itc,eng){
    var average=(math+itc+eng)/3;
    return average;
}
function percentageCalculator(math,itc,eng){
    var total=math+itc+eng;
    var percentage=(total/300)*100;

    return percentage;
}
function mainFunction(){
    var math=parseInt(prompt('Enter Math Subject Marks'));
    var itc=parseInt(prompt('Enter ITC subject marks'));
    var eng=parseInt(prompt('Enter English Subject Marks'));

    var average=averageCalculate(math,itc,eng);
    var percentage=percentageCalculator(math,itc,eng);

    console.log(`average is ${average}`);
    console.log(`percentage is ${percentage}`)

}
mainFunction();

//Question 5
function fun(){
    var text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book';
    var check=prompt('Enter Character to check index of');
    var count=0;
    for(var i=0;i<text.length;i++){
        if(text[i]===check){
            console.log(`index of ${check} is ${count}`);
            break;
        }
        else{
            count++;
        }
    }
}
fun();

//Question 6
function removeVowels(){
    var text='Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
    for(var i=0;i<text.length;i++){
        if(text[i]==='a'||text[i]==='e'||text[i]==='i'||text[i]==='o'||text[i]==='u'){
            text=text.slice(0,i)+text.slice(i+1);
        }
    }
    console.log(text)
}
removeVowels();

//Question 7
function isVowel(text){
    switch (text){
        case 'a':
            return 1;
            break;
        case 'e':
            return 1;
            break;
        case 'i':
            return 1;
            break;
            
        case 'o':
            return 1;
            break;
            
        case 'u':
            return 1;
            break;
        default:
            return 0;
    }
}
function calculateOccurance(){
    var text='Please read this application and give me gratuity';
    var found=0;
    for (var i = 0; i<text.length; i++)
    {
        if (isVowel(text[i])){
            found++;
        }
        else{
            found = 0;
        }

        if (found == 2){
            console.log(text[i - 1], text[i]);
            found = 1;
        }
    }
}
calculateOccurance();

//Question 8
function toMeter(distance){
    var meter=distance*1000;
    console.log(`${distance} is equals to ${meter} meter`);
}
function toFeet(distance){

    var feet=distance*3281;
    console.log(`${distance} is equals to ${feet} Feet`);
}
function toInches(distance){

    var inches=distance* 39370;
    console.log(`${distance} is equals to ${inches} Inches`);
}
function toCentimeter(distance){

    var centimeter=distance*100000;
    console.log(`${distance} is equals to ${centimeter} Centimeter`);
}
function checkDistance(){
    var distance=parseInt(prompt('Enter Distance in kilometer'));

    toMeter(distance);
    toFeet(distance);
    toInches(distance);
    toCentimeter(distance);
}
checkDistance();

//Question 9
function calculateOvertime(){
    var workHour=parseInt(prompt('How many Hour you work this weak'));
    var pay;
    if(workHour<40){
        alert('you cannot work for over time');
    }
    else{
        var overTimeWage=12;
        var overTimeHour=workHour-40;
        pay=overTimeWage*overTimeHour;
    }
    console.log(`Over time pay is ${pay}Rs`);
}
calculateOvertime();

//Question 10
function calculateNotes(){
    var amount=parseInt(prompt('enter amount'));
    var ten=0,fifty=0,hundered=0;
    
    console.log(`hundered ${Math.floor(amount / 100)}`);
    console.log(`Fifty ${Math.floor((amount % 100) / 50)}`);
    console.log(`Ten ${Math.floor(((amount % 100) % 50) / 10)}`)
    console.log(`remaining ${Math.floor((((amount % 100) % 50) % 10))}`)
}
calculateNotes();


// // Chapter 43 to 48
// Question 1
function display(){
    alert('You click on the link');
}

//Question 3
function del(e){
    var table=document.getElementById('myTable');
    console.log(table);
    var tableRow=e.target;
    table.deleteRow(tableRow);
}

//Question 4
function swap1(){
    var image=document.getElementById('imag');
    image.src='data:image/jpeg;base64,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'
}
function swap2(){
    var image=document.getElementById('imag');
    image.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERAQDw8PDxAPDw8PDQ0NDw8NDQ0PFREWFhURFRUYHSggGBolHRUVITEtJikuLi4uFx8zODMsNygtLisBCgoKDg0OGhAQFy0dHR0tKy0tLS0tKy0tLS0tLS0tLS0tLS0vLSs3KystLSstLSstLSstLSstLSstLi0tLSstN//AABEIAMABBgMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAECBQAGBwj/xABDEAABBAECAwMIBgcGBwAAAAABAAIDESEEEgUxQRMiUQYyYXGBkZTSBxQXI1ShQkNSscHw8RUkRGLR4TRjgpKTosL/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAJxEAAgICAgIABgMBAAAAAAAAAAECEQMhEjEEURMiMkFhkRQjUkL/2gAMAwEAAhEDEQA/APJdpYQBzV9KLahONFVPlkttF9yI2SkBxUkrguNjzHquodhAY5dM7CVklDYF7lEbkMuXQnKaJp46GSqSOVnOVFwiRQ8lDVJUtRHHtKtPTFZemWlplaETBnNFhRGFBYiNKqkedJDsC0+HnvexZUJWjozkKkVozJ8Zp/k3aws/iRwPWtFowsziZ5etJi+o9fzdYrMLWuSbimtbkpN67ItnnYlpAiMqXFUPNc4qDNFFJ3rJ1kic1ktBYs0lqEuzd42P7kNciSnCXjNlGlQNrWwDzhCuyue61zeadIslSJrBUMCI4UFViZoF6L0uVmhclEsNpzzUVlREUMy0UolbdDRCoSqNmUFy4Ciwgcpc6wlnSUu7ZEbgU3ZVmYKX7TKIXoos4jBkUF9JZz1xdhdQvAYa5WaUKMI7GrhJaHdNyWhA7KzonUmIX5WqC0YssbNdpwrRFKCTCLpnq6iYJQ0zUhKe0jv3rPiKc0T0YrZhyL7npS+mrD1024rS1ElM9YWFqHZQxxq2avLz82or0L6pIvKb1TsLPe5JIXCtFN2VSZ1LgltXJQWWRrjG2J62VZT3I+oktALCpnrYocUX05yr6l2EGJV1T+i6h+NyKNClnNS3kuiOU5Rh5BhCatdumBYChfVAuM0c0ehILloAMauQoHxfwIbqCA8qrpFTckNMY0XBUg4Q2lXe6guC0DklQzKhuchlcWUEWMiM16ULkVrsJojyiMkq+kYXFAYVqcPIbdp2kZ8r4x0Fbp6CuG4RmyWECRyKiYbb7Lgo0BS9cldpWpRpAkrQ+ZMJjQutZHarR4e5URmy46ibQOEzw9yRLsJjhbsp0jy8kfkZt6mXA9AWPqJcpzWvWK99lGUfsTwQ5bZOtlSlquodlWaFNxN8Y8YkE4WTr5ea15BhYnEWVayZImrxknIzXvyjRyAiksVDSo0eq42hrsSMpObmtJuoGyikX5QoXG3ezicKjHUUeRmEqQmKRpofbqjVWp+sHxSbFdcTeOI84grkn2hXLhPhszTKrh6WtcXqZ6PAejehyyJTtlYSWuAsdOy9qXFD3obnojKJxKsHKlrmFFD0aWmIAso0UtuWW6foj6STKZmeeLTZuwuUF2UmyVEjfkKsUYnjrZoScghh3NRM/CG12FrkSjHRZrlqaArGa7K1NC5CImePymtLJTUbhMuVmaiXCNwmTvLRFHnTxf1s3tc/CywU5qnJB5wuZmwxpUJzv7yvHIk9Q/KLpgVOTPQcPlHXHCxeJutaz3YWHr3ZWPIxvGj8xnuQgVeQoQKznsRWg/RUByFxK4rgDEj7CWUSPUNcidGNIYaMKwCq12FcO5LibsJ2ShGtciS5M8yukUlDc5RPXRVWYUJyvGVw7WggbZVjEpjOVe0xNtizmqE06K0OSKkUgqaYBFifSoRShpTDPaNKN6ci5hZ+ncn4irw7MOVUMTPVWnCHK5Sx2FaRDjo5rsrT0j1kA5T+mkXQ7EzRtD2pemeDv7yy9RKmuGPzjJOABkk+C1IyTx/10busmSm+13EY3Ryuikw9hpwBsX6+qpGF0aMix8FT7FXx2UzEEORDMqlMq05ILPIsPWuynZpuay9Q+ysOQ1+NjpizyqdURyo0KSR6K6LkqHuViEOdMBdldy4qkaOG4QHeiGvR2ZpdBBaPHHRXEJyRxJXI+0LkaI8kebe6ku5dK9Va5SZ7MY0iQpVCuQGoMxFbzSrXUiiekyElFmpH6Uvq5m8ku/V4wlXPsp7JQwu7YWR9qrShqwK6y9DmnctJnJZGmK0GvwtWJWjJmjsK5ys12EuXqQ9WkiTiFBymIHJIOymY3IRQs46CzPW55GM7TVRjozfK4+GxpI/9to9q85M9e1+jOCu2neLa4NiiB/WEW5+BnH3ftKbLLjEbDi5ND3lzpduqEvSdod/lDm92gfUG+9Yhkpe/4hpmzsMUlltAtePOa4Ctw9Nh3vrqvn3FNHJBIY5Bkea79F7bIDh6MI+PkTjX3M3neM1PmumLSzWqByGSujtxAaCScADJJQmZlH0B1BSJXt2+Rkkmlkm3gTscNunxThRJbu/b5ejovEahpaS1wLXNNOa4EOafAhYZSTs2wxyila7BlS0KFNpUOWpL6tMsCT1Lu8uY2P6iI2lGa/CqxwAVZHIDvbGxPQXRyklKOcjQIk3BJDXaFch7ly4nx/B597FSgiEoTlFnrpMlThDtcFw3EKAFcMCG0K4CIjQT6uPFCfHSYa+lWV4KZCJysXNLhS56q1dZWhiEp1pwkYwm484/fhaMU30Z8iLWFLXBDIVmhWlJicSweLTET0mExC1CMnYk4qi78mhzPJfd+HcHZBBHpdgkiibVO5mQ2XSA8wSbK+EubRB9K/QXk3xWLWwNniddktkicAJIpBzYa9FesUVLyXLRXBVaFpYC2m5PPa43ZbdEX6Me8pDjfDY9XGGG2yNBdHKKwSMgt6jF16F6qTTWMUHDl4X/AEtBj0QJJPQkFtD0c1CORovKHJU0fGYeBzvmdBs2uYRvefMAPJwPUHovY8L4NHpx3RucR3pD57vQPAL3kmjaW1tB8L5jrzWLrOHmyCKZiyPDwHpKeeZyM8fFjB2jNk7sTAf1ri/b0jafM91X/wBSwvKPgY1bL2huoaKid+kf+W/xB5egn1r1Gp05N7gKo8uQNABvhX+iHFpi4ChmjZ5E+GeQ5AqBVxs+G9qBzsHqDgj0FcJAU35WMDdbqmtAA7d5oYFk2fzJWUxypFkHiSHWTgJad4u1S0KZFghjpjDXNKkuCUYjN5IDOFBXOHpRYpQENoBC5seUSbS6DmRq5U7JQupiUjJK4gVfpXWoIUz0jgG97mCK2cvEXd+j810RAoH02aBI8KVaUtCUNlm+KK5oz3hgdDYPoHj/AFQS1QSeWf4JgdlnOGed4rw9NqZiBhpv01V45+IQ1wC4OiWtsjPPn0r34UN6depv9yvvO0tppBrJALm0bwei6JqJ1jEdZ3UDlwNWS79n1fz1T3D9G6UlrNtgF1OcGlwAJpt8zhJtFcsYo88/z/BFjJBBBIPiMEeqlaGmZpu1otIMorCRYaSQ7NftAE1Yz4XRUyDkf90MBWkSTtESElx3c7O6toz7MJvTx+y6I649iTaBn8j4LUh2uNtbtb0ZuLvzRihMrpHaqTu7AbbfM/pAE0aPLmfet7yJOpDn/V53QM7vbODm049AGHzisXURUGkGyQbABBbmqXvvJ3RMhiYwC304yOLTXaHBPpAwB6uWV2Z6J4to349dPTds4PdByxtFvicLjxPVN7xli8AXRnOaAwRaGXADmWjB6C66lLl9u3EYGGtNkhpv27iD7BQ8VgaZuWTRs6fjmpPOGJwrnvcxzvYbA96J/bzidrtP6KbIDR9oCyItWR0wfbm/f4+9Fm1jatx24FAnIrI9fig0yimaR4pEcOilZeb2B7b5XQKDxDWtZC86Rg1Ewb92yR3ZR7v8xI/nxHMee1nEC5oLcZcx46gjBPqqvek38SELdxdtAGScEcuaGwPIj5dxCSR0srpr7UyPMu/zt5d3vRz9iXDDzrBsg+Nf1TXFNQZZHy1Qe9xa27LRd1+aW3jbRHettO6BoB7tV6R16KiE7LNjsXY5gVY3WfAdVRzPdzJAOBfNXjlLdwGNzdrsA2LB68uQ5Kzpnd0BxptlgDvMs5rws5TiqwDGemvCwQCruYQOhFkWDgnnhUcfz/LN48FA/nxQHCxk9PC8WazX8+tFa/P5X4m+Y8FEwIJHcwa+7otx1BHNQ0cvYuJypjMpLTTmlpoGiCLBFg+4hcqbfWuRI0jL2qQ1H2qA1RNHIGGLntRKViLXA5Cy4hWcFC4ewZC4BWIUgIjWEjbasyOiqNTUA3FMSk6LsZa7YjNjpVcE6M/K2FcMIQCtuwpC03aFVoDSf0SU2J3RBUihcsvlHXtX0KF+SB1POqxms+/3leCIwvU8B15MLaaXyN7hLjTGtANHxOL9y7LDpkMGTTTNjUvFtaeRtzgPAUK9poeq0D6xZqzRyeVm65X15/0wYlsAk8zZPhiwB77SPEdSIRuu3EbGtHWuebwL/f7VmcdmqM9Wy/EuIthbZPeI7jWm3O6Y8BjnWB44C8lqdbLK/tHvO4eaG21rPQ0dEPVSOc8ucbJ5n9wHgFzSm+GkZsvkOXXRrN4zULmFm6XcC1/6IFdR615fiurkkPfcSBybyaPYtGV+Fjax9qEopDYMkpPYm4KgCvagJTcmSQqjmjmHFoQXAUrOcxVCJI5CtdYU2FtSChgq1o2Bhy9Slza5cJxOCq4KzFZ7VMa9gQpCKI1O1cdyAOaqbEwQuDF1DKQm5qs0IrmqS1FDcilKYnUValFI2Cxps6kOwlmq7XLkybgg7USMZQ4kdgytUHojJhOzwmNG1TGzCLAzK0xMs56aHA3C1/Jt+0vHQgEiue0/7lZsTcLQ4V3XXy5g+oghUltUY45eMj0Gr7rQTnAxjJrIH5+peX1oLn7ncz7gPAL0HE3kmuYaBR9ef4/ksXUMypQiuNi587+I4rpGXq4qSjlq6piz5GJZIpinaAOyFl6pi1WhK6uNZZo2YpVIyCFcNoWpkbSGSpG/sIZSRSATlFYFSQIBjSIcqsCupi5ohvRcRHwUiMpqTUCqQxqB4LiPKT+xRwC5GAaVy6wchSMZV5QqQHKJOUhR/UQCutVvC4FcCiwCtSq0q/RcBi7lClygc1yKF9q4hWUI2LZUBcpXIoIeBORBJwJ2BXg9GbKPxjCvGMqsXJFYFdSPPkxyAJ7StSenCf04VFIwZmP7bYkZQtKId1I6luUsJdoOWNcZe0Z2qWe8LR1SReEspFsT0LAZQNS1M9UKcKLZri9mNqGpQrQ1bUgQos9PE7ReJRMFaJRKkY3/AEDXM5qApaiOXeVUKXqAiKui7HUuVVyAKR+jG/RJwkctNL8VqvnUn6JuEn/DSfFan517hcpHpcV6PDfZLwn8NJ8VqfnXfZLwn8NJ8VqvnXuVy47ivR4cfRPwn8NJ8VqfnXfZRwn8NJ8VqfnXuFy47hH0eG+yXhP4aT4rVfOo+yThH4aX4vVfOvdLlx3Fejw/2T8J/DSfFan50L7LuDbg3sX7nBxaPrepyGloP6fi5vvXvHCwVhR+ToDQ10jTtjnjiqKhF2nZUW24m29leST3uYpcdwj6MGT6LODtrdA8WQ0Xq9SLcTQHnrovos4O4Atge4OFtI1epO71d9ejfwQkkmRhAeXxtdDuDSZ3SkO73e84joqafyfDHxv3tIiDGhuyRgpjnOaRteBu72SQQaGAuO4x9GCfow4Q0E9i4AAkk6vUVQFk+eix/RnwrBbC82LFamc2PHzlsx+Twa2FjXsa2LTjTvqLvStEZb+1Ted8r9Kg+T13crRua4ExxbHAmDsaB3H7uu9t/azfRG2B44PtIyY/o+4XuLRE7cGtcR9YnNNcXBp87qWu9yL9nnDR+qcCBZ/vE3Lx85a7eDESNm7SMPbG1gYyHbAKMp3Bm7DvvOd9D+0pn4OXGU72fevjk70O5wezZ3Sd2Yz2fm+k5R5y9ifx8X+F+jKHkHw4fq3Dr/xEvL/uRm+Q+hHKJ/8A5pf9U1H5OsDmucWPIEQzEKpkkzy1ucNPbEAdA0c01LwhkmmbppHSFrWxAvie+B5MZaRRabGWjrywjzl7FfiYH3jX6RlSeTGhjLGFkm597GtdO8kAizi6A3DJxlLv8m+HW9pjm3Movb/ei6i4tDgKyLByMYW/xPh/bbKcxhYT94Yy6VoJaT2btw2Hu+BXS8PJGo+8IfqAGiQN70UYbtDG56W8+t5XfEl7OfiYHpwX6R5xnklwuTbTXHdF2zSZZ2gxY71k1WR70I+R/Caa4skAeTtLpNS2wKt2ThuRnlkZXpNZwoyOA3tZCNPNpjE2M79sgaLD91Ctjf0T1S39gOojth3myxvAiIYIpBGHNjBedh+7u7OXONIc5ewrxcK6gv0jCd5GcIAkcWPqK+0Pa6k0AS0nnkAggkYFFFPkBwsv7Psn7yzeG9tqBbbAJBuuo962peBX9Z2yNYdRG+Jv3b3MiY9zi7ul+SS48tovomxo5O1ilMkZEcL43METgXl+wlwdv7uWDFHrnqhyfsP8fF/lfo80/wCi7hbuenk+J1A/+kP7JuE/hpPitT869wuXWx1jiukeHH0T8JH+Gk+K1PzrnfRPwk89NJ8VqfnXuFyAeEfR4X7JOE/hpPitV86kfRLwn8NJ8VqvnXuVy47ivR4Y/RNwn8NJ8VqfnXD6JeE/hpPitV869yuRtncY+jw/2TcJ/DSfFan51y9wuXWdwj6P/9k='
}

//Question5
var counter=0;
function increase(){
    var results=document.getElementById('res');
    counter++;
    results.innerHTML=counter;
}
function decrease(){
    var results=document.getElementById('res');
    counter--;
    results.innerHTML=counter;
}

//Chapter 49 to 52
//Question 1
function displayData(){
    var fn=document.getElementById('fname').value;
    var ln=document.getElementById('lname').value;
    var mail=document.getElementById('mail').value;
    var pass=document.getElementById('pasword').value;

    console.log('first name is '+fn);
    console.log('last name is '+ln);
    console.log('Email is '+mail);
    console.log('Password is '+pass);
}

//Question 2
function expand(){
    var text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sequi excepturi similique eaque enim minima quas iure iusto eveniet. Asperiores natus quo odio doloribus nisi facilis! In laudantium voluptatum alias.';
    var p=document.getElementById('pera');
    p.innerHTML=text;
}


// //Chater 53 to 58
// Question 1
//samaj hi nhi aya
//Question 2
function add(){
    var size=document.getElementById('pera').style.fontSize;
    size=parseInt(size,10);
    var para=document.getElementById('pera');
    var size=size+10;
    para.style.fontSize=size+'px';  
}
function minus(){
    var size=document.getElementById('pera').style.fontSize;
    size=parseInt(size,10);
    var para=document.getElementById('pera');
    var size=size-10;
    para.style.fontSize=size+'px';  
}


//Chapter 58 to 67
//Queestion 1
var main=document.getElementById('main-content');
var c=main.childNodes;
for(var i=0;i<c.length;i++){
    if(c[i].nodeType===1){
        console.log(c[i]);
    }
    else{
    }
}
var r=document.querySelectorAll('.render');
for(var i=0;i<r.length;i++){
    console.log(r[i].innerHTML);
}
var f=document.getElementById('first-name');
f.value='Hamza'
var l=document.getElementById('last-name');
l.value='Tasadaq';
var e=document.getElementById('email');
e.value='hamzatasadaq@example.com';

// Question 2
var frm=document.getElementById('form-content');
console.log(frm.nodeType);
var lname=document.getElementById('last-name');
console.log(lname.nodeType);
console.log(lname.childNodes.nodeType);
var text=document.createTextNode('tasadaq');
lname.appendChild(text);
console.log(lname.childNodes)
var main=document.getElementById('main-content');
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(lname.previousElementSibling);
console.log(lname.nextElementSibling);
var mail=document.getElementById('email');
console.log(mail.parentNode);
console.log(mail.nodeType);}