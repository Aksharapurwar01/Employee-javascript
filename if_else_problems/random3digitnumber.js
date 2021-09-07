var val = new Array();

for(let i=0; i< 5; i++){

    val.push(Math.floor(100 + Math.random() * 900));
    console.log(val);
}
console.log("max");
console.log(Math.max(...val)); 
//console.log(Math.max(1,2,3,4,3,223,45));
