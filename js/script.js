//let age=20;
//var Course="BBIT";
//const university="Strathmore";

/*Redeclare */
/*let age=20;*/

/*Reassign */
//let age=19;
//var Course="BCOM";
//const university="Daystar";
 //var day="6th";
 
//if(true){
//let time="11:30";
//var day="4th";
//const year=2026;
//}
//console.log(time);

/**
 * Function thata calculates are of a rectangle
 * @param {int} height
 * @param {int} width
 * @returns {int} area
 */

function calculateArea(height,width){
    if (height==null){
          console.log('height missing!')
}else if(width==null){
            console.log('width missing!')
}else{

   let area =height * width
    return area
    //console.log("function calaculateArea")
    //alert("Function-called/executed");
}
}
//execution-called
// return value isnt printing out
console.log(calculateArea(20,3))//one output 60
console.log(calculateArea(20))//one output width
console.log(calculateArea())//one output height

//function expression
const add=function(number_1,number_2){
    return number_1+ number_2
}
console.log(add(4,2))

//arrow functions
const multiply=(x,y) => x * y;

console.log(multiply(2,5));