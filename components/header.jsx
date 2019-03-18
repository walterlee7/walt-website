import React, { Component } from 'react';

class Header extends Component {

    render() {
        return (
            <header className="masthead">
                <div class="foreground">
                    <div className="header">
                        <div className="container d-flex h-100 align-items-center">
                            <div className="mx-auto text-center">
                                <h1 className="mx-auto my-0 text-uppercase">Walter Lee</h1>
                                <h2 className="text-white-50 mx-auto mt-2 mb-5">Full Stack Software Developer</h2>
                                <a href="#about" className="btn btn-header js-scroll-trigger">About Me</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="midground">
                    <div class="tuna"></div>
                </div>

                <div class="background">

                </div>

            </header>
        );
    }

}

export default Header;