/**
 * !html sample file 
 *<html>
    <head>
        <title>Dom traversing</title>
        <!-- <script src="dom_tree.js" defer></script> -->
        <script src="classlist&toogle.js" defer></script>
    </head>
    <body>
        <div class="container div1 div2 div3">
            <h1>My heading</h1>
            <p>Some useful information</p>
        </div>
    </body>
</html>
 *!html sample file ends
 */



/**
 * ?class lists , add and remove classes ,toogle buttons
 */

/**
 * ?class lists 
 */

// now lets see how we can see all the classes inside an element ....here in html file we gave 4 classes to div element-->  <div class="container div1 div2 div3">

const div = document.querySelector("div")
console.log(div.classList)
/**
 * *DOMTokenList ['container', 'div1', 'div2', 'div3]
 */
// these are all the classes of the div element

/**
 * ?add and remove classes 
 */

// how  to add and remove classes from an element in html

div.classList.add("div4")
console.log(div.classList)
/**
 * *DOMTokenList(5) ['container', 'div1', 'div2', 'div3', 'div4', value: 'container div1 div2 div3 div4']
 */
div.classList.remove("div2")
console.log(div.classList)
/**
 * *DOMTokenList(4) ['container', 'div1', 'div3', 'div4', value: 'container div1 div3 div4']
 */

/**
 * ?how to check if that element contains a class or not ?
 */

// suppose we want to check if div contains class - "container"  or not 

console.log(div.classList.contains("container"));
/**
 * *true 
 */
console.log(div.classList.contains("appalaraja"));
/**
 * *false
 */

/**
 * ?toogle button
 */
// what it does is if i toogle a class name to an element in html then ....
// 1) if the element has that class , it will remove it 
// 2) if the element dosent have have it then it will add the class name 

// suppose i created a new class in css file called "newdiv"
// now i want to add it to the div  with help of toogle

div.classList.toggle("newdiv")
console.log(div.classList)
/**
 * *DOMTokenList(5) ['container', 'div1', 'div3', 'div4', 'newdiv', value: 'container div1 div3 div4 newdiv']
 */
