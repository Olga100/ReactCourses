import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import LineResultMovieList from '../../Components/LineResultMovieList/LineResultMovieList';
import { loadMovies, sortBy, searchBy, searchText } from '../../Actions/Actions';
import { getQuery } from '../../Reducers/mainReducer';


class SearchPageView extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            const searchText = this.props.match.params.text;

            if (searchText) {
                const {searchTextChanged, loadMovies} = this.props;

                searchTextChanged(searchText);
                setTimeout(() => loadMovies(this.props.query));
            }
        }
    }

    handleSortByChanged = (sortBy) => {
        const { sortByChanged } = this.props;

        sortByChanged(sortBy);
        setTimeout(() => this.handleSearch());
    };


    handleSearch = () => {
        this.props.history.push('/search/' + encodeURI(this.props.searchText));
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

const SearchPage = connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchPageView));

export default SearchPage;
