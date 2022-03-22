var div = document.createElement( 'div' );
var e    = document.createElement('a');


e.href =  "https://search.brave.com/search" + window.location.search;
console.log(window.location);
e.title = 'это ссылка';
//append all elements
document.body.appendChild( div );
//set attributes for div
div.id = 'myDivId';
e.appendChild(document.createTextNode('brave'));
div.appendChild(e);



var div2 = document.createElement( 'div' );
var e2    = document.createElement('a');
e2.href =  "https://www.lukol.com/s.php" + window.location.search;
console.log(window.location);
e2.title = 'это ссылка';
//append all elements
document.body.appendChild( div2 );
//set attributes for div
div2.id = 'myDivId2';
div2.style.position = 'fixed';
div2.style.bottom = '30px';
div2.style.left = '80%';
div2.style.width = '100px';   
div2.style.height = '35px';
div2.style.backgroundColor = 'blue';


e2.appendChild(document.createTextNode('lukol'));
div2.appendChild(e2);




var div3 = document.createElement( 'div' );
var e3    = document.createElement('a');


e3.href =  "https://duckduckgo.com/" + window.location.search;
console.log(window.location);
e3.title = 'это ссылка';
//append all elements
document.body.appendChild( div3 );
//set attributes for div
div3.id = 'myDivId3';
div3.style.position = 'fixed';
div3.style.bottom = '60px';
div3.style.left = '80%';
div3.style.width = '100px';   
div3.style.height = '35px';
div3.style.backgroundColor = 'green';


e3.appendChild(document.createTextNode('DDG'));
div3.appendChild(e3);