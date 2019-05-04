import React from 'react';
import {Provider} from 'react-redux';
import App, {Container} from 'next/app';
import withRedux from "next-redux-wrapper";
import createStore from '../createStore';
import ErrorBoundary from '../Components/ErrorBoundary';

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
                    <ErrorBoundary>
                        <Component {...pageProps} />
                    </ErrorBoundary>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(MoviesApp);
