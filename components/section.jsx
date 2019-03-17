import React, { Component } from 'react';


class Section extends Component {

    render() {
        return (
            <section id="about" class="about-section text-center">
                <div class="container">

                    <div class="row">

                        <div class="col-lg-8 mx-auto">
                            <h2 class="text-white mb-4">About Me</h2>
                            <p class="text-white-50">Welcome to my Website!</p>
                        </div>
                    </div>

                    <img src="bootstrap/img/Walt Image.jpg" class="img-fluid" alt="" />
                </div>
            </section>

        );
    }

}

export default Section;