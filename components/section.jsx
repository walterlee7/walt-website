import React, { Component } from 'react';

class Section extends Component {


    render() {
        return (
            <section id="about" className="about-section about-style text-center">
                {/* <div className="heroform">
                    <div className="hero">
                        <img src="bootstrap/img/walt.jpg" height="400" width="250" />
                        <p className="p-style">Welcome to my Website!</p>
                    </div>
                </div> */}

                <canvas id='c' style={{

                    top: + '0',
                    left: + '0',


                }}></canvas>

            </section >
        );
    }
}



export default Section;