import React, { Component, Fragment } from 'react';
import { HashRouter } from 'react-router-dom';
import Nav from './nav';
import Header from './header';
import About from './about';
import Projects from './projects';
import Details from './details';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Fragment>
                    <Nav />
                    <Header />
                    <About />
                    <Projects />
                    <Details />
                </Fragment>
            </HashRouter>
        );
    }
}
export default App;