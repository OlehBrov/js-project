const baseUrl = 'https://api.nytimes.com';
const apiKey = 'TSw2QdOoFucel7ybh9h7kC4obHmkxxGl';



async function fetchNews(endpoint, queryParams = {}) {
  const queryString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `${baseUrl}${endpoint}?${queryString}&api-key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data from ${url}`);
  }
}

export {fetchNews};
