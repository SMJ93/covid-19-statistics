const BASE_URL = 'https://corona-api.com/';

export default async function get(endpoint) {
  const url = `${BASE_URL}${endpoint}`;

  const response = await fetch(url, {
    cache: 'no-cache',
  });

  if (response.status === 200) {
    return await response.json();
  }

  alert('Sorry, there was an error getting the data. Please try again later');
  return null;
}
