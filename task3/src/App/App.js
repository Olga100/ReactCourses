import React, { Component } from 'react';

import './App.scss';

import Header from '../Containers/Header/Header';
import MovieList from '../Containers/MovieList/MovieList';
import Footer from '../Components/Footer/Footer';
import ErrorBoundary from '../Components/ErrorBoundary';
import LineResultMovieList from '../Components/LineResultMovieList/LineResultMovieList';
import getMovies from './../api';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            headerButton: "title",
            search: "",
            searchBy: "",
            sortBy: ""
        };

        this.loadMovies = this.loadMovies.bind(this);
        this.handleSortByChanged = this.handleSortByChanged.bind(this);
        this.handleSearchByChanged = this.handleSearchByChanged.bind(this);
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies() {
        getMovies(this.state.search, this.state.searchBy, this.state.sortBy)
            .then(movies => this.setState({movies: movies.data }));
    }

    handleSortByChanged(sortBy) {
        this.setState(
            {sortBy: sortBy},
            () => this.loadMovies());
    }

    handleSearchByChanged(search, searchBy) {
        this.setState(
            {search: search, searchBy: searchBy},
            () => this.loadMovies());
    }

    render() {
        return (
            <div className="App">
                <ErrorBoundary>
                    <Header
                        clickedButton={this.state.headerButton}
                        getTitleButton={(name) => this.setState({headerButton: name})}
                        searchByChanged = {(search, searchBy) => this.handleSearchByChanged(search, searchBy)}
                    />

                    <LineResultMovieList
                        moviesCount={this.state.movies.length}
                        sortBy={this.state.sortBy}
                        sortByChanged={(sortBy) => {this.handleSortByChanged(sortBy)}}
                    />
                    <MovieList
                        movies={this.state.movies}
                    />
                <Footer/>
            </ErrorBoundary>

            </div>
        );
    }
}

export default App;

/*
{
    "id": 0,
    "title": "string",
    "tagline": "string",
    "vote_average": 0,
    "vote_count": 0,
    "release_date": "string",
    "poster_path": "string",
    "overview": "string",
    "budget": 0,
    "revenue": 0,
    "runtime": 0,
    "genres": [
    "string"
]
}*/
