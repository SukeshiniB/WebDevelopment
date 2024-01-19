import React from "react";

export function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary nav-main">
        <div class="container-fluid">
          <div class="logo-div">
            <img src="https://tse4.mm.bing.net/th?id=OIP.74kWkS8lUiA7eUl9xOCTigHaEi&pid=Api&P=0&h=180" alt='logo' height='100px' width='100px' />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shakes
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Chocolate Shake</a></li>
                  <li><a class="dropdown-item" href="#">Strawberry Shake</a></li>
                  <li><a class="dropdown-item" href="#">Kitkat Shake</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Sides
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Garlic Break</a></li>
                  <li><a class="dropdown-item" href="#">Nachos</a></li>
                  <li><a class="dropdown-item" href="#">Potato Twisters</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
        </div>
    )
     
    
  
}