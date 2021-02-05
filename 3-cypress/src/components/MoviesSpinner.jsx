import React from 'react';
import { Spinner } from 'react-bootstrap';

const MoviesSpinner = () => {
  return (
    <Spinner animation="border" role="alert">
      <span className="sr-only">Content is loading...</span>
    </Spinner>
  )
}

export default MoviesSpinner;
