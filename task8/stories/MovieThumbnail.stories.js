import React from 'react';

import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BrowserRouter as Router } from 'react-router-dom';
import MovieThumbnail from '../src/Components/MovieThumblail/MovieThumbnail';

const movie = {
  id: 2,
  title: 'Star wars',
  poster_path: 'https://image.tmdb.org/t/p/w500/uJ6OnE3CzGWq6buLINAbdBqa0gV.jpg',
  genres: ['Crime', 'Drama'],
  release_date: '2012-10-05',
};


storiesOf('MovieThumbnail', module)
  .add('MovieThumbnailWith', withInfo({})(() => <Router>
        <MovieThumbnail movie={movie}/>
      </Router>));
