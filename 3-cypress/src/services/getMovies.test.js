import mockAxios from "axios";
import getMovies from "./getMovies";
import mockData from "./data.json";

// 6. Mock HTTP requests
jest.mock('axios')

test("calls axios and returns movies", async () => {

  mockAxios.get.mockResolvedValueOnce({ data: mockData });

  const movies = await getMovies();
  expect(movies).toEqual(mockData);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith("https://sometimes-maybe-flaky-api.gdshive.io");
});