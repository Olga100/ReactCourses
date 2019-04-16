import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends Component {

    setSearchBy = (searchBy) => {
        const { searchByChanged } = this.props;

        searchByChanged(searchBy);
    };

    handleSearchByTitle = () => this.setSearchBy("title");
    handleSearchByGenre = () => this.setSearchBy("genres");

    handleInputChange = (event) => {
        const { searchTextChanged } = this.props;
        searchTextChanged(event.target.value);
    };

    handleSubmit = (e) => {
        const { search, searchText, searchBy } = this.props;

        e.preventDefault();
        search(searchText, searchBy);
    };

    render() {

        const { searchText, searchBy } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
            <div className="header">
                <span className="netflex">netflexroulette</span>
                <span className="titleFind">FIND YOUR MOVIE</span>
                <div className="inputContainer">
                    <input
                        className="searchMovie"
                        placeholder="search your movie"
                        value={searchText}
                        onChange={this.handleInputChange}
                    />
                </div>
                <div className="filterContainer">
                    <div className="filterOptionsContainer">
                        <span className="searchTitle">SEARCH BY</span>
                        <button
                            id="title"
                            type="button"
                            className={(searchBy === "title")? "activeButton" : null}
                            onClick = {this.handleSearchByTitle}                          //fix to handle...
                        >TITLE</button>
                        <button
                            id="genre"
                            type="button"
                            className={(searchBy === "genres")? "activeButton" : null}
                            onClick = {this.handleSearchByGenre}
                        >GENRE</button>
                    </div>
                    <button className="search">SEARCH</button>
                </div>
            </div>
            </form>
        )
    }
}

Header.propTypes = {
    searchText: PropTypes.string,
    searchBy: PropTypes.string.isRequired,
    searchTextChanged: PropTypes.func,
    searchByChanged: PropTypes.func,
    search: PropTypes.func
};

export default Header;
