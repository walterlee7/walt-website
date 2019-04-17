import React, { Component } from 'react';

class About extends Component {

    refresh() {
        window.location.reload();
    }

    render() {
        return (
            <section id="about" className="text-center">
                <div className="hero">
                    <img onClick={() => { this.refresh(); }}
                        className="panel-shadow w-img" src="bootstrap/img/Walt Image.jpg" alt="" height="200" width="200" />
                    <div className="typewriter">
                        <div className="panel-shadow welcome">
                            <h1 className="w-style about-font">Welcome to my Website!</h1>
                            <h2 className="w-style">Full stack software developer with 8 years experience in research lab management and operations. Proven ability to work both in teams and independently while applying critical thinking skills and prioritization to detail-oriented tasks near Nashville, TN. I like working with Frontend and Backend languages and always enjoy learning new languages.</h2>
                        </div>
                        <a href="docs/walter.lee.resume.pdf" className="btn btn-resume about-font panel-shadow" target="_blank" rel="noopener noreferrer">My Resume</a>
                        <div className="justify-content-center">
                            <div className="contact">
                                <h1 className="w-style"><span className="panel-shadow contact-span about-font">Contact Info:</span></h1>
                                <h2 className="w-style"><span className="panel-shadow contact-span about-font">walter.lee.developer@gmail.com</span></h2>
                            </div>
                            <div className="contact">
                                <h1 className="w-style"><span className="panel-shadow contact-span about-font">Education:</span></h1>
                                <h2 className="w-style"><span className="panel-shadow contact-span about-font">Vanderbilt University</span></h2>
                                <h2 className="w-style"><span className="panel-shadow contact-span about-font">Bachelor of Science: Neuroscience </span></h2>
                            </div>
                        </div>

                        <div className="panel-shadow languages">
                            <h1 className="w-style about-font">Languages:</h1>
                            <h2 className="l-style about-font">View - ReactJS, React Native, HTML, CSS, JavaScript, C#, Python, SASS</h2>
                            <h2 className="l-style about-font">Framework - Bootstrap, NodeJS, Django, ASP.NET</h2>
                            <h2 className="l-style about-font">Database - MySQL, MS SQL Server</h2>
                        </div>
                        <a href="#projects" className="btn btn-about js-scroll-trigger about-font panel-shadow">My Projects</a>
                    </div>
                </div>
            </section >
        );
    }
}

export default About;