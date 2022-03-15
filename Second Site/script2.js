
function AnswerScrapper() { 

    let Answer = prompt("Введите запрос: ", "");
    let choose = prompt("Выберите поисковик и напишите его(SearXNG, DDG, Swiss, Lukol):", "");


    if (choose == "DDG") {
        let newURL = [`https://duckduckgo.com/?t=ffab&q=${Answer}&t=ffab&atb=v295-1&ia=web`];
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
    if (choose == "Lukol") {
        let newURL = [`https://www.lukol.com/s.php?q=${Answer}#gsc.tab=0&gsc.q=23123231&gsc.page=1`];
        window.open(newURL, "blank_");

    }
    else {
        alert("Вы неправильно ввели название поисковой системы, попробуйте еще раз.");
    }
    // window.location.replace() - поменяет текущую страницу на ту страницу поисковика, который вы выбрали
    // document.getElementById("ddg").innerHTML = `<iframe src="https://duckduckgo.com/?t=ffab&q=${Answer}&t=ffab&atb=v295-1&ia=web" height="500px" width="900px"></iframe>`;
}