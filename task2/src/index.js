import React from 'react';
import ReactDOM from 'react-dom';

import './HelloWorldComponents/HelloWorld.scss';

import HelloWorld1 from './HelloWorldComponents/HelloWorld1.jsx';
import HelloWorld2 from './HelloWorldComponents/HelloWorld2.jsx';
import HelloWorld3 from './HelloWorldComponents/HelloWorld3.jsx';


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

module.hot.accept();
