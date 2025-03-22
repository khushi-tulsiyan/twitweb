import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import TrendCard from '../components/TrendCard';
import { fetchTrends } from '../utils/api';

const Home = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrends = async () => {
      try {
        const data = await fetchTrends();
        setTrends(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTrends();
  }, []);

  return (
    <Layout>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h1>Trending Topics</h1>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && trends.length === 0 && <p>No trends available</p>}
        {trends.map(trend => (
          <TrendCard key={trend.id} trend={trend} />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
