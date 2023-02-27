const BASE_URL = 'https://api.nytimes.com/svc';
const API_KEY = 'PTvK5cvx6Sx4EF0NLh2bH6DX7ZCjUgC2';
export default class SearchNews {
  constructor() {
    this.searchQuery = 'all';
    this.filterQuery = 'all'
    this.method = ''; // news OR mostpopular OR search
    this.category = '';
    this.content = '';
    this.section = '';
    this.sectionList = '';
    this.page = 0;
    // this.collection = 1;
    // this.imgsPerPage = 150;
    // this.totalLoaded = 0;
    // this.preventFetch = false;
  }
  async getPopularNews() {
    console.log(this);

    return fetch(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=${API_KEY}`,
      {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.text())
      .then(data => JSON.parse(data))
      .then(popularNewsArray => {
        console.log(popularNewsArray.results);
        return popularNewsArray.results;
      }).catch(error => console.log("Can't get popular news", error));;
  }
  async articleSearh() {
    return fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.searchQuery}&fq=${this.filterQuery}api-key=${API_KEY},
`,
    
    ).then(response => response.text())
      .then(data => JSON.parse(data))
      .then(popularNewsArray => {
        console.log(popularNewsArray.results);
        return articleSearh.results
      }).catch(error => console.log("Can't get articles", error));
  }
  async allSectionsFetch() {
  return fetch(
     `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`
    )
      .then(res => res.json())
    .then(data => data.results)
    .catch(error => console.log("Can't get categories", error));
}
}
