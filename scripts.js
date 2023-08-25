const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles);
    } catch(error) {
        console.error('There was an error!', error);
    }
}

function displayNews(articles) {
    const newsDiv = document.getElementById('news');
    for (const article of articles) {
        const articleDiv = document.createElement('div');

        // Create and append a headline to the articleDiv
        const title = document.createElement('h3');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        // Create and add author
        const author = document.createElement('h5');
        author.textContent = `Written by: ${article.author}`;
        articleDiv.appendChild(author); 

        // Create and append publication info
        const publicationInfo = document.createElement('h6');
        publicationInfo.textContent = `Publication date: ${article.publishedAt}`;
        articleDiv.appendChild(publicationInfo);

        // Create and append a description
        const description = document.createElement('p');
        description.textContent = `Breif description: ${article.description}`;
        articleDiv.appendChild(description);

        // Create and append the article url
        const articleUrl = document.createElement('h6');
        articleUrl.textContent = `To read the full article, copy and paste the following url into a new browser window: ${article.url}`;
        articleDiv.appendChild(articleUrl);

        // Create and add source info
        const source = document.createElement('h6');
        source.textContent = `Source: ${article.source}`;
        articleDiv.appendChild(source);
        // TODO: fix display of source info (object)

        newsDiv.appendChild(articleDiv);
    }
}

fetchNews();