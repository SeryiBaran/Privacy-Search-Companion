<p align="center">
  <img src="src/assets/logo.png" alt="Logo" />
</p>
<p align="center">
  <a href="https://addons.mozilla.org/ru/firefox/addon/privacy-companion/"><img src="https://img.shields.io/amo/users/privacy-companion?style=flat-square" alt="Badge" /></a>
</p>

[<img src="src/assets/firefox-add-ons.png" title="Firefox Add-ons" width="auto" height="47" />](https://addons.mozilla.org/ru/firefox/addon/privacy-companion)

<h1 align="center">Privacy Search Companion</h1>

Расширение, которое поможет сделать запрос любой информации через поисковики, которые уважают вашу **приватность и анонимность**.

Добавляет кнопки поисковиков, где вы выбираете через какой вы хотите сделать текущий запрос. Расширение считывает запрос и открывает его в выбранном поисковике.

Список поисковиков доступных для использования:

- **DuckDuckGo**
- **Swisscows**
- **Lukol**
- **Brave Search**
- **MetaGer**

Пока не поддерживает такие поисковики как **SearXNG**, **Peekier** и **Ecosia**. В них вы просто не увидите кнопки для запроса в другие поисковики.


## Запуск для разработки

P.S> Не забудьте про `npm install`.

В первом окне терминала:

```bash
npm run dev
```

Во втором окне терминала:

```bash
npm run start:firefox
```

## Сборка

P.S> Не забудьте про `npm install`.

Выполняем команду:

```bash
npm run build
```

Затем сжимаем всё из директории extension в .zip файл.
