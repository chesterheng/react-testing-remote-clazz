import { GET_MOVIES } from '../../constants/actionTypes';
import getMovies from '../../services/getMovies';

export const loadMovies = () => async dispatch => {
  try {
    const movies = await getMovies();
    dispatch({
      type: GET_MOVIES,
      payload: movies
    })
  } catch (error) {
    console.log(error);
  }
}
