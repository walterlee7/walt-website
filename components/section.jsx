import React, { Component } from 'react';

class Section extends Component {


    render() {
        return (
            <section id="about" className="about-section about-style text-center">
                <div className="heroform">
                    <div className="hero">
                        <img src="bootstrap/img/Walt Image.jpg" height="200" width="200" className="w-img" />
                        <div className="typewriter">
                            <h1 className="w-style">Welcome to my Website!</h1>
                            <h2 className="w-style">Full stack software developer with 8 years </h2>
                            <h2 className="w-style">
                                experience in research lab management and operations.</h2>
                            <h2 className="w-style">
                                Proven ability to work both in teams  and independently
                            </h2>
                            <h2 className="w-style">
                                while applying critical thinking skills and prioritization
                            </h2>
                            <h2 className="w-style">
                                to detail-oriented tasks near Nashville, TN.
                            </h2>
                            <h2 className="w-style">
                                I like working with Frontend and Backend languages
                            </h2>
                            <h2 className="w-style">
                                and always enjoy learning new languages.
                                </h2>
                            <h1 className="w-style">Email:</h1>
                            <h2 className="w-style">walter.lee.developer@gmail.com</h2>
                            <h1 className="w-style">Languages:</h1>
                            <h2 className="w-style">View - ReactJS, React Native, HTML, CSS, JavaScript, C#, Python, SASS</h2>
                            <h2 className="w-style">Framework - Bootstrap, NodeJS, Django, ASP.NET</h2>
                            <h2 className="w-style">Database - MySQL, MS SQL Server</h2>
                        </div>
                    </div>
                </div>
            </section >
        );
    }
}

export default Section;