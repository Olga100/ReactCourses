import React from 'react';
import renderer from 'react-test-renderer';

import LineResultGenres from './LineResultGenres';


describe ('LineResultGenres', () => {

    it('should match snapshot with data', () => {
        const component = renderer.create(
            <LineResultGenres  genres={["horror", "action"]}  />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('should match snapshot without data', () => {
        const component = renderer.create(
            <LineResultGenres  genres={null}/>
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

});