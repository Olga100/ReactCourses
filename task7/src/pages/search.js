import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router, { withRouter } from 'next/router';

import Header from '../Components/Header/Header';
import MovieList from '../Components/MovieList/MovieList';
import ErrorBoundary from '../Components/ErrorBoundary';
import LineResultMovieList from '../Components/LineResultMovieList/LineResultMovieList';
import { loadMovies, sortBy, searchBy, searchText, receiveMovies } from '../Actions/Actions';
import { getQuery } from '../Reducers/mainReducer';

class SearchPageView extends Component {
    static async getInitialProps({store, query}) {

        store.dispatch(searchText(query.search));
        store.dispatch(searchBy(query.searchBy));
        store.dispatch(sortBy(query.sortBy));

        await store.dispatch(loadMovies(getQuery(store.getState())));

        return {};
    }

    handleSortByChanged = (sortBy) => {
        const { sortByChanged } = this.props;

        sortByChanged(sortBy);
        setTimeout(() => this.handleSearch());
    };


    handleSearch = () => {
        Router.push('/search?' + this.props.query);
    };

    render() {
        const { movies, sortBy, searchBy, searchText, searchByChanged, searchTextChanged }  = this.props;

        return (
            <div className="App">
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPageView));

