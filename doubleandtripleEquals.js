var number=10;
 if (number=="10") { //Loose Type Checking
     console.log("Loose DataTyping! Comapring String and A Number");
     console.log("this might be true")
 }
 else if(number===10){ //Strict Type Checking
    console.log("THIS IS TRUE");
 }
 else{
    console.log("else block executed");
 }