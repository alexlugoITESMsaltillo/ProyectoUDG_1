import React from 'react'

const Navbar = () => {

    let siteOne = "https://colegiopiamonte.edu.mx"
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark" style={{background:"#1C658C"}}>
        <a class="navbar-brand" href={siteOne}></a>
        <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href={siteOne}>Login<span class="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
    </nav>
    </div>
  )
}

export default Navbar