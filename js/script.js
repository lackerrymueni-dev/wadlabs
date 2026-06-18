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

/**Javascript arrays(related) */

const scores=[45,56,67,67,78];

//Access array_name [index]
//78
console.log( scores[4]);
//67
console.log( scores[2]);
//45
console.log( scores[0]);
//56
console.log( scores[1]);

let student_names=["omondi","wafula","kiprotich","nyambane","topian"];
//print out kiprotich on console window
console.log(student_names[2]);

let governors=[
    [47,"Johnson Sakaja"],
    [1,"Sherrif Nasar"],
    [21,"Irungu Kang'ata"]
];
//print out the governor of county 1 is Sherrif Nasar
console.log("The governor of county number",governors[1][0],"is",governors[1][1]);
//array inside an array 

// map(performs operation on each element)
let doubled=scores.map(x=>x*2);//multiple each score by 2
console.log(doubled);

//properties
//The class has j students(student_names)
console.log("The class has",student_names.length,"students");

//Kenya has b governors
console.log("Kenya has",governors.length,"governors");

//for in
for(let index in scores){
    console.log(scores[index]);
}
// for of
for(let score of scores){
    console.log(score);
}

//forEach
scores.forEach(function(score){
console.log("score:",score);
});

const student={
    name:"Alice",
    age:20,
    passed:true,
    grade:'A',
    "admission number":18330,
    course:"BBIT",
    group:"2A",
    university:"Strathmore",
    attendance :20,
    addAttendance:function(){
        this.attendance+=1
    }
};

//accesing items
//student_name
console.log("My name is",
    student.name,"admission number",
    student["admission number"],
   
);


//a method in the object
student.addAttendance();//add attendance by 1
console.log(student.attendance);//21

//array of objects
let bbit_2b_students=[
    {adm:223251,name:"Blessing"},
    {adm:192977,name:"Ryan"},
     {adm:222024,name:"Ambrose"},
      {adm:220941,name:"Neema"}

];
// calling one student
console.log(bbit_2b_students[1].name);

//print out the names of all the stidents in 2b using a loop
bbit_2b_students.forEach(function(student){
    console.log(student.name)
});

//@TODO:Showing looping of objects
//getting keys of an object as an array
console.log(Object.keys(student));

//getting the values of an object as an array
console.log(Object.values(student));

//getting both keys and values of an object as an array
console.log(Object.entries(student));

/* DOM -Document Object Model*/
console.log(document);
console.log(document);

//Elements on our page (variables)
const heading=document.querySelector("#mainHeading");
console.log(heading);

const aboutSection=document.getElementById('about');
console.log(aboutSection);
//querySelector- returns only one element the first matching element

//all sections
const allSections=document.querySelectorAll('section');
console.log(allSections);
const allNavLinks=document.querySelectorAll("nav a");
console.log(allNavLinks);

//getting an element
let aboutParagraph=document.querySelector('#about p');

//change it text
aboutParagraph.textContent="This text was changed";
aboutParagraph.style.color="red";

//setting/setter-updating the page from js
const previewImage=document.querySelector("img");
console.log(previewImage);
//via DOM
previewImage.setAttribute("title","New title of Image");
previewImage.setAttribute("alt","New alternate text for Image");
console.log(previewImage.alt);
console.log(previewImage.title);

//EventHandling-Events(user events-click, key events,scroll)
//get the element of interest-button with an id of changeTextBtn
let changeTextBtn=document.querySelector("#changeTextBtn");
let demoText=document.querySelector("#demoText");

// we are handling the click event for  the button with an id changrTextBtn
changeTextBtn.addEventListener("click",function(event){
    console.log("Someone clicked me!");
    demoText.textContent="I have been changed when you clicked";
     demoText.style.color="orange";
      demoText.style.fontSize="16px";
});
//use case 2
let highlightSectionsBtn=document.querySelector("#highlightSectionsBtn");
 highlightSectionsBtn.addEventListener("click",function(event){
    //one
    document.querySelector("#about").classList.toggle("section-highlight");
    //two
        document.querySelectorAll("#section").forEach(function(section){
        section.classList.toggle("section-highlight");
        });
});
//get the textbox with nameInput
 document.querySelector("#nameInput").addEventListener("input",function(event){
document.querySelector("#nameOutput").textContent=
"Hello" + document.querySelector("#nameInput").value +"!";
});