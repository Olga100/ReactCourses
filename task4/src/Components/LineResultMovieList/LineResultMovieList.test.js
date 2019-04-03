import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import LineResultMovieList from './LineResultMovieList';


describe ('LineResultMovieList', () => {

    it('should match snapshot with data', () => {
        const component = renderer.create(
            <LineResultMovieList  moviesCount={3} sortBy={'release_date'} />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('should match snapshot without data', () => {
        const component = renderer.create(
            <LineResultMovieList  moviesCount={null} sortBy={null} />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Calls callback "release date" on click', () => {
        const handleSortByDateSpy = jest.fn();
        const content = shallow(<LineResultMovieList  moviesCount={10} sortBy={'vote_average'} sortByChanged={handleSortByDateSpy} />);

        content.find('#sortByRelease').simulate('click');

        expect(handleSortByDateSpy).toHaveBeenCalledWith('release_date');
    });

    it('Calls callback "rating" on click', () => {
        const handleSortByVoteSpy = jest.fn();
        const content = shallow(<LineResultMovieList  moviesCount={10} sortBy={'release_date'} sortByChanged={handleSortByVoteSpy} />);

        content.find('#sortByRating').simulate('click');

        expect(handleSortByVoteSpy).toHaveBeenCalledWith('vote_average');
    });

});
