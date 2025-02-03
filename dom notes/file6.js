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
//       <h2 class="plantoday">Your plan for today ?</h2>
//       <!-- todo form  -->
//       <form class="form-todo">
//         <input type="text" name="" id="" placeholder="Add Todo" />
//         <input type="submit" value="Add Todo" class="btn" />
//       </form>

//       <ul class="todo-list">
//         <!-- <li>
//           <span class="text">Do this do that</span>
//           <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>
//         </li> -->

//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//         <li>item 4</li>
//         <li>item 5</li>
        
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
 * ? static list and live list 
 */



/**
 * ? static list
 */

/**
 * ! read the following html code 
 */

//       <ul class="todo-list">
//         <!-- <li>
//           <span class="text">Do this do that</span>
//           <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>
//         </li> -->

//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//         <li>item 4</li>
//         <li>item 5</li>

/**
 * ! no lets say that i want to add another list item inside the ul ... we follow our regular procedure append stratergy 
 */

const lists = document.querySelectorAll(".todo-list li")
console.log(lists)

/**
 * *  NodeList(5) [li, li, li, li, li]
 */

// now lets add another list to it

const newlist = document.createElement("li")  //new list created
newlist.textContent = "item 6" // item 6 written in text 
const ul = document.querySelector(".todo-list")
ul.append(newlist)

console.log(lists)

/**
 * *  NodeList(5) [li, li, li, li, li]
 */


/**
 * ! it didnt change at all !! i added a new list from item 5 to item 6 but it didnt change the nodelist ... why ? because queryselector gives us static list .... it cant be changed live using js 
 */


/**
 * ? live list 
 */

// now lets use getelementby method which gives us a html collection 
// this is completely newcode 


/**
 * ! lets take the same html code
 */

//       <ul class="todo-list">
//         <!-- <li>
//           <span class="text">Do this do that</span>
//           <div class="todo-buttons">
//             <button class="todo-btn done">Done</button>
//             <button class="todo-btn remove">Remove</button>
//           </div>
//         </li> -->

//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//         <li>item 4</li>
//         <li>item 5</li>

const ullists = ul.getElementsByTagName("li")

/**
 * *HTMLCollection(6) [li, li, li, li, li, li]
 */

/**
 * ! see ! in the above static list section i added a list to ul changing items from 5 to 6 but it didint change the nodelist .... but in htmlcollection or getelemetnsby method it has live changes this is caled live list 
 */


/**
 * ? conclusion : queryselector gives us nodelist (static list) and getelementby method gives us html collection (live list)
 */
