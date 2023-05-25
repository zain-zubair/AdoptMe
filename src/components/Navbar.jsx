import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
    </nav>
  );
}

export default Navbar;

export function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
