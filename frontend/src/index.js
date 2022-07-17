import React from 'react';
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from "pages";
import 'antd/dist/antd.min.css';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
    <BrowserRouter>
        <Root tab="home" />
    </BrowserRouter>
);
//ReactDOM.render(<App />, document.getElementById("root"));
