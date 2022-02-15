"use strict";

function AnswerScrapper() {
    let answer = prompt("Введите ваш запрос", "");

        document.getElementById("ddg").innerHTML = `<a target="blank_" href="https://duckduckgo.com/?t=ffab&q=${answer}">Ответ</a>` + " - DuckDuckGo ";
    //  document.getElementById("sp").innerHTML = `<a target="blank_" href="https://www.startpage.com/?q=${answer}">Ответ</a>`;
        document.getElementById("sc").innerHTML = `<a target="blank_" href="https://swisscows.com/web?query=${answer}">Ответ</a>` + " - Swisscows";
        document.getElementById("lk").innerHTML = `<a target="blank_" href="https://www.lukol.com/s.php?q=${answer}">Ответ</a>` + " - Lukol";

        console.log(`${answer}`);
    }
