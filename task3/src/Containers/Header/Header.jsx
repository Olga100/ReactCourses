import React, {Component} from 'react';
import './Header.scss';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <span className="netflex">netflexroulette</span>
                <span className="titleFind">FIND YOUR MOVIE</span>
                <div className="inputContainer">
                    <input className="searchMovie" placeholder="search your movie"/>
                </div>
                <div className="filterContainer">
                    <div className="filterOptionsContainer">
                        <span className="searchTitle">SEARCH BY</span>
                        <button>TITLE</button>
                        <button>GENRE</button>
                    </div>
                    <button className="search">SEARCHE</button>
                </div>
            </div>
        )
    }
}

export default Header;
