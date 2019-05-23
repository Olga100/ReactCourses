// @flow
import React, {Component} from 'react';
import injectSheet from 'react-jss';;
//import PropTypes from 'prop-types';

 //import './Header.scss';

const styles = {
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '180px',
        paddingLeft: '30px',
        backgroundColor: '#333736',
        color: 'white'
    },
    netflex: {
        color: '#c15d69'
    },

    titleFind: {
        fontFamily: 'Arial',
        fontSize: '12px',
        fontWeight: 600,
        color: 'white'
    },

    inputContainer: {
        width: '96%',
        borderBottom: '2px solid #c15d69'
    },
    searchTitle: {
        fontSize: '12px',
        fontWeight: 600,
        marginRight: '20px',
    },

    searchMovie: {
        width: '100%',
        height: '40px',
        paddingLeft: '20px',
        boxSizing: 'border-box',
        color: 'white',
        backgroundColor: 'black',
        border: 'none',
        outline: 'none'
    },

    filterContainer: {
        width: '96%',
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '20px',
        color: 'white'
    },
    filterOptionsContainer: {
        display: 'flex'
    },
    activeButton: {
        backgroundColor: '#c15d69',
        height: '30px',
        margin : '0 5px',
        padding: '10px 15px',
        color: 'white',
        border: 'none',
        outline: 'none'
    },
    button: {
        backgroundColor: 'darkgray',
        marginRight: '20px',
        padding: '10px 15px',
    },
    search: {
        height: '30px',
        width: '170px',
        color: 'white',
        backgroundColor: '#f45364',
        border: 'none',
        outline: 'none'
    }
};

type Props = {
    searchText: string,
    searchBy: string,
    /* searchTextChanged: () => void,                     ???
     searchByChanged:() => void,
     search: () => void*/
};

class Header extends Component<Props> {

    setSearchBy = (searchBy) => {
        const {searchByChanged} = this.props;

        searchByChanged(searchBy);
    };

    handleSearchByTitle = () => this.setSearchBy("title");
    handleSearchByGenre = () => this.setSearchBy("genres");

    handleInputChange = (event) => {
        const {searchTextChanged} = this.props;
        searchTextChanged(event.target.value);
    };

    handleSubmit = (e) => {
        const {search, searchText, searchBy} = this.props;

        e.preventDefault();
        search(searchText, searchBy);
    };

    render() {

        const {searchText, searchBy, classes} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className={classes.header}>
                    <span className={classes.netflex}>netflexroulette</span>
                    <span className={classes.titleFind}>FIND YOUR MOVIE</span>
                    <div className={classes.inputContainer }>
                        <input
                            className={classes.searchMovie}
                            placeholder="search your movie"
                            value={searchText}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className={classes.filterContainer }>
                        <div className={classes.filterOptionsContainer}>
                            <span className={classes.searchTitle}>SEARCH BY</span>
                            <button
                                id="title"
                                type="button"
                                className= { (searchBy === "title") ?  classes.activeButton  : null }
                                onClick={this.handleSearchByTitle}
                            >TITLE
                            </button>
                            <button className={classes.button}
                                id="genre"
                                type="button"
                                className= {  (searchBy === "genres") ? classes.activeButton : null }
                                onClick={this.handleSearchByGenre}
                            >GENRE
                            </button>
                        </div>
                        <button className={classes.search}>SEARCH</button>
                    </div>
                </div>
            </form>
        )
    }
}


/*Header.propTypes = {
    searchText: PropTypes.string,
    searchBy: PropTypes.string.isRequired,
    searchTextChanged: PropTypes.func,
    searchByChanged: PropTypes.func,
    search: PropTypes.func
};*/

//export default Header;
export default injectSheet(styles)(Header);