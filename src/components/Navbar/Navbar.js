import { React, useState } from "react";

const Navbar = (props) => {
  const [image, setImage] = useState("");

  const onSearchChange = (e) => {
    setImage(e.target.value);
    props.getImage(image);
  };
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <h2 className="navbar-brand" style={{ color: "white" }}>
            SearchImage
          </h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="float-right" id="navbarSupportedContent">
            <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                onChange={onSearchChange}
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
