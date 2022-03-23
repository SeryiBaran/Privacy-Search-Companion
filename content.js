let div = document.createElement('div');
let e = document.createElement('a');
e.href = "https://search.brave.com/search" + window.location.search;
e.title = 'Brave Search';
e.className = "button";
document.body.appendChild(div);
div.id = 'brave';
div.className = "buttons";
e.appendChild(document.createTextNode('Brave'));
div.appendChild(e);


let div2 = document.createElement('div');
let e2 = document.createElement('a');
e2.href = "https://www.lukol.com/s.php" + window.location.search;
e2.title = 'Lukol';
e2.className = "button";
document.body.appendChild(div2);
div2.id = 'lukol';
div2.className = "buttons";
e2.appendChild(document.createTextNode('Lukol'));
div2.appendChild(e2);


let div3 = document.createElement('div');
let e3 = document.createElement('a');
e3.href = "https://duckduckgo.com/" + window.location.search;
e3.title = 'DuckDuckGo';
e3.className = "button";
document.body.appendChild(div3);
div3.id = 'ddg';
div3.className = "buttons";
e3.appendChild(document.createTextNode('DDG'));
div3.appendChild(e3);


let div4 = document.createElement('div');
let e4 = document.createElement('a');
e4.href = "https://searx.be/search" + window.location.search;
e4.title = 'SearXNG';
e4.className = "button";
document.body.appendChild(div4);
div4.id = 'SearXNG';
div4.className = "buttons";
e4.appendChild(document.createTextNode('SearXNG'));
div4.appendChild(e4);

/*
if(window.location.host == "peekier.com"){
}
*/
