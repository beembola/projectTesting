import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <div id="header">
        <h1>{props.title} </h1>
        <div id="linkContainer">
          <Link to="/" id="homelink">
            {" "}
            Home{" "}
          </Link>{" "}
          <Link to="/walkthThrough" id="walkthThroughlink">
            {" "}
            WalkThrough{" "}
          </Link>{" "}
          <Link to="/Features" id="featureslink">
            {" "}
            Features
          </Link>
          <Link to="/Login" id="loginlink">
            {" "}
            Logins
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
