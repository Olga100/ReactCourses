import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../configureStore';

import Footer from '../Components/Footer/Footer';
import SearchPage from '../Containers/SearchPage/SearchPage';
import MovieDetailsPage from '../Containers/MovieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../Components/NotFoundPage/NotFounPage';
/* import './App.scss'; */

function App() {
  return (
            <Router>
                <Provider store={store}>
                    <div className="App">
                        <Switch>
                            <Route exact path="/" component={SearchPage}/>
                            <Route path="/search" component={SearchPage}/>
                            <Route path="/film/:id" component={MovieDetailsPage}/>
                            <Route path="*" component={NotFoundPage}/>
                        </Switch>
                        <Footer/>
                    </div>
                </Provider>
            </Router>);
}

export default App;
