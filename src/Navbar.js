import React from 'react';
import Logo from '../src/Images/care.png'


function Navbar() {
    return (
        <div>
            <nav class="navbar">
                <a href="#" class="navbar-logo">
                    <img src={Logo} height="40px" />
                    Ekaant Hospital
                </a>


                <ul class="navbar-links">



                    <li class="navbar-dropdown">
                        <a href="#">+ Icon</a>
                        <div class="dropdown">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                        </div>
                    </li>
                    <li class="navbar-dropdown">
                        <a href="#">Profile</a>
                        <div class="dropdown">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>

                        </div>
                    </li>
                </ul>
            </nav>

        </div>




    )
}

export default Navbar;