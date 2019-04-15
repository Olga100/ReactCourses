import React, {Component} from 'react';
import {Provider} from 'react-redux'
import Footer from '../Components/Footer/Footer';
import SearchPage from '../Containers/SearchPage/SearchPage'
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../configureStore';

import {mainReducer} from '../Reducers/mainReducer';
import './App.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <div className="App">
                        <SearchPage/>
                        <Footer/>
                    </div>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
