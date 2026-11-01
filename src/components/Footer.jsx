import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">🍴 Foodie</div>
      <p>Discover. Cook. Enjoy.</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/#categories">Categories</Link>
        <Link to="/#about">About</Link>
        <Link to="/admin-login">Admin</Link>
      </div>

      <hr />

      <p className="copyright">© 2026 Foodie Recipe App. All Rights Reserved.</p>
    </footer>
  );
}
