import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import Main from './Pages/Main'
import About from './Pages/About_me'
import SignIn from './Pages/Sign_in'


class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Router>
                    <Fragment>
                        <Navigation />
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/about' component={About} />
                            <Route path='/signin' component={SignIn} />
                        </Switch>
                    </Fragment>
                </Router>
            </div>
        );
    }
}

export default App;