import React, { useEffect } from 'react';

/** 
 *! Materialize CSS & JS file include 
 **/
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';

/** 
 *! Component files are include
 **/
import SearchBar from './Components/layout/SearchBar';
import Logs from './Components/logs/Logs';
import AddBtn from './Components/layout/AddBtn';
import AddLogModal from './Components/logs/AddLogModal';
import EditLogModal from './Components/logs/EditLogModal';
import AddTechModal from './Components/techs/AddTechModal';
import TechListModel from './Components/techs/TechListModel';

/** 
 *! Higher Order Component
 **/
import { Provider } from 'react-redux';

/** 
 *! Redux Store File
 **/
import store from './store';

const App = () => {

    useEffect(() => {
        /** 
         *! Include function from Materialize JS file -> M.AutoInit();
        **/
        M.AutoInit();
    }, [])


    return (
        <Provider store={store}>
            <div className="App" >
                <SearchBar />
                <div className="container">
                    <AddBtn />
                    <AddLogModal />
                    <EditLogModal />
                    <AddTechModal />
                    <TechListModel />
                    <Logs />
                </div>
            </div>
        </Provider>
    );
}
export default App;
