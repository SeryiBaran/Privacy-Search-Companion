let query = "";

if (window.location.host == "search.brave.com") {
    console.log("ЭТО Brave");
    query = document.getElementById('searchbox').value;
    
}

if (window.location.host == "www.lukol.com") {
    console.log("ЭТО Lukol");
    query = document.getElementById('q').value;
    
}

if (window.location.host == "duckduckgo.com") {
    console.log("ЭТО DuckDuckGo");
    query = document.getElementById('search_form_input').value;
    
}

if (window.location.host == "searx.be") {
    console.log("ЭТО SearXNG");
    query = document.getElementById('q').value;
    
}


if (window.location.host == "swisscows.com") {
    console.log("ЭТО Swisscows");
    query = document.getElementsByClassName("input-search")[0].value;
    
}

if (window.location.host == "peekier.com") {
    console.log("ЭТО Peekier");
    query = document.getElementById('text-measure').innerText;
    
}

if (window.location.host == "gigablast.com") {
    console.log("ЭТО Gigablast");
    query = document.getElementById('q').value;
    
}

if (window.location.host == "yandex.ru") {
    onsole.log("ЭТО Yandex");
    query = document.getElementById('uniq16448413328451').value;
}

console.log(query);



let div = document.createElement('div');
let e = document.createElement('a');
e.href = "https://search.brave.com/search?q=" + query;
e.title = 'Brave Search';
e.className = "button";
document.body.appendChild(div);
div.id = 'brave';
div.className = "buttons";
e.appendChild(document.createTextNode('Brave'));
div.appendChild(e);


let div2 = document.createElement('div');
let e2 = document.createElement('a');
e2.href = "https://www.lukol.com/s.php?q=" + query;
e2.title = 'Lukol';
e2.className = "button";
document.body.appendChild(div2);
div2.id = 'lukol';
div2.className = "buttons";
e2.appendChild(document.createTextNode('Lukol'));
div2.appendChild(e2);


let div3 = document.createElement('div');
let e3 = document.createElement('a');
e3.href = "https://duckduckgo.com/?t=ffab&q=" + query;
e3.title = 'DuckDuckGo';
e3.className = "button";
document.body.appendChild(div3);
div3.id = 'ddg';
div3.className = "buttons";
e3.appendChild(document.createTextNode('DDG'));
div3.appendChild(e3);


let div4 = document.createElement('div');
let e4 = document.createElement('a');
e4.href = "https://searx.be/search?q=" + query;
e4.title = 'SearXNG';
e4.className = "button";
document.body.appendChild(div4);
div4.id = 'SearXNG';
div4.className = "buttons";
e4.appendChild(document.createTextNode('SearXNG'));
div4.appendChild(e4);


let div5 = document.createElement('div');
let e5 = document.createElement('a');
e5.href = "https://swisscows.com/web?query=" + query;
e5.title = 'Swisscows';
e5.className = "button";
document.body.appendChild(div5);
div5.id = 'swisscows';
div5.className = "buttons";
e5.appendChild(document.createTextNode('Swiss'));
div5.appendChild(e5);




let div7 = document.createElement('div');
let e7 = document.createElement('a');
e7.href = "https://gigablast.com/search?c=main&qlangcountry=en-us&q=" + query;
e7.title = 'Gigablast';
e7.className = "button";
document.body.appendChild(div7);
div7.id = 'gigablast';
div7.className = "buttons";
e7.appendChild(document.createTextNode('Gigablast'));
div7.appendChild(e7);
