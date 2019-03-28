import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <section id="about" className="text-center">
                <div className="hero">
                    <img className="w-img" src="bootstrap/img/Walt Image.jpg" height="200" width="200" />
                    <div className="typewriter">
                        <div className="welcome">
                            <h1 className="w-style">Welcome to my Website!</h1>
                            <h2 className="w-style">Full stack software developer with 8 years experience in research lab management and operations. Proven ability to work both in teams and independently while applying critical thinking skills and prioritization to detail-oriented tasks near Nashville, TN. I like working with Frontend and Backend languages and always enjoy learning new languages.</h2>
                        </div>
                        <div className="justify-content-center">
                            <div className="contact">
                                <h1 className="w-style"><span className="contact-span">Contact Info:</span></h1>
                                <h2 className="w-style"><span className="contact-span">walter.lee.developer@gmail.com</span></h2>
                            </div>
                            <div className="contact">
                                <h1 className="w-style"><span className="contact-span">Education:</span></h1>
                                <h2 className="w-style"><span className="contact-span">Vanderbilt University</span></h2>
                                <h2 className="w-style"><span className="contact-span">Bachelor of Science: Neuroscience </span></h2>
                            </div>
                        </div>

                        <div className="languages">
                            <h1 className="w-style">Languages:</h1>
                            <h2 className="l-style">View - ReactJS, React Native, HTML, CSS, JavaScript, C#, Python, SASS</h2>
                            <h2 className="l-style">Framework - Bootstrap, NodeJS, Django, ASP.NET</h2>
                            <h2 className="l-style">Database - MySQL, MS SQL Server</h2>
                        </div>
                        <a href="#projects" className="btn btn-about js-scroll-trigger">My Projects</a>
                    </div>
                </div>
            </section >
        );
    }
}

export default About;