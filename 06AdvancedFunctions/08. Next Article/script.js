function getArticleGenerator(articles) {
    let articlesArray = JSON.parse(JSON.stringify(articles));
    let content = document.getElementById('content');

    return () => {
        if (!articlesArray.length) {
            return
        }

        let currentArticle = articlesArray.shift();

        content.innerHTML += `<article>${currentArticle}</article>`;

    }
}
