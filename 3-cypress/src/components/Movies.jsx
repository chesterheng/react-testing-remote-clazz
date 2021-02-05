import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { loadMovies } from '../redux/actions/movies'
import { CHOOSE, SHOW_ALL_MOVIES } from '../constants/labelTypes';
import MoviesSpinner from './MoviesSpinner';

const Movie = React.lazy(() => import('./Movie'));

const Movies = ({ year, genre }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  let results = useSelector(state => state.movies)
  if(year !== CHOOSE) {
    results = results.filter(movie => movie.productionYear === Number(year));
  }
  if(genre !== CHOOSE) {
    results = results.filter(movie => movie.genre === genre);
  }
  return (
    <Fragment>
      <div>{SHOW_ALL_MOVIES} {results.length}</div>
      <Row>
        <React.Suspense fallback={<MoviesSpinner />}>
          {results.map(movie => <Movie key={movie.id} movie={movie} />)}
        </React.Suspense>
      </Row>
    </Fragment>
  )
}

Movies.defaultProps = {
  year: CHOOSE, 
  genre: CHOOSE
};

Movies.propTypes = {
  year: PropTypes.string,
  genre: PropTypes.string
};

export default Movies
