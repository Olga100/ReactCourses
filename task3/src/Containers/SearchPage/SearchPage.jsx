import React, { Component } from 'react';

import Header from '../Header/Header';
import MovieList from '../../Components/MovieList/MovieList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import LineResultMovieList from '../../Components/LineResultMovieList/LineResultMovieList';
import getMovies from '../../api';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            search: "",
            searchBy: "title",
            sortBy: "release_date"
        };
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
        const {searchBy, sortBy, movies} = this.state;

        return (
            <div className="App">
                <ErrorBoundary>
                    <Header
                        searchBy={searchBy}
                        searchByChanged = {(search, searchBy) => this.handleSearchByChanged(search, searchBy)}
                    />

                    <LineResultMovieList
                        moviesCount={movies.length}
                        sortBy={sortBy}
                        sortByChanged={(sortBy) => {this.handleSortByChanged(sortBy)}}
                    />
                    <MovieList
                        movies={movies}
                    />
                </ErrorBoundary>
            </div>
        );
    }
}

export default SearchPage;
