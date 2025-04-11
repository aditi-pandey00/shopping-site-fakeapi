// components/Header.jsx
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { cart } = useCart();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/login"; // Redirect to login after logout
  };

  return (
    <header className="header">
      <h1>🛍️ Shopping Site</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}
