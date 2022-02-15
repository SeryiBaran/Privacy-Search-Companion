"use strict";

function AnswerScrapper() {
    let answer = prompt("Введите ваш запрос", "");

        document.getElementById("ddg").innerHTML = `<a target="blank_" href="https://duckduckgo.com/?t=ffab&q=${answer}">Ответ</a>` + " - DuckDuckGo " + `<img src="https://cdn.iconscout.com/icon/free/png-64/duckduckgo-2752202-2285019.png">`;
    //  document.getElementById("sp").innerHTML = `<a target="blank_" href="https://www.startpage.com/?q=${answer}">Ответ</a>` + " - Startpage" + `img src="https://cdn.iconscout.com/icon/free/png-64/magnifier-1439746-1214318.png">`;
        document.getElementById("sc").innerHTML = `<a target="blank_" href="https://swisscows.com/web?query=${answer}">Ответ</a>` + " - Swisscows " + `<img src="https://cdn.iconscout.com/icon/free/png-64/cow-212-1115892.png">`;
        document.getElementById("lk").innerHTML = `<a target="blank_" href="https://www.lukol.com/s.php?q=${answer}">Ответ</a>` + " - Lukol " + `<img src="https://cdn.iconscout.com/icon/free/png-64/hacker-14-448404.png">`;

        console.log(`${answer}`);
    }
