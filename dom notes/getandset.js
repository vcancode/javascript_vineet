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
 * ?get and set in javascript 
 */

const link = document.querySelector("a");
// selects the 1st anchor tag i.e;  home anchor tag 
console.log(link.getAttribute("href"));

// (https://docs.google.com/forms/d/e/1FAIpQLSdnOlxkV1mJHzm6ZsEeGIySqTVwSBHLB7Mea1lWRWcSlHNkOQ/closedform)
// this is the link that i pasted in href attribute in my 1st anchor tag 

// so what get attribute does is it helps us to get access to the attributes of any tags in html

//  lets consider a form that i pasted in html document 
 
 
/* <form class="form-todo">
        <input type="text" name="" id="" placeholder="Add Todo" />
        <input type="submit" value="Add Todo" class="btn" />
</form> */

// now i want to access the type attribute from input section 

const inputelement = document.querySelector(".form-todo input")
console.log(inputelement.getAttribute("placeholder"));
/**
 * * Add Todo 
 */

/**
 * !now for set attributes 
 */

// lets say i want to change the link of href attribute of the anchor tag at the 1st 

link.setAttribute("href","https://www.google.co.in/");
// the link from href attribute is changed to google page from gen ai study page 

/**
 * ?query all selector and element by id 
 */


// there is a 3 lists of anchor tags in nav section 

{/* <li class="nav-item home"><a href="">Home</a></li>
          <li class="nav-item"><a href="">Todo</a></li>
          <li class="nav-item"><a href="">Sign Up</a></li> */}

const navitems = document.getElementsByClassName("nav-item")
console.log(navitems)

/**
 * * HTMLCollection(3) [li.nav-item.home, li.nav-item, li.nav-item]
 */

// now what is html collection -- it is array like object only like we observed as node list of elements in get element by id --- they are also iterable 

console.log(navitems[0])
/**
 * *li.nav-item.home
 */

/**
 * ?iteration of html collection i.e;inside the array like object 
 */

// what we mean by array like objects is that they are iterable and they also have length so navitems.length is possible 
/**
 * !2 ways to iterate 
 * ! 1) for loop (simple)
 * ! 2) for of loop 
 */

// lets take  an example -- i want to change all the anchor tags of nav section to green color , yellow background color and font weight to bold 

const navanchors =  document.getElementsByTagName("a");

//now using for loop to iterate 

for(let i=0;i<navanchors.length;i++) {
     navanchors[i].style.color = "green";
     navanchors[i].style.backgroundColor = "yellow";
     navanchors[i].style.fontWeight = "bold";
}

// we can also use for of loop for simplicity

for(let x of navanchors) {
        x.style.color = "red";
}

//  but we cant use for each method for this .... to do this you need to convert it to an array because that function only works for arrays 

anchorarray = Array.from(navanchors);
// this takes values from navanchors and puts in itself as an array 
// now we can easily iterate it 

anchorarray.forEach((x)=>{
        x.style.color = "green"
})

/**
 * !get element by id,tags gives u a html collection   and  query selector gives you a nodelist 
 */

/**
 * ?how to iterate nodelist
 */
 
const anchorlists = document.querySelectorAll("a")

// use . for class # for id and only tag name for tags 

/**
 * !we can iterate it using for loop simple , for of and forEach method 
 */

/**
 * ?inner html 
 */

// it is used to access inner html tags inside a class eg ----

//  <header class="header">
// <nav class="nav container">
// <h1 class="logo" id="web-logo">Website</h1>
// <ul class="nav-items">
//   <li class="nav-item home"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdnOlxkV1mJHzm6ZsEeGIySqTVwSBHLB7Mea1lWRWcSlHNkOQ/closedform">Home</a></li>
//   <li class="nav-item"><a href="">Todo</a></li>
//   <li class="nav-item"><a href="">Sign Up</a></li>
// </ul>
// </nav>
// <div class="headline">
// <h2 id="main-heading">
//   Manage your tasks <span style="display: none">Hello</span>
// </h2>
// <button class="btn btn-headline">Learn More</button>
// </div>
// </header>----

const headerhtml = document.querySelector(".header")

console.log(headerhtml.innerHTML)

headerhtml.innerHTML = "<h1>vineet</h1>"

// this will change your website form "website" to "vineet"

/**
 * !how to add elements inside html 
 */

headerhtml.innerHTML += "<p>ansuman is gay</p>"
// it will add a paragraph to the html 
headerhtml.innerHTML+= "<button class = \"btn\"> lund </button> "

//  " \"btn\" " what is this ? we cant add inverted commas inside inverted commas so we do this to avoid errors

