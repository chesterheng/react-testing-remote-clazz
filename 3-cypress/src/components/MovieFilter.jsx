import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Form, Col } from 'react-bootstrap';
import { YEAR, GENRE, CHOOSE } from '../constants/labelTypes';
import { unique } from '../utils/misc'

const MovieFilter = ({ setYear, setGenre }) => {
  const movies = useSelector(state => state.movies)
  const years = unique(movies.map(({ productionYear }) => productionYear)).sort((a, b) => b - a);
  const genres = unique(movies.map(({ genre }) => genre)).sort();
  // console.log(movies.map(({ genre }) => genre), genres)
  const handleChangeYear = ({ target: { value } }) => setYear(value);
  const handleChangeGenre = ({ target: { value } }) => setGenre(value);
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>{YEAR}</Form.Label>
          <Form.Control as="select" defaultValue={CHOOSE} onChange={handleChangeYear}>
            <option>{CHOOSE}</option>
            {years.map(year => <option key={year}>{year}</option>)}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>{GENRE}</Form.Label>
          <Form.Control as="select" defaultValue={CHOOSE} onChange={handleChangeGenre}>
            <option>{CHOOSE}</option>
            {genres.map(genre => <option key={genre}>{genre}</option>)}
          </Form.Control>
        </Form.Group>
      </Form.Row>
  </Form>
  )
}

MovieFilter.defaultProps = {
  setYear: () => {}, 
  setGenre: () => {}
};

MovieFilter.propTypes = {
  setYear: PropTypes.func,
  setGenre: PropTypes.func
};

export default MovieFilter;
