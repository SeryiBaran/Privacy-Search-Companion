let query = "";
// простейшая функция для определения текущего поисковика
if (window.location.host == "search.brave.com") {
    console.log("ЭТО Brave!");
    query = document.getElementById("searchbox").value;
}

if (window.location.host == "www.lukol.com") {
    console.log("ЭТО Lukol!");
    query = document.getElementById("q").value;
}

if (window.location.host == "duckduckgo.com") {
    console.log("ЭТО DuckDuckGo!");
    query = document.getElementById("search_form_input").value;
}

if (window.location.host == "searx.be") {
    console.log("ЭТО SearXNG!");
    query = document.getElementById("q").value;
}

if (window.location.host == "swisscows.com") {
    console.log("ЭТО Swisscows!");
    query = document.getElementsByClassName("input-search")[0].value;
}

if (window.location.host == "peekier.com") {
    console.log("ЭТО Peekier!");
    query = document.getElementById("text-measure").innerText;
}

if (window.location.host == "gigablast.com") {
    console.log("ЭТО Gigablast!");
    query = document.getElementById("q").value;
}

if (window.location.host == "yandex.ru") {
    onsole.log("ЭТО Yandex!");
    query = document.getElementById("uniq16448413328451").value;
}

if (window.location.host == "metager.org") {
    console.log("ЭТО MetaGer!");
    query = document.getElementsByClassName("form-control")[0].value;
}

if (window.location.host == "www.google.com") {
    console.log("ЭТО Google!");
    query = document.getElementsByClassName("gLFyf gsfi")[1].value;
}

console.log(query);

(() => {
    const pingButtons = document.getElementById("_all_buttons");
    if (pingButtons) {
        pingButtons.parentNode.removeChild(pingButtons);
    }
})();

let allButtons = document.createElement("div");
allButtons.id = "_all_buttons";
allButtons.className = "_all_buttons";
document.body.appendChild(allButtons);

let buttonsContainer = document.createElement("div");
buttonsContainer.id = "_buttons_container";
buttonsContainer.className = "_buttons_container";

let close = document.createElement("button");
let closed = false;
close.innerText = "Свернуть";
close.id = "_close_button";
close.className = "_close_button _button";
function toogleButtons() {
    if (!closed) {
        allButtons.style.bottom = `-${buttonsContainer.offsetHeight}px`;
        closed = true;
    } else {
        allButtons.style.bottom = null;
        closed = false;
    }
    close.innerText = closed ? "Развернуть" : "Свернуть";
}
close.addEventListener("click", toogleButtons, false);

let div = document.createElement("div");
let e = document.createElement("a");
e.href = "https://search.brave.com/search?q=" + query;
e.title = "Brave Search";
e.className = "_button";
div.id = "_brave";
div.className = "_buttons";
e.appendChild(document.createTextNode("Brave"));
div.appendChild(e);

let div2 = document.createElement("div");
let e2 = document.createElement("a");
e2.href = "https://www.lukol.com/s.php?q=" + query;
e2.title = "Lukol";
e2.className = "_button";
div2.id = "_lukol";
div2.className = "_buttons";
e2.appendChild(document.createTextNode("Lukol"));
div2.appendChild(e2);

let div3 = document.createElement("div");
let e3 = document.createElement("a");
e3.href = "https://duckduckgo.com/?t=ffab&q=" + query;
e3.title = "DuckDuckGo";
e3.className = "_button";
div3.id = "_ddg";
div3.className = "_buttons";
e3.appendChild(document.createTextNode("DDG"));
div3.appendChild(e3);

let div4 = document.createElement("div");
let e4 = document.createElement("a");
e4.href = "https://searx.be/search?q=" + query;
e4.title = "SearXNG";
e4.className = "_button";
div4.id = "_SearXNG";
div4.className = "_buttons";
e4.appendChild(document.createTextNode("SearXNG"));
div4.appendChild(e4);

let div5 = document.createElement("div");
let e5 = document.createElement("a");
e5.href = "https://swisscows.com/web?query=" + query;
e5.title = "Swisscows";
e5.className = "_button";
div5.id = "_swisscows";
div5.className = "_buttons";
e5.appendChild(document.createTextNode("Swiss"));
div5.appendChild(e5);

/** 
let div7 = document.createElement("div");
let e7 = document.createElement("a");
e7.href = "https://gigablast.com/search?c=main&qlangcountry=en-us&q=" + query;
e7.title = "Gigablast";
e7.className = "_button";
div7.id = "_gigablast";
div7.className = "_buttons";
e7.appendChild(document.createTextNode("Gigablast"));
div7.appendChild(e7);
*/

let div8 = document.createElement("div");
let e8 = document.createElement("a");
e8.href = "https://metager.org/meta/meta.ger3?eingabe=" + query;
e8.title = "MetaGer";
e8.className = "_button";
div8.id = "_metager";
div8.className = "_buttons";
e8.appendChild(document.createTextNode("MetaGer"));
div8.appendChild(e8);

allButtons.appendChild(close);
allButtons.appendChild(buttonsContainer);
buttonsContainer.appendChild(div);
buttonsContainer.appendChild(div2);
buttonsContainer.appendChild(div3);
buttonsContainer.appendChild(div4);
buttonsContainer.appendChild(div5);
// buttonsContainer.appendChild(div7);
buttonsContainer.appendChild(div8);

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "toogleHidden") toogleHidden(request.text);
    if (request.message === "sendResponse")
        sendResponse(allButtons.classList.contains("_all_buttons-hidden"));
});

async function toogleHidden(text) {
    if (text === "hide") {
        allButtons.classList.add("_all_buttons-hidden");
    } else if (text === "show") {
        allButtons.classList.remove("_all_buttons-hidden");
    }
}
