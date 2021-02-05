import React, { Fragment } from 'react';
import MovieDetails from '../components/MovieDetails';

const DetailsPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Fragment>
      <MovieDetails id={id} history={history} />
    </Fragment>
  )
}

export default DetailsPage;
