import React from 'react';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from "next-redux-wrapper";
import createStore from '../createStore';

class MoviesApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        return {pageProps};
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <div id="test">
                        <Component {...pageProps} />
                    </div>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(MoviesApp);