let query = "";
let disabled = false;
let opened = true;

const searchesWithButton = [
    {
        id: "brave",
        host: "search.brave.com",
        linkText: "Brave",
        linkTitle: "Brave Search",
        searchUrl: "https://search.brave.com/search?q=",
        selector: "#searchbox",
    },
    {
        id: "lukol",
        host: "www.lukol.com",
        linkText: "Lukol",
        linkTitle: "Lukol",
        searchUrl: "https://www.lukol.com/s.php?q=",
        selector: "#q",
    },
    {
        id: "ddg",
        host: "duckduckgo.com",
        linkText: "DDG",
        linkTitle: "DuckDuckGo",
        searchUrl: "https://duckduckgo.com/?t=ffab&q=",
        selector: "#search_form_input",
    },
    {
        id: "SearXNG",
        host: "searx.be",
        linkText: "SearXNG",
        linkTitle: "SearXNG",
        searchUrl: "https://searx.be/search?q=",
        selector: "#q",
    },
    {
        id: "swisscows",
        host: "swisscows.com",
        linkText: "Swiss",
        linkTitle: "Swisscows",
        searchUrl: "https://swisscows.com/web?query=",
        selector: ".input-search",
    },
    {
        id: "metager",
        host: "metager.org",
        linkText: "MetaGer",
        linkTitle: "MetaGer",
        searchUrl: "https://metager.org/meta/meta.ger3?eingabe=",
        selector: ".form-control",
    },
];

// case "peekier.com":
//     console.log("ЭТО Peekier!");
//     query = document.getElementById("text-measure").innerText;
//     break;

// case "gigablast.com":
//     console.log("ЭТО Gigablast!");
//     query = document.getElementById("q").value;
//     break;
//     // TODO:
//     // Fix Issue where Yandex didn't show our buttons on search page
// case "yandex.ru":
//     onsole.log("ЭТО Yandex!");
//     query = document.getElementById("uniq16448413328451").value;
//     break;

// case "www.google.com":
//     console.log("ЭТО Google!");
//     query = document.getElementsByClassName("gLFyf gsfi")[1].value;
//     break;

const selector =
    searchesWithButton[
        searchesWithButton.findIndex(
            (search) => search.host === window.location.hostname
        )
    ].selector;

query = document.querySelector(selector).value;

const exists = document.querySelector("#_all_buttons");
if (!!exists) {
    exists.parentNode.removeChild(exists);
    console.log("Already exists!");
}

const allButtons = document.createElement("div");
allButtons.id = "_all_buttons";
allButtons.className = "_all_buttons";

const buttonsContainer = document.createElement("div");
buttonsContainer.id = "_buttons_container";
buttonsContainer.className = "_buttons_container";

const closeButton = document.createElement("button");
closeButton.innerText = "Hide";
closeButton.id = "_close_button";
closeButton.className = "_close_button _button";

const linksNodes = searchesWithButton.map(createSearchButton);

linksNodes.forEach((node) => buttonsContainer.appendChild(node));
allButtons.appendChild(closeButton);
allButtons.appendChild(buttonsContainer);
document.body.appendChild(allButtons);

closeButton.addEventListener("click", () => setOpened(!opened), false);

browser.runtime.onMessage.addListener(function (request) {
    if (request.message === "setDisabled") {
        setDisabled(JSON.parse(request.text));
    }
});

function setOpened(state) {
    opened = state;
    if (opened) {
        allButtons.style.bottom = null;
    } else {
        allButtons.style.bottom = `-${buttonsContainer.offsetHeight}px`;
    }
    closeButton.innerText = opened ? "Hide" : "Show";
}

function setDisabled(state) {
    disabled = state;
    if (state) {
        allButtons.classList.add("_all_buttons-hidden");
    } else {
        allButtons.classList.remove("_all_buttons-hidden");
    }
}

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
