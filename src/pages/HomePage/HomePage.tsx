import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div>
      <div>Home Page</div>
      <Link to="/blog">
        <button>Go to Blog</button>
      </Link>
    </div>
  );
};
