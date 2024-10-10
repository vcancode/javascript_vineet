/**
 * ! sample of html file 

<html>
    <head>
        <title>Dom traversing</title>
        <script src="dom_tree.js" defer></script>
    </head>
    <body>
        <div class="container">
            <h1>My heading</h1>
            <p>Some useful information</p>
        </div>
    </body>
</html>
/**
 * !html sample ends 
 */


/**
 * ? parent and child nodes inside html document
 */

const rootnode = document.getRootNode();
// now rootnode contains entiredocument as its root document object 
console.log(rootnode);
/**
 * *#document
 */

const htmlnode =  rootnode.childNodes[0];
console.log(htmlnode);
console.log(htmlnode.childNodes);
/**
 * *NodeList(3) [head, text, body]
 */

// here html has 2 part head, and body ant the "text" part is the space between head and body also called as next line ..... it also counts that 

const headnode = htmlnode.childNodes[0];
console.log(headnode);

/**
 * * head
 */


/**
 * ? parent node 
 */
// lets find who is the parent of headnode i.e; head

const headparent = headnode.parentNode
console.log(headparent)
/**
 * *html   
 as html tag is the parent of head tag ....
 */

 /**
  * ?siblings 
  */

 const headnodesibling = headnode.nextSibling
 console.log(headnodesibling);
//  it will pring the acjacent sibling of the head from nodelist .... i.e; text "\n "  next line and space 

console.log(headnodesibling.nextSibling);

// next sibling of the text is body 

/**
 * !now let's say i want to print the next sibling should be an element not the text space and all like if i apply the next sibling property then i should get body instead of space text ... i know that there is text space there but i dont want to acess it , let it be there but the moment i move to next sibling it should be an element 
 */

console.log(headnode.nextElementSibling);

/**
 * * body tag
 */

/**
 * ? we can also use query selector inside nodes  
 */
 console.log(headnode.querySelector("title"))
//  it will print the title tag inside headnode 

/**
 * !if i want to only print elements as children of an element then what to do ? eg - htmlnode has 3 children head,text(\n ),body but if i only want  to select head and body only as childs then .... 
 */

const div = document.querySelector(".container");
// selects the div 
 console.log(div.children);
 /**
  * *HTMLCollection(2) [h1, p]  .... as div had only 2 elements
  */

 
