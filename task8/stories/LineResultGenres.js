import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

import SearchPage from './../src/Containers/SearchPage/SearchPage';
import {getQuery} from "../src/Reducers/mainReducer";


const movies = ["action", "fantasy"];

const searchPageWith = {
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
    .add('searchPageWith1', () => <SearchPage movies={searchPageWith} />)
    .add('searchPageWith2', withInfo({})(() => <SearchPage movies={searchPageWith} />));
