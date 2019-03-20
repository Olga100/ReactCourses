import React, { Component } from 'react';

import './App.scss';

import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Footer from '../Footer/Footer';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">

               <Header/>
                <ErrorBoundary>
                  <MovieList error={4}/>
                </ErrorBoundary>
                <Footer/>

            </div>
        );
    }


}

export default App;
