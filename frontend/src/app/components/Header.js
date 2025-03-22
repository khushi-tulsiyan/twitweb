import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Link href="/">
            <a style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>
              Twitter Trends
            </a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a style={{ color: '#fff', marginRight: '1rem' }}>About</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
