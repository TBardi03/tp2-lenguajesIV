import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="Navbar">
      <nav className="nav">
        <NavLink to="/" className="brand">
          TP3 – Lenguajes IV
        </NavLink>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : undefined)}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className={({ isActive }) => (isActive ? "active" : undefined)}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
