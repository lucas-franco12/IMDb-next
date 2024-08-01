import Results from '../components/Results'

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  try {
    const genre = searchParams.genre || 'fetchTrending';
    const apiUrl = `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`;
    
    console.log('API URL:', apiUrl);

    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error('API response status:', res.status);
      throw new Error('Failed to fetch data');
    }  

    const data = await res.json();
    console.log('API response data:', data);

    const results = data.results;
    console.log('Results:', results);

    return (
      <Results results={results}/>
    );
  } catch (error) {
    console.error('Error:', error.message);
    return <div>Error fetching data</div>;
  }
}