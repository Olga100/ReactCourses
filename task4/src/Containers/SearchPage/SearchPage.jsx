import React, { Component } from 'react';

import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import LineResultMovieList from '../../Components/LineResultMovieList/LineResultMovieList';
import getMovies from '../../api';

class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            searchText: "",
            searchBy: "title",
            sortBy: "release_date"
        };
    }

    componentDidMount() {
        this.loadMovies();
    }

    loadMovies() {
        const { searchText, searchBy, sortBy} = this.state;

        getMovies(searchText, searchBy, sortBy)
            .then(movies => this.setState({movies: movies.data }));
    };

    handleSortByChanged = (sortBy) => {
        this.setState({sortBy: sortBy},
            () => this.loadMovies());
    };

    handleSearchTextChanged = (searchText) => {
        this.setState({searchText: searchText});
    };

    handleSearchByChanged = (searchBy) => {
        this.setState({searchBy: searchBy});
    };

    handleSearch = () => {
        this.loadMovies();
    };

    render() {
        const {searchText, searchBy, sortBy, movies} = this.state;

        return (
            <div className="App">
                <ErrorBoundary>
                    <Header
                        searchText={searchText}
                        searchBy={searchBy}
                        searchTextChanged={this.handleSearchTextChanged}
                        searchByChanged={this.handleSearchByChanged}
                        search={this.handleSearch}
                    />

                    <LineResultMovieList
                        moviesCount={movies.length}
                        sortBy={sortBy}
                        sortByChanged={this.handleSortByChanged}
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
