import { Link } from 'react-router';

export const BlogPage = () => {
  return (
    <div>
      <div>This is Blog Page content</div>
      <Link to="/">
        <button>back to Home</button>
      </Link>
    </div>
  );
};
