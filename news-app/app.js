const API_KEY = 'YOUR_NEWSAPI_KEY';
const API_URL = `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${API_KEY}`;

document.getElementById('load-news').addEventListener('click', async () => {
  const newsContainer = document.getElementById('news');
  newsContainer.innerHTML = 'Loading...';
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    newsContainer.innerHTML = '';
    if (data.articles && data.articles.length) {
      data.articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `\n          <div class="article-title">${article.title}</div>\n          <div><a href="${article.url}" target="_blank">기사 보기</a></div>\n        `;
        newsContainer.appendChild(div);
      });
    } else {
      newsContainer.innerHTML = '뉴스를 불러오지 못했습니다.';
    }
  } catch (err) {
    console.error(err);
    newsContainer.innerHTML = '오류가 발생했습니다.';
  }
});
