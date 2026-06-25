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

//case 4-character counter
let gtaCommentTextArea=document.querySelector("#commentInput");
let charCountParagraph=document.querySelector("#charCount");

gtaCommentTextArea.addEventListener("input",function(e){
//code goes here a.k.a what will be executed when the event happens

//console.log("Typing...");

//count the number of characters
let numberOfChars=gtaCommentTextArea.value.length;

//prevent the user from typing after 60
if(numberOfChars>60){
    //prevent the default behaviour of the event
    e.preventDefault();
    gtaCommentTextArea.readOnly=true;

}else{
  //update the paragraph
charCountParagraph.textContent="Characters:"+numberOfChars;
  
}

//console.log("number of character:",numberOfChars);
});

//case 5-keyboard events
let keyOutput=document.querySelector("#keyOutput");
//the event listener
//when you press a key,anywhere on the page coz
//we've attached it to the entire page not just one element
document.addEventListener("keydown",function(event){
    //updating the paragraph
    if(keyOutput){
    keyOutput.textContent="You pressed:"+event.key;}
});

//case-todo lisy,wishlist
let wishListInput=document.querySelector("#wishlistInput");
let wishListButton=document.querySelector("#wishlistButton");
//<ul></ul>
let wishListItems=document.querySelector("#wishlistItems");
//submit btn
 wishListButton = document.querySelector("#submitBtn");
//error handler
if(wishListButton){
wishListButton.addEventListener("click",function(event){
    //prevents form submission
event.preventDefault();
//read whatever is in the wishlist
let wishListInputValue=wishListInput.value;
console.log(wishListInputValue);
//update wishlist if the wishlistinput value!=null
if(wishListInputValue!=""){
    //console.log(wishListInputValue);
    let li=document.createElement("li");
    li.textContent=wishListInputValue;

    let button=document.createElement("button");
    button.textContent="Delete";
    li.textContent=wishListInputValue;

    //we are going to add an event listener with the new dynamic element
    button.addEventListener("click",event => {
        li.remove();
    });
    
    li.appendChild(button);
    //we append the list to the ul
    wishListItems.appendChild(li);
  

    //finally we clear what the user typed in the input field
    wishListInput.value="";
}
});
}
//case 6b - removing items from the wish list
let deleteButtons = document.querySelectorAll("#wishlistItems button");
console.log(deleteButtons);

//iterate a.k.a loop through the buttons
deleteButtons.forEach(button => {
    button.addEventListener("click", event => {
        //console.log("delete button clicked");

        //in css
        //how do we get the first list item in an unordered list
        //given that the ul has has an id of #wishlistItems

        //#wishlistItems li
        //#wishlistItems>li
        //#wishlistItems li:first

        // querySelector - returns the first matching element
        // let first_li = document.querySelector("#wishlistItems li"); //first one
        // first_li.remove();
        // for one or for many
        // <li> <button>Delete</button> </li>
        //@TODO , how do you use parent, parentElement

        button.closest("li").remove();
        // button.parentElement.remove();
    });
});
//case 7-submit form/validation
//show what someone filled in the the form
let submitButton=document.querySelector("#feedbackForm button");
let feedbackForm=document.querySelector("#feedbackForm");
let feedbackOutput=document.querySelector("#feedbackOutput");//div

feedbackForm.addEventListener("submit",event=>{
    //prevent the form from being submitted normally
    event.preventDefault();
   // console.log("submit button clicked");
    
   //get the values filled in the form
  const name=document.querySelector("#fanName");//name
  const email=document.querySelector("#fanEmail");//email
  const message=document.querySelector("#fanMessage");//message,textarea

  feedbackOutput.innerHTML=
  "<strong>Fan Feedback Submitted</strong><br>"+
  "<p>Name:" +name.value+"</p>"+
   "<p>Email:" +email.value+"</p>"+
    "<p>Name:" +message.value+"</p>";

    //clear the form fields
    name.value="";
    email.value="";
    message.value="";

  //add success styles to the output div
    feedbackOutput.classList.add('success-text');
});   
// forgotten
let resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", event => {
    //undo the changed text
    demoText.textContent =
     "Clicked the button to modify this text using JavaScript.";
     demoText.style.color = "white";
     demoText.style.fontSize = "16px"; //has no effect

     //undo the highlight of the sections
     //toggle will remove if present or add if absent
        document.querySelectorAll("section").forEach(function (section) {
            // section.classList.toggle("section-highlight");
            section.classList.toggle("section-highlight");
        });
    })
