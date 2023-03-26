import axios from 'axios';

const apiKey = 'your_api_key_here';

export async function fetchLatestNews() {
  const response = await axios.get('https://example-api.com/news', {
    headers: { 'Authorization': `Bearer ${apiKey}` }
  });

  return response.data;
}