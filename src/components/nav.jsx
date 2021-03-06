import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="iconBtn git-icon-style" href="https://github.com/walterlee7" target="_blank" rel="noopener noreferrer">a</a>
                    <a className="iconBtn link-icon-style" href="https://www.linkedin.com/in/walterlee7/" target="_blank" rel="noopener noreferrer">a</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#page-top">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger"
                                    href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#details">Details</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;