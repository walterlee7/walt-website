import React, { Component } from 'react';

class Details extends Component {

    render() {
        return (
            <section id="details" className="bg-black small text-center text-white-50" >
                <div className="container">
                    <div id="details-style" >
                        <p style={{ fontSize: + '20' }}>Site Details</p>
                        <p style={{ fontSize: + '15' }}>View is built with ReactJS.</p>
                        <p style={{ fontSize: + '15' }}>Website theme is based on <a href="https://startbootstrap.com/themes/grayscale/">Grayscale Bootstrap 4</a>.</p>
                        <br />
                        <p style={{ fontSize: + '20' }}>Acknowledgements</p>
                        <p style={{ fontSize: + '15' }}>Cat walking animation by <a href="https://codepen.io/rachelnabors/">Rachel Nabors</a>.</p>
                        <p style={{ fontSize: + '15' }}>Rainbow line animation by <a href="https://codepen.io/towc/">Matei Copot</a>.</p>
                        <p style={{ fontSize: + '15' }}>Typewriter CSS effect by <a href="http://geoffgraham.me/">Geoff Graham</a>.</p>
                        <br />
                        <p style={{ fontSize: + '20' }}>Walter Lee Website: March 17, 2019.</p>
                        <div id="clockbox"></div>
                    </div>

                </div>

                <canvas id='c' style={{
                    top: + '0',
                    left: + '0',

                }}>
                </canvas>
            </section>
        );
    }
}

export default Details;