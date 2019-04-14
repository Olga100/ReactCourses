import React, { Component } from 'react';


import './App.scss';

import Footer from '../Components/Footer/Footer';
import SearchPage from '../Containers/SearchPage/SearchPage'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="App">
                <SearchPage/>
                <Footer/>
            </div>
        );
    }
}

export default App;
