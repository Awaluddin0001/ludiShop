import "../assets/scss/Navbar.scss";
import sprite from "../assets/svg/heroIcon.svg";

function Navbar() {
  return (
    <nav className="navbarItem-container">
      <div className="navbarItem-link">Whistlist</div>
      <div className="navbarItem-icons">
        <svg>
          <use xlinkHref={`${sprite}#search`} />
        </svg>
        <svg>
          <use xlinkHref={`${sprite}#cart`} />
        </svg>
        <svg>
          <use xlinkHref={`${sprite}#flatHead`} />
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
