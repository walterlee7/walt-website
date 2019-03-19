import React, { Component } from 'react';

class Section extends Component {


    render() {
        return (
            <section id="about" className="about-section about-style text-center">
                <div className="heroform">
                    <div className="hero">
                        <img src="bootstrap/img/Walt Image.jpg" height="200" width="200" />
                        <div className="typewriter">
                            <h1 className="w-style">Welcome to my Website!</h1>
                            <h2 className="w-style">I am a Frontend and Backend Software Developer near Nashville, TN.</h2>
                        </div>
                        {/* <h1 className="w-style typewriter">Welcome to my Website!</h1> */}
                    </div>
                </div>

                <canvas id='c' style={{
                    top: + '0',
                    left: + '0',
                }}>

                </canvas>

            </section >
        );
    }
}



export default Section;