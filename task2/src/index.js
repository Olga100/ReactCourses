import React from 'react';
import ReactDOM from 'react-dom';

import './HelloWorld';

import HelloWorld1 from './HelloWorldComponents/HelloWorld1/HelloWorld1';
import HelloWorld2 from './HelloWorldComponents/HelloWorld2/HelloWorld2';
import HelloWorld3 from './HelloWorldComponents/HelloWorld3/HelloWorld3';


const helloWorld = React.createElement('h1', {}, 'Hello, World-0 !');

ReactDOM.render(
    <>
        {helloWorld}
        <HelloWorld1 />
        <HelloWorld2 />
        <HelloWorld3 />
    </>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
