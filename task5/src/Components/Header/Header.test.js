import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';

import Header from './Header';


describe ('Header', () => {

    it('should match snapshot of Header', () => {
        const component = renderer.create(
            <Header searchBy={'title'} />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('should match snapshot of Header', () => {
        const component = renderer.create(
            <Header searchBy={'genre'} />
        );
        const json = component.toJSON();

        expect(json).toMatchSnapshot();
    });

    it('Search by title with text', () => {

        const inputValue = "movie333";
        const searchBy = "title";
        const searchTextChangedSpy = jest.fn();
        const searchByChangedSpy = jest.fn();
        const searchSpy = jest.fn();

        const content = mount(<Header searchBy={'title'} searchByChanged={searchByChangedSpy} searchTextChanged={searchTextChangedSpy} search={searchSpy} />);
        const searchInput = content.find(".searchMovie");
        searchInput.instance().value = inputValue;
        searchInput.simulate('change');

        const form = content.find('form').at(0);
        form.simulate('submit');

        expect(searchTextChangedSpy).toHaveBeenCalledWith(inputValue);
        expect(searchSpy).toHaveBeenCalled();
    });

    it('Search by title', () => {

        const searchTextChangedSpy = jest.fn();
        const searchByChangedSpy = jest.fn();
        const searchSpy = jest.fn();

        const content = mount(<Header searchBy={'title'} searchByChanged={searchByChangedSpy} searchTextChanged={searchTextChangedSpy} search={searchSpy} />);
        const titleButton = content.find("#title");
        titleButton.simulate('click');

        expect(searchByChangedSpy).toHaveBeenCalledWith('title');
    });

    it('Search by genre', () => {

        const searchTextChangedSpy = jest.fn();
        const searchByChangedSpy = jest.fn();
        const searchSpy = jest.fn();

        const content = mount(<Header searchBy={'title'} searchByChanged={searchByChangedSpy} searchTextChanged={searchTextChangedSpy} search={searchSpy} />);
        const titleButton = content.find("#genre");
        titleButton.simulate('click');

        expect(searchByChangedSpy).toHaveBeenCalledWith('genres');
    });
});