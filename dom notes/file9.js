// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css">
//     <script src="script.js" defer></script>
// </head>
// <body>
//     <header class="header">
//         <nav class="nav container">
//           <h1 class="logo">Website</h1>
//           <ul class="nav-items">
//             <li class="nav-item 1"><a href="#home">Home</a></li>
//             <li class="nav-item 2"><a href="">Todo</a></li>
//             <li class="nav-item 3"><a href="">Sign Up</a></li>
//           </ul>
//         </nav>
//         <div class="headline">
//           <h2 id="main-heading">
//             Manage your tasks <span style="display: none">Hello</span>
//           </h2>
//           <button class="btn btn-headline">Learn More</button>
//         </div>
//       </header>
  
//       <section class="section-todo container">
//         <h2>Your plan for today ?</h2>
//         <!-- todo form  -->
//         <form class="form-todo">
//           <input type="text" name="" id="" placeholder="Add Todo" />
//           <input type="submit" value="Add Todo" class="btn" />
//         </form>
  
//         <ul class="todo-list"> 
//           <li class = "first-todo"> todo1</li>
//           <li> todo2</li>
//         </ul>
//       </section>
  
//       <section class="section-signup container">
//         <h2>Sign Up</h2>
//         <form class="signup-form">
//           <div class="form-group">
//             <label for="username">Username</label>
//             <input type="text" name="username" id="username" />
//           </div>
//           <div class="form-group">
//             <label for="password">Password</label>
//             <input type="password" name="password" id="password" />
//           </div>
//           <div class="form-group">
//             <label for="confirmPassword">Confirm Password</label>
//             <input type="password" name="confirmPassword" id="confirmPassword" />
//           </div>
//           <div class="form-group">
//             <label for="phone">Phone</label>
//             <input type="text" name="phone" id="phone" />
//           </div>
//           <div class="form-group">
//             <label for="email">Email</label>
//             <input type="email" name="email" id="email" />
//           </div>
//           <div class="form-group">
//             <label for="about">About Yourself</label>
//             <textarea name="about" id="about" cols="30" rows="10"></textarea>
//           </div>
//           <button type="submit" class="btn signup-btn">Submit</button>
//         </form>
//       </section>
// </body>
// </html>


/**
 * ?keypress, mouseover, mouseleave events
 */

// select the entire body if i press any key it will console.log
// const body = document.querySelector("body")

body.addEventListener("keypress",function(e){
    console.log(e.key)
})
// if i hover over the selected the button 
const mainbtn =  document.querySelector(".btn-headline")

mainbtn.addEventListener("mouseover",function(){
    console.log("you hovered over main button")
})

// if i leave the button 
mainbtn.addEventListener("mouseleave",function(){
    console.log("you finished hovering over main button")
})


/**
 * ?eventbubbling and event capturing 
 */


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <link rel="stylesheet" href="./style2.css" />  
//     <!-- <script src="getandset.js" defer></script> -->
//     <script src="script.js" defer></script>
//     <title>My Website</title>
//   </head>
//   <body>
//        <main>
//         <div class="grandparent">
//           grandparent
//           <div class="parent">
//             parent
//             <div class="child">
//               child
//             </div>
//           </div>
//          </div>
//        </main>
//   </body>
// </html>


// the above html document has 3 divs grandparent , parent and child 

// lets give event listener to all of them

const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click",function(){
    console.log("grandparent is clicked")
})
parent.addEventListener("click",function(){
    console.log("parent is clicked")
})
child.addEventListener("click",function(){
    console.log("child is clicked")
})


/**
 * ! if i click the child now it will print all the eventlistener .... this is called event bubbleing 
 */

/**
 * ! event bubbling means when i click event the effect goes to its parent also till html... this means if i apply click event on all the parents and children the child will act first and then the click effect spreadslike  child->parent->grandparent->higherparents ---------> finally html
 */
// now lets see what event capturing is ... 

grandparent.addEventListener("click",function(){
    console.log("grandparent is clicked")
},true)
parent.addEventListener("click",function(){
    console.log("parent is clicked")
},true)
child.addEventListener("click",function(){
    console.log("child is clicked")
},true)

// here the difference is only true word after function now it will reverse the order 
// if i click the child .... first grandparent will be clicked , then parent , then finally child


/**
 * ? event delegation
 */

// lets select that grandparent again 

const grandparent =  document.querySelector(".grandparent")

// if i give event listener to grandparent only

grandparent.addEventListener("click",function(){
    console.log("you clicked")
})

// now if i click on the child instead of grandparent ... it will still trigger the click event 
// as  child  .... is inside grandparent

/**
 * ! this is called event delegation 
 */