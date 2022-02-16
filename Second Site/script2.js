
function AnswerScrapper() { 

    let Answer = prompt("Введите запрос: ", "");
    let choose = prompt("Выберите поисковик и напишите его(SearXNG, DDG, Swiss):", "");


    if (choose == "DDG") {
        let newURL = [`https://duckduckgo.com/?t=ffab&q=${Answer}`];
        window.open(newURL, "blank_");
    }
    if (choose == "SearXNG") {
        let newURL = [`https://searx.be/search?q=${Answer}`];
        window.open(newURL, "blank_");
    }
    if (choose == "Swiss") {
        let newURL = [`https://swisscows.com/web?query=${Answer}`];
        window.open(newURL, "blank_");

    }
    else {
        return 0
    }
    // window.location.replace() - поменяет текущую страницу на ту страницу поисковика, который вы выбрали
    // document.getElementById("ddg").innerHTML = `<iframe src="https://duckduckgo.com/?t=ffab&q=${Answer}" height="500px" width="900px"></iframe>`;
    // В будущем страница для поиска будет открываться внутри страницы для запроса
}
