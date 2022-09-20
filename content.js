let query = "";

const linksData = [
    {
        id: "brave",
        linkText: "Brave",
        linkTitle: "Brave Search",
        searchUrl: "https://search.brave.com/search?q=",
    },
    {
        id: "lukol",
        linkText: "Lukol",
        linkTitle: "Lukol",
        searchUrl: "https://www.lukol.com/s.php?q=",
    },
    {
        id: "ddg",
        linkText: "DDG",
        linkTitle: "DuckDuckGo",
        searchUrl: "https://duckduckgo.com/?t=ffab&q=",
    },
    {
        id: "SearXNG",
        linkText: "SearXNG",
        linkTitle: "SearXNG",
        searchUrl: "https://searx.be/search?q=",
    },
    {
        id: "swisscows",
        linkText: "Swiss",
        linkTitle: "Swisscows",
        searchUrl: "https://swisscows.com/web?query=",
    },
    {
        id: "metager",
        linkText: "MetaGer",
        linkTitle: "MetaGer",
        searchUrl: "https://metager.org/meta/meta.ger3?eingabe=",
    },
];

switch (window.location.host) {
    case "search.brave.com":
        console.log("ЭТО Brave!");
        query = document.getElementById("searchbox").value;
        break;

    case "www.lukol.com":
        console.log("ЭТО Lukol!");
        query = document.getElementById("q").value;
        break;

    case "duckduckgo.com":
        console.log("ЭТО DuckDuckGo!");
        query = document.getElementById("search_form_input").value;
        break;

    case "searx.be":
        console.log("ЭТО SearXNG!");
        query = document.getElementById("q").value;
        break;

    case "swisscows.com":
        console.log("ЭТО Swisscows!");
        query = document.getElementsByClassName("input-search")[0].value;
        break;

    case "peekier.com":
        console.log("ЭТО Peekier!");
        query = document.getElementById("text-measure").innerText;
        break;

    case "gigablast.com":
        console.log("ЭТО Gigablast!");
        query = document.getElementById("q").value;
        break;

    case "yandex.ru":
        onsole.log("ЭТО Yandex!");
        query = document.getElementById("uniq16448413328451").value;
        break;

    case "metager.org":
        console.log("ЭТО MetaGer!");
        query = document.getElementsByClassName("form-control")[0].value;
        break;

    case "www.google.com":
        console.log("ЭТО Google!");
        query = document.getElementsByClassName("gLFyf gsfi")[1].value;
        break;
}

const alreadyExists = !!document.getElementById("_all_buttons");
if (alreadyExists) {
    alreadyExists.parentNode.removeChild(alreadyExists);
}

const allButtons = document.createElement("div");
allButtons.id = "_all_buttons";
allButtons.className = "_all_buttons";
document.body.appendChild(allButtons);

const buttonsContainer = document.createElement("div");
buttonsContainer.id = "_buttons_container";
buttonsContainer.className = "_buttons_container";

const closeButton = document.createElement("button");
let closed = false;
closeButton.innerText = "Hide";
closeButton.id = "_close_button";
closeButton.className = "_close_button _button";

function toogleButtons() {
    if (!closed) {
        allButtons.style.bottom = `-${buttonsContainer.offsetHeight}px`;
        closed = true;
    } else {
        allButtons.style.bottom = null;
        closed = false;
    }
    closeButton.innerText = closed ? "Show" : "Hide";
}

closeButton.addEventListener("click", toogleButtons, false);

function createSearchButton({ id, linkText, linkTitle, searchUrl }) {
    const div = document.createElement("div");
    const link = document.createElement("a");
    link.href = searchUrl + query;
    link.title = linkTitle;
    link.className = "_button";
    div.id = `_${id}`;
    div.className = "_buttons";
    link.appendChild(document.createTextNode(linkText));
    div.appendChild(link);
    return div;
}

const linksNodes = linksData.map(createSearchButton);

allButtons.appendChild(close);
allButtons.appendChild(buttonsContainer);

linksNodes.forEach((node) => buttonsContainer.appendChild(node));

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
