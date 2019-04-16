import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import LineResultMovieList from '../../Components/LineResultMovieList/LineResultMovieList';
import { loadMovies, sortBy, searchBy, searchText } from '../../Actions/Actions';
import { getQuery } from '../../Reducers/mainReducer';


class SearchPageView extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const { loadMovies, query } = this.props;

        loadMovies(query);
    }


    handleSortByChanged = (sortBy) => {
        const { sortByChanged } = this.props;

        sortByChanged(sortBy);
        setTimeout(() => this.handleSearch());
    };


    handleSearch = () => {
        const { loadMovies, query } = this.props;

        loadMovies(query);
    };

    render() {
        const { movies, sortBy, searchBy, searchText, searchByChanged, searchTextChanged }  = this.props;

        return (
            <div className="App">
                <ErrorBoundary>
                    <Header
                        searchText={searchText}
                        searchBy={searchBy}
                        searchTextChanged={searchTextChanged}
                        searchByChanged={searchByChanged}
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


const mapStateToProps =  (state) => ({
    movies: state.movies,
    sortBy: state.sortBy,
    searchBy: state.searchBy,
    searchText: state.searchText,
    query: getQuery(state)
});

const mapDispatchToProps = {
    loadMovies,
    sortByChanged: sortBy,
    searchByChanged: searchBy,
    searchTextChanged: searchText
};

const SearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPageView);

export default SearchPage;
