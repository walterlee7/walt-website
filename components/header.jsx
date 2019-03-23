import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="masthead">
                <div className="foreground">
                    <div className="header">
                        <div className="container d-flex h-100 align-items-center">
                            <div className="mx-auto text-center">
                                <h1 className="mx-auto my-0 text-uppercase">Walter Lee</h1>
                                <h2 className="text-white-50 mx-auto mt-2 mb-5">Full Stack Software Developer</h2>
                                <a href="#about" className="btn btn-header js-scroll-trigger">Welcome</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="midground">
                    <div className="tuna"></div>
                </div>

                <div className="background">
                </div>

            </header>
        );
    }
}

export default Header;