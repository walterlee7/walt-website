import React, { Component } from 'react';

class Details extends Component {

    render() {
        return (
            <section id="details" className="bg-black small text-center text-white-50" >
                <div className="container">
                    <p style={{ fontSize: + '20' }}>Site Details</p>
                    <p style={{ fontSize: + '15' }}>View is built with ReactJS without using create-react-app.</p>
                    <p style={{ fontSize: + '15' }}>Website theme is based on <a href="https://startbootstrap.com/themes/grayscale/">Grayscale Bootstrap 4</a>.</p>
                    <br />
                    <p style={{ fontSize: + '20' }}>Acknowledgements</p>
                    <p style={{ fontSize: + '15' }}>Cat walking animation by <a href="https://codepen.io/rachelnabors/">Rachel Nabors</a>.</p>
                    <p style={{ fontSize: + '15' }}>Rainbow line animation by <a href="https://codepen.io/towc/">Matei Copot</a>.</p>
                    <p style={{ fontSize: + '15' }}>Typewriter CSS effect by <a href="http://geoffgraham.me/">Geoff Graham</a>.</p>
                    <br />
                    <p>Walter Lee Website: March 2019.</p>
                </div>
            </section>
        );
    }
}

export default Details;