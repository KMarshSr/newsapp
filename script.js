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
        const image = document.createElement('img');
        image.setAttribute('class', 'card-img-top');
        image.setAttribute('style', 'height: 600px');
        image.src = article.urlToImage;
        newsDiv.appendChild(image);

        const articleDiv = document.createElement('div');
        articleDiv.setAttribute('class', 'card-body');
        newsDiv.appendChild(articleDiv);

        const title = document.createElement('h4');
        title.setAttribute('class', 'card-title');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        const description = document.createElement('p');
        description.setAttribute('class', 'card-text');
        description.textContent = article.description;
        articleDiv.appendChild(description);

        const anchor = document.createElement('a');
        anchor.setAttribute('class', 'btn btn-warning');
        anchor.setAttribute('href', article.url);
        anchor.textContent = 'Read More';
        articleDiv.appendChild(anchor);
    }
}