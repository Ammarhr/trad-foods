var histo= new Date();
var present = histo.getHours();
var welcomemsg;

if (present > 18){
    welcomemsg = 'Good Evening!!';
} else if (present > 12){
    welcomemsg = 'Good Afternoon!';
} else if ( present > 0){
     welcomemsg = 'Good Morning';
} else {
    welcomemsg = 'welcome';
}

document.write('<h3>' + welcomemsg + '</h3>');

var msg;
var r = confirm("press any button");
if (r == true) {
  msg = "You pressed OK!";
} else {
    msg = "You pressed Cancel!";
}

 alert ("Hi\n^-^");

 prompt("inser your name","Ex: Ammar Hariry");
