const Footer = () => {
    return (
      <footer
        style={{
          padding: '1rem',
          backgroundColor: '#333',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        <p>&copy; {new Date().getFullYear()} Twitter Trends. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  