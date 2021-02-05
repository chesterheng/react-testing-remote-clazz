import { unique } from './misc';

// 1.Test pure function
test('unique remove duplicate items in the array', () => {
  const genres = ["Action", "Animation", "Comedy", "Adventure", "Action", "Fantasy", "Comedy", "Adventure"];
  const uniqueGenres = ["Action", "Animation", "Comedy", "Adventure", "Fantasy"];

  expect(unique(genres)).toEqual(uniqueGenres);
})
