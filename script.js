
//This Java Script code computes the interest the user will earn an invested principal, with a particular interest rate and term

function compute()
{
   var principal = document.getElementById("principal").value;
if(principal <=0){alert("Please enter a valid positive number for Amount");
principal.focus();
return false;
}

var rate;
var interest;
var year_future;

   var dt = new  Date();
    year= dt.getYear();


rate = document.getElementById("rate").value;


var years = document.getElementById("years").value;


interest = principal * years * rate / 100;

year_future = (year + 1900 +parseInt(years) ) ; 

document.write("If you deposit $", +principal, ",","<br>",
 "at an interest rate of ", +rate, "%,", "<br>",
"for ",+years, " years," ,"<br>", 
"You will receive an amount of $", +interest ,",","<br>",   
"in the year ", +year_future ,"."); 
}

function display_value(r)
{

 document.getElementById("value_sld").innerHTML= r;
}
        