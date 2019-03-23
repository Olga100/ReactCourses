import React, { Component } from 'react';

import './App.scss';

import Header from '../Containers/Header/Header';
import MovieList from '../Containers/MovieList/MovieList';
import Footer from '../Components/Footer/Footer';
import ErrorBoundary from '../Components/ErrorBoundary';
import testApi from './../api';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: null
        };
    }



    render() {
        return (
            <div className="App">

               <Header/>
                <ErrorBoundary>
                  <MovieList error={4} movies={testApi()}/>
                </ErrorBoundary>
                <Footer/>

            </div>
        );
    }


}

export default App;
