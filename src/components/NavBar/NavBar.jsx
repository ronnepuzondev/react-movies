// import "./NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar({ user }) {
  console.log(user)
  return (
    <div>
      <NavLink to="/">
        <button>Movies</button>
      </NavLink>
      <NavLink to="/actors">
        <button>Actors</button>
      </NavLink>
      <p>Welcome, {user}!</p>
    </div>
  );
}
