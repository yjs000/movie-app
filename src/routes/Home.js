import axios from 'axios';
import React from 'react';
import Movies from '../components/Movies';
import "./Home.css";

//git issue : 
//The file will have its original line endings in your working directory
// -> git config --global core.autocrlf true

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const { data: { data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  };
  render() {
    const { isLoading, movies } = this.state; //매번 this.state.isLoading을 입력하지 않기 위해
    return (
      <section className="container">{isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>) : (
        <div className="movies">
          {movies.map(movie => {
            return (
              <Movies
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image} 
              genres={movie.genres}
            />
            );
          })}
        </div>
        )}
      </section>
    );
  }
}

export default Home;
