import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

import SearchPage from './../src/Containers/SearchPage/SearchPage';
import {getQuery} from "../src/Reducers/mainReducer";


const movies = [{
    id: 2,
    title: "Star wars",
    poster_path: "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
    genres: ["Crime", "Drama"],
    "release_date": "2012-10-05"
}];

const SearchPageWith = {
    movies: movies,
    sortBy: "rating",
    searchBy: "Star wars",
    searchText: state.searchText,
    query: getQuery(state)
};



const Red = props => <span style={{ color: "red" }} {...props} />;

const TableComponent = ({ propDefinitions }) => {
    const props = propDefinitions.map(
        ({ property, propType, required, description, defaultValue }) => {
            return (
                <tr key={property}>
                    <td>
                        {property}
                        {required ? <Red>*</Red> : null}
                    </td>
                    <td>{propType.name}</td>
                    <td>{defaultValue}</td>
                    <td>{description}</td>
                </tr>
            );
        },
    );

    return (
        <table>
            <thead>
            <tr>
                <th>name</th>
                <th>type</th>
                <th>default</th>
                <th>description</th>
            </tr>
            </thead>
            <tbody>{props}</tbody>
        </table>
    );
};

storiesOf('SearchPage', module)
   // .add('with discount', () => <SearchPageWith movies={movies} />);
    .add('with info', withInfo({})(() => <SearchPageWith movies={movies} />));
