import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <span>ICON</span>
      <nav>
        <ul>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Others</Link>
          </li>
          <li>
            <Link to="#">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
