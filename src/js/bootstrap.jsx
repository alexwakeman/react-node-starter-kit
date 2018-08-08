import * as React from 'react';
import ReactDOM from 'react-dom';
import {AppComponent} from './components/app.component.jsx';
import {store} from './state/store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <AppComponent />
    </Provider>,
    document.getElementById('root')
);