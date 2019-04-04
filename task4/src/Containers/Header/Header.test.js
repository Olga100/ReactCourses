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

    it('Calls function searchByChanged on search button', () => {

        const inputValue = "movie333";
        const searchBy = "title";
        const searchByChangedSpy = jest.fn();

        const content = mount(<Header searchBy={'title'} searchByChanged={searchByChangedSpy}/>);
        const searchInput = content.find(".searchMovie");
        searchInput.instance().value = inputValue;
        searchInput.simulate('change');

        const form = content.find('form').at(0);
        form.simulate('submit');

        expect(searchByChangedSpy).toHaveBeenCalledWith(inputValue, searchBy);
    });

    it('Calls function searchByChanged on title button', () => {

        const searchByChangedSpy = jest.fn();

        const content = mount(<Header searchBy={'title'} searchByChanged={searchByChangedSpy}/>);
        const titleButton = content.find("#title");
        titleButton.simulate('click');

        expect(searchByChangedSpy).toHaveBeenCalledWith('', 'title');
    });

    it('Calls function searchByChanged on genre button', () => {

        const searchByChangedSpy = jest.fn();

        const content = mount(<Header searchBy={'title'} searchByChanged={searchByChangedSpy}/>);
        const titleButton = content.find("#genre");
        titleButton.simulate('click');

        expect(searchByChangedSpy).toHaveBeenCalledWith('', 'genres');
    });
});