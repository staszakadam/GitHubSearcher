import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import LayoutComponent from './layout/LayoutComponent';

const reactAppContainer = document.querySelector('#app');

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <LayoutComponent />
        </Provider>
    </BrowserRouter>,
    reactAppContainer);
