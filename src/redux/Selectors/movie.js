export const selectMovies = (state) => state.movie.movies;
export const selectPaginationState = (state) => state.movie.paginationState;
export const selectMovie = (state) => state.movie.movie;
export const selectWatchList = (state) => state.movie.watchlist;
export const selectPopularMovies = (state) => state.movie.popularMovies;
export const selectRelatedMovies = (state) => state.movie.relatedMovies;
export const selectOmdbMovie = (state) => state.movie.omdbMovie;
export const selectOmdbError = (state) => state.movie.omdbError;
