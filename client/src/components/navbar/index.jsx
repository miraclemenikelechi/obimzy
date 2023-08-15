import { NavLinks } from "../../assets/data";
import { Short } from "../buttons";
import "./index.scss";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section className="navbar">
      {/* navbar inner container */}
      <div className="navbar-wrapper">
        {/* logo container */}
        <div className="logo">
          <img src={"logo.png"} alt="brand_logo" />
        </div>

        {/* navlinks container */}
        <nav>
          {NavLinks.map((link) => {
            const { id, title, to } = link;
            return (
              <div key={id} className="nav-item">
                <NavLink to={to}>{title}</NavLink>
              </div>
            );
          })}
        </nav>

        {/* buttons container*/}
        <div className="buttons">
          {/* login button container*/}
          <div className="buttons-left">
            <Short title={"login"} to={"/login"} />
          </div>

          {/* signup button container*/}
          <div className="buttons-right">
            <Short title={"sign up"} to={"/signup"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
