import React from 'react';

import {storiesOf} from '@storybook/react';
import {withInfo} from "@storybook/addon-info";

import MovieThumbnail from './../src/Components/MovieThumblail/MovieThumbnail';
import {Link} from "react-router-dom";
import StoryRouter from "storybook-react-router";
import { storiesOf } from '@storybook/react';


const movie = {
    id: 2,
    title: "Star wars",
    poster_path: "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BZTRmNjQ1ZDYtNDgzMy00OGE0LWE4N2YtNTkzNWQ5ZDhlNGJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,352,500_AL_.jpg",
    genres: ["Crime", "Drama"],
    "release_date": "2012-10-05"
};


const TableComponent = (props) => {

    const {id, poster_path, title, release_date, genres} = props;

    return (

        <div>
            <Link to={"/film/" + id}>
            <div className="poster"><img src={poster_path} alt="poster"/></div>
            <div className="title-year">
                <div> {title}</div>
                <span>{this.getYear(release_date)}</span>
            </div>
            <div>{this.renderGenres(genres)}</div>
            </Link>
        </div>
    );
};

storiesOf('MovieThumbnail', module)
    .add('MovieThumbnailWith1', () => <MovieThumbnail movie={movie}/>)
    .add('MovieThumbnailWith2', withInfo({})(() => <MovieThumbnail movie={movie}/>));


/*storiesOf('Params', module)
  .addDecorator(StoryRouter())
  .add('params', () => (
    <ComponentParams/>
  ));


import React from ‘react’
import { storiesOf } from ‘@storybook/react’
import StoryRouter from ‘storybook-react-router’
import { Component } from ‘./Component’
const stories = storiesOf(‘Component’, module)
stories.addDecorator(StoryRouter())
stories.add(‘Example’, () => <Component />)
    */

