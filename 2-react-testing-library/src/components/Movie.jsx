import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { SHOW_DETAILS } from '../constants/labelTypes';

const Movie = ({ movie }) => {
  const { id, name, productionYear, genre, synopsisShort, image } = movie;
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{productionYear} | {genre}</Card.Subtitle>
        <Card.Text>{synopsisShort}</Card.Text>
        <LinkContainer to={`/movie/${id}`}>
          <Button variant="primary">{SHOW_DETAILS}</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

Movie.defaultProps = {
  movie: {
    id: '',
    name: '', 
    productionYear: 0, 
    genre: '', 
    synopsisShort: '', 
    image: ''
  }
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string, 
    productionYear: PropTypes.number, 
    genre: PropTypes.string, 
    synopsisShort: PropTypes.string, 
    image: PropTypes.string
  }).isRequired
};

export default Movie

