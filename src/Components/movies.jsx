import React,{Component} from "react";
import Like from "./like";
import {getMovies} from "../Services/fakeMovieSrvc";


class Movies extends Component {
  state={
    movies : getMovies()

  }
  handleDelete = (movie) =>{
    const movies= this.state.movies.filter(m =>m._id !==movie._id)
    this.setState({movies})

  };
  render() {
    const {length: count} = this.state.movies;
    if (count === 0) 
    return <p>No movies</p>

  return (
    <div>
    <p>{count} Movies Now</p>
  <table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Rent</th>
      <th scope="col">Stock</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {this.state.movies.map(movie =>(
  <tr key={movie._id}>
      <td>{movie.title}</td>
      <td>{movie.genre}</td>
      <td>{movie.rent}</td>
      <td>{movie.stock}</td>
      <td><Like /></td>
      <td><button onClick={()=> this.handleDelete(movie)} className="btn btn-danger  btn-sm">Delete</button></td>
    </tr>
  ))}
    
  </tbody>
</table>
    </div>
  );
  }
}

export default Movies;
