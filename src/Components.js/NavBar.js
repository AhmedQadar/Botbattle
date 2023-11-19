import React from 'react';
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" href="#">
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active text-white" to="/">
            BotCollection
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/myarmy" >
          MyArmy
          </Link>
        </li>
      </ul>
    </div>
    <div className="d-flex align-items-center">
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-warning" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default NavBar;