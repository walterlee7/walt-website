import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './nav';
import Header from './header';
import Section from './section';
import Projects from './projects';
import Contact from './contact';
import Footer from './footer';


class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Nav />
                    <Header />
                    <Section />
                    <Projects />
                    <Contact />
                    <Footer />
                </Fragment>
            </Router>






        );
    }
}
export default App;