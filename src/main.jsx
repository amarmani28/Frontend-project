import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import {AppContextProvider} from "./Context/AppContext.jsx";


createRoot(document.getElementById('root')).render(

        <BrowserRouter>
           <AppContextProvider>
               <App/>
           </AppContextProvider>
        </BrowserRouter>


)