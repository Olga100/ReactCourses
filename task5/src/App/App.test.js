import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';


describe ('App', () => {

    it('rendering without crashing', () => {
        const component = renderer.create(
            <App />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

});
