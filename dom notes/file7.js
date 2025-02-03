// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="./style.css" />  
//     <!-- <script src="getandset.js" defer></script> -->
//     <script src="script.js" defer></script>
//     <title>My Website</title>
//   </head>
//   <body>
//     <button class="button">button 1</button>
//     <button class="button">button 2</button>
//     <button class="button">button 3</button>
//     <button class="button">button 4</button>
//   </body>
// </html>

/**
 * ?multiple events
 */

// in the above html sample we have 4 buttons 

// lets select all the buttons 

const allbuttons = document.querySelectorAll("button")
console.log(allbuttons)
/// lets iterate thorugh the buttons list --- > nodelist using for loop , for each , for of while giving them an eventlistener

/**
 * !using for  each method 
 */

allbuttons.forEach(
    function(button) {
         button.addEventListener("click",function(){console.log(this)})
    }
)


/**
 * !using for of method 
 */


for (let button of allbuttons){
       button.addEventListener("click",function(){console.log(this)})
}


/**
 * !using simple for loop
 */

for ( let i=0;i<allbuttons.length;i++) {
    allbuttons[i].addEventListener("click",function(){console.log(this)})
}