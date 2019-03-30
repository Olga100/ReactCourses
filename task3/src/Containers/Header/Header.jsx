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

    searchByChanged() {
        this.props.searchByChanged(this.state.inputValue, this.state.searchBy);
    }

    handleInputChange(event) {
        this.setState({inputValue: event.target.value});
    }

    setSearchBy(searchBy) {
        this.setState({searchBy: searchBy},
            () => this.searchByChanged());
    }

    handleSubmit(e) {
        e.preventDefault();
        this.searchByChanged();
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
            <div className="header">
                <span className="netflex">netflexroulette</span>
                <span className="titleFind">FIND YOUR MOVIE</span>
                <div className="inputContainer">
                    <input
                        className="searchMovie"
                        placeholder="search your movie"
                        value={this.state.value}
                        onChange={e => this.handleInputChange(e)}
                    />
                </div>
                <div className="filterContainer">
                    <div className="filterOptionsContainer">
                        <span className="searchTitle">SEARCH BY</span>
                        <button
                            type="button"
                            className={(this.props.searchBy === "title")? "activeButton" : null}
                            onClick = {() => this.setSearchBy("title")}
                        >TITLE</button>
                        <button
                            type="button"
                            className={(this.props.searchBy === "genres")? "activeButton" : null}
                            onClick = {() => this.setSearchBy("genres")}
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
