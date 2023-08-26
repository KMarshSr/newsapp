const apiKey = process.env.NEWS_API_KEY;

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles)
        console.log(data);
    }
    catch(error) {
        console.error('There was an error!', error);
    }
}

fetchNews();

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        const title = document.createElement('h4');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        const image = document.createElement('img');
        image.src = article.urlToImage;
        articleDiv.appendChild(image);

        const description = document.createElement('p');
        description.textContent = article.description;
        articleDiv.appendChild(description);

        const anchor = document.createElement('a');
        anchor.setAttribute('href', article.url);
        anchor.textContent = article.title;
        articleDiv.appendChild(anchor);

        newsDiv.appendChild(articleDiv);
    }
}