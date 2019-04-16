import Footer from './Footer';
import React from 'react';
import {shallow} from 'enzyme';

describe ('Footer', () => {
    test('should match snapshot', () => {
        const wrapper = shallow(<Footer/>)

        expect(wrapper.find('div').text()).toBe('netflixroulette')
        expect(wrapper).toMatchSnapshot();
    })
});
