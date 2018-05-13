import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App' 
import './assets/less/main.less';
import store from './store/store';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('app')
)