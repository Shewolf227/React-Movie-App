import React from 'react';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => (
  <>
    {
        movies.map((movie) => (
          <div className="image-container d-flex justify-content-start m-3" key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        ))

      }
  </>
);

MovieList.propTypes = {
  movies: PropTypes.string.isRequired,
};

export default MovieList;
