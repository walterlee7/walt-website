import React, { Component } from 'react';

class Section extends Component {

    render() {
        return (
            <section id="about" className="about-section text-center">
                {/* <div className="container">

                    <div className="row">

                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-white mb-4">About Me</h2>
                            <p className="text-white-50">Welcome to my Website!</p>
                        </div>
                    </div>

                    <img src="bootstrap/img/Walt Image.jpg" className="img-fluid" alt="" />
                </div> */}
                <div className="heroform">
                    <div className="hero-left">
                        <img src="bootstrap/img/walt.jpg" height="400" width="250" />
                    </div>
                    <div className="hero-right">
                        <h3 className="text-uppercase">Nashville, TN</h3>
                    </div>
                </div>
            </section>
        );
    }
}

export default Section;