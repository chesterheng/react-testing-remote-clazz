import { GET_MOVIES } from '../../constants/actionTypes';

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return action.payload;
    }
    default: 
      return state;
  }
};

export default moviesReducer;