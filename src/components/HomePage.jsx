import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h2>HomePage</h2>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default HomePage;
