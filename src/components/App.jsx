import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import Main from './Pages/Main'
import About from './Pages/About_me'
import SignIn from './Pages/Sign_in'


class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Navigation />
                <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/about' component={About} />
                        <Route path='/signin' component={SignIn} />
                </Switch>
            </div>
        );
    }
}

export default App;