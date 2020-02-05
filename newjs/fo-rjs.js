function greeting(){

    var present =  prompt("insert the time","between 0-24");
    var welcomemsg;
    
    if (present > 18 && present <= 24){
        welcomemsg = 'Good Evening!!';
    } else if (present > 12 && present <= 18){
        welcomemsg = 'Good Afternoon!';
    } else if ( present > 0 && present <= 12){
         welcomemsg = 'Good Morning';
    } else {
        welcomemsg = 'welcome';
    }
    
return welcomemsg ;
}

welcomemsg =  greeting();

document.write('<h3>' + welcomemsg + '</h3>');

var msg;
var r = confirm("press any button");
if (r == true) {
  msg = "You pressed OK!";
} else {
    msg = "You pressed Cancel!";
}

 alert ("Hi\n^-^");

