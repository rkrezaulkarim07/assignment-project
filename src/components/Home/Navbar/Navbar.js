import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand ms-5" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Services</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Clients</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">Careers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3 me-5 btn btn-primary" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;