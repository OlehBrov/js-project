const BASE_URL = 'https://api.nytimes.com/svc';
const API_KEY = 'PTvK5cvx6Sx4EF0NLh2bH6DX7ZCjUgC2';
export default class SearchNews {
  constructor() {
      this.searchQuery = '';
      this.method = 'news'; // news OR mostpopular OR search
    this.category = 'all';
    this.content = 'nyt';
    this.section = 'all';
    this.sectionList = 'section-list';

    //   this.page = 1;
    // this.collection = 1;
    // this.imgsPerPage = 150;
    // this.totalLoaded = 0;
    // this.preventFetch = false;
  }
  async getnews() {
    console.log(this);

      return fetch(
        
      `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`,
      {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(newsArray => {
        console.log(newsArray.results);
        return newsArray.results;
      });
  }
}
