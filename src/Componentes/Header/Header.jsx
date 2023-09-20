import { Link } from 'react-router-dom';
import './Header.css'
import Users from '../Users/Users';
const Header = () => {
  return (
    <div>
      <h2>Navbar</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">User</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/footer">Footer</Link>
      </nav>

    </div>
  );
};

export default Header;
