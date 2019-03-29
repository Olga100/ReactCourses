import React, {Component} from 'react';
import './Header.scss';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
           inputValue: "",
            searchBy: "title"
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({inputValue: event.target.value});
    }

    render() {
        return (
            <div className="header">
                <span className="netflex">netflexroulette</span>
                <span className="titleFind">FIND YOUR MOVIE</span>
                <div className="inputContainer">
                    <input
                        className="searchMovie"
                        placeholder="search your movie"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="filterContainer">
                    <div className="filterOptionsContainer">
                        <span className="searchTitle">SEARCH BY</span>
                        <button
                            className={(this.props.clickedButton === "title")? "activeButton" : null}
                            onClick = {() => this.props.getTitleButton("title")}
                        >TITLE</button>
                        <button
                            className={(this.props.clickedButton === "genre")? "activeButton" : null}
                            onClick = {() => this.props.getTitleButton("genre")}
                        >GENRE</button>
                    </div>
                    <button
                        className="search"
                        onClick={() =>this.props.searchByChanged(this.state.inputValue, this.state.searchBy)}
                    >SEARCH</button>
                </div>
            </div>
        )
    }
}

export default Header;
