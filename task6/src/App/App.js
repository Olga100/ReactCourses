import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../configureStore';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Footer from '../Components/Footer/Footer';
import SearchPage from '../Containers/SearchPage/SearchPage';
import FilmPage from '../Containers/FilmPage/FilmPage';
import NotFoundPage from '../Components/NotFoundPage/NotFounPage';
import {mainReducer} from '../Reducers/mainReducer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <PersistGate loading={null} persistor={persistor}>

                        <div className="App">

                            <Switch>
                                <Route exact path="/" component={SearchPage}/>
                                <Route path="/film" component={FilmPage}/>
                                <Route path="*" component={NotFoundPage}/>
                            </Switch>
                            <Footer/>
                        </div>

                    </PersistGate>
                </Router>
            </Provider>
        );
    }
}

export default App;

{/*
<Link to="/film">film</Link>*/}
