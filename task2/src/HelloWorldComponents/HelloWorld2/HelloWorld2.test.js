import HelloWorld2 from './HelloWorld2';
import React from 'react';
import {shallow} from 'enzyme';

describe ('HelloWorld2', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<HelloWorld2/>);

        expect(wrapper.find('h1').text()).toBe('Hello, World2 !');
        expect(wrapper).toMatchSnapshot
    })
});
