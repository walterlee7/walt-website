import React, { Component } from 'react';

class Section extends Component {

    render() {
        return (
            <section id="about" className="about-section about-style text-center">
                <div className="heroform">
                    <div className="hero">
                        <img src="bootstrap/img/walt.jpg" height="400" width="250" />

                    </div>
                    <div>
                        <a href="#projects" className="btn btn-style js-scroll-trigger"></a>
                    </div>

                </div>
            </section>
        );
    }
}

export default Section;