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
 * ?EVENT objects
 */

// when we give event to button and  click on it the browser does two things 
// 1 it performs the event 
// 2 the web api's of the browser provide us information of the events in form of object

// how to access the object ?

// in fuction of the addEventListener we dont provide any parameter ... but the browser by default provides it the parameter that is event if we console.log event then we will get the info of the event as object

const allbuttons = document.querySelectorAll("button")
console.log(allbuttons)
/// lets iterate thorugh the buttons list --- > nodelist using for loop , for each , for of while giving them an eventlistener

/**
 * !using simple for loop
 */

for ( let i=0;i<allbuttons.length;i++) {
    allbuttons[i].addEventListener("click",function(event){
        console.log(this)
        console.log(event)
        console.log (typeof event)
    })
}

/**
 * ! i clicked button 4 
 * *<button class="button">button 4</button>
 * *PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
 * *object
 */


// now if you have event in the bracket , you can use  arrow functions too but not "this" keyword.. like 

for ( let i=0;i<allbuttons.length;i++) {
    allbuttons[i].addEventListener("click",(event)=>{
        console.log(event.currentTarget)
        console.log(event)
        console.log (typeof event)
    })
}


/**
 * ! i clicked button 4 
 * *<button class="button">button 4</button>
 * *PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
 * *object
 */

// see the difference ? i passed the event parameter inside the function then i printed it , it printed the event information as an object 