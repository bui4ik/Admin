import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from "./routes";
import store from './store';
import './App.less';
import GlobalStyle from "./config/globalStyle";

const App = () =>  (
    <Provider store={store}>
        <GlobalStyle/>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
)

export default App;
