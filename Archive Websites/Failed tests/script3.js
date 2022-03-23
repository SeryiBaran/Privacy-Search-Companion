
function AnswerScrapper() { 
    let Answer = prompt("Введите запрос: ", "");

    document.getElementById("Lukol").innerHTML = `<iframe src="https://www.lukol.com/s.php?q=${Answer}#gsc.tab=0&gsc.q=23123231&gsc.page=1" height="500px" width="900px"></iframe>`;
}
    