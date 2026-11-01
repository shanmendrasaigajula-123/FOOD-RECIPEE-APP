import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="recipe-not-found">
        <div>🍽️</div>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="recipe-view-btn">← Back to Home</Link>
      </section>
      <Footer />
    </>
  );
}
