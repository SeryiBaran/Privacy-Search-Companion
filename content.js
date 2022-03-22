let div = document.createElement('div');
let e = document.createElement('a');
e.href = "https://search.brave.com/search" + window.location.search;
e.title = 'Brave Search';
document.body.appendChild(div);
div.id = 'brave';
e.appendChild(document.createTextNode('brave'));
div.appendChild(e);


let div2 = document.createElement('div');
let e2 = document.createElement('a');
e2.href = "https://www.lukol.com/s.php" + window.location.search;
e2.title = 'Lukol';
document.body.appendChild(div2);
div2.id = 'lukol';
e2.appendChild(document.createTextNode('lukol'));
div2.appendChild(e2);


let div3 = document.createElement('div');
let e3 = document.createElement('a');
e3.href = "https://duckduckgo.com/" + window.location.search;
e3.title = 'DuckDuckGo';
document.body.appendChild(div3);
div3.id = 'ddg';
e3.appendChild(document.createTextNode('DDG'));
div3.appendChild(e3);


let div4 = document.createElement('div');
let e4 = document.createElement('a');
e4.href = "https://searx.be/search" + window.location.search;
e4.title = 'SearXNG';
document.body.appendChild(div4);
div4.id = 'SearXNG';
e4.appendChild(document.createTextNode('SearXNG'));
div4.appendChild(e4);

/*
if(window.location.host == "peekier.com"){

}*/