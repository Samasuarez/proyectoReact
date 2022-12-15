import CartWidget from "../CardWidget";
import "./styleNav.css";
export default function NavBar() {
  return (
    <ul className="List-Nav">
      <li className="Nav-Item">
        <a href="#home">Home</a>
      </li>

      <li className="Nav-Item">
        <a href="#news">News</a>
      </li>

      <li className="Nav-Item">
        <a href="#contact">Contact</a>
      </li>

      <li className="Nav-Item">
        <a href="#about">About</a>
      </li>
      <div className="witget-container">
        <CartWidget/>
       
      </div>
    </ul>
  );
}
