/**
 * !html sample file 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />  
    <!-- <script src="getandset.js" defer></script> -->
    <script src="dom_tree.js" defer></script>
    <title>My Website</title>
  </head>
  <body>
    <header class="header">
      <nav class="nav container">
        <h1 class="logo" id="web-logo">Website</h1>
        <ul class="nav-items">
          <li class="nav-item home"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdnOlxkV1mJHzm6ZsEeGIySqTVwSBHLB7Mea1lWRWcSlHNkOQ/closedform">Home</a></li>
          <li class="nav-item"><a href="">Todo</a></li>
          <li class="nav-item"><a href="">Sign Up</a></li>
        </ul>
      </nav>
      <div class="headline">
        <h2 id="main-heading">
          Manage your tasks <span style="display: none">Hello</span>
        </h2>
        <button class="btn btn-headline">Learn More</button>
      </div>
    </header>

    <section class="section-todo container">
      <h2>Your plan for today ?</h2>
      <!-- todo form  -->
      <form class="form-todo">
        <input type="text" name="" id="" placeholder="Add Todo" />
        <input type="submit" value="Add Todo" class="btn" />
      </form>

      <ul class="todo-list">
        <li>
          <span class="text">Do this do that</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        </li>
      </ul>
    </section>

    <section class="section-signup container">
      <h2>Sign Up</h2>
      <form class="signup-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" autocomplete="off"/>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" autocomplete="off" />
        </div>
        <div class="form-group">
          <label for="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="form-group">
          <label for="about">About Yourself</label>
          <textarea name="about" id="about" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" class="btn signup-btn">Submit</button>
      </form>
    </section>
  </body>
</html>
 *!html sample file ends
 */

/**
 * ?createElement,append,prepend,remove
 */

// if we want to add new elements to html ... innerhtml+=..... is not recommended for code changing issues ...
// so use this instead 

const newtodoitem = document.createElement("li");
// new list created to add in todo section
newtodoitem.textContent = "new todo added"
// textcontent was updated 
const oldtodo = document.querySelector(".todo-list")
// old todo list class was selected to merge the new item
oldtodo.append(newtodoitem);
/**
 * !the append keyword merged new list inside todo-list 
 */


// now lets again create a new button inside our new list as in old todo element
const newbutton = document.createElement("button")
newbutton.textContent = "new text"
newtodoitem.append(newbutton)
newbutton.classList.add("todo-btn","done")
console.log(newbutton.classList)
newtodoitem.style.backgroundColor = "dark blue"

/**
 * !if i write prepend instead of append .... the new elements would be added before the existing element
 */

// how to remove an element from html ? 
// lets say i want to remove the new list that i added

newtodoitem.remove()

// the new list will be removed 


/**
 * ? before,after
 */

// now lets add the newtodo item again but using befor and after 


oldtodo.before(newtodoitem)

// it will add the new todo item before the oldtodo item .... but there is a difference between (before and after ) & (apprend and prepend)---
/**
 * ! in before and after ---it will add the new item above or below the existing list which means it is a completely new html element with no class commonship so ...... but apprend and prepend ---- they will merge the new list along with the lists so they will come under same class 
 */

/**
 * ?cloning nodes 
 */

oldtodo.append(newtodoitem)
// now i cant prepend the same item so to append and prepend same thing we need to clone it 
const newtodoitem2 = newtodoitem.cloneNode(true)
oldtodo.prepend(newtodoitem2)
newtodoitem2.textContent = "prepend to do item"



/**
 * ! there are old ways like - appendchild,insertbefore,remomvechild,replacechild ..... learn afterwards just for some old browser support issues 
 */