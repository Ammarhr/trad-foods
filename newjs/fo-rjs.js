
while(present !== "sweets" && present !== "foods"){
    var present =  prompt("insert the what you want to search");
   var typeFood;   
}
var typeFood = "";   
var numberOfPhoto ;
numberOfPhoto = prompt("how many images you want to show?");

for(var i = 0; i < numberOfPhoto ; i++){
    console.log("index is" + i);
     if (present=== "sweets" ){
         typeFood = typeFood + '<img src="images/sweet.jpg">';
     } else if (present ==="foods"){
         typeFood = typeFood + '<img src="images/foods.png">';
     }  
}

document.write('<h3>' + typeFood + '</h3>');

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
welcomemsg = greeting();

document.write('<h3>' + welcomemsg + '</h3>');

alert ("Welcom and injoy\n^-^");
