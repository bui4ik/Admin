import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Routes from "./routes";

const App = () =>  (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
)

export default App;
