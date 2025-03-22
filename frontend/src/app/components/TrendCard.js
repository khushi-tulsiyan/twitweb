const TrendCard = ({ trend }) => {
    return (
      <div
        style={{
          border: '1px solid #ddd',
          padding: '1rem',
          borderRadius: '5px',
          marginBottom: '1rem'
        }}
      >
        <h3>{trend.title}</h3>
        <p>{trend.description}</p>
        <a href={trend.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    );
  };
  
  export default TrendCard;
  