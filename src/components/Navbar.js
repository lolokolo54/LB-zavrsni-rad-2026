import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Redstone</h2>

      <div>
        <Link to="/">Poćetna</Link>
        <Link to="/builds">Gradnje</Link>
        <Link to="/Tutorials">Tutoriali</Link>
        <Link to="/BuildStone">Popularni Redstoneri</Link>
      </div>
    </nav>
  );
}

export default Navbar;