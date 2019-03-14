import HelloWorld1 from '../src/HelloWorldComponents/HelloWorld1.jsx';
import React from 'react';
import {shallow} from 'enzyme';

describe ('HelloWorld1', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<HelloWorld1/>)

        expect(wrapper.find('h1').text()).toBe('Hello, World1 !')
        expect(wrapper).toMatchSnapshot
    })
    })
