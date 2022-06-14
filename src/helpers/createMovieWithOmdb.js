import { createMovieAction } from "../redux/Actions/movie";
export const createMovieWithOmdb = (movie, genres, dispatch, history) => {
  const formData = new FormData();
  formData.append("title", movie.Title);
  formData.append("description", movie.Plot);
  var genre = genres.find(
    (genre) =>
      genre.name === movie.Genre?.split(",")[0] ||
      genre.name === movie.Genre?.split(", ")[1] ||
      genre.name === movie.Genre?.split(", ")[2] ||
      genre.name === movie.Genre
  );
  formData.append("genre", genre.id);
  const url = movie.Poster;
  const cover_image = "myFile.jpg";
  fetch(url).then(async (response) => {
    const blob = await response.blob();
    const file = new File([blob], cover_image, { type: "image/jpeg" });
    formData.append("cover_image", file);
    dispatch(createMovieAction(formData, history));
  });
};
