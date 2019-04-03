import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            searchBy: "title"
        };
    }

    searchByChanged = () => {
        const { searchByChanged } = this.props;
        const { inputValue, searchBy } = this.state;

        searchByChanged(inputValue, searchBy);
    };

    handleSearchByTitle = () => this.setSearchBy("title");
    handleSearchByGenre = () => this.setSearchBy("genres");

    handleInputChange = (event) => {
        this.setState({inputValue: event.target.value});
    };

    setSearchBy = (searchBy) => {
        this.setState({searchBy: searchBy},
            () => this.searchByChanged());
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.searchByChanged();
    };

    render() {

        const { searchBy } = this.props;
        const { inputValue } = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
            <div className="header">
                <span className="netflex">netflexroulette</span>
                <span className="titleFind">FIND YOUR MOVIE</span>
                <div className="inputContainer">
                    <input
                        className="searchMovie"
                        placeholder="search your movie"
                        value={inputValue}
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
    searchBy: PropTypes.string.isRequired,
    searchByChanged: PropTypes.func.isRequired
};

export default Header;
