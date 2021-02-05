import React, { Fragment, useState } from 'react';
import Movies from '../components/Movies';
import MovieFilter from '../components/MovieFilter';

const MainPage = () => {
  const [year, setYear] = useState('Choose...');
  const [genre, setGenre] = useState('Choose...');
  return (
    <Fragment>
      <MovieFilter setYear={setYear} setGenre={setGenre} />
      <Movies year={year} genre={genre} />
    </Fragment>
  )
}

export default MainPage;