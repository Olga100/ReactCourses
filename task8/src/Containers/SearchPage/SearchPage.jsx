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
    componentDidMount() {
        this.refreshSearch();
    }

    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.refreshSearch();
        }
    }

    handleSortByChanged = (sortBy) => {
        const { sortByChanged } = this.props;

        sortByChanged(sortBy);
        setTimeout(() => this.handleSearch());
    };


    handleSearch = () => {
        this.props.history.push('/search?' + this.props.query);
    };

    refreshSearch = () => {
        const {searchTextChanged, searchByChanged, sortByChanged, loadMovies} = this.props;
        const params = new URLSearchParams(this.props.location.search);

        searchTextChanged(params.get("search"));
        searchByChanged(params.get("searchBy"));
        sortByChanged(params.get("sortBy"));

        setTimeout(() => loadMovies(this.props.query));
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
    movies: state.get("movies"),
    sortBy: state.get("sortBy"),
    searchBy: state.get("searchBy"),
    searchText: state.get("searchText"),
    query: getQuery(state.toJS())
});

const mapDispatchToProps = {
    loadMovies,
    sortByChanged: sortBy,
    searchByChanged: searchBy,
    searchTextChanged: searchText
};

const SearchPage = withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPageView));

export default SearchPage;
