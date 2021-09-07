/* When the input field receives input, convert the value from feet to meters */
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Press 1.FEET TO METER \nPress 2. FEET TO INCH");

var valNum = 23;
switch(name){

    case 1:
        console.log(valNum / 0.0022046);
        break;

    case 2:
        console.log(valNum*12);
        break;
   

}

  


   