import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/UMBC-primary-logo.png";

const Header = () => {
  return (
    <header>
      <div className="box bg-black">
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <Link to="/">
        <h1 className="box page-header hover-underline color-yellow">
          Ethical Software Lab (Beta)
        </h1>
      </Link>
      {/* <nav>
        <ul className="h-navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/#about">About</Link>
          </li>
          <li>
            <Link to="/#search">Search</Link>
          </li>
          <li>
            <Link to="/#contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Header;
