import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { Card } from 'react-bootstrap';

const MovieDetails = ({ id, history }) => {
  const movies = useSelector(state => state.movies);
  const index = movies.findIndex(movie => movie.id === id);
  if (index === -1) history.push("/");
  const { name = '', productionYear = 0, genre = '', synopsis = '' } = movies[index] || {};
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{productionYear} | {genre}</Card.Subtitle>
        <Card.Text>{ReactHtmlParser(synopsis)}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

MovieDetails.defaultProps = {
  id: '',
};

MovieDetails.propTypes = {
  id: PropTypes.string
};

export default MovieDetails;
