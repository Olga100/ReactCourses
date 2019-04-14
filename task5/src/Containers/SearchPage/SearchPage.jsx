import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from '../../Components/Header/Header';
import MovieList from '../../Components/MovieList/MovieList';
import ErrorBoundary from '../../Components/ErrorBoundary';
import LineResultMovieList from '../../Components/LineResultMovieList/LineResultMovieList';
//import getMovies from '../../api';
import {loadMovies, sortBy, searchBy, searchText} from '../../Actions/Actions';

class SearchPageView extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.loadMovies();
    }


    handleSortByChanged = (sortBy) => {
        this.props.sortByChanged(sortBy);
        this.props.loadMovies(this.props.searchText, this.props.searchBy, sortBy);
    };


    handleSearch = () => {
        this.props.loadMovies(this.props.searchText, this.props.searchBy, this.props.sortBy);
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
    movies: state.viewState.movies,
    sortBy: state.viewState.sortBy,
    searchBy: state.viewState.searchBy,
    searchText: state.viewState.searchText
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies: (search, searchBy, sortBy) => dispatch(loadMovies(search, searchBy, sortBy)),
    sortByChanged: (x) => dispatch(sortBy(x)),
    searchByChanged: (x) => dispatch(searchBy(x)),
    searchTextChanged: (text) => dispatch(searchText(text))
});

const SearchPage = connect(mapStateToProps, mapDispatchToProps)(SearchPageView);

export default SearchPage;
