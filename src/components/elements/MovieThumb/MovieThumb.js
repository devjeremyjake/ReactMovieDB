import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumb.css';


const MovieThumb = (props) => {
    return (
        <div className="rmdb-moviethumb">
    {/* You can send props via the Links "to" object. Here we create our own "movieName" */}
      <Link to={{ pathname: `/${props.movieId}`,  movieName: `${props.movieName}`}}>
        <img className="clickable" src={props.image} alt="moviethumb" />
      </Link>
      :
      <img src={props.image} alt="moviethumb" />
  </div>
    )
}

export default MovieThumb;