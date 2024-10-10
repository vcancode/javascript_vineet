/**
 * !sample of html file 
 */

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="./style.css" />  
//     <!-- <script src="getandset.js" defer></script> -->
//     <script src="dom_tree.js" defer></script>
//     <title>My Website</title>
//   </head>
//   <body>
//     <header class="header">
//       <nav class="nav container">
//         <h1 class="logo" id="web-logo">Website</h1>
//         <ul class="nav-items">
//           <li class="nav-item home"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdnOlxkV1mJHzm6ZsEeGIySqTVwSBHLB7Mea1lWRWcSlHNkOQ/closedform">Home</a></li>
//           <li class="nav-item"><a href="">Todo</a></li>
//           <li class="nav-item"><a href="">Sign Up</a></li>
//         </ul>
//       </nav>
//       <div class="headline">
//         <h2 id="main-heading">
//           Manage your tasks <span style="display: none">Hello</span>
//         </h2>
//         <button class="btn btn-headline">Learn More</button>
//       </div>
//     </header>

//     <section class="section-todo container">
//       <h2>Your plan for today ?</h2>
//       <!-- todo form  -->
//       <form class="form-todo">
//         <input type="text" name="" id="" placeholder="Add Todo" />
//         <input type="submit" value="Add Todo" class="btn" />
//       </form>

//       <ul class="todo-list">
//         <li>
//           <span class="text">Do this do that</span>
//           <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>
//         </li>
//       </ul>
//     </section>

//     <section class="section-signup container">
//       <h2>Sign Up</h2>
//       <form class="signup-form">
//         <div class="form-group">
//           <label for="username">Username</label>
//           <input type="text" name="username" id="username" />
//         </div>
//         <div class="form-group">
//           <label for="password">Password</label>
//           <input type="password" name="password" id="password" autocomplete="off"/>
//         </div>
//         <div class="form-group">
//           <label for="confirmPassword">Confirm Password</label>
//           <input type="password" name="confirmPassword" id="confirmPassword" autocomplete="off" />
//         </div>
//         <div class="form-group">
//           <label for="phone">Phone</label>
//           <input type="text" name="phone" id="phone" />
//         </div>
//         <div class="form-group">
//           <label for="email">Email</label>
//           <input type="email" name="email" id="email" />
//         </div>
//         <div class="form-group">
//           <label for="about">About Yourself</label>
//           <textarea name="about" id="about" cols="30" rows="10"></textarea>
//         </div>
//         <button type="submit" class="btn signup-btn">Submit</button>
//       </form>
//     </section>
//   </body>
// </html>

/**
 * !sample of html file ends
 */






/**
 *? get element by id -- we can use it to access any element by its id
 */


const myheading = document.getElementById("main-heading");
console.log(myheading)
// ---> it will print my heading id part from html ... which means it has now stored it in itself

/**
 * ? queryselector -- it can select classes and other specfic id's 
 * */ 

const header = document.querySelector(".header")
console.log(header)

// it will store the first class that is assigned class name as header ... if we want to select all the elements with same class name then we have to do 
// there are nav links (3) each named nav-item ,, i want to select every one of them ....

const nav = document.querySelectorAll("nav-item")
console.log(nav)

// it will print a nodelist .... now what is a node list ... it is just like array but stores data such as items of same class which we did right now ;

/**
 * ? changing text content in my website 
 */

//  if i want to change my text content for eg.. if i want to change  my website name on top of my website  to my name -- vineet do this 

const webname = document.getElementById("web-logo")
// i can only do this by id giving class to some items then textContent cant be extracted 
console.log(webname.textContent)
// now lets change this text content 

webname.textContent = "newweb";
// the text content of my website will be changed 

/**
 * !whenever you are using query selector use " . " for classes and "#" for id's
 */
/**
 * ? more abbout querySelector
 */
// whenever we need to specefically select an item .. eg i need to select h1 tag inside nav section specefically so we do this ..

const headerspecefic = document.querySelector(".nav h1")
console.log(headerspecefic.textContent)

// will print the text content --- new web ( as we had updated earlier otherwise it would show website as initialised from start)

/**
 * ? how to change styles of an item using js
 */

// we have to follow same procedure here 
// lets say i want to change the text color of my home anchor tag in nav bar 

const changestyle = document.querySelector(".nav .home a")
// nav class ke andar ka home ke andar ka anchor tag
changestyle.style.color = "blue";
changestyle.style.backgroundColor = "red"
// never use " - " in js for styles like background-color, border-radius , etc... make letters with no space thats how it is written in jsz
